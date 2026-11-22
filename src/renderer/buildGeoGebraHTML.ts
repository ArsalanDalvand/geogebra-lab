import { GeoGebraBlockConfig } from "../parser/types";
import { escapeHtmlAttribute, safeJsonForScript, sanitizeScriptUrl } from "../utils/sanitize";
import { buildAppletParams } from "./appletParamsBuilder";

export interface BuildGeoGebraHTMLOptions {
  blockId: string;
  config: GeoGebraBlockConfig;
  geogebraScriptUrl: string;
}

export function buildGeoGebraHTML(options: BuildGeoGebraHTMLOptions): string {
  const { blockId, config } = options;
  const appletParams = buildAppletParams(blockId, config);

  const serializedBlockId = safeJsonForScript(blockId);
  const serializedParams = safeJsonForScript(appletParams);
  const serializedCommands = safeJsonForScript(config.commands);
  const scriptUrl = sanitizeScriptUrl(options.geogebraScriptUrl);
  const loadingText = config.loadingText ?? "Loading GeoGebra...";

  return `<!doctype html>
<html lang="${escapeHtmlAttribute(String(appletParams.language || "en"))}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    @font-face {
      font-family: "geogebra-sans-serif";
      src: local("Inter"),
           local("Segoe UI"),
           local("Roboto"),
           local("-apple-system"),
           local("BlinkMacSystemFont"),
           local("Helvetica Neue"),
           local("Arial"),
           local("Vazirmatn"),
           local("sans-serif");
      font-display: swap;
    }

    @font-face {
      font-family: "Arial Unicode MS";
      src: local("Inter"),
           local("Segoe UI"),
           local("Roboto"),
           local("-apple-system"),
           local("BlinkMacSystemFont"),
           local("Helvetica Neue"),
           local("Arial"),
           local("Vazirmatn"),
           local("sans-serif");
      font-display: swap;
    }

    :root {
      --ggb-font-stack: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, Inter, "Vazirmatn", sans-serif;
    }

    html,
    body {
      width: 100%;
      height: 100%;
      margin: 0;
      overflow: hidden;
      background: transparent;
      font-family: var(--ggb-font-stack);
    }

    #ggb-element,
    .GeoGebraFrame,
    .KeyBoard,
    .KeyBoardButton,
    .gwt-PopupPanel {
      font-family: var(--ggb-font-stack) !important;
    }

    .KeyBoardButton.greek {
      font-family: "greek", var(--ggb-font-stack) !important;
    }

    #ggb-element {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      ${config.borderRadius ? `border-radius: ${config.borderRadius}px; overflow: hidden;` : ""}
      ${config.borderColor ? `border: 1px solid ${config.borderColor};` : ""}
    }

    .geogebra-lab-loading {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      color: #777;
      font: 14px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
  </style>
</head>
<body>
  <div id="ggb-element"><div class="geogebra-lab-loading">${escapeHtmlAttribute(loadingText)}</div></div>
  <script>
    (function () {
      "use strict";

      const blockId = ${serializedBlockId};
      const params = ${serializedParams};
      const commands = ${serializedCommands};

      function reportError(message) {
        console.error("[geogebra-lab]", message);
        window.parent.postMessage({
          source: "geogebra-lab",
          blockId: blockId,
          type: "error",
          message: message
        }, "*");
      }

      function runCommands(api) {
        commands.forEach(function (command) {
          try {
            const result = api.evalCommand(command);
            if (result === false) {
              reportError("GeoGebra command failed: " + command);
            }
          } catch (error) {
            const message = error && error.message ? error.message : String(error);
            reportError("GeoGebra command error for " + command + ": " + message);
          }
        });
      }

      window.__geogebraLabInjectApplet = function () {
        if (typeof window.GGBApplet !== "function") {
          reportError("GeoGebra script loaded, but GGBApplet was not available.");
          return;
        }

        if (!params.scaleContainerClass) {
          params.width = Math.max(1, Math.floor(window.innerWidth || params.width));
          params.height = Math.max(1, Math.floor(window.innerHeight || params.height));
        }

        params.appletOnLoad = function (api) {
          if (typeof api.setLanguage === "function" && params.language) {
            try {
              api.setLanguage(params.language);
            } catch (e) {
              console.warn("[geogebra-lab] Failed to force language via api.setLanguage:", e);
            }
          }
          runCommands(api);
        };

        try {
          const applet = new window.GGBApplet(params, true);
          applet.inject("ggb-element");
        } catch (error) {
          const message = error && error.message ? error.message : String(error);
          reportError("GeoGebra applet failed to initialize: " + message);
        }
      };
    })();
  </script>
  <script src="${escapeHtmlAttribute(scriptUrl)}"></script>
  <script>
    window.__geogebraLabInjectApplet();
  </script>
</body>
</html>`;
}
