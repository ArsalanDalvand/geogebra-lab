import test from "node:test";
import assert from "node:assert/strict";
import { buildAppletParams } from "../src/renderer/appletParamsBuilder.ts";
import { GeoGebraBlockConfig } from "../src/parser/types.ts";

test("buildAppletParams includes core defaults", () => {
  const config: GeoGebraBlockConfig = {
    appName: "graphing",
    width: 800,
    height: 500,
    showToolBar: false,
    showAlgebraInput: true,
    showMenuBar: false,
    commands: ["f(x)=x^2"],
    explain: []
  };

  const params = buildAppletParams("block-1", config);

  assert.equal(params.id, "block-1-applet");
  assert.equal(params.appName, "graphing");
  assert.equal(params.width, 800);
  assert.equal(params.height, 500);
  assert.equal(params.showToolBar, false);
  assert.equal(params.showAlgebraInput, true);
  assert.equal(params.showMenuBar, false);
});

test("buildAppletParams maps all new GeoGebra API parameters without hardcoding", () => {
  const config: GeoGebraBlockConfig = {
    appName: "suite",
    width: 900,
    height: 600,
    showToolBar: true,
    showAlgebraInput: true,
    showMenuBar: true,
    commands: ["A=(1,2)"],
    explain: [],
    // New parameters
    perspective: "AG",
    materialId: "m12345",
    filename: "https://example.com/test.ggb",
    ggbBase64: "UEsDBBQ...",
    scale: 1.25,
    autoHeight: true,
    allowUpscale: true,
    scaleContainerClass: "my-container",
    borderColor: "#ff0000",
    borderRadius: 8,
    transparentGraphics: true,
    showToolBarHelp: true,
    customToolBar: "0 | 1 2",
    customToolbox: "pen,eraser",
    algebraInputPosition: "top",
    allowStyleBar: true,
    enableUndoRedo: true,
    showZoomButtons: true,
    showFullscreenButton: true,
    showAnimationButton: true,
    showResetIcon: true,
    showSuggestionButtons: true,
    showStartTooltip: false,
    playButton: true,
    buttonRounding: 0.5,
    buttonShadows: false,
    buttonBorderColor: "#00ff00",
    enableRightClick: false,
    enableLabelDrags: false,
    enableShiftDragZoom: false,
    capturingThreshold: 5,
    preventFocus: true,
    enableFileFeatures: false,
    disableJavaScript: true,
    language: "fa",
    country: "IR",
    rounding: "3s",
    randomSeed: 42,
    randomize: false,
    errorDialogsActive: false,
    showLogging: true,
    useBrowserForJS: true,
    enable3d: true,
    enableCAS: true,
    showKeyboardOnFocus: true,
    keyboardType: "scientific",
    detachKeyboard: false
  };

  const params = buildAppletParams("custom-block", config);

  assert.equal(params.appName, "suite");
  assert.equal(params.perspective, "AG");
  assert.equal(params.material_id, "m12345");
  assert.equal(params.filename, "https://example.com/test.ggb");
  assert.equal(params.ggbBase64, "UEsDBBQ...");
  assert.equal(params.scale, 1.25);
  assert.equal(params.autoHeight, true);
  assert.equal(params.allowUpscale, true);
  assert.equal(params.scaleContainerClass, "my-container");
  assert.equal(params.borderColor, "#ff0000");
  assert.equal(params.borderRadius, 8);
  assert.equal(params.transparentGraphics, true);
  assert.equal(params.showToolBarHelp, true);
  assert.equal(params.customToolBar, "0 | 1 2");
  assert.equal(params.customToolbox, "pen,eraser");
  assert.equal(params.algebraInputPosition, "top");
  assert.equal(params.allowStyleBar, true);
  assert.equal(params.enableUndoRedo, true);
  assert.equal(params.showZoomButtons, true);
  assert.equal(params.showFullscreenButton, true);
  assert.equal(params.showAnimationButton, true);
  assert.equal(params.showResetIcon, true);
  assert.equal(params.showSuggestionButtons, true);
  assert.equal(params.showStartTooltip, false);
  assert.equal(params.playButton, true);
  assert.equal(params.buttonRounding, 0.5);
  assert.equal(params.buttonShadows, false);
  assert.equal(params.buttonBorderColor, "#00ff00");
  assert.equal(params.enableRightClick, false);
  assert.equal(params.enableLabelDrags, false);
  assert.equal(params.enableShiftDragZoom, false);
  assert.equal(params.capturingThreshold, 5);
  assert.equal(params.preventFocus, true);
  assert.equal(params.enableFileFeatures, false);
  assert.equal(params.disableJavaScript, true);
  assert.equal(params.language, "fa");
  assert.equal(params.country, "IR");
  assert.equal(params.rounding, "3s");
  assert.equal(params.randomSeed, 42);
  assert.equal(params.randomize, false);
  assert.equal(params.errorDialogsActive, false);
  assert.equal(params.showLogging, true);
  assert.equal(params.useBrowserForJS, true);
  assert.equal(params.enable3d, true);
  assert.equal(params.enableCAS, true);
  assert.equal(params.showKeyboardOnFocus, true);
  assert.equal(params.keyboardType, "scientific");
  assert.equal(params.detachKeyboard, false);
});
