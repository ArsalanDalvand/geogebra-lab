import { GeoGebraBlockConfig } from "../parser/types";
import { safeJsonForScript, sanitizeScriptUrl } from "../utils/sanitize";

export interface BuildGeoGebraHTMLOptions {
  blockId: string;
  config: GeoGebraBlockConfig;
  geogebraScriptUrl: string;
}

export function buildGeoGebraHTML(options: BuildGeoGebraHTMLOptions): string {
  const { blockId, config } = options;
  const appletParams: Record<string, unknown> = {
    id: `${blockId}-applet`,
    appName: config.appName,
    width: config.width,
    height: config.height,
    showToolBar: config.showToolBar,
    showAlgebraInput: config.showAlgebraInput,
    showMenuBar: config.showMenuBar
  };

  if (config.materialId) {
    appletParams.material_id = config.materialId;
  }

  if (config.filename) {
    appletParams.filename = config.filename;
  }

  const serializedBlockId = safeJsonForScript(blockId);
  const serializedParams = safeJsonForScript(appletParams);
  const serializedCommands = safeJsonForScript(config.commands);
  const serializedScriptUrl = safeJsonForScript(sanitizeScriptUrl(options.geogebraScriptUrl));

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    html,
    body {
      width: 100%;
      height: 100%;
      margin: 0;
      overflow: hidden;
      background: transparent;
    }

    #ggb-element {
      width: 100%;
      height: 100%;
    }

    .geogebra-lab-loading {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      color: #555;
      font: 14px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
  </style>
</head>
<body>
  <div id="ggb-element"><div class="geogebra-lab-loading">Loading GeoGebra...</div></div>
  <script>
    (function () {
      "use strict";

      const blockId = ${serializedBlockId};
      const params = ${serializedParams};
      const commands = ${serializedCommands};
      const geogebraScriptUrl = ${serializedScriptUrl};

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

      function injectApplet() {
        if (typeof window.GGBApplet !== "function") {
          reportError("GeoGebra script loaded, but GGBApplet was not available.");
          return;
        }

        params.width = Math.max(1, Math.floor(window.innerWidth || params.width));
        params.height = Math.max(1, Math.floor(window.innerHeight || params.height));
        params.appletOnLoad = function (api) {
          runCommands(api);
        };

        try {
          const applet = new window.GGBApplet(params, true);
          applet.inject("ggb-element");
        } catch (error) {
          const message = error && error.message ? error.message : String(error);
          reportError("GeoGebra applet failed to initialize: " + message);
        }
      }

      const script = document.createElement("script");
      script.src = geogebraScriptUrl;
      script.async = true;
      script.onload = injectApplet;
      script.onerror = function () {
        reportError("GeoGebra script failed to load: " + geogebraScriptUrl);
      };
      document.head.appendChild(script);
    })();
  </script>
</body>
</html>`;
}
