import test from "node:test";
import assert from "node:assert/strict";
import { parseGeoGebraBlock } from "../src/parser/parseGeoGebraBlock";
import { DEFAULT_SETTINGS } from "../src/settings/settings";

function dummyYaml(source: string): unknown {
  const result: Record<string, unknown> = {};
  source.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || trimmed.startsWith("-")) return;
    const colonIndex = trimmed.indexOf(":");
    if (colonIndex > 0) {
      const key = trimmed.slice(0, colonIndex).trim();
      let value: unknown = trimmed.slice(colonIndex + 1).trim();
      if (value === "true") value = true;
      else if (value === "false") value = false;
      else if (/^\d+$/.test(value as string)) value = parseInt(value as string, 10);
      else if (typeof value === "string" && (value.startsWith('"') || value.startsWith("'"))) {
        value = (value as string).slice(1, -1);
      }
      result[key] = value;
    }
  });
  return result;
}

test("parseGeoGebraBlock inherits custom defaults when YAML omits fields", () => {
  const customDefaults = {
    ...DEFAULT_SETTINGS,
    defaultLanguage: "fa",
    defaultLoadingText: "بارگذاری نمودار...",
    defaultTransparentGraphics: true,
    defaultShowResetIcon: true,
    defaultEnableRightClick: false
  };

  const yaml = `
appName: geometry
width: 600
height: 400
`;

  const parsed = parseGeoGebraBlock(yaml, customDefaults, dummyYaml);
  assert.equal(parsed.errors.length, 0);
  assert.ok(parsed.config);
  assert.equal(parsed.config.appName, "geometry");
  assert.equal(parsed.config.width, 600);
  assert.equal(parsed.config.height, 400);
  assert.equal(parsed.config.language, "fa");
  assert.equal(parsed.config.loadingText, "بارگذاری نمودار...");
  assert.equal(parsed.config.transparentGraphics, true);
  assert.equal(parsed.config.showResetIcon, true);
  assert.equal(parsed.config.enableRightClick, false);
});

test("parseGeoGebraBlock overrides defaults with explicit YAML values", () => {
  const customDefaults = {
    ...DEFAULT_SETTINGS,
    defaultLanguage: "fa",
    defaultLoadingText: "بارگذاری نمودار...",
    defaultTransparentGraphics: true
  };

  const yaml = `
appName: 3d
language: "en"
loadingText: "Custom loading..."
transparentGraphics: false
`;

  const parsed = parseGeoGebraBlock(yaml, customDefaults, dummyYaml);
  assert.equal(parsed.errors.length, 0);
  assert.ok(parsed.config);
  assert.equal(parsed.config.appName, "3d");
  assert.equal(parsed.config.language, "en");
  assert.equal(parsed.config.loadingText, "Custom loading...");
  assert.equal(parsed.config.transparentGraphics, false);
});
