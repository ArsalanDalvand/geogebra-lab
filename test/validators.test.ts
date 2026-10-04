import test from "node:test";
import assert from "node:assert/strict";
import {
  parseAppName,
  parseDimension,
  parseBoolean,
  parseOptionalString,
  parseOptionalNumber,
  parseColor,
  parseEnum,
  parseKeyboardFocusMode,
  parseDetachKeyboardMode,
  parseCommands,
  parseExplain
} from "../src/parser/validators";

test("parseAppName accepts all official GeoGebra apps", () => {
  const errors: string[] = [];
  assert.equal(parseAppName("suite", "classic", errors), "suite");
  assert.equal(parseAppName("evaluator", "classic", errors), "evaluator");
  assert.equal(parseAppName("scientific", "classic", errors), "scientific");
  assert.equal(parseAppName("notes", "classic", errors), "notes");
  assert.equal(parseAppName("graphing", "classic", errors), "graphing");
  assert.equal(parseAppName("geometry", "classic", errors), "geometry");
  assert.equal(parseAppName("3d", "classic", errors), "3d");
  assert.equal(parseAppName("classic", "graphing", errors), "classic");
  assert.equal(errors.length, 0);

  // Fallback on invalid
  assert.equal(parseAppName("invalid-app", "graphing", errors), "graphing");
  assert.equal(errors.length, 1);
});

test("parseDimension validates positive numbers", () => {
  const errors: string[] = [];
  assert.equal(parseDimension(800, 500, "width", errors), 800);
  assert.equal(parseDimension("1024", 500, "width", errors), 1024);
  assert.equal(errors.length, 0);

  assert.equal(parseDimension(-10, 500, "width", errors), 500);
  assert.equal(parseDimension("abc", 500, "width", errors), 500);
  assert.equal(errors.length, 2);
});

test("parseBoolean handles boolean and case-insensitive strings", () => {
  const errors: string[] = [];
  assert.equal(parseBoolean(true, false, "field", errors), true);
  assert.equal(parseBoolean(false, true, "field", errors), false);
  assert.equal(parseBoolean("true", false, "field", errors), true);
  assert.equal(parseBoolean("FALSE", true, "field", errors), false);
  assert.equal(errors.length, 0);

  assert.equal(parseBoolean("not-bool", false, "field", errors), false);
  assert.equal(errors.length, 1);
});

test("parseOptionalNumber validates numbers and bounds", () => {
  const errors: string[] = [];
  assert.equal(parseOptionalNumber(1.5, "scale", errors), 1.5);
  assert.equal(parseOptionalNumber("2.5", "scale", errors), 2.5);
  assert.equal(errors.length, 0);

  // Test min and max
  assert.equal(parseOptionalNumber(0.5, "buttonRounding", errors, 0, 0.9), 0.5);
  assert.equal(errors.length, 0);

  parseOptionalNumber(1.5, "buttonRounding", errors, 0, 0.9);
  assert.equal(errors.length, 1);
});

test("parseColor validates hex and transparent color strings", () => {
  const errors: string[] = [];
  assert.equal(parseColor("#fff", "borderColor", errors), "#fff");
  assert.equal(parseColor("#123456", "borderColor", errors), "#123456");
  assert.equal(parseColor("#12345678", "borderColor", errors), "#12345678");
  assert.equal(parseColor("transparent", "borderColor", errors), "transparent");
  assert.equal(errors.length, 0);

  parseColor("invalid-color-injection; <script>", "borderColor", errors);
  assert.equal(errors.length, 1);
});

test("parseEnum validates against allowed set", () => {
  const errors: string[] = [];
  const allowed = ["top", "bottom", "algebra"] as const;
  assert.equal(parseEnum("top", allowed, "algebraInputPosition", errors), "top");
  assert.equal(errors.length, 0);

  parseEnum("middle", allowed, "algebraInputPosition", errors);
  assert.equal(errors.length, 1);
});

test("parseKeyboardFocusMode and parseDetachKeyboardMode accept boolean or auto", () => {
  const errors: string[] = [];
  assert.equal(parseKeyboardFocusMode(true, "showKeyboardOnFocus", errors), true);
  assert.equal(parseKeyboardFocusMode(false, "showKeyboardOnFocus", errors), false);
  assert.equal(parseKeyboardFocusMode("auto", "showKeyboardOnFocus", errors), "auto");
  assert.equal(errors.length, 0);

  assert.equal(parseDetachKeyboardMode("auto", "detachKeyboard", errors), "auto");
  assert.equal(parseDetachKeyboardMode(false, "detachKeyboard", errors), false);
  assert.equal(errors.length, 0);

  parseKeyboardFocusMode("invalid", "showKeyboardOnFocus", errors);
  assert.equal(errors.length, 1);
});

test("parseCommands and parseExplain validate arrays", () => {
  const errors: string[] = [];
  assert.deepEqual(parseCommands(["f(x)=x", "g(x)=2x"], errors), ["f(x)=x", "g(x)=2x"]);
  assert.deepEqual(parseExplain(["Explain note 1"], errors), ["Explain note 1"]);
  assert.equal(errors.length, 0);

  parseCommands("not-an-array", errors);
  assert.equal(errors.length, 1);
});
