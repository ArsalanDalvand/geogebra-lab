import {
  MarkdownPostProcessorContext,
  MarkdownRenderChild,
  Notice,
  Platform,
  Plugin,
  TFile
} from "obsidian";
import { CODE_BLOCK_ALIASES } from "./editor/codeBlockLanguages";
import { registerSyntaxHighlighting } from "./editor/registerSyntaxHighlighting";
import { parseGeoGebraBlock } from "./parser/parseGeoGebraBlock";
import { buildExternalViewerIframe } from "./renderer/buildExternalViewerIframe";
import { buildIframe } from "./renderer/buildIframe";
import { LocalViewerServer } from "./server/localViewerServer";
import { normalizeSettings } from "./settings/normalizeSettings";
import { GeoGebraLabSettingTab } from "./settings/settingsTab";
import {
  GeoGebraLabSettings
} from "./settings/settings";
import { getUrlOrigin } from "./utils/sanitize";

interface GeoGebraFrameMessage {
  source?: string;
  blockId?: string;
  type?: string;
  message?: string;
}

interface GeoGebraFrameTarget {
  errorEl: HTMLElement;
  frameWindow: Window | null;
  allowedOrigin?: string;
}

class GeoGebraBlockChild extends MarkdownRenderChild {
  constructor(
    containerEl: HTMLElement,
    private readonly blockId: string,
    private readonly errorTargets: Map<string, GeoGebraFrameTarget>,
    private readonly target: GeoGebraFrameTarget
  ) {
    super(containerEl);
  }

  onload(): void {
    this.errorTargets.set(this.blockId, this.target);
  }

  onunload(): void {
    this.errorTargets.delete(this.blockId);
  }
}

export default class GeoGebraLabPlugin extends Plugin {
  settings: GeoGebraLabSettings;
  private errorTargets = new Map<string, GeoGebraFrameTarget>();
  private localViewerServer = new LocalViewerServer();

  async onload(): Promise<void> {
    await this.loadSettings();

    CODE_BLOCK_ALIASES.forEach((alias) => {
      this.registerMarkdownCodeBlockProcessor(
        alias,
        (source, el, ctx) => this.renderGeoGebraBlock(source, el, ctx)
      );
    });

    const cleanupSyntaxHighlighting = registerSyntaxHighlighting();
    this.register(() => cleanupSyntaxHighlighting());

    this.registerDomEvent(window, "message", (event: MessageEvent<GeoGebraFrameMessage>) => {
      const data = event.data;
      if (!data || data.source !== "geogebra-lab" || data.type !== "error" || !data.blockId) {
        return;
      }

      const target = this.errorTargets.get(data.blockId);
      if (!target) {
        return;
      }

      if (target.frameWindow && event.source !== target.frameWindow) {
        return;
      }

      if (target.allowedOrigin && event.origin !== target.allowedOrigin) {
        return;
      }

      this.appendListMessage(target.errorEl, data.message ?? "Unknown GeoGebra error.");
    });

    this.addCommand({
      id: "insert-geogebra-graph-block",
      name: "Insert GeoGebra graph block",
      editorCallback: (editor) => {
        editor.replaceSelection(this.buildGraphTemplate());
      }
    });

    this.addCommand({
      id: "insert-geogebra-geometry-block",
      name: "Insert GeoGebra geometry block",
      editorCallback: (editor) => {
        editor.replaceSelection(this.buildGeometryTemplate());
      }
    });

    this.addSettingTab(new GeoGebraLabSettingTab(this.app, this));
  }

  onunload(): void {
    void this.localViewerServer.stop();
  }

  async loadSettings(): Promise<void> {
    const data: unknown = await this.loadData();
    this.settings = normalizeSettings(data);
  }

  async saveSettings(): Promise<void> {
    await this.saveData(this.settings);
  }

  private renderGeoGebraBlock(
    source: string,
    el: HTMLElement,
    ctx: MarkdownPostProcessorContext
  ): Promise<void> {
    return this.renderGeoGebraBlockAsync(source, el, ctx);
  }

