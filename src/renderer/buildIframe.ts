import { GeoGebraBlockConfig } from "../parser/types";
import { buildGeoGebraHTML } from "./buildGeoGebraHTML";

export interface BuildIframeOptions {
  blockId: string;
  config: GeoGebraBlockConfig;
  geogebraScriptUrl: string;
}

export function buildIframe(options: BuildIframeOptions): HTMLIFrameElement {
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
  iframe.srcdoc = buildGeoGebraHTML(options);
  return iframe;
}
