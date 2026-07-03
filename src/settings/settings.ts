import type { GeoGebraAppName, GeoGebraParserDefaults } from "../parser/types";

export type GeoGebraRenderMode = "srcdoc" | "localServer" | "externalViewer";

export interface GeoGebraLabSettings extends GeoGebraParserDefaults {
  renderMode: GeoGebraRenderMode;
  geogebraScriptUrl: string;
  viewerUrl: string;
  enableCaption: boolean;
  enableExplain: boolean;
}

export const DEFAULT_SETTINGS: GeoGebraLabSettings = {
  renderMode: "localServer",
  defaultAppName: "graphing",
  defaultWidth: 800,
  defaultHeight: 500,
  defaultShowToolBar: false,
  defaultShowAlgebraInput: true,
  defaultShowMenuBar: false,
  geogebraScriptUrl: "https://www.geogebra.org/apps/deployggb.js",
  viewerUrl: "",
  enableCaption: true,
  enableExplain: true
};

export const APP_NAME_OPTIONS: Record<GeoGebraAppName, string> = {
  graphing: "Graphing",
  geometry: "Geometry",
  "3d": "3D",
  classic: "Classic"
};

export const RENDER_MODE_OPTIONS: Record<GeoGebraRenderMode, string> = {
  srcdoc: "srcdoc iframe",
  localServer: "Local viewer server",
  externalViewer: "External viewer iframe"
};