  private async renderGeoGebraBlockAsync(
    source: string,
    el: HTMLElement,
    ctx: MarkdownPostProcessorContext
  ): Promise<void> {
    el.empty();

    const result = parseGeoGebraBlock(source, this.settings);
    const container = el.createDiv({ cls: "geogebra-lab-container" });
    const blockId = this.createBlockId();

    const errorEl = container.createDiv({ cls: "geogebra-lab-error" });
    errorEl.addClass("geogebra-lab-hidden");

    if (result.errors.length > 0) {
      this.appendMessages(errorEl, result.errors);
    }

    if (result.warnings.length > 0) {
      const warningEl = container.createDiv({ cls: "geogebra-lab-warning" });
      this.appendMessages(warningEl, result.warnings);
    }

    if (!result.config) {
      return;
    }

    if (result.config.filename && !result.config.ggbBase64) {
      const rawPath = result.config.filename.trim();
      const isHttp = /^https?:\/\//i.test(rawPath);
      if (!isHttp) {
        const cleanPath = rawPath.replace(/^\[\[/, "").replace(/\]\]$/, "").trim();
        const file =
          this.app.metadataCache.getFirstLinkpathDest(cleanPath, ctx.sourcePath) ??
          this.app.vault.getAbstractFileByPath(cleanPath);
        if (file instanceof TFile) {
          try {
            const buffer = await this.app.vault.readBinary(file);
            const bytes = new Uint8Array(buffer);
            let binary = "";
            const len = bytes.byteLength;
            for (let i = 0; i < len; i++) {
              binary += String.fromCharCode(bytes[i]);
            }
            result.config.ggbBase64 = btoa(binary);
          } catch (err) {
            const msg = err instanceof Error ? err.message : String(err);
            this.appendListMessage(errorEl, `Failed to load vault file "${cleanPath}": ${msg}`);
            return;
          }
        } else {
          const warningEl = container.createDiv({ cls: "geogebra-lab-warning" });
          this.appendListMessage(
            warningEl,
            `Local file "${cleanPath}" was not found in vault. For external files, use a full URL.`
          );
        }
      }
    }

    let viewerUrl = this.settings.viewerUrl;
    let viewerOrigin =
      this.settings.renderMode === "externalViewer" ? getUrlOrigin(viewerUrl) : undefined;

    if (this.settings.renderMode === "externalViewer" && !viewerOrigin) {
      this.appendListMessage(
        errorEl,
        "External viewer mode requires a valid HTTP or HTTPS viewer URL in GeoGebra Lab settings."
      );
      return;
    }

    if (this.settings.renderMode === "localServer") {
      if (!Platform.isDesktop) {
        this.appendListMessage(
          errorEl,
          "Local viewer server mode is available only in Obsidian desktop. Use srcdoc or External viewer mode on mobile."
        );
        return;
      }

      try {
        const localViewer = await this.localViewerServer.start();
        viewerUrl = localViewer.viewerUrl;
        viewerOrigin = localViewer.origin;
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        this.appendListMessage(errorEl, `Local viewer server failed to start: ${message}`);
        return;
      }
    }

    const iframe =
      this.settings.renderMode === "externalViewer" || this.settings.renderMode === "localServer"
        ? buildExternalViewerIframe({
            blockId,
            config: result.config,
            geogebraScriptUrl: this.settings.geogebraScriptUrl,
            viewerUrl
          })
        : buildIframe({
            blockId,
            config: result.config,
            geogebraScriptUrl: this.settings.geogebraScriptUrl
          });
    container.appendChild(iframe);

    const target: GeoGebraFrameTarget = {
      errorEl,
      frameWindow: iframe.contentWindow,
      allowedOrigin: viewerOrigin
    };
    this.errorTargets.set(blockId, target);
    ctx.addChild(new GeoGebraBlockChild(container, blockId, this.errorTargets, target));

    if (this.settings.enableCaption && result.config.caption) {
      container.createEl("figcaption", {
        cls: "geogebra-lab-caption",
        text: result.config.caption
      });
    }

    if (this.settings.enableExplain && result.config.explain.length > 0) {
      const explainEl = container.createDiv({ cls: "geogebra-lab-explain" });
      const listEl = explainEl.createEl("ul");
      result.config.explain.forEach((item) => {
        listEl.createEl("li", { text: item });
      });
    }
  }

  private appendMessages(container: HTMLElement, messages: string[]): void {
    messages.forEach((message) => this.appendListMessage(container, message));
  }

  private appendListMessage(container: HTMLElement, message: string): void {
    container.removeClass("geogebra-lab-hidden");
    let listEl = container.querySelector("ul");
    if (!listEl) {
      listEl = container.createEl("ul");
    }
    listEl.createEl("li", { text: message });
  }

  private createBlockId(): string {
    return `geogebra-lab-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }

  private buildGraphTemplate(): string {
    new Notice("Inserted GeoGebra graph block.");
    return `\`\`\`geogebra
appName: graphing
width: 800
height: 500
showToolBar: false
showAlgebraInput: true
showMenuBar: false

commands:
  - "f(x)=e^x"
  - "g(x)=1+x"

caption: "GeoGebra graph"
explain:
  - "Edit commands to customize this graph."
\`\`\`
`;
  }

  private buildGeometryTemplate(): string {
    new Notice("Inserted GeoGebra geometry block.");
    return `\`\`\`geogebra
appName: geometry
width: 800
height: 500
showToolBar: true
showAlgebraInput: true
showMenuBar: false

commands:
  - "A=(0,0)"
  - "B=(4,0)"
  - "C=(2,3)"
  - "Polygon(A,B,C)"

caption: "GeoGebra geometry"
explain:
  - "A dynamic triangle example."
\`\`\`
`;
  }
}
