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
    perspective: parseOptionalString(parsed.perspective, "perspective", errors),

    // Sizing & Appearance
    width: parseDimension(parsed.width, defaults.defaultWidth, "width", errors),
    height: parseDimension(parsed.height, defaults.defaultHeight, "height", errors),
    scale: parseOptionalNumber(parsed.scale, "scale", errors, 0.1, 10),
    autoHeight: parseOptionalBoolean(parsed.autoHeight, "autoHeight", errors),
    allowUpscale: parseOptionalBoolean(parsed.allowUpscale, "allowUpscale", errors),
    scaleContainerClass: parseOptionalString(
      parsed.scaleContainerClass,
      "scaleContainerClass",
      errors
    ),
    borderColor: parseColor(parsed.borderColor, "borderColor", errors),
    borderRadius: parseOptionalNumber(parsed.borderRadius, "borderRadius", errors, 0),
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
    showToolBarHelp: parseOptionalBoolean(parsed.showToolBarHelp, "showToolBarHelp", errors),
    customToolBar: parseOptionalString(parsed.customToolBar, "customToolBar", errors),
    customToolbox: parseOptionalString(parsed.customToolbox, "customToolbox", errors),
    showAlgebraInput: parseBoolean(
      parsed.showAlgebraInput,
      defaults.defaultShowAlgebraInput,
      "showAlgebraInput",
      errors
    ),
    algebraInputPosition: parseEnum<GeoGebraAlgebraInputPosition>(
      parsed.algebraInputPosition,
      ALGEBRA_INPUT_POSITIONS,
      "algebraInputPosition",
      errors
    ),
    allowStyleBar: parseOptionalBoolean(parsed.allowStyleBar, "allowStyleBar", errors),
    enableUndoRedo: parseOptionalBoolean(parsed.enableUndoRedo, "enableUndoRedo", errors),

    // View Controls & Buttons
    showZoomButtons:
      parseOptionalBoolean(parsed.showZoomButtons, "showZoomButtons", errors) ??
      defaults.defaultShowZoomButtons,
    showFullscreenButton:
      parseOptionalBoolean(parsed.showFullscreenButton, "showFullscreenButton", errors) ??
      defaults.defaultShowFullscreenButton,
    showAnimationButton: parseOptionalBoolean(
      parsed.showAnimationButton,
      "showAnimationButton",
      errors
    ),
    showResetIcon:
      parseOptionalBoolean(parsed.showResetIcon, "showResetIcon", errors) ??
      defaults.defaultShowResetIcon,
    showSuggestionButtons: parseOptionalBoolean(
      parsed.showSuggestionButtons,
      "showSuggestionButtons",
      errors
    ),
    showStartTooltip: parseOptionalBoolean(parsed.showStartTooltip, "showStartTooltip", errors),
    playButton: parseOptionalBoolean(parsed.playButton, "playButton", errors),
    buttonRounding: parseOptionalNumber(parsed.buttonRounding, "buttonRounding", errors, 0, 0.9),
    buttonShadows: parseOptionalBoolean(parsed.buttonShadows, "buttonShadows", errors),
    buttonBorderColor: parseColor(parsed.buttonBorderColor, "buttonBorderColor", errors),

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
    capturingThreshold: parseOptionalNumber(
      parsed.capturingThreshold,
      "capturingThreshold",
      errors,
      0,
      100
    ),
    preventFocus:
      parseOptionalBoolean(parsed.preventFocus, "preventFocus", errors) ??
      defaults.defaultPreventFocus,
    enableFileFeatures: parseOptionalBoolean(
      parsed.enableFileFeatures,
      "enableFileFeatures",
      errors
    ),
    disableJavaScript: parseOptionalBoolean(parsed.disableJavaScript, "disableJavaScript", errors),

    // Localization & Mathematics
    language:
      parseOptionalString(parsed.language, "language", errors) ??
      (defaults.defaultLanguage ? defaults.defaultLanguage : undefined),
    country: parseOptionalString(parsed.country, "country", errors),
    rounding: parseOptionalString(parsed.rounding, "rounding", errors),
    randomSeed: parseOptionalNumber(parsed.randomSeed, "randomSeed", errors),
    randomize: parseOptionalBoolean(parsed.randomize, "randomize", errors),
    errorDialogsActive: parseOptionalBoolean(
      parsed.errorDialogsActive,
      "errorDialogsActive",
      errors
    ),
    showLogging: parseOptionalBoolean(parsed.showLogging, "showLogging", errors),
    useBrowserForJS: parseOptionalBoolean(parsed.useBrowserForJS, "useBrowserForJS", errors),

    // Exam & Evaluator
    enable3d: parseOptionalBoolean(parsed.enable3d, "enable3d", errors),
    enableCAS: parseOptionalBoolean(parsed.enableCAS, "enableCAS", errors),
    editorBackgroundColor: parseColor(
      parsed.editorBackgroundColor,
      "editorBackgroundColor",
      errors
    ),
    editorForegroundColor: parseColor(
      parsed.editorForegroundColor,
      "editorForegroundColor",
      errors
    ),
    textmode: parseOptionalBoolean(parsed.textmode, "textmode", errors),
    showKeyboardOnFocus: parseKeyboardFocusMode(
      parsed.showKeyboardOnFocus,
      "showKeyboardOnFocus",
      errors
    ),
    keyboardType: parseEnum<GeoGebraKeyboardType>(
      parsed.keyboardType,
      KEYBOARD_TYPES,
      "keyboardType",
      errors
    ),
    detachKeyboard: parseDetachKeyboardMode(parsed.detachKeyboard, "detachKeyboard", errors),
    detachedKeyboardParent: parseOptionalString(
      parsed.detachedKeyboardParent,
      "detachedKeyboardParent",
      errors
    ),

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
