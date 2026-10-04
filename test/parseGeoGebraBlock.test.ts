import test from "node:test";
import assert from "node:assert/strict";
import { parseGeoGebraBlock } from "../src/parser/parseGeoGebraBlock";

// Lightweight YAML mock parser for unit tests
function mockYamlParser(source: string): unknown {
  const result: Record<string, unknown> = {};
  const lines = source.split("\n");
  let currentKey = "";
  let inArray = false;
  let arrayValues: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    if (trimmed.startsWith("- ") && inArray) {
      const val = trimmed.slice(2).trim().replace(/^["']|["']$/g, "");
      arrayValues.push(val);
      continue;
    }

    if (inArray && currentKey) {
      result[currentKey] = arrayValues;
      inArray = false;
      currentKey = "";
    }

    const colonIdx = trimmed.indexOf(":");
    if (colonIdx > -1) {
      const key = trimmed.slice(0, colonIdx).trim();
      const val = trimmed.slice(colonIdx + 1).trim();

      if (val === "") {
        inArray = true;
        currentKey = key;
        arrayValues = [];
      } else {
        if (val === "true") result[key] = true;
        else if (val === "false") result[key] = false;
        else if (!isNaN(Number(val))) result[key] = Number(val);
        else result[key] = val.replace(/^["']|["']$/g, "");
      }
    }
  }

  if (inArray && currentKey) {
    result[currentKey] = arrayValues;
  }

  return result;
}

test("parseGeoGebraBlock parses full suite of GeoGebra API parameters", () => {
  const yaml = `
appName: suite
width: 900
height: 600
scale: 1.2
autoHeight: true
allowUpscale: true
scaleContainerClass: ggb-container
borderColor: "#333333"
borderRadius: 12
transparentGraphics: true
showToolBar: true
showToolBarHelp: true
customToolBar: "0 | 1 2"
customToolbox: "pen,line"
showAlgebraInput: true
algebraInputPosition: top
allowStyleBar: true
enableUndoRedo: true
showMenuBar: true
showZoomButtons: true
showFullscreenButton: true
showAnimationButton: true
showResetIcon: true
showSuggestionButtons: true
showStartTooltip: false
playButton: false
buttonRounding: 0.4
buttonShadows: true
buttonBorderColor: "#ffffff"
enableRightClick: true
enableLabelDrags: true
enableShiftDragZoom: true
capturingThreshold: 4
preventFocus: true
enableFileFeatures: true
disableJavaScript: false
language: fa
country: IR
rounding: 5s
randomSeed: 123
randomize: true
errorDialogsActive: true
showLogging: false
useBrowserForJS: false
enable3d: true
enableCAS: true
loadingText: "در حال بارگذاری جئوجبرا..."
commands:
  - "A=(0,0)"
  - "B=(3,4)"
  - "Segment(A,B)"
caption: "نمودار هندسی"
explain:
  - "توضیح نمونه"
`;

  const parsed = parseGeoGebraBlock(yaml, undefined, mockYamlParser);

  assert.equal(parsed.errors.length, 0);
  assert.equal(parsed.warnings.length, 0);
  assert.ok(parsed.config);

  const cfg = parsed.config;
  assert.equal(cfg.appName, "suite");
  assert.equal(cfg.width, 900);
  assert.equal(cfg.height, 600);
  assert.equal(cfg.scale, 1.2);
  assert.equal(cfg.autoHeight, true);
  assert.equal(cfg.allowUpscale, true);
  assert.equal(cfg.scaleContainerClass, "ggb-container");
  assert.equal(cfg.borderColor, "#333333");
  assert.equal(cfg.borderRadius, 12);
  assert.equal(cfg.transparentGraphics, true);
  assert.equal(cfg.showToolBar, true);
  assert.equal(cfg.showToolBarHelp, true);
  assert.equal(cfg.customToolBar, "0 | 1 2");
  assert.equal(cfg.customToolbox, "pen,line");
  assert.equal(cfg.showAlgebraInput, true);
  assert.equal(cfg.algebraInputPosition, "top");
  assert.equal(cfg.allowStyleBar, true);
  assert.equal(cfg.enableUndoRedo, true);
  assert.equal(cfg.showMenuBar, true);
  assert.equal(cfg.showZoomButtons, true);
  assert.equal(cfg.showFullscreenButton, true);
  assert.equal(cfg.showAnimationButton, true);
  assert.equal(cfg.showResetIcon, true);
  assert.equal(cfg.showSuggestionButtons, true);
  assert.equal(cfg.showStartTooltip, false);
  assert.equal(cfg.playButton, false);
  assert.equal(cfg.buttonRounding, 0.4);
  assert.equal(cfg.buttonShadows, true);
  assert.equal(cfg.buttonBorderColor, "#ffffff");
  assert.equal(cfg.enableRightClick, true);
  assert.equal(cfg.enableLabelDrags, true);
  assert.equal(cfg.enableShiftDragZoom, true);
  assert.equal(cfg.capturingThreshold, 4);
  assert.equal(cfg.preventFocus, true);
  assert.equal(cfg.enableFileFeatures, true);
  assert.equal(cfg.disableJavaScript, false);
  assert.equal(cfg.language, "fa");
  assert.equal(cfg.country, "IR");
  assert.equal(cfg.rounding, "5s");
  assert.equal(cfg.randomSeed, 123);
  assert.equal(cfg.randomize, true);
  assert.equal(cfg.errorDialogsActive, true);
  assert.equal(cfg.showLogging, false);
  assert.equal(cfg.useBrowserForJS, false);
  assert.equal(cfg.enable3d, true);
  assert.equal(cfg.enableCAS, true);
  assert.equal(cfg.loadingText, "در حال بارگذاری جئوجبرا...");
  assert.deepEqual(cfg.commands, ["A=(0,0)", "B=(3,4)", "Segment(A,B)"]);
  assert.equal(cfg.caption, "نمودار هندسی");
  assert.deepEqual(cfg.explain, ["توضیح نمونه"]);
});

test("parseGeoGebraBlock emits warnings for unknown fields and errors for invalid values", () => {
  const yaml = `
appName: invalid-app
width: -50
unknownCustomParam: 123
borderColor: "not-a-color-!!!"
commands:
  - "f(x)=x"
`;

  const parsed = parseGeoGebraBlock(yaml, undefined, mockYamlParser);
  assert.ok(parsed.errors.length >= 2); // invalid appName, negative width, invalid color
  assert.ok(parsed.warnings.some((w) => w.includes("unknownCustomParam")));
});
