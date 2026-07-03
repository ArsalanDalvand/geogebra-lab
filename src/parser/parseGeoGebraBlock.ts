import { parseYaml } from "obsidian";
import { DEFAULT_SETTINGS } from "../settings/settings";
import {
  GEO_GEBRA_APP_NAMES,
  GEO_GEBRA_BLOCK_FIELDS,
  GeoGebraAppName,
  GeoGebraBlockConfig,
  GeoGebraParseResult,
  GeoGebraParserDefaults
} from "./types";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function parseAppName(
  value: unknown,
  fallback: GeoGebraAppName,
  errors: string[]
): GeoGebraAppName {
  if (value === undefined || value === null || value === "") {
    return fallback;
  }

  if (typeof value === "string" && GEO_GEBRA_APP_NAMES.includes(value as GeoGebraAppName)) {
    return value as GeoGebraAppName;
  }

  errors.push(
    `Invalid appName "${String(value)}". Use one of: ${GEO_GEBRA_APP_NAMES.join(", ")}.`
  );
  return fallback;
}

function parseDimension(
  value: unknown,
  fallback: number,
  fieldName: "width" | "height",
  errors: string[]
): number {
  if (value === undefined || value === null || value === "") {
    return fallback;
  }

  const numericValue = typeof value === "number" ? value : Number(value);
  if (Number.isFinite(numericValue) && numericValue > 0) {
    return Math.round(numericValue);
  }

  errors.push(`${fieldName} must be a positive number.`);
  return fallback;
}

function parseBoolean(
  value: unknown,
  fallback: boolean,
  fieldName: string,
  errors: string[]
): boolean {
  if (value === undefined || value === null || value === "") {
    return fallback;
  }

  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    if (normalized === "true") {
      return true;
    }
    if (normalized === "false") {
      return false;
    }
  }

  errors.push(`${fieldName} must be true or false.`);
  return fallback;
}

function parseOptionalString(value: unknown, fieldName: string, errors: string[]): string | undefined {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  if (typeof value === "string") {
    return value;
  }

  errors.push(`${fieldName} must be a string.`);
  return undefined;
}

function parseCommands(value: unknown, errors: string[]): string[] {
  if (value === undefined || value === null) {
    return [];
  }

  if (!Array.isArray(value)) {
    errors.push("commands must be an array of strings.");
    return [];
  }

  const commands: string[] = [];
  value.forEach((command, index) => {
    if (typeof command === "string") {
      commands.push(command);
      return;
    }

    errors.push(`commands[${index}] must be a string.`);
  });

  return commands;
}

function parseExplain(value: unknown, errors: string[]): string[] {
  if (value === undefined || value === null) {
    return [];
  }

  if (!Array.isArray(value)) {
    errors.push("explain must be an array of strings.");
    return [];
  }

  const explain: string[] = [];
  value.forEach((item, index) => {
    if (typeof item === "string") {
      explain.push(item);
      return;
    }

    errors.push(`explain[${index}] must be a string.`);
  });

  return explain;
}

export function parseGeoGebraBlock(
  source: string,
  defaults: GeoGebraParserDefaults = DEFAULT_SETTINGS
): GeoGebraParseResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  let parsed: unknown;

  try {
    parsed = source.trim() ? parseYaml(source) : {};
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      errors: [`YAML parse error: ${message}`],
      warnings
    };
  }

  if (parsed === null || parsed === undefined) {
    parsed = {};
  }

  if (!isRecord(parsed)) {
    return {
      errors: ["GeoGebra block must contain a YAML object."],
      warnings
    };
  }

  Object.keys(parsed).forEach((key) => {
    if (!GEO_GEBRA_BLOCK_FIELDS.has(key)) {
      warnings.push(`Unknown field "${key}" was ignored.`);
    }
  });

  const config: GeoGebraBlockConfig = {
    appName: parseAppName(parsed.appName, defaults.defaultAppName, errors),
    width: parseDimension(parsed.width, defaults.defaultWidth, "width", errors),
    height: parseDimension(parsed.height, defaults.defaultHeight, "height", errors),
    showToolBar: parseBoolean(
      parsed.showToolBar,
      defaults.defaultShowToolBar,
      "showToolBar",
      errors
    ),
    showAlgebraInput: parseBoolean(
      parsed.showAlgebraInput,
      defaults.defaultShowAlgebraInput,
      "showAlgebraInput",
      errors
    ),
    showMenuBar: parseBoolean(
      parsed.showMenuBar,
      defaults.defaultShowMenuBar,
      "showMenuBar",
      errors
    ),
    materialId: parseOptionalString(parsed.materialId, "materialId", errors),
    filename: parseOptionalString(parsed.filename, "filename", errors),
    commands: parseCommands(parsed.commands, errors),
    caption: parseOptionalString(parsed.caption, "caption", errors),
    explain: parseExplain(parsed.explain, errors)
  };

  return {
    config,
    errors,
    warnings
  };
}
