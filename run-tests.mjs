import { build } from "esbuild";
import { globSync, rmSync } from "node:fs";
import { spawn } from "node:child_process";

async function main() {
  const testFiles = globSync("test/**/*.test.ts");
  if (testFiles.length === 0) {
    console.log("No test files found.");
    process.exit(0);
  }

  const outdir = ".test-dist";

  const obsidianMockPlugin = {
    name: "obsidian-mock",
    setup(b) {
      b.onResolve({ filter: /^obsidian$/ }, (args) => ({
        path: args.path,
        namespace: "obsidian-mock"
      }));
      b.onLoad({ filter: /.*/, namespace: "obsidian-mock" }, () => ({
        contents: `
          export function parseYaml(s) { return {}; }
          export class Plugin {}
          export class MarkdownRenderChild {}
          export class PluginSettingTab {}
          export class Setting {}
          export class Notice {}
          export class TFile {}
          export const Platform = { isDesktop: true };
        `,
        loader: "js"
      }));
    }
  };

  await build({
    entryPoints: testFiles,
    bundle: true,
    platform: "node",
    format: "esm",
    outdir,
    outExtension: { ".js": ".mjs" },
    sourcemap: "inline",
    plugins: [obsidianMockPlugin],
    external: ["node:*"]
  });

  const child = spawn(process.execPath, ["--test", `${outdir}/**/*.mjs`], {
    stdio: "inherit"
  });

  child.on("exit", (code) => {
    try {
      rmSync(outdir, { recursive: true, force: true });
    } catch {}
    process.exit(code ?? 0);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
