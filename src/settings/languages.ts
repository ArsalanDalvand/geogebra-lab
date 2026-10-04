export interface GeoGebraLanguageOption {
  code: string;
  label: string;
}

export const CURATED_LANGUAGES: readonly GeoGebraLanguageOption[] = [
  { code: "", label: "System / Browser Default (پیش‌فرض مرورگر یا سیستم)" },
  { code: "en", label: "English (US)" },
  { code: "fa", label: "فارسی - Persian (fa)" },
  { code: "de", label: "Deutsch - German (de)" },
  { code: "fr", label: "Français - French (fr)" },
  { code: "es", label: "Español - Spanish (es)" },
  { code: "ar", label: "العربية - Arabic (ar)" },
  { code: "zh-CN", label: "简体中文 - Simplified Chinese (zh-CN)" },
  { code: "zh-TW", label: "繁體中文 - Traditional Chinese (zh-TW)" },
  { code: "ru", label: "Русский - Russian (ru)" },
  { code: "ja", label: "日本語 - Japanese (ja)" },
  { code: "it", label: "Italiano - Italian (it)" },
  { code: "tr", label: "Türkçe - Turkish (tr)" }
] as const;

const CURATED_CODE_SET = new Set<string>(CURATED_LANGUAGES.map((l) => l.code));

export function normalizeLanguageCode(raw: unknown): string {
  if (typeof raw !== "string") {
    return "";
  }
  const trimmed = raw.trim();
  if (!trimmed || trimmed.toLowerCase() === "system" || trimmed.toLowerCase() === "auto") {
    return "";
  }

  // Handle common underscore region tags like fa_IR -> fa
  const match = trimmed.match(/^([a-zA-Z]{2,3})[_-]([a-zA-Z]{2,4})$/);
  if (match) {
    const lang = match[1].toLowerCase();
    const region = match[2].toUpperCase();
    if (lang === "zh") {
      return `zh-${region}`;
    }
    return lang;
  }

  return trimmed.toLowerCase();
}

export function isCuratedLanguage(code: string): boolean {
  return CURATED_CODE_SET.has(normalizeLanguageCode(code));
}

export function getLanguageOptions(): Record<string, string> {
  const options: Record<string, string> = {};
  CURATED_LANGUAGES.forEach((item) => {
    options[item.code] = item.label;
  });
  return options;
}
