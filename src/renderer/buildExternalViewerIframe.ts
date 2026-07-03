import { GeoGebraBlockConfig } from "../parser/types";

export interface BuildExternalViewerIframeOptions {
  blockId: string;
  config: GeoGebraBlockConfig;
  geogebraScriptUrl: string;
  viewerUrl: string;
}

interface ExternalViewerPayload {
  blockId: string;
  config: GeoGebraBlockConfig;
  geogebraScriptUrl: string;
}

function buildViewerSrc(options: BuildExternalViewerIframeOptions): string {
  const url = new URL(options.viewerUrl);
  const payload: ExternalViewerPayload = {
    blockId: options.blockId,
    config: options.config,
    geogebraScriptUrl: options.geogebraScriptUrl
  };

  url.hash = encodeURIComponent(JSON.stringify(payload));
  return url.toString();
}

export function buildExternalViewerIframe(
  options: BuildExternalViewerIframeOptions
): HTMLIFrameElement {
  const iframe = activeDocument.createElement("iframe");
  iframe.className = "geogebra-lab-frame";
  iframe.title = "Interactive GeoGebra applet";
  iframe.loading = "lazy";
  iframe.sandbox.add("allow-scripts", "allow-same-origin");
  iframe.setAttribute("width", String(options.config.width));
  iframe.setAttribute("height", String(options.config.height));
  iframe.setCssStyles({
    width: `${options.config.width}px`,
    maxWidth: "100%",
    height: `${options.config.height}px`
  });
  iframe.src = buildViewerSrc(options);
  return iframe;
}
