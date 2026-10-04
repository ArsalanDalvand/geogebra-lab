export const CODE_BLOCK_ALIASES = ["geogebra", "ggb", "GeoGebra", "GGB"] as const;

export type SupportedCodeBlockAlias = (typeof CODE_BLOCK_ALIASES)[number];

const CODE_BLOCK_ALIAS_SET = new Set<string>(CODE_BLOCK_ALIASES);

export function isSupportedCodeBlockAlias(lang: string): boolean {
  return CODE_BLOCK_ALIAS_SET.has(lang);
}
