import test from "node:test";
import assert from "node:assert/strict";
import { buildGeoGebraHTML } from "../src/renderer/buildGeoGebraHTML";
import { GeoGebraBlockConfig } from "../src/parser/types";

test("buildGeoGebraHTML renders custom loading text and serializes all applet params", () => {
  const config: GeoGebraBlockConfig = {
    appName: "suite",
    width: 800,
    height: 500,
    showToolBar: true,
    showAlgebraInput: false,
    showMenuBar: false,
    commands: ["f(x)=sin(x)"],
    explain: [],
    language: "fa",
    loadingText: "در حال بارگذاری نمودار...",
    transparentGraphics: true
  };

  const html = buildGeoGebraHTML({
    blockId: "test-block",
    config,
    geogebraScriptUrl: "https://www.geogebra.org/apps/deployggb.js"
  });

  assert.ok(html.includes("در حال بارگذاری نمودار..."));
  assert.ok(html.includes('"appName":"suite"'));
  assert.ok(html.includes('"language":"fa"'));
  assert.ok(html.includes('"transparentGraphics":true'));
  assert.ok(html.includes("https://www.geogebra.org/apps/deployggb.js"));
});
