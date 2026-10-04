import test from "node:test";
import assert from "node:assert/strict";
import { CODE_BLOCK_ALIASES, isSupportedCodeBlockAlias } from "../src/editor/codeBlockLanguages";

test("CODE_BLOCK_ALIASES contains all four required aliases", () => {
  assert.ok(CODE_BLOCK_ALIASES.includes("geogebra"));
  assert.ok(CODE_BLOCK_ALIASES.includes("ggb"));
  assert.ok(CODE_BLOCK_ALIASES.includes("GeoGebra"));
  assert.ok(CODE_BLOCK_ALIASES.includes("GGB"));
});

test("isSupportedCodeBlockAlias correctly identifies aliases", () => {
  assert.equal(isSupportedCodeBlockAlias("geogebra"), true);
  assert.equal(isSupportedCodeBlockAlias("ggb"), true);
  assert.equal(isSupportedCodeBlockAlias("GeoGebra"), true);
  assert.equal(isSupportedCodeBlockAlias("GGB"), true);
  assert.equal(isSupportedCodeBlockAlias("python"), false);
  assert.equal(isSupportedCodeBlockAlias(""), false);
});
