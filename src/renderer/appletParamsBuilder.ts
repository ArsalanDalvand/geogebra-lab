import { GeoGebraBlockConfig } from "../parser/types";

/**
 * Builds the parameters object passed to window.GGBApplet(params, true).
 * Strictly maps all configuration fields without hardcoding.
 * Follows immutability: returns a newly constructed object.
 */
export function buildAppletParams(
  blockId: string,
  config: GeoGebraBlockConfig
): Record<string, unknown> {
  const params: Record<string, unknown> = {
    id: `${blockId}-applet`,
    appName: config.appName,
    width: config.width,
    height: config.height,
    showToolBar: config.showToolBar,
    showAlgebraInput: config.showAlgebraInput,
    showMenuBar: config.showMenuBar
  };

  // Content & Files
  if (config.materialId !== undefined) {
    params.material_id = config.materialId;
  }
  if (config.filename !== undefined) {
    params.filename = config.filename;
  }
  if (config.ggbBase64 !== undefined) {
    params.ggbBase64 = config.ggbBase64;
  }
  if (config.perspective !== undefined) {
    params.perspective = config.perspective;
  }

  // Dimensions & Layout
  if (config.scale !== undefined) {
    params.scale = config.scale;
  }
  if (config.autoHeight !== undefined) {
    params.autoHeight = config.autoHeight;
  }
  if (config.allowUpscale !== undefined) {
    params.allowUpscale = config.allowUpscale;
  }
  if (config.scaleContainerClass !== undefined) {
    params.scaleContainerClass = config.scaleContainerClass;
  }
  if (config.borderColor !== undefined) {
    params.borderColor = config.borderColor;
  }
  if (config.borderRadius !== undefined) {
    params.borderRadius = config.borderRadius;
  }
  if (config.transparentGraphics !== undefined) {
    params.transparentGraphics = config.transparentGraphics;
  }

  // Toolbars & Menus
  if (config.showToolBarHelp !== undefined) {
    params.showToolBarHelp = config.showToolBarHelp;
  }
  if (config.customToolBar !== undefined) {
    params.customToolBar = config.customToolBar;
  }
  if (config.customToolbox !== undefined) {
    params.customToolbox = config.customToolbox;
  }
  if (config.algebraInputPosition !== undefined) {
    params.algebraInputPosition = config.algebraInputPosition;
  }
  if (config.allowStyleBar !== undefined) {
    params.allowStyleBar = config.allowStyleBar;
  }
  if (config.enableUndoRedo !== undefined) {
    params.enableUndoRedo = config.enableUndoRedo;
  }

  // View Controls & Buttons
  if (config.showZoomButtons !== undefined) {
    params.showZoomButtons = config.showZoomButtons;
  }
  if (config.showFullscreenButton !== undefined) {
    params.showFullscreenButton = config.showFullscreenButton;
  }
  if (config.showAnimationButton !== undefined) {
    params.showAnimationButton = config.showAnimationButton;
  }
  if (config.showResetIcon !== undefined) {
    params.showResetIcon = config.showResetIcon;
  }
  if (config.showSuggestionButtons !== undefined) {
    params.showSuggestionButtons = config.showSuggestionButtons;
  }
  if (config.showStartTooltip !== undefined) {
    params.showStartTooltip = config.showStartTooltip;
  }
  if (config.playButton !== undefined) {
    params.playButton = config.playButton;
  }
  if (config.buttonRounding !== undefined) {
    params.buttonRounding = config.buttonRounding;
  }
  if (config.buttonShadows !== undefined) {
    params.buttonShadows = config.buttonShadows;
  }
  if (config.buttonBorderColor !== undefined) {
    params.buttonBorderColor = config.buttonBorderColor;
  }

  // Interactivity & Security
  if (config.enableRightClick !== undefined) {
    params.enableRightClick = config.enableRightClick;
  }
  if (config.enableLabelDrags !== undefined) {
    params.enableLabelDrags = config.enableLabelDrags;
  }
  if (config.enableShiftDragZoom !== undefined) {
    params.enableShiftDragZoom = config.enableShiftDragZoom;
  }
  if (config.capturingThreshold !== undefined) {
    params.capturingThreshold = config.capturingThreshold;
  }
  if (config.preventFocus !== undefined) {
    params.preventFocus = config.preventFocus;
  }
  if (config.enableFileFeatures !== undefined) {
    params.enableFileFeatures = config.enableFileFeatures;
  }
  if (config.disableJavaScript !== undefined) {
    params.disableJavaScript = config.disableJavaScript;
  }

  // Localization & Mathematics
  params.language =
    config.language && config.language.trim() !== "" ? config.language.trim() : "en";
  if (config.country !== undefined) {
    params.country = config.country;
  }
  if (config.rounding !== undefined) {
    params.rounding = config.rounding;
  }
  if (config.randomSeed !== undefined) {
    params.randomSeed = config.randomSeed;
  }
  if (config.randomize !== undefined) {
    params.randomize = config.randomize;
  }
  if (config.errorDialogsActive !== undefined) {
    params.errorDialogsActive = config.errorDialogsActive;
  }
  if (config.showLogging !== undefined) {
    params.showLogging = config.showLogging;
  }
  if (config.useBrowserForJS !== undefined) {
    params.useBrowserForJS = config.useBrowserForJS;
  }

  // Evaluator & Exam
  if (config.enable3d !== undefined) {
    params.enable3d = config.enable3d;
  }
  if (config.enableCAS !== undefined) {
    params.enableCAS = config.enableCAS;
  }
  if (config.editorBackgroundColor !== undefined) {
    params.editorBackgroundColor = config.editorBackgroundColor;
  }
  if (config.editorForegroundColor !== undefined) {
    params.editorForegroundColor = config.editorForegroundColor;
  }
  if (config.textmode !== undefined) {
    params.textmode = config.textmode;
  }
  if (config.showKeyboardOnFocus !== undefined) {
    params.showKeyboardOnFocus = config.showKeyboardOnFocus;
  }
  if (config.keyboardType !== undefined) {
    params.keyboardType = config.keyboardType;
  }
  if (config.detachKeyboard !== undefined) {
    params.detachKeyboard = config.detachKeyboard;
  }
  if (config.detachedKeyboardParent !== undefined) {
    params.detachedKeyboardParent = config.detachedKeyboardParent;
  }

  return params;
}
