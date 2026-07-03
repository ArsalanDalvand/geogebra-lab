# GeoGebra Lab

[中文说明](README.zh-CN.md)

GeoGebra Lab is an Obsidian plugin for embedding interactive GeoGebra diagrams from safe, structured Markdown code blocks.

It is designed for notes, teaching material, and AI Agent workflows: Agents generate YAML, while the plugin owns the iframe and GeoGebra JavaScript integration.

## Current Status

This is an MVP implementation.

- GeoGebra is loaded online from `https://www.geogebra.org/apps/deployggb.js`.
- Raw JavaScript inside `geogebra` code blocks is not supported.
- Agents should generate YAML structures, not iframe HTML.
- If the network cannot access GeoGebra, diagrams may fail to load.
- If Obsidian CSP blocks GeoGebra CSS or related resources in `srcdoc` mode, use Local viewer server or External viewer mode.
- Offline GeoGebra bundles are intentionally not included in this version.

## Installation

1. Run `npm install`.
2. Run `npm run build`.
3. Copy the plugin folder into your vault:

```text
YourVault/.obsidian/plugins/geogebra-lab/
```

4. Ensure these files are present in that folder:

```text
main.js
manifest.json
styles.css
```

5. Open Obsidian settings.
6. Disable Safe mode if needed.
7. Enable the `GeoGebra Lab` community plugin.

For development, run:

```bash
npm run dev
```

## Render Modes And CSP

Obsidian's Content Security Policy can block CSS or related resources that GeoGebra loads dynamically inside a `srcdoc` iframe. When that happens, the GeoGebra script may load but the applet can appear broken or unstyled.

GeoGebra Lab supports three render modes:

| Mode | Use case |
| --- | --- |
| `Local viewer server` | Recommended for Obsidian desktop. Starts a temporary `127.0.0.1` viewer server automatically, with no deployment needed. |
| `External viewer iframe` | Recommended for mobile, synced vaults, teams, or users who prefer a stable hosted viewer URL. |
| `srcdoc iframe` | Simplest fallback. Works only when Obsidian CSP allows the resources GeoGebra needs. |

The Markdown syntax stays exactly the same in all modes.

### Local Viewer Server

Local viewer server mode starts an HTTP server bound to `127.0.0.1` on a random free port when a GeoGebra block is rendered.

The iframe points to a URL like:

```text
http://127.0.0.1:39217/viewer#encoded-config
```

This keeps GeoGebra out of Obsidian's `srcdoc` CSP path without requiring you to deploy anything.

Notes:

- Local viewer server mode is desktop-only.
- The server is bound to `127.0.0.1`, not a public network interface.
- The server stops when the plugin unloads.
- If the local server cannot start, the error is shown in the note.

### External Viewer With Vercel

External viewer mode loads GeoGebra from a standalone HTTPS page instead of an Obsidian `srcdoc` document. It is useful when local server mode is unavailable or when you want the same viewer URL across devices.

You can use the hosted viewer maintained by this project:

```text
https://geobsidian.vercel.app/
```

Set `External viewer URL` to the URL above if you do not want to deploy your own viewer.

You can deploy this file to Vercel:

```text
viewer/index.html
```

The simplest Vercel flow:

1. Create a new Vercel project.
2. Use the `viewer/` directory as the project root.
3. Deploy it as a static site.
4. Copy the deployed HTTPS URL.

After deployment, copy the page URL, for example:

```text
https://your-domain.example/geogebra-lab-viewer/
```

Then in Obsidian:

1. Open GeoGebra Lab settings.
2. Set `Render mode` to `External viewer iframe`.
3. Set `External viewer URL` to the deployed viewer URL.
4. Reload the note.

The plugin sends the GeoGebra block config to the viewer through the iframe URL hash. URL hashes are not sent to the hosting server in normal browser requests, but they are visible in the local browser/webview.

Other hosting options include GitHub Pages, Cloudflare Pages, Netlify, or an internal HTTPS static server.

## Usage

Write a fenced Markdown code block using the `geogebra` language:

````markdown
```geogebra
appName: graphing
width: 800
height: 500
showToolBar: false
showAlgebraInput: true
showMenuBar: false

commands:
  - "f(x)=e^x"
  - "g(x)=1+x"
  - "A=(0,1)"

caption: "Exponential function and linear approximation near 0."
explain:
  - "This helps explain why e^x is close to 1+x near x=0."
  - "It also supports lim_{x->0}(e^x-1)/x=1."
```
````

The plugin renders the block as a sandboxed iframe containing a GeoGebra applet.

## Code Block Syntax

```yaml
appName: graphing
width: 800
height: 500
showToolBar: false
showAlgebraInput: true
showMenuBar: false
materialId:
filename:
commands:
  - "f(x)=e^x"
caption:
explain:
  - ""
```

## Fields

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `appName` | `graphing`, `geometry`, `3d`, `classic` | `graphing` | GeoGebra app type. |
| `width` | number | `800` | Requested applet width. The iframe will not exceed the note container width. |
| `height` | number | `500` | Applet height in pixels. |
| `showToolBar` | boolean | `false` | Shows the GeoGebra toolbar. |
| `showAlgebraInput` | boolean | `true` | Shows the algebra input. |
| `showMenuBar` | boolean | `false` | Shows the menu bar. |
| `materialId` | string | none | Optional GeoGebra material ID. |
| `filename` | string | none | Optional `.ggb` filename or URL accepted by GeoGebra. Obsidian attachment resolution is not yet implemented. |
| `commands` | string array | `[]` | GeoGebra commands executed after the applet loads. |
| `caption` | string | none | Caption shown under the iframe. |
| `explain` | string array | `[]` | Teaching notes shown under the caption. |

