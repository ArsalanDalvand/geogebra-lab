import {
  GEO_GEBRA_APP_NAMES,
  GeoGebraAppName,
  GeoGebraDetachKeyboardMode,
  GeoGebraKeyboardFocusMode
} from "./types";

export function parseAppName(
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

export function parseDimension(
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

export function parseBoolean(
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

export function parseOptionalBoolean(
  value: unknown,
  fieldName: string,
  errors: string[]
): boolean | undefined {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }
  return parseBoolean(value, false, fieldName, errors);
}

export function parseOptionalString(
  value: unknown,
  fieldName: string,
  errors: string[]
): string | undefined {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  if (typeof value === "string") {
    return value;
  }

  errors.push(`${fieldName} must be a string.`);
  return undefined;
}

export function parseOptionalNumber(
  value: unknown,
  fieldName: string,
  errors: string[],
  min?: number,
  max?: number
): number | undefined {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  const numericValue = typeof value === "number" ? value : Number(value);
  if (Number.isFinite(numericValue)) {
    if (min !== undefined && numericValue < min) {
      errors.push(`${fieldName} must be >= ${min}.`);
      return undefined;
    }
    if (max !== undefined && numericValue > max) {
      errors.push(`${fieldName} must be <= ${max}.`);
      return undefined;
    }
    return numericValue;
  }

  errors.push(`${fieldName} must be a valid number.`);
  return undefined;
}

const HEX_COLOR_REGEX = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;

export function parseColor(
  value: unknown,
  fieldName: string,
  errors: string[]
): string | undefined {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  if (typeof value === "string") {
    const trimmed = value.trim();
    if (trimmed.toLowerCase() === "transparent" || HEX_COLOR_REGEX.test(trimmed)) {
      return trimmed;
    }
  }

  errors.push(`${fieldName} must be a valid hex color (e.g. #fff, #123456) or 'transparent'.`);
  return undefined;
}

export function parseEnum<T extends string>(
  value: unknown,
  allowedValues: readonly T[],
  fieldName: string,
  errors: string[]
): T | undefined {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  if (typeof value === "string" && (allowedValues as readonly string[]).includes(value)) {
    return value as T;
  }

  errors.push(
    `Invalid ${fieldName} "${String(value)}". Use one of: ${allowedValues.join(", ")}.`
  );
  return undefined;
}

export function parseKeyboardFocusMode(
  value: unknown,
  fieldName: string,
  errors: string[]
): GeoGebraKeyboardFocusMode | undefined {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }
  if (value === "auto") {
    return "auto";
  }
  return parseBoolean(value, false, fieldName, errors);
}

export function parseDetachKeyboardMode(
  value: unknown,
  fieldName: string,
  errors: string[]
): GeoGebraDetachKeyboardMode | undefined {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }
  if (value === "auto") {
    return "auto";
  }
  return parseBoolean(value, false, fieldName, errors);
}

export function parseCommands(value: unknown, errors: string[]): string[] {
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

export function parseExplain(value: unknown, errors: string[]): string[] {
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
