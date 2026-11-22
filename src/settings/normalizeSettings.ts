import {
  GEO_GEBRA_APP_NAME_SET,
  GeoGebraAlgebraInputPosition,
  GeoGebraAppName,
  GeoGebraDetachKeyboardMode,
  GeoGebraKeyboardFocusMode,
  GeoGebraKeyboardType
} from "../parser/types";
import { normalizeLanguageCode } from "./languages";
import { DEFAULT_SETTINGS, GeoGebraLabSettings, GeoGebraRenderMode } from "./settings";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readString(value: unknown, fallback: string): string {
  return typeof value === "string" ? value : fallback;
}

function readPositiveNumber(value: unknown, fallback: number): number {
  if (typeof value === "number" && Number.isFinite(value) && value > 0) {
    const rounded = Math.round(value);
    return rounded > 0 ? rounded : fallback;
  }
  return fallback;
}

function readBoundedNumber(
  value: unknown,
  fallback: number,
  min?: number,
  max?: number
): number {
  if (typeof value === "number" && Number.isFinite(value)) {
    if (min !== undefined && value < min) return fallback;
    if (max !== undefined && value > max) return fallback;
    return value;
  }
  return fallback;
}

function readOptionalBoundedNumber(
  value: unknown,
  min?: number,
  max?: number
): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) {
    if (min !== undefined && value < min) return undefined;
    if (max !== undefined && value > max) return undefined;
    return value;
  }
  return undefined;
}

function readBoolean(value: unknown, fallback: boolean): boolean {
  return typeof value === "boolean" ? value : fallback;
}

function readOptionalBoolean(value: unknown): boolean | undefined {
  return typeof value === "boolean" ? value : undefined;
}

function readRenderMode(value: unknown, fallback: GeoGebraRenderMode): GeoGebraRenderMode {
  if (value === "srcdoc" || value === "localServer" || value === "externalViewer") {
    return value;
  }
  return fallback;
}

function readAlgebraInputPosition(
  value: unknown,
  fallback: GeoGebraAlgebraInputPosition
): GeoGebraAlgebraInputPosition {
  if (value === "algebra" || value === "top" || value === "bottom") {
    return value;
  }
  return fallback;
}

function readKeyboardType(
  value: unknown,
  fallback: GeoGebraKeyboardType
): GeoGebraKeyboardType {
  if (value === "normal" || value === "scientific" || value === "notes") {
    return value;
  }
  return fallback;
}

function readKeyboardMode(
  value: unknown,
  fallback: GeoGebraKeyboardFocusMode
): GeoGebraKeyboardFocusMode {
  if (value === true || value === false || value === "auto") {
    return value;
  }
  return fallback;
}