Unknown fields are ignored with a warning.

## Examples

### Exponential Approximation

````markdown
```geogebra
appName: graphing
width: 800
height: 500
commands:
  - "f(x)=e^x"
  - "g(x)=1+x"
caption: "Compare e^x and 1+x near x=0."
explain:
  - "This helps explain why lim_{x->0}(e^x-1)/x=1."
```
````

### Geometry

````markdown
```geogebra
appName: geometry
width: 800
height: 500
showToolBar: true
commands:
  - "A=(0,0)"
  - "B=(4,0)"
  - "C=(2,3)"
  - "Polygon(A,B,C)"
caption: "Dynamic triangle example."
explain:
  - "Drag points A, B, C to change the triangle."
```
````

More examples are in the `examples/` folder.

## Commands

GeoGebra Lab adds two command palette commands:

- `Insert GeoGebra graph block`
- `Insert GeoGebra geometry block`

Both insert editable Markdown templates at the current cursor position.

## Settings

The settings tab supports:

- render mode;
- default app type;
- default width and height;
- default toolbar, algebra input, and menu bar visibility;
- GeoGebra script URL;
- external viewer URL;
- caption rendering;
- explanation rendering.

## Agent Usage

AI Agents inside Obsidian should create and edit only structured `geogebra` YAML blocks.

Agents should not output:

- raw iframe HTML;
- raw JavaScript;
- inline `<script>` tags;
- custom GeoGebra loader code.

The plugin is the renderer. The Agent's job is only to write safe Markdown like this:

````markdown
```geogebra
appName: graphing
width: 800
height: 500
commands:
  - "f(x)=e^x"
  - "g(x)=1+x"
caption: "Compare e^x with its linear approximation near x=0."
explain:
  - "This diagram helps explain why e^x is close to 1+x near x=0."
```
````

When revising an existing diagram, the Agent should preserve the fenced code block and update only the YAML fields needed for the requested change.

Recommended instructions for an Obsidian Agent:

```text
When creating GeoGebra diagrams in this vault, use the GeoGebra Lab plugin syntax.

Always output a complete Markdown fenced code block using ```geogebra.
Inside the block, write YAML only.
Do not output iframe HTML, script tags, JavaScript, or custom loader code.

Use these fields when needed:
- appName: graphing | geometry | 3d | classic
- width: number
- height: number
- showToolBar: true | false
- showAlgebraInput: true | false
- showMenuBar: true | false
- materialId: optional GeoGebra material ID
- filename: optional GeoGebra filename or URL
- commands: array of GeoGebra command strings
- caption: short description
- explain: array of short teaching notes

Prefer appName: graphing for functions, limits, derivatives, integrals, and inverse functions.
Prefer appName: geometry for points, segments, polygons, circles, and constructions.
Keep commands simple and editable.
Use object names such as A, B, C, f, g, h.
If a GeoGebra command may be invalid, say it needs review instead of inventing JavaScript.
```

Example user request to an Agent:

```text
Create a `geogebra` code block for GeoGebra Lab that shows y=x^2, its tangent line at x=1, and a point of tangency. Use graphing mode and include a short explanation.
```

Expected Agent output:

````markdown
```geogebra
appName: graphing
width: 800
height: 500
commands:
  - "f(x)=x^2"
  - "A=(1,1)"
  - "g(x)=2x-1"
caption: "Tangent line to y=x^2 at x=1."
explain:
  - "The derivative of x^2 at x=1 is 2, so the tangent line has slope 2."
```
````

The included Agent Skill at `skills/geogebra-lab/SKILL.md` documents the recommended syntax and rules.

## Safety

GeoGebra Lab does not execute arbitrary JavaScript from Markdown code blocks.

The plugin:

- parses YAML;
- validates known fields;
- passes `commands` as strings to GeoGebra's `api.evalCommand`;
- renders GeoGebra in `srcdoc`, local viewer server, or external viewer mode;
- keeps the external GeoGebra script URL in plugin settings;
- keeps the external viewer URL in plugin settings;
- reports parser and runtime errors in the Obsidian page.

The iframe uses:

```html
sandbox="allow-scripts allow-same-origin"
```

GeoGebra needs script execution to run. `allow-same-origin` may be required for GeoGebra internals, so this is still an iframe isolation boundary but not a complete browser security wall.

For Local viewer server and External viewer mode, GeoGebra Lab validates `postMessage` errors by both iframe window and viewer origin before displaying them in the note.

## Known Limitations

- Online access to GeoGebra is required.
- Offline GeoGebra bundles are not included.
- Local viewer server mode is desktop-only.
- External viewer mode requires an HTTP or HTTPS viewer URL. You can use `https://geobsidian.vercel.app/` or host `viewer/index.html` yourself.
- Large constructions may make the iframe URL hash long in Local viewer server or External viewer mode.
- `.ggb` attachment path resolution is not implemented.
- Command validity is checked only at runtime by GeoGebra.
- `api.evalCommand` may not report every invalid command consistently.
- The plugin does not yet save or restore edited applet state.

## Roadmap

- Support saving current applet state as base64.
- Support `getXML()` and `setXML()`.
- Support `.ggb` file attachment loading.
- Support local offline GeoGebra bundles.
- Support PNG and SVG export.
- Support postMessage APIs for richer iframe communication.
- Add a button to copy the current construction.
- Let Agents generate GeoGebra blocks from selected text.
- Add code block syntax validation.
- Add more teaching templates.
