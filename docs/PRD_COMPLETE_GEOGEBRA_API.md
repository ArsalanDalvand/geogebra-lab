# Product Requirements Document (PRD) & Architecture
## Complete GeoGebra API & YAML Configuration Support in GeoGebra Lab

### 1. Overview & Objective
Enable complete, zero-hardcoded configuration of GeoGebra Applets within Obsidian notes via the `geogebra` YAML code block, matching the full official GeoGebra App Parameters and JavaScript API specifications. Every parameter must be configurable at the block level and configurable with sensible defaults in plugin settings, while maintaining 100% backward compatibility with upstream `ctianming/geogebra-lab`.

---

### 2. Gap Analysis (Current vs. Full GeoGebra API)

| Category | GeoGebra API Parameter | Supported in geogebra-lab 0.1.1? | Target in Enhanced Version |
|---|---|---|---|
| **App & Content** | `appName` | Partial (only 4 apps) | Full: `graphing`, `geometry`, `3d`, `classic`, `suite`, `evaluator`, `scientific`, `notes` |
| | `perspective` | ❌ No | ✅ Full: `AG`, `G`, `T`, `C`, `3`, etc. |
| | `materialId` | ✅ Yes | ✅ Maintained |
| | `filename` | Partial (string only) | ✅ Enhanced: Vault attachments + URL |
| | `ggbBase64` | ❌ No | ✅ Full: Direct base64 or vault `.ggb` reading |
| **Dimensions & Scale** | `width`, `height` | ✅ Yes | ✅ Maintained |
| | `scale` | ❌ No | ✅ Full: Numeric zoom ratio (e.g. 0.8 to 1.5) |
| | `autoHeight` | ❌ No | ✅ Full: Auto-aspect ratio calculation |
| | `allowUpscale` | ❌ No | ✅ Full: Boolean |
| | `scaleContainerClass`| ❌ No | ✅ Full: CSS class name string |
| | `borderColor` | ❌ No | ✅ Full: Hex color or 'transparent' |
| | `borderRadius` | ❌ No | ✅ Full: Numeric pixels |
| | `transparentGraphics`| ❌ No | ✅ Full: Boolean (crucial for Obsidian themes) |
| **Interface & Menus** | `showMenuBar` | ✅ Yes | ✅ Maintained |
| | `showToolBar` | ✅ Yes | ✅ Maintained |
| | `showToolBarHelp` | ❌ No | ✅ Full: Boolean |
| | `customToolBar` | ❌ No | ✅ Full: Custom tool string definition |
| | `customToolbox` | ❌ No | ✅ Full: String |
| | `showAlgebraInput` | ✅ Yes | ✅ Maintained |
| | `algebraInputPosition`| ❌ No | ✅ Full: `top`, `bottom`, `algebra` |
| | `allowStyleBar` | ❌ No | ✅ Full: Boolean |
| | `enableUndoRedo` | ❌ No | ✅ Full: Boolean |
| | `showZoomButtons` | ❌ No | ✅ Full: Boolean |
| | `showFullscreenButton`| ❌ No | ✅ Full: Boolean |
| | `showAnimationButton`| ❌ No | ✅ Full: Boolean |
| | `showResetIcon` | ❌ No | ✅ Full: Boolean |
| | `showSuggestionButtons`| ❌ No | ✅ Full: Boolean |
| | `showStartTooltip` | ❌ No | ✅ Full: Boolean |
| | `playButton` | ❌ No | ✅ Full: Boolean (click-to-play) |
| **Interactivity** | `enableRightClick` | ❌ No | ✅ Full: Boolean |
| | `enableLabelDrags` | ❌ No | ✅ Full: Boolean |
| | `enableShiftDragZoom`| ❌ No | ✅ Full: Boolean |
| | `capturingThreshold`| ❌ No | ✅ Full: Numeric pixels |
| | `preventFocus` | ❌ No | ✅ Full: Boolean (prevents scroll jumping) |
| | `enableFileFeatures`| ❌ No | ✅ Full: Boolean |
| | `disableJavaScript` | ❌ No | ✅ Full: Boolean |
| **Localization & Locale** | `language` | ❌ No | ✅ Full: ISO language string (e.g., `fa`, `en`) |
| | `country` | ❌ No | ✅ Full: ISO country string |
| | `rounding` | ❌ No | ✅ Full: Precision string |
| | `randomSeed` | ❌ No | ✅ Full: Numeric seed |
| | `randomize` | ❌ No | ✅ Full: Boolean |
| | `errorDialogsActive` | ❌ No | ✅ Full: Boolean |
| | `showLogging` | ❌ No | ✅ Full: Boolean |
| | `useBrowserForJS` | ❌ No | ✅ Full: Boolean |
| **Buttons & Styling** | `buttonRounding` | ❌ No | ✅ Full: Numeric |
| | `buttonShadows` | ❌ No | ✅ Full: Boolean |
| | `buttonBorderColor` | ❌ No | ✅ Full: Hex color |
| **Evaluator & Exam** | `enable3d` | ❌ No | ✅ Full: Boolean |
| | `enableCAS` | ❌ No | ✅ Full: Boolean |
| | `showKeyboardOnFocus`| ❌ No | ✅ Full: Boolean or string |
| | `keyboardType` | ❌ No | ✅ Full: `normal`, `scientific`, `notes` |
| | `detachKeyboard` | ❌ No | ✅ Full: Boolean or string |
| **UI Text & Loading** | `loadingText` | Hardcoded English | ✅ Configurable in YAML and Settings |

---

### 3. Architecture & Modular Design

```
src/
├── parser/
│   ├── types.ts                   <-- Complete types, unions, and fields
│   ├── parseGeoGebraBlock.ts       <-- Schema-validated parser
│   └── validators.ts              <-- Extracted reusable typed validators (DRY)
├── renderer/
│   ├── appletParamsBuilder.ts     <-- Maps GeoGebraBlockConfig -> GGBApplet params (pure function)
│   ├── buildGeoGebraHTML.ts       <-- Injects applet into iframe with zero hardcoding
│   └── buildExternalViewerIframe.ts
├── vault/
│   └── attachmentResolver.ts      <-- Reads .ggb files from Obsidian vault into base64
├── settings/
│   ├── settings.ts                <-- Full default settings interface
│   └── settingsTab.ts             <-- UI settings grouped into intuitive accordions
└── main.ts                        <-- Slim plugin orchestrator
```

### 4. Zero Hardcoded Constraints
1. No hardcoded loading strings ("Loading GeoGebra..." is replaced by `config.loadingText ?? settings.defaultLoadingText`).
2. Sizing respects YAML values; automatic window fit is toggled via `autoResize: boolean`.
3. Background and border styles are configurable via YAML and inherit Obsidian CSS variables when omitted.
4. All new parameters are completely optional (`?`) ensuring 100% backward compatibility with upstream and existing notes.
