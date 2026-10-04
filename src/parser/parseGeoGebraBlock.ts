import { parseYaml } from "obsidian";
import { DEFAULT_SETTINGS } from "../settings/settings";
import {
  GEO_GEBRA_BLOCK_FIELDS,
  GeoGebraAlgebraInputPosition,
  GeoGebraBlockConfig,
  GeoGebraKeyboardType,
  GeoGebraParseResult,
  GeoGebraParserDefaults
} from "./types";
import {
  parseAppName,
  parseBoolean,
  parseColor,
  parseCommands,
  parseDetachKeyboardMode,
  parseDimension,
  parseEnum,
  parseExplain,
  parseKeyboardFocusMode,
  parseOptionalBoolean,
  parseOptionalNumber,
  parseOptionalString
} from "./validators";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export type YamlParserFunction = (source: string) => unknown;

export function parseGeoGebraBlock(
  source: string,
  defaults: GeoGebraParserDefaults = DEFAULT_SETTINGS,
  customYamlParser?: YamlParserFunction
): GeoGebraParseResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  let parsed: unknown;

  const yamlParser = customYamlParser ?? parseYaml;

  try {
    parsed = source.trim() ? yamlParser(source) : {};
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      errors: [`YAML parse error: ${message}`],
      warnings
    };
  }

  if (parsed === null || parsed === undefined) {
    parsed = {};
  }

  if (!isRecord(parsed)) {
    return {
      errors: ["GeoGebra block must contain a YAML object."],
      warnings
    };
  }

  Object.keys(parsed).forEach((key) => {
    if (!GEO_GEBRA_BLOCK_FIELDS.has(key)) {
      warnings.push(`Unknown field "${key}" was ignored.`);
    }
  });

  const ALGEBRA_INPUT_POSITIONS = ["algebra", "top", "bottom"] as const;
  const KEYBOARD_TYPES = ["normal", "scientific", "notes"] as const;

  const config: GeoGebraBlockConfig = {
    // App and Content
    appName: parseAppName(parsed.appName, defaults.defaultAppName, errors),
    materialId: parseOptionalString(parsed.materialId, "materialId", errors),
    filename: parseOptionalString(parsed.filename, "filename", errors),
    ggbBase64: parseOptionalString(parsed.ggbBase64, "ggbBase64", errors),
    perspective:
      parseOptionalString(parsed.perspective, "perspective", errors) ??
      (defaults.defaultPerspective ? defaults.defaultPerspective : undefined),

    // Sizing & Appearance
    width: parseDimension(parsed.width, defaults.defaultWidth, "width", errors),
    height: parseDimension(parsed.height, defaults.defaultHeight, "height", errors),
    scale:
      parseOptionalNumber(parsed.scale, "scale", errors, 0.1, 10) ??
      defaults.defaultScale,
    autoHeight:
      parseOptionalBoolean(parsed.autoHeight, "autoHeight", errors) ??
      defaults.defaultAutoHeight,
    allowUpscale:
      parseOptionalBoolean(parsed.allowUpscale, "allowUpscale", errors) ??
      defaults.defaultAllowUpscale,
    scaleContainerClass:
      parseOptionalString(parsed.scaleContainerClass, "scaleContainerClass", errors) ??
      (defaults.defaultScaleContainerClass ? defaults.defaultScaleContainerClass : undefined),
    borderColor:
      parseColor(parsed.borderColor, "borderColor", errors) ??
      (defaults.defaultBorderColor ? defaults.defaultBorderColor : undefined),
    borderRadius:
      parseOptionalNumber(parsed.borderRadius, "borderRadius", errors, 0) ??
      (typeof defaults.defaultBorderRadius === "number" && defaults.defaultBorderRadius > 0
        ? defaults.defaultBorderRadius
        : undefined),
    transparentGraphics:
      parseOptionalBoolean(parsed.transparentGraphics, "transparentGraphics", errors) ??
      defaults.defaultTransparentGraphics,

    // Toolbar & Menus
    showMenuBar: parseBoolean(
      parsed.showMenuBar,
      defaults.defaultShowMenuBar,
      "showMenuBar",
      errors
    ),
    showToolBar: parseBoolean(
      parsed.showToolBar,
      defaults.defaultShowToolBar,
      "showToolBar",
      errors
    ),
    showToolBarHelp:
      parseOptionalBoolean(parsed.showToolBarHelp, "showToolBarHelp", errors) ??
      defaults.defaultShowToolBarHelp,
    customToolBar:
      parseOptionalString(parsed.customToolBar, "customToolBar", errors) ??
      (defaults.defaultCustomToolBar ? defaults.defaultCustomToolBar : undefined),
    customToolbox:
      parseOptionalString(parsed.customToolbox, "customToolbox", errors) ??
      (defaults.defaultCustomToolbox ? defaults.defaultCustomToolbox : undefined),
    showAlgebraInput: parseBoolean(
      parsed.showAlgebraInput,
      defaults.defaultShowAlgebraInput,
      "showAlgebraInput",
      errors
    ),
    algebraInputPosition:
      parseEnum<GeoGebraAlgebraInputPosition>(
        parsed.algebraInputPosition,
        ALGEBRA_INPUT_POSITIONS,
        "algebraInputPosition",
        errors
      ) ?? defaults.defaultAlgebraInputPosition,
    allowStyleBar:
      parseOptionalBoolean(parsed.allowStyleBar, "allowStyleBar", errors) ??
      defaults.defaultAllowStyleBar,
    enableUndoRedo:
      parseOptionalBoolean(parsed.enableUndoRedo, "enableUndoRedo", errors) ??
      defaults.defaultEnableUndoRedo,

    // View Controls & Buttons
    showZoomButtons:
      parseOptionalBoolean(parsed.showZoomButtons, "showZoomButtons", errors) ??
      defaults.defaultShowZoomButtons,
    showFullscreenButton:
      parseOptionalBoolean(parsed.showFullscreenButton, "showFullscreenButton", errors) ??
      defaults.defaultShowFullscreenButton,
    showAnimationButton:
      parseOptionalBoolean(parsed.showAnimationButton, "showAnimationButton", errors) ??
      defaults.defaultShowAnimationButton,
    showResetIcon:
      parseOptionalBoolean(parsed.showResetIcon, "showResetIcon", errors) ??
      defaults.defaultShowResetIcon,
    showSuggestionButtons:
      parseOptionalBoolean(parsed.showSuggestionButtons, "showSuggestionButtons", errors) ??
      defaults.defaultShowSuggestionButtons,
    showStartTooltip:
      parseOptionalBoolean(parsed.showStartTooltip, "showStartTooltip", errors) ??
      defaults.defaultShowStartTooltip,
    playButton:
      parseOptionalBoolean(parsed.playButton, "playButton", errors) ??
      defaults.defaultPlayButton,
    buttonRounding:
      parseOptionalNumber(parsed.buttonRounding, "buttonRounding", errors, 0, 0.9) ??
      defaults.defaultButtonRounding,
    buttonShadows:
      parseOptionalBoolean(parsed.buttonShadows, "buttonShadows", errors) ??
      defaults.defaultButtonShadows,
    buttonBorderColor:
      parseColor(parsed.buttonBorderColor, "buttonBorderColor", errors) ??
      (defaults.defaultButtonBorderColor ? defaults.defaultButtonBorderColor : undefined),

    // Interactivity & Security
    enableRightClick:
      parseOptionalBoolean(parsed.enableRightClick, "enableRightClick", errors) ??
      defaults.defaultEnableRightClick,
    enableLabelDrags:
      parseOptionalBoolean(parsed.enableLabelDrags, "enableLabelDrags", errors) ??
      defaults.defaultEnableLabelDrags,
    enableShiftDragZoom:
      parseOptionalBoolean(parsed.enableShiftDragZoom, "enableShiftDragZoom", errors) ??
      defaults.defaultEnableShiftDragZoom,
    capturingThreshold:
      parseOptionalNumber(parsed.capturingThreshold, "capturingThreshold", errors, 0, 100) ??
      defaults.defaultCapturingThreshold,
    preventFocus:
      parseOptionalBoolean(parsed.preventFocus, "preventFocus", errors) ??
      defaults.defaultPreventFocus,
    enableFileFeatures:
      parseOptionalBoolean(parsed.enableFileFeatures, "enableFileFeatures", errors) ??
      defaults.defaultEnableFileFeatures,
    disableJavaScript:
      parseOptionalBoolean(parsed.disableJavaScript, "disableJavaScript", errors) ??
      defaults.defaultDisableJavaScript,

    // Localization & Mathematics
    language:
      parseOptionalString(parsed.language, "language", errors) ??
      (defaults.defaultLanguage ? defaults.defaultLanguage : undefined),
    country:
      parseOptionalString(parsed.country, "country", errors) ??
      (defaults.defaultCountry ? defaults.defaultCountry : undefined),
    rounding:
      parseOptionalString(parsed.rounding, "rounding", errors) ??
      (defaults.defaultRounding ? defaults.defaultRounding : undefined),
    randomSeed:
      parseOptionalNumber(parsed.randomSeed, "randomSeed", errors) ??
      defaults.defaultRandomSeed,
    randomize:
      parseOptionalBoolean(parsed.randomize, "randomize", errors) ??
      defaults.defaultRandomize,
    errorDialogsActive:
      parseOptionalBoolean(parsed.errorDialogsActive, "errorDialogsActive", errors) ??
      defaults.defaultErrorDialogsActive,
    showLogging:
      parseOptionalBoolean(parsed.showLogging, "showLogging", errors) ??
      defaults.defaultShowLogging,
    useBrowserForJS:
      parseOptionalBoolean(parsed.useBrowserForJS, "useBrowserForJS", errors) ??
      defaults.defaultUseBrowserForJS,

    // Exam & Evaluator
    enable3d:
      parseOptionalBoolean(parsed.enable3d, "enable3d", errors) ??
      defaults.defaultEnable3d,
    enableCAS:
      parseOptionalBoolean(parsed.enableCAS, "enableCAS", errors) ??
      defaults.defaultEnableCAS,
    editorBackgroundColor:
      parseColor(parsed.editorBackgroundColor, "editorBackgroundColor", errors) ??
      (defaults.defaultEditorBackgroundColor ? defaults.defaultEditorBackgroundColor : undefined),
    editorForegroundColor:
      parseColor(parsed.editorForegroundColor, "editorForegroundColor", errors) ??
      (defaults.defaultEditorForegroundColor ? defaults.defaultEditorForegroundColor : undefined),
    textmode:
      parseOptionalBoolean(parsed.textmode, "textmode", errors) ??
      defaults.defaultTextmode,
    showKeyboardOnFocus:
      parseKeyboardFocusMode(parsed.showKeyboardOnFocus, "showKeyboardOnFocus", errors) ??
      defaults.defaultShowKeyboardOnFocus,
    keyboardType:
      parseEnum<GeoGebraKeyboardType>(parsed.keyboardType, KEYBOARD_TYPES, "keyboardType", errors) ??
      defaults.defaultKeyboardType,
    detachKeyboard:
      parseDetachKeyboardMode(parsed.detachKeyboard, "detachKeyboard", errors) ??
      defaults.defaultDetachKeyboard,
    detachedKeyboardParent:
      parseOptionalString(parsed.detachedKeyboardParent, "detachedKeyboardParent", errors) ??
      (defaults.defaultDetachedKeyboardParent ? defaults.defaultDetachedKeyboardParent : undefined),

    // Execution & Content
    commands: parseCommands(parsed.commands, errors),
    caption: parseOptionalString(parsed.caption, "caption", errors),
    explain: parseExplain(parsed.explain, errors),

    // Non-hardcoded UI options
    loadingText:
      parseOptionalString(parsed.loadingText, "loadingText", errors) ??
      defaults.defaultLoadingText
  };

  return {
    config,
    errors,
    warnings
  };
}
