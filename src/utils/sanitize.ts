import { DEFAULT_SETTINGS } from "../settings/settings";

const HTML_SCRIPT_ESCAPE_MAP: Record<string, string> = {
  "<": "\\u003C",
  ">": "\\u003E",
  "&": "\\u0026",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};

export function safeJsonForScript(value: unknown): string {
  return JSON.stringify(value).replace(/[<>&\u2028\u2029]/g, (character) => {
    return HTML_SCRIPT_ESCAPE_MAP[character] ?? character;
  });
}

export function sanitizeScriptUrl(url: string): string {
  return sanitizeHttpUrl(url, DEFAULT_SETTINGS.geogebraScriptUrl);
}

export function sanitizeHttpUrl(url: string, fallback: string): string {
  try {
    const parsed = new URL(url);
    if (parsed.protocol === "https:" || parsed.protocol === "http:") {
      return parsed.toString();
    }
  } catch {
    return fallback;
  }

  return fallback;
}

export function getUrlOrigin(url: string): string | undefined {
  try {
    const parsed = new URL(url);
    if (parsed.protocol === "https:" || parsed.protocol === "http:") {
      return parsed.origin;
    }
  } catch {
    return undefined;
  }

  return undefined;
}
