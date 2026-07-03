import { App, PluginSettingTab, Setting } from "obsidian";
import { GEO_GEBRA_APP_NAMES, GeoGebraAppName } from "../parser/types";
import type GeoGebraLabPlugin from "../main";
import { APP_NAME_OPTIONS, DEFAULT_SETTINGS, RENDER_MODE_OPTIONS } from "./settings";
import { sanitizeHttpUrl, sanitizeScriptUrl } from "../utils/sanitize";

export class GeoGebraLabSettingTab extends PluginSettingTab {
  plugin: GeoGebraLabPlugin;

  constructor(app: App, plugin: GeoGebraLabPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();

    new Setting(containerEl).setName("GeoGebra Lab settings").setHeading();

    new Setting(containerEl)
      .setName("Render mode")
      .setDesc("Use Local viewer server or External viewer when Obsidian CSP blocks GeoGebra CSS.")
      .addDropdown((dropdown) => {
        dropdown.addOption("srcdoc", RENDER_MODE_OPTIONS.srcdoc);
        dropdown.addOption("localServer", RENDER_MODE_OPTIONS.localServer);
        dropdown.addOption("externalViewer", RENDER_MODE_OPTIONS.externalViewer);
        dropdown.setValue(this.plugin.settings.renderMode);
        dropdown.onChange(async (value) => {
          if (value === "externalViewer" || value === "localServer" || value === "srcdoc") {
            this.plugin.settings.renderMode = value;
          }
          await this.plugin.saveSettings();
          this.display();
        });
      });

    new Setting(containerEl)
      .setName("Default app")
      .setDesc("Used when a geogebra block omits appName.")
      .addDropdown((dropdown) => {
        GEO_GEBRA_APP_NAMES.forEach((appName) => {
          dropdown.addOption(appName, APP_NAME_OPTIONS[appName]);
        });
        dropdown.setValue(this.plugin.settings.defaultAppName);
        dropdown.onChange(async (value) => {
          this.plugin.settings.defaultAppName = value as GeoGebraAppName;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Default width")
      .setDesc("Used when a geogebra block omits width.")
      .addText((text) => {
        text.setPlaceholder(String(DEFAULT_SETTINGS.defaultWidth));
        text.setValue(String(this.plugin.settings.defaultWidth));
        text.onChange(async (value) => {
          const width = Number(value);
          if (Number.isFinite(width) && width > 0) {
            this.plugin.settings.defaultWidth = Math.round(width);
            await this.plugin.saveSettings();
          }
        });
      });

    new Setting(containerEl)
      .setName("Default height")
      .setDesc("Used when a geogebra block omits height.")
      .addText((text) => {
        text.setPlaceholder(String(DEFAULT_SETTINGS.defaultHeight));
        text.setValue(String(this.plugin.settings.defaultHeight));
        text.onChange(async (value) => {
          const height = Number(value);
          if (Number.isFinite(height) && height > 0) {
            this.plugin.settings.defaultHeight = Math.round(height);
            await this.plugin.saveSettings();
          }
        });
      });

    new Setting(containerEl)
      .setName("Show toolbar by default")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultShowToolBar);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultShowToolBar = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Show algebra input by default")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultShowAlgebraInput);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultShowAlgebraInput = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Show menu bar by default")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultShowMenuBar);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultShowMenuBar = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("GeoGebra script URL")
      .setDesc("The online deployggb.js URL used by srcdoc mode and passed to the external viewer.")
      .addText((text) => {
        text.inputEl.setCssStyles({ width: "100%" });
        text.setValue(this.plugin.settings.geogebraScriptUrl);
        text.onChange(async (value) => {
          this.plugin.settings.geogebraScriptUrl = sanitizeScriptUrl(value);
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("External viewer URL")
      .setDesc("HTTPS page that hosts viewer/index.html. Required only for External viewer mode.")
      .addText((text) => {
        text.inputEl.setCssStyles({ width: "100%" });
        text.setPlaceholder("https://your-domain.example/geogebra-lab-viewer/");
        text.setValue(this.plugin.settings.viewerUrl);
        text.onChange(async (value) => {
          this.plugin.settings.viewerUrl = value.trim()
            ? sanitizeHttpUrl(value, this.plugin.settings.viewerUrl)
            : "";
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Enable captions")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.enableCaption);
        toggle.onChange(async (value) => {
          this.plugin.settings.enableCaption = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Enable explanations")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.enableExplain);
        toggle.onChange(async (value) => {
          this.plugin.settings.enableExplain = value;
          await this.plugin.saveSettings();
        });
      });
  }
}