export function normalizeSettings(data: unknown): GeoGebraLabSettings {
  if (!isRecord(data)) {
    return { ...DEFAULT_SETTINGS };
  }

  return {
    // Rendering & Engine
    renderMode: readRenderMode(data.renderMode, DEFAULT_SETTINGS.renderMode),
    geogebraScriptUrl: readString(data.geogebraScriptUrl, DEFAULT_SETTINGS.geogebraScriptUrl),
    viewerUrl: readString(data.viewerUrl, DEFAULT_SETTINGS.viewerUrl),

    // Presentation flags
    enableCaption: readBoolean(data.enableCaption, DEFAULT_SETTINGS.enableCaption),
    enableExplain: readBoolean(data.enableExplain, DEFAULT_SETTINGS.enableExplain),

    // App & View defaults
    defaultAppName:
      typeof data.defaultAppName === "string" && GEO_GEBRA_APP_NAME_SET.has(data.defaultAppName)
        ? (data.defaultAppName as GeoGebraAppName)
        : DEFAULT_SETTINGS.defaultAppName,
    defaultPerspective: readString(data.defaultPerspective, DEFAULT_SETTINGS.defaultPerspective),

    // Sizing & Appearance defaults
    defaultWidth: readPositiveNumber(data.defaultWidth, DEFAULT_SETTINGS.defaultWidth),
    defaultHeight: readPositiveNumber(data.defaultHeight, DEFAULT_SETTINGS.defaultHeight),
    defaultScale: readBoundedNumber(data.defaultScale, DEFAULT_SETTINGS.defaultScale, 0.1, 10),
    defaultAutoHeight: readBoolean(data.defaultAutoHeight, DEFAULT_SETTINGS.defaultAutoHeight),
    defaultAllowUpscale: readBoolean(data.defaultAllowUpscale, DEFAULT_SETTINGS.defaultAllowUpscale),
    defaultScaleContainerClass: readString(
      data.defaultScaleContainerClass,
      DEFAULT_SETTINGS.defaultScaleContainerClass
    ),
    defaultBorderColor: readString(data.defaultBorderColor, DEFAULT_SETTINGS.defaultBorderColor),
    defaultBorderRadius: readBoundedNumber(
      data.defaultBorderRadius,
      DEFAULT_SETTINGS.defaultBorderRadius,
      0
    ),
    defaultTransparentGraphics: readBoolean(
      data.defaultTransparentGraphics,
      DEFAULT_SETTINGS.defaultTransparentGraphics
    ),

    // Toolbars & Menus defaults
    defaultShowToolBar: readBoolean(data.defaultShowToolBar, DEFAULT_SETTINGS.defaultShowToolBar),
    defaultShowToolBarHelp: readBoolean(
      data.defaultShowToolBarHelp,
      DEFAULT_SETTINGS.defaultShowToolBarHelp
    ),
    defaultCustomToolBar: readString(data.defaultCustomToolBar, DEFAULT_SETTINGS.defaultCustomToolBar),
    defaultCustomToolbox: readString(data.defaultCustomToolbox, DEFAULT_SETTINGS.defaultCustomToolbox),
    defaultShowAlgebraInput: readBoolean(
      data.defaultShowAlgebraInput,
      DEFAULT_SETTINGS.defaultShowAlgebraInput
    ),
    defaultAlgebraInputPosition: readAlgebraInputPosition(
      data.defaultAlgebraInputPosition,
      DEFAULT_SETTINGS.defaultAlgebraInputPosition
    ),
    defaultShowMenuBar: readBoolean(data.defaultShowMenuBar, DEFAULT_SETTINGS.defaultShowMenuBar),
    defaultAllowStyleBar: readBoolean(data.defaultAllowStyleBar, DEFAULT_SETTINGS.defaultAllowStyleBar),
    defaultEnableUndoRedo: readBoolean(
      data.defaultEnableUndoRedo,
      DEFAULT_SETTINGS.defaultEnableUndoRedo
    ),

    // View Controls & Buttons defaults
    defaultShowZoomButtons: readBoolean(
      data.defaultShowZoomButtons,
      DEFAULT_SETTINGS.defaultShowZoomButtons
    ),
    defaultShowFullscreenButton: readBoolean(
      data.defaultShowFullscreenButton,
      DEFAULT_SETTINGS.defaultShowFullscreenButton
    ),
    defaultShowAnimationButton: readBoolean(
      data.defaultShowAnimationButton,
      DEFAULT_SETTINGS.defaultShowAnimationButton
    ),
    defaultShowResetIcon: readBoolean(
      data.defaultShowResetIcon,
      DEFAULT_SETTINGS.defaultShowResetIcon
    ),
    defaultShowSuggestionButtons: readBoolean(
      data.defaultShowSuggestionButtons,
      DEFAULT_SETTINGS.defaultShowSuggestionButtons
    ),
    defaultShowStartTooltip: readBoolean(
      data.defaultShowStartTooltip,
      DEFAULT_SETTINGS.defaultShowStartTooltip
    ),
    defaultPlayButton: readBoolean(data.playButton ?? data.defaultPlayButton, DEFAULT_SETTINGS.defaultPlayButton),
    defaultButtonRounding: readOptionalBoundedNumber(data.defaultButtonRounding, 0, 0.9),
    defaultButtonShadows: readOptionalBoolean(data.defaultButtonShadows),
    defaultButtonBorderColor: readString(
      data.defaultButtonBorderColor,
      DEFAULT_SETTINGS.defaultButtonBorderColor
    ),

    // Interactivity & Security defaults
    defaultEnableRightClick: readBoolean(
      data.defaultEnableRightClick,
      DEFAULT_SETTINGS.defaultEnableRightClick
    ),
    defaultEnableLabelDrags: readBoolean(
      data.defaultEnableLabelDrags,
      DEFAULT_SETTINGS.defaultEnableLabelDrags
    ),
    defaultEnableShiftDragZoom: readBoolean(
      data.defaultEnableShiftDragZoom,
      DEFAULT_SETTINGS.defaultEnableShiftDragZoom
    ),
    defaultCapturingThreshold: readBoundedNumber(
      data.defaultCapturingThreshold,
      DEFAULT_SETTINGS.defaultCapturingThreshold,
      0,
      100
    ),
    defaultPreventFocus: readBoolean(
      data.defaultPreventFocus,
      DEFAULT_SETTINGS.defaultPreventFocus
    ),
    defaultEnableFileFeatures: readBoolean(
      data.defaultEnableFileFeatures,
      DEFAULT_SETTINGS.defaultEnableFileFeatures
    ),
    defaultDisableJavaScript: readBoolean(
      data.defaultDisableJavaScript,
      DEFAULT_SETTINGS.defaultDisableJavaScript
    ),

    // Localization & Mathematics defaults
    defaultLanguage:
      typeof data.defaultLanguage === "string"
        ? normalizeLanguageCode(data.defaultLanguage)
        : DEFAULT_SETTINGS.defaultLanguage,
    defaultCountry: readString(data.defaultCountry, DEFAULT_SETTINGS.defaultCountry),
    defaultRounding: readString(data.defaultRounding, DEFAULT_SETTINGS.defaultRounding),
    defaultRandomSeed: readOptionalBoundedNumber(data.defaultRandomSeed),
    defaultRandomize: readBoolean(data.defaultRandomize, DEFAULT_SETTINGS.defaultRandomize),
    defaultErrorDialogsActive: readBoolean(
      data.defaultErrorDialogsActive,
      DEFAULT_SETTINGS.defaultErrorDialogsActive
    ),
    defaultShowLogging: readBoolean(data.defaultShowLogging, DEFAULT_SETTINGS.defaultShowLogging),
    defaultUseBrowserForJS: readBoolean(
      data.defaultUseBrowserForJS,
      DEFAULT_SETTINGS.defaultUseBrowserForJS
    ),

    // Exam & Evaluator defaults
    defaultEnable3d: readBoolean(data.defaultEnable3d, DEFAULT_SETTINGS.defaultEnable3d),
    defaultEnableCAS: readBoolean(data.defaultEnableCAS, DEFAULT_SETTINGS.defaultEnableCAS),
    defaultEditorBackgroundColor: readString(
      data.defaultEditorBackgroundColor,
      DEFAULT_SETTINGS.defaultEditorBackgroundColor
    ),
    defaultEditorForegroundColor: readString(
      data.defaultEditorForegroundColor,
      DEFAULT_SETTINGS.defaultEditorForegroundColor
    ),
    defaultTextmode: readBoolean(data.defaultTextmode, DEFAULT_SETTINGS.defaultTextmode),
    defaultShowKeyboardOnFocus: readKeyboardMode(
      data.defaultShowKeyboardOnFocus,
      DEFAULT_SETTINGS.defaultShowKeyboardOnFocus
    ),
    defaultKeyboardType: readKeyboardType(
      data.defaultKeyboardType,
      DEFAULT_SETTINGS.defaultKeyboardType
    ),
    defaultDetachKeyboard: readKeyboardMode(
      data.defaultDetachKeyboard,
      DEFAULT_SETTINGS.defaultDetachKeyboard
    ),
    defaultDetachedKeyboardParent: readString(
      data.defaultDetachedKeyboardParent,
      DEFAULT_SETTINGS.defaultDetachedKeyboardParent
    ),

    // Custom UI Text defaults
    defaultLoadingText: readString(data.defaultLoadingText, DEFAULT_SETTINGS.defaultLoadingText)
  };
}
