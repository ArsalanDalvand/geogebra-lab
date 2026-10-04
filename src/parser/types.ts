export type GeoGebraAppName =
  | "graphing"
  | "geometry"
  | "3d"
  | "classic"
  | "suite"
  | "evaluator"
  | "scientific"
  | "notes";

export type GeoGebraAlgebraInputPosition = "algebra" | "top" | "bottom";
export type GeoGebraKeyboardType = "normal" | "scientific" | "notes";
export type GeoGebraKeyboardFocusMode = boolean | "auto";
export type GeoGebraDetachKeyboardMode = boolean | "auto";

export interface GeoGebraBlockConfig {
  // App and Content
  appName: GeoGebraAppName;
  materialId?: string;
  filename?: string;
  ggbBase64?: string;
  perspective?: string;

  // Sizing & Appearance
  width: number;
  height: number;
  scale?: number;
  autoHeight?: boolean;
  allowUpscale?: boolean;
  scaleContainerClass?: string;
  borderColor?: string;
  borderRadius?: number;
  transparentGraphics?: boolean;

  // Toolbar & Menus
  showMenuBar: boolean;
  showToolBar: boolean;
  showToolBarHelp?: boolean;
  customToolBar?: string;
  customToolbox?: string;
  showAlgebraInput: boolean;
  algebraInputPosition?: GeoGebraAlgebraInputPosition;
  allowStyleBar?: boolean;
  enableUndoRedo?: boolean;

  // View Controls & Buttons
  showZoomButtons?: boolean;
  showFullscreenButton?: boolean;
  showAnimationButton?: boolean;
  showResetIcon?: boolean;
  showSuggestionButtons?: boolean;
  showStartTooltip?: boolean;
  playButton?: boolean;
  buttonRounding?: number;
  buttonShadows?: boolean;
  buttonBorderColor?: string;

  // Interactivity & Security
  enableRightClick?: boolean;
  enableLabelDrags?: boolean;
  enableShiftDragZoom?: boolean;
  capturingThreshold?: number;
  preventFocus?: boolean;
  enableFileFeatures?: boolean;
  disableJavaScript?: boolean;

  // Localization & Mathematics
  language?: string;
  country?: string;
  rounding?: string;
  randomSeed?: number;
  randomize?: boolean;
  errorDialogsActive?: boolean;
  showLogging?: boolean;
  useBrowserForJS?: boolean;

  // Exam & Evaluator
  enable3d?: boolean;
  enableCAS?: boolean;
  editorBackgroundColor?: string;
  editorForegroundColor?: string;
  textmode?: boolean;
  showKeyboardOnFocus?: GeoGebraKeyboardFocusMode;
  keyboardType?: GeoGebraKeyboardType;
  detachKeyboard?: GeoGebraDetachKeyboardMode;
  detachedKeyboardParent?: string;

  // Execution & Content
  commands: string[];
  caption?: string;
  explain: string[];

  // Non-hardcoded UI options
  loadingText?: string;
}

export interface GeoGebraParserDefaults {
  // App & View defaults
  defaultAppName: GeoGebraAppName;
  defaultPerspective?: string;

  // Sizing & Appearance defaults
  defaultWidth: number;
  defaultHeight: number;
  defaultScale?: number;
  defaultAutoHeight?: boolean;
  defaultAllowUpscale?: boolean;
  defaultScaleContainerClass?: string;
  defaultBorderColor?: string;
  defaultBorderRadius?: number;
  defaultTransparentGraphics?: boolean;

  // Toolbars & Menus defaults
  defaultShowToolBar: boolean;
  defaultShowToolBarHelp?: boolean;
  defaultCustomToolBar?: string;
  defaultCustomToolbox?: string;
  defaultShowAlgebraInput: boolean;
  defaultAlgebraInputPosition?: GeoGebraAlgebraInputPosition;
  defaultShowMenuBar: boolean;
  defaultAllowStyleBar?: boolean;
  defaultEnableUndoRedo?: boolean;

