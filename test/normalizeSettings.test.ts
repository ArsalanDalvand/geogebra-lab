import test from "node:test";
import assert from "node:assert/strict";
import { normalizeSettings } from "../src/settings/normalizeSettings";
import { DEFAULT_SETTINGS } from "../src/settings/settings";

test("normalizeSettings returns default settings when input is empty or invalid", () => {
  const resultNull = normalizeSettings(null);
  assert.deepEqual(resultNull, DEFAULT_SETTINGS);

  const resultUndefined = normalizeSettings(undefined);
  assert.deepEqual(resultUndefined, DEFAULT_SETTINGS);

  const resultEmpty = normalizeSettings({});
  assert.deepEqual(resultEmpty, DEFAULT_SETTINGS);
});

test("normalizeSettings safely normalizes valid custom values", () => {
  const custom = {
    renderMode: "srcdoc",
    defaultAppName: "suite",
    defaultWidth: 950,
    defaultHeight: 650,
    defaultScale: 1.5,
    defaultAutoHeight: true,
    defaultAllowUpscale: true,
    defaultBorderRadius: 12,
    defaultBorderColor: "#333333",
    defaultTransparentGraphics: true,
    defaultShowToolBar: true,
    defaultShowToolBarHelp: true,
    defaultCustomToolBar: "0 | 1 2",
    defaultShowAlgebraInput: false,
    defaultAlgebraInputPosition: "top",
    defaultShowMenuBar: true,
    defaultAllowStyleBar: true,
    defaultEnableUndoRedo: false,
    defaultShowZoomButtons: true,
    defaultShowFullscreenButton: true,
    defaultShowResetIcon: true,
    defaultEnableRightClick: false,
    defaultEnableShiftDragZoom: false,
    defaultLanguage: "fa",
    defaultLoadingText: "در حال بارگذاری...",
    defaultEnable3d: true,
    defaultEnableCAS: false,
    defaultKeyboardType: "scientific"
  };

  const normalized = normalizeSettings(custom);
  assert.equal(normalized.renderMode, "srcdoc");
  assert.equal(normalized.defaultAppName, "suite");
  assert.equal(normalized.defaultWidth, 950);
  assert.equal(normalized.defaultHeight, 650);
  assert.equal(normalized.defaultScale, 1.5);
  assert.equal(normalized.defaultAutoHeight, true);
  assert.equal(normalized.defaultAllowUpscale, true);
  assert.equal(normalized.defaultBorderRadius, 12);
  assert.equal(normalized.defaultBorderColor, "#333333");
  assert.equal(normalized.defaultTransparentGraphics, true);
  assert.equal(normalized.defaultShowToolBar, true);
  assert.equal(normalized.defaultShowToolBarHelp, true);
  assert.equal(normalized.defaultCustomToolBar, "0 | 1 2");
  assert.equal(normalized.defaultShowAlgebraInput, false);
  assert.equal(normalized.defaultAlgebraInputPosition, "top");
  assert.equal(normalized.defaultShowMenuBar, true);
  assert.equal(normalized.defaultAllowStyleBar, true);
  assert.equal(normalized.defaultEnableUndoRedo, false);
  assert.equal(normalized.defaultShowZoomButtons, true);
  assert.equal(normalized.defaultShowFullscreenButton, true);
  assert.equal(normalized.defaultShowResetIcon, true);
  assert.equal(normalized.defaultEnableRightClick, false);
  assert.equal(normalized.defaultEnableShiftDragZoom, false);
  assert.equal(normalized.defaultLanguage, "fa");
  assert.equal(normalized.defaultLoadingText, "در حال بارگذاری...");
  assert.equal(normalized.defaultEnable3d, true);
  assert.equal(normalized.defaultEnableCAS, false);
  assert.equal(normalized.defaultKeyboardType, "scientific");
});

test("normalizeSettings safely falls back on invalid values", () => {
  const badData = {
    renderMode: "invalid-mode",
    defaultAppName: "non-existent-app",
    defaultWidth: -100,
    defaultHeight: 0,
    defaultScale: -5,
    defaultAlgebraInputPosition: "invalid-pos",
    defaultKeyboardType: "unknown-type"
  };

  const normalized = normalizeSettings(badData);
  assert.equal(normalized.renderMode, DEFAULT_SETTINGS.renderMode);
  assert.equal(normalized.defaultAppName, DEFAULT_SETTINGS.defaultAppName);
  assert.equal(normalized.defaultWidth, DEFAULT_SETTINGS.defaultWidth);
  assert.equal(normalized.defaultHeight, DEFAULT_SETTINGS.defaultHeight);
  assert.equal(normalized.defaultScale, DEFAULT_SETTINGS.defaultScale);
  assert.equal(normalized.defaultAlgebraInputPosition, DEFAULT_SETTINGS.defaultAlgebraInputPosition);
  assert.equal(normalized.defaultKeyboardType, DEFAULT_SETTINGS.defaultKeyboardType);
});
