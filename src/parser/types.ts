export type GeoGebraAppName = "graphing" | "geometry" | "3d" | "classic";

export interface GeoGebraBlockConfig {
  appName: GeoGebraAppName;
  width: number;
  height: number;
  showToolBar: boolean;
  showAlgebraInput: boolean;
  showMenuBar: boolean;
  materialId?: string;
  filename?: string;
  commands: string[];
  caption?: string;
  explain: string[];
}

export interface GeoGebraParserDefaults {
  defaultAppName: GeoGebraAppName;
  defaultWidth: number;
  defaultHeight: number;
  defaultShowToolBar: boolean;
  defaultShowAlgebraInput: boolean;
  defaultShowMenuBar: boolean;
}

export interface GeoGebraParseResult {
  config?: GeoGebraBlockConfig;
  errors: string[];
  warnings: string[];
}

export const GEO_GEBRA_APP_NAMES: GeoGebraAppName[] = [
  "graphing",
  "geometry",
  "3d",
  "classic"
];

export const GEO_GEBRA_BLOCK_FIELDS = new Set([
  "appName",
  "width",
  "height",
  "showToolBar",
  "showAlgebraInput",
  "showMenuBar",
  "materialId",
  "filename",
  "commands",
  "caption",
  "explain"
]);