  // View Controls & Buttons defaults
  defaultShowZoomButtons?: boolean;
  defaultShowFullscreenButton?: boolean;
  defaultShowAnimationButton?: boolean;
  defaultShowResetIcon?: boolean;
  defaultShowSuggestionButtons?: boolean;
  defaultShowStartTooltip?: boolean;
  defaultPlayButton?: boolean;
  defaultButtonRounding?: number;
  defaultButtonShadows?: boolean;
  defaultButtonBorderColor?: string;

  // Interactivity & Security defaults
  defaultEnableRightClick?: boolean;
  defaultEnableLabelDrags?: boolean;
  defaultEnableShiftDragZoom?: boolean;
  defaultCapturingThreshold?: number;
  defaultPreventFocus?: boolean;
  defaultEnableFileFeatures?: boolean;
  defaultDisableJavaScript?: boolean;

  // Localization & Mathematics defaults
  defaultLanguage?: string;
  defaultCountry?: string;
  defaultRounding?: string;
  defaultRandomSeed?: number;
  defaultRandomize?: boolean;
  defaultErrorDialogsActive?: boolean;
  defaultShowLogging?: boolean;
  defaultUseBrowserForJS?: boolean;

  // Exam & Evaluator defaults
  defaultEnable3d?: boolean;
  defaultEnableCAS?: boolean;
  defaultEditorBackgroundColor?: string;
  defaultEditorForegroundColor?: string;
  defaultTextmode?: boolean;
  defaultShowKeyboardOnFocus?: GeoGebraKeyboardFocusMode;
  defaultKeyboardType?: GeoGebraKeyboardType;
  defaultDetachKeyboard?: GeoGebraDetachKeyboardMode;
  defaultDetachedKeyboardParent?: string;

  // Custom UI Text defaults
  defaultLoadingText?: string;
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
  "classic",
  "suite",
  "evaluator",
  "scientific",
  "notes"
];

export const GEO_GEBRA_APP_NAME_SET = new Set<string>(GEO_GEBRA_APP_NAMES);

export const GEO_GEBRA_BLOCK_FIELDS = new Set([
  // Core
  "appName",
  "width",
  "height",
  "showToolBar",
  "showAlgebraInput",
  "showMenuBar",
  "materialId",
  "filename",
  "ggbBase64",
  "perspective",
  "commands",
  "caption",
  "explain",
  // Sizing & Visuals
  "scale",
  "autoHeight",
  "allowUpscale",
  "scaleContainerClass",
  "borderColor",
  "borderRadius",
  "transparentGraphics",
  // Menus & Toolbars
  "showToolBarHelp",
  "customToolBar",
  "customToolbox",
  "algebraInputPosition",
  "allowStyleBar",
  "enableUndoRedo",
  // Buttons & Controls
  "showZoomButtons",
  "showFullscreenButton",
  "showAnimationButton",
  "showResetIcon",
  "showSuggestionButtons",
  "showStartTooltip",
  "playButton",
  "buttonRounding",
  "buttonShadows",
  "buttonBorderColor",
  // Interaction & Permissions
  "enableRightClick",
  "enableLabelDrags",
  "enableShiftDragZoom",
  "capturingThreshold",
  "preventFocus",
  "enableFileFeatures",
  "disableJavaScript",
  // Localization & Math
  "language",
  "country",
  "rounding",
  "randomSeed",
  "randomize",
  "errorDialogsActive",
  "showLogging",
  "useBrowserForJS",
  // Exam & Evaluator
  "enable3d",
  "enableCAS",
  "editorBackgroundColor",
  "editorForegroundColor",
  "textmode",
  "showKeyboardOnFocus",
  "keyboardType",
  "detachKeyboard",
  "detachedKeyboardParent",
  // UI & Loading
  "loadingText"
]);
