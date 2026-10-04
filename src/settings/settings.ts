import type {
  GeoGebraAlgebraInputPosition,
  GeoGebraAppName,
  GeoGebraDetachKeyboardMode,
  GeoGebraKeyboardFocusMode,
  GeoGebraKeyboardType,
  GeoGebraParserDefaults
} from "../parser/types";

export type GeoGebraRenderMode = "srcdoc" | "localServer" | "externalViewer";

export interface GeoGebraLabSettings extends GeoGebraParserDefaults {
  // Rendering & Engine
  renderMode: GeoGebraRenderMode;
  geogebraScriptUrl: string;
  viewerUrl: string;

  // Presentation & Content flags
  enableCaption: boolean;
  enableExplain: boolean;

  // App & View defaults
  defaultAppName: GeoGebraAppName;
  defaultPerspective: string;

  // Sizing & Appearance defaults
  defaultWidth: number;
  defaultHeight: number;
  defaultScale: number;
  defaultAutoHeight: boolean;
  defaultAllowUpscale: boolean;
  defaultScaleContainerClass: string;
  defaultBorderColor: string;
  defaultBorderRadius: number;
  defaultTransparentGraphics: boolean;

  // Toolbars & Menus defaults
  defaultShowToolBar: boolean;
  defaultShowToolBarHelp: boolean;
  defaultCustomToolBar: string;
  defaultCustomToolbox: string;
  defaultShowAlgebraInput: boolean;
  defaultAlgebraInputPosition: GeoGebraAlgebraInputPosition;
  defaultShowMenuBar: boolean;
  defaultAllowStyleBar: boolean;
  defaultEnableUndoRedo: boolean;

  // View Controls & Buttons defaults
  defaultShowZoomButtons: boolean;
  defaultShowFullscreenButton: boolean;
  defaultShowAnimationButton: boolean;
  defaultShowResetIcon: boolean;
  defaultShowSuggestionButtons: boolean;
  defaultShowStartTooltip: boolean;
  defaultPlayButton: boolean;
  defaultButtonRounding?: number;
  defaultButtonShadows?: boolean;
  defaultButtonBorderColor: string;

  // Interactivity & Security defaults
  defaultEnableRightClick: boolean;
  defaultEnableLabelDrags: boolean;
  defaultEnableShiftDragZoom: boolean;
  defaultCapturingThreshold: number;
  defaultPreventFocus: boolean;
  defaultEnableFileFeatures: boolean;
  defaultDisableJavaScript: boolean;

  // Localization & Mathematics defaults
  defaultLanguage: string;
  defaultCountry: string;
  defaultRounding: string;
  defaultRandomSeed?: number;
  defaultRandomize: boolean;
  defaultErrorDialogsActive: boolean;
  defaultShowLogging: boolean;
  defaultUseBrowserForJS: boolean;

  // Exam & Evaluator defaults
  defaultEnable3d: boolean;
  defaultEnableCAS: boolean;
  defaultEditorBackgroundColor: string;
  defaultEditorForegroundColor: string;
  defaultTextmode: boolean;
  defaultShowKeyboardOnFocus: GeoGebraKeyboardFocusMode;
  defaultKeyboardType: GeoGebraKeyboardType;
  defaultDetachKeyboard: GeoGebraDetachKeyboardMode;
  defaultDetachedKeyboardParent: string;

  // Custom UI Text defaults
  defaultLoadingText: string;
}

export const DEFAULT_SETTINGS: GeoGebraLabSettings = {
  // Rendering & Engine
  renderMode: "localServer",
  geogebraScriptUrl: "https://www.geogebra.org/apps/deployggb.js",
  viewerUrl: "",

  // Presentation & Content flags
  enableCaption: true,
  enableExplain: true,

  // App & View defaults
  defaultAppName: "graphing",
  defaultPerspective: "",

  // Sizing & Appearance defaults
  defaultWidth: 800,
  defaultHeight: 500,
  defaultScale: 1,
  defaultAutoHeight: false,
  defaultAllowUpscale: false,
  defaultScaleContainerClass: "",
  defaultBorderColor: "",
  defaultBorderRadius: 0,
  defaultTransparentGraphics: false,

  // Toolbars & Menus defaults
  defaultShowToolBar: false,
  defaultShowToolBarHelp: false,
  defaultCustomToolBar: "",
  defaultCustomToolbox: "",
  defaultShowAlgebraInput: true,
  defaultAlgebraInputPosition: "algebra",
  defaultShowMenuBar: false,
  defaultAllowStyleBar: false,
  defaultEnableUndoRedo: true,

  // View Controls & Buttons defaults
  defaultShowZoomButtons: false,
  defaultShowFullscreenButton: false,
  defaultShowAnimationButton: true,
  defaultShowResetIcon: false,
  defaultShowSuggestionButtons: true,
  defaultShowStartTooltip: false,
  defaultPlayButton: false,
  defaultButtonRounding: undefined,
  defaultButtonShadows: undefined,
  defaultButtonBorderColor: "",

  // Interactivity & Security defaults
  defaultEnableRightClick: true,
  defaultEnableLabelDrags: true,
  defaultEnableShiftDragZoom: true,
  defaultCapturingThreshold: 3,
  defaultPreventFocus: false,
  defaultEnableFileFeatures: false,
  defaultDisableJavaScript: false,

  // Localization & Mathematics defaults
  defaultLanguage: "",
  defaultCountry: "",
  defaultRounding: "",
  defaultRandomSeed: undefined,
  defaultRandomize: false,
  defaultErrorDialogsActive: false,
  defaultShowLogging: false,
  defaultUseBrowserForJS: false,

  // Exam & Evaluator defaults
  defaultEnable3d: true,
  defaultEnableCAS: true,
  defaultEditorBackgroundColor: "",
  defaultEditorForegroundColor: "",
  defaultTextmode: false,
  defaultShowKeyboardOnFocus: "auto",
  defaultKeyboardType: "normal",
  defaultDetachKeyboard: "auto",
  defaultDetachedKeyboardParent: "",

  // Custom UI Text defaults
  defaultLoadingText: "Loading GeoGebra..."
};

export const APP_NAME_OPTIONS: Record<GeoGebraAppName, string> = {
  graphing: "Graphing Calculator (رسم توابع)",
  geometry: "Geometry (هندسه)",
  "3d": "3D Calculator (هندسه فضایی)",
  classic: "Classic (کلاسیک)",
  suite: "Calculator Suite (مجموعه جامع)",
  evaluator: "Evaluator (ارزیاب)",
  scientific: "Scientific (علمی)",
  notes: "GeoGebra Notes (یادداشت و تخته)"
};

export const RENDER_MODE_OPTIONS: Record<GeoGebraRenderMode, string> = {
  localServer: "Local viewer server (توصیه‌شده - دسکتاپ)",
  externalViewer: "External viewer iframe (موبایل و هاستینگ خارجی)",
  srcdoc: "srcdoc iframe (مستقیم)"
};

export const ALGEBRA_INPUT_POSITION_OPTIONS: Record<GeoGebraAlgebraInputPosition, string> = {
  algebra: "Inside Algebra View (درون نمای جبر)",
  top: "Top (بالای صفحه)",
  bottom: "Bottom (پایین صفحه)"
};

export const KEYBOARD_TYPE_OPTIONS: Record<GeoGebraKeyboardType, string> = {
  normal: "Normal (استاندارد)",
  scientific: "Scientific (علمی)",
  notes: "Notes (مخصوص یادداشت)"
};
