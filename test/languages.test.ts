import test from "node:test";
import assert from "node:assert/strict";
import {
  CURATED_LANGUAGES,
  getLanguageOptions,
  isCuratedLanguage,
  normalizeLanguageCode
} from "../src/settings/languages";

test("CURATED_LANGUAGES includes English, Persian, and System Default", () => {
  assert.ok(CURATED_LANGUAGES.some((item) => item.code === ""));
  assert.ok(CURATED_LANGUAGES.some((item) => item.code === "en"));
  assert.ok(CURATED_LANGUAGES.some((item) => item.code === "fa"));
});

test("normalizeLanguageCode trims and normalizes language strings", () => {
  assert.equal(normalizeLanguageCode(""), "");
  assert.equal(normalizeLanguageCode("  EN  "), "en");
  assert.equal(normalizeLanguageCode("fa_IR"), "fa");
  assert.equal(normalizeLanguageCode("FA"), "fa");
  assert.equal(normalizeLanguageCode("zh-CN"), "zh-CN");
  assert.equal(normalizeLanguageCode("zh-TW"), "zh-TW");
  assert.equal(normalizeLanguageCode("system"), "");
});

test("isCuratedLanguage validates against supported options", () => {
  assert.equal(isCuratedLanguage("en"), true);
  assert.equal(isCuratedLanguage("fa"), true);
  assert.equal(isCuratedLanguage("de"), true);
  assert.equal(isCuratedLanguage("xyz_unknown"), false);
});

test("getLanguageOptions returns key-value mapping for dropdowns", () => {
  const options = getLanguageOptions();
  assert.ok(typeof options[""] === "string");
  assert.ok(typeof options["en"] === "string");
  assert.ok(typeof options["fa"] === "string");
  assert.ok(options["fa"].includes("فارسی"));
});
