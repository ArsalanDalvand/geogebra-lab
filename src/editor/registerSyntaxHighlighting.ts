import { CODE_BLOCK_ALIASES } from "./codeBlockLanguages";

interface PrismNamespace {
  languages: Record<string, unknown>;
}

declare global {
  interface Window {
    Prism?: PrismNamespace;
  }
}

export function registerSyntaxHighlighting(): () => void {
  try {
    const prism = window.Prism;
    const addedAliases: string[] = [];
    if (prism && prism.languages && prism.languages.yaml) {
      CODE_BLOCK_ALIASES.forEach((alias) => {
        if (!prism.languages[alias]) {
          prism.languages[alias] = prism.languages.yaml;
          addedAliases.push(alias);
        }
      });
    }

    return () => {
      try {
        const p = window.Prism;
        if (p && p.languages) {
          addedAliases.forEach((alias) => {
            if (p.languages[alias] === p.languages.yaml) {
              delete p.languages[alias];
            }
          });
        }
      } catch {
        // Safe no-op
      }
    };
  } catch {
    return () => {
      // Safe no-op
    };
  }
}
