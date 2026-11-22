# GeoGebra Lab

[中文说明](README.zh-CN.md)

GeoGebra Lab is an Obsidian plugin for embedding interactive GeoGebra diagrams from safe, structured Markdown code blocks.

It is designed for notes, research, teaching material, and AI Agent workflows: Agents generate YAML, while the plugin owns the iframe, sandboxing, and complete GeoGebra JavaScript integration.

## Key Features

- **Full GeoGebra API Coverage:** Over 40 official GeoGebra parameters are configurable via YAML — zero hardcoding.
- **Multiple Code Block Aliases:** Fully supports ```` ```geogebra ````, ```` ```ggb ````, ```` ```GeoGebra ````, and ```` ```GGB ````.
- **Prism YAML Syntax Highlighting:** Integrated YAML syntax highlighting for code blocks inside Obsidian's editor with clean teardown.
- **Support for All 8 Official Apps:** Graphing Calculator, Geometry, 3D Calculator, Classic, Calculator Suite, Evaluator, Scientific, and GeoGebra Notes.
- **Native Obsidian Vault Attachment Resolution:** Reference `.ggb` files directly in your vault (`filename: "model.ggb"` or `filename: "[[model.ggb]]"`). They are automatically read and embedded as base64.
- **Multi-Script Typography & Localization:** Built-in font stack (`Vazirmatn`, `Inter`, `Segoe UI`, `system-ui`) ensuring crisp rendering for Persian (Farsi), Arabic, and Latin text, plus forced language synchronization via `api.setLanguage`.
- **9 Vault Settings Categories:** Comprehensive vault defaults inherited automatically when YAML omits fields.
- **Bundled Offline GeoGebra Documentation & Agent Guide:** Over 500 official command docs, guides, and error prevention checklists included directly in `docs/geogebra/`.
- **Zero Raw JS Execution:** Safe, sandboxed rendering through `srcdoc`, local viewer server, or hosted external viewer without exposing your vault to arbitrary code execution.

## Installation

1. Clone or download this repository.
2. Install dependencies:

```bash
npm install
```

3. Build the plugin:

```bash
npm run build
```

4. Copy the plugin folder into your vault:

```text
YourVault/.obsidian/plugins/geogebra-lab/
```

5. Ensure these files are present:

```text
main.js
manifest.json
styles.css
```

6. Open Obsidian Settings -> Community plugins -> Enable **GeoGebra Lab**.

For development with hot reload:

```bash
npm run dev
```

Run tests:

```bash
npm test
```

## Render Modes And CSP

Obsidian's Content Security Policy (CSP) can restrict resources that GeoGebra loads dynamically inside a `srcdoc` iframe.

GeoGebra Lab provides three render modes:

| Mode | Use case |
| --- | --- |
| `Local viewer server` | **Recommended for Obsidian desktop.** Automatically spins up a temporary `127.0.0.1` viewer server on a random free port. Zero configuration required. |
| `External viewer iframe` | **Recommended for mobile, synced vaults, or teams.** Points to a hosted static viewer URL (e.g., `https://geobsidian.vercel.app/` or your own deployment of `viewer/index.html`). |
| `srcdoc iframe` | Lightweight fallback. Works when Obsidian's CSP permits direct loading. |

The YAML syntax stays identical across all modes.

## Code Block Syntax & Examples

Write a fenced code block using any supported alias (`geogebra`, `ggb`, `GeoGebra`, or `GGB`):

````markdown
```geogebra
appName: suite
width: 800
height: 500
language: fa
loadingText: "در حال بارگذاری هندسه پویا..."
transparentGraphics: true
showToolBar: true
showResetIcon: true
showZoomButtons: true

commands:
  - "f(x) = sin(x)"
  - "g(x) = cos(x)"
  - "P = Intersect(f, g, 1)"
  - "SetColor(f, \"#2563eb\")"
  - "SetColor(g, \"#dc2626\")"

caption: "بررسی تقاطع توابع مثلثاتی"
explain:
  - "تابع سینوس و کسینوس در نقاط پیوسته متقاطع هستند."
```
````

Or with the `ggb` alias:

````markdown
```ggb
appName: graphing
width: 800
height: 500
commands:
  - "f(x) = x^3 - 3*x"
  - "df = Derivative(f)"
  - "SetColor(df, \"red\")"
  - "SetLineStyle(df, 1)"
caption: "Function and its derivative."
```
````

### Using Local `.ggb` Vault Attachments

You can embed `.ggb` files directly from your Obsidian vault:

````markdown
```geogebra
appName: classic
filename: "physics-pendulum.ggb"
width: 800
height: 600
showResetIcon: true
caption: "شبیه‌سازی آونگ فیزیکی"
```
````

Obsidian link syntax (`filename: "[[physics-pendulum.ggb]]"`) is also fully supported. The file is read from the vault and encoded to `ggbBase64` at render time.

## Comprehensive YAML Reference (40+ Parameters)

All parameters below can be configured directly inside your code block:

### 1. App & Content Selection

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `appName` | string | `graphing` | App type: `graphing`, `geometry`, `3d`, `classic`, `suite`, `evaluator`, `scientific`, `notes`. |
| `materialId` | string | none | GeoGebra Materials ID (e.g. `m9w5xvyz`) to load directly from geogebra.org. |
| `filename` | string | none | Local `.ggb` vault file (e.g. `diagram.ggb` or `[[diagram.ggb]]`) or remote file URL. |
| `ggbBase64` | string | none | Base64-encoded string containing a complete `.ggb` construction. |
| `perspective` | string | none | Layout perspective string (e.g., `"AG"` for Algebra + Graphics, `"G"` for Graphics only, `"3D"`). |

### 2. Sizing & Layout Styling

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `width` | number | `800` | Applet width in pixels. Responsive within note container. |
| `height` | number | `500` | Applet height in pixels. |
| `scale` | number | `1` | Scaling factor for the entire applet (between `0.1` and `10`). |
| `autoHeight` | boolean | `false` | Dynamically adjust height to content if supported. |
| `allowUpscale` | boolean | `false` | Allow scaling up beyond original dimensions on high-DPI displays. |
| `scaleContainerClass` | string | none | CSS selector for container resizing. |
| `borderColor` | string | none | CSS border color (e.g., `#e0e0e0`, `transparent`). |
| `borderRadius` | number | `0` | Corner border radius in pixels. |
| `transparentGraphics` | boolean | `false` | Sets transparent background for the graphics view. |

### 3. Toolbars & Menus

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `showToolBar` | boolean | `false` | Show or hide the top toolbar. |
| `showToolBarHelp` | boolean | `false` | Show tool guidance tooltip when selecting tools. |
| `customToolBar` | string | none | Custom GeoGebra tool IDs string (e.g., `"0 | 1 501 5 19 | 2 15 45"`). |
| `customToolbox` | string | none | Custom toolbox definition. |
| `showAlgebraInput` | boolean | `true` | Show or hide the input bar. |
| `algebraInputPosition` | string | `algebra` | Position of input bar: `algebra`, `top`, or `bottom`. |
| `showMenuBar` | boolean | `false` | Show or hide the top menu bar. |
| `allowStyleBar` | boolean | `false` | Allow or restrict the quick style bar. |
| `enableUndoRedo` | boolean | `true` | Enable or disable undo/redo buttons. |

### 4. UI Controls & Buttons

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `showZoomButtons` | boolean | `false` | Show bottom-right zoom in/out controls. |
| `showFullscreenButton` | boolean | `false` | Show full-screen toggle button. |
| `showAnimationButton` | boolean | `true` | Show play/pause button for animated variables. |
| `showResetIcon` | boolean | `false` | Show reset diagram button in upper-right corner. |
| `showSuggestionButtons` | boolean | `true` | Show suggestion buttons in input views. |
| `showStartTooltip` | boolean | `false` | Show initial help tooltip on applet launch. |
| `playButton` | boolean | `false` | Show large initial play button before loading. |
| `buttonRounding` | number | none | Relative button corner rounding (`0` to `0.9`). |
| `buttonShadows` | boolean | none | Enable drop shadows on applet buttons. |
| `buttonBorderColor` | string | none | Border color for applet buttons. |

### 5. Interactivity & Security

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `enableRightClick` | boolean | `true` | Enable right-click context menu on objects. |
| `enableLabelDrags` | boolean | `true` | Allow dragging text labels in graphics view. |
| `enableShiftDragZoom` | boolean | `true` | Allow zooming and panning using Shift + drag. |
| `capturingThreshold` | number | `3` | Snapping radius in pixels for points and grid. |
| `preventFocus` | boolean | `false` | Prevent applet from taking browser focus on load. |
| `enableFileFeatures` | boolean | `false` | Allow file saving/opening within the applet. |
| `disableJavaScript` | boolean | `false` | Disables internal JavaScript execution in GeoGebra. |

### 6. Localization & Mathematics

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `language` | string | `en` | ISO language code (e.g., `fa`, `en`, `de`, `fr`, `es`). Automatically forced via `api.setLanguage`. |
| `country` | string | none | ISO country code. |
| `rounding` | string | none | Decimal or significant figure precision (e.g. `"2"`, `"5s"`). |
| `randomSeed` | number | none | Fixed seed for reproducible random numbers. |
| `randomize` | boolean | `false` | Force recalculation of random values on reload. |
| `errorDialogsActive` | boolean | `false` | Show GUI modal dialogs when mathematical errors occur. |
| `showLogging` | boolean | `false` | Print internal GeoGebra logs to browser console. |

### 7. Exam & Evaluator

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `enable3d` | boolean | `true` | Enable 3D engine in supported apps. |
| `enableCAS` | boolean | `true` | Enable Computer Algebra System engine. |
| `editorBackgroundColor` | string | none | Background color for equation editor. |
| `editorForegroundColor` | string | none | Text color for equation editor. |
| `textmode` | boolean | `false` | Text-only input mode. |
| `keyboardType` | string | `normal` | Virtual keyboard layout: `normal`, `scientific`, `notes`. |
| `showKeyboardOnFocus` | boolean / `auto` | `auto` | Show virtual on-screen keyboard when input is focused. |
| `detachKeyboard` | boolean / `auto` | `auto` | Detach virtual keyboard into a floating container. |

### 8. Commands & Presentation

| Field | Type | Default | Description |
| --- | --- | --- | --- |
| `commands` | string array | `[]` | List of GeoGebra commands executed after applet initialization. |
| `loadingText` | string | `Loading GeoGebra...` | Custom placeholder text shown while the applet is booting. |
| `caption` | string | none | Descriptive caption rendered underneath the diagram. |
| `explain` | string array | `[]` | Bulleted teaching notes or insights rendered below the caption. |

## Settings Tab (9 Configuration Categories)

In Obsidian Settings -> **GeoGebra Lab**, you can configure vault-wide defaults across 9 organized categories:

1. **General & Render Mode:** Select between `Local viewer server`, `External viewer iframe`, and `srcdoc iframe`.
2. **Default Dimensions & Scaling:** Default width, height, scale, auto-height, allow upscaling, border styling.
3. **App Selection & Content Defaults:** Default app type (`graphing`, `geometry`, `3d`, `suite`, etc.), default perspective.
4. **Toolbars, Menus & Style Bar:** Toggle toolbar, menubar, input bar, style bar, and undo/redo defaults.
5. **UI Controls & Quick Buttons:** Toggle zoom buttons, fullscreen button, reset icon, animation controls.
6. **Interactivity & Manipulation:** Default right-click, label dragging, shift-drag-zoom, snapping threshold.
7. **Localization & Mathematics:** Default language (Persian `fa`, English `en`, or custom ISO code), rounding precision, random seed.
8. **Exam & Virtual Keyboard:** Enable 3D, CAS, keyboard focus behavior, and layout.
9. **Advanced & Viewer Deployment URLs:** Custom deployment script URL and external viewer endpoint.

Any field omitted in a Markdown block automatically inherits your vault settings.

## Offline Documentation & AI Agent Integration

GeoGebra Lab bundles a complete local reference library inside `docs/geogebra/` so that users and AI agents have immediate offline access to official command specifications and error prevention rules:

- **[AI Agent Guide & Pitfalls](docs/geogebra/AGENT_GUIDE_AND_PITFALLS.md):** Deep breakdown of why agent-generated GeoGebra commands fail and how to write 100% error-free blocks.
- **[Commands Catalog](docs/geogebra/COMMANDS_CATALOG.md):** Categorized index of 500+ commands.
- **[500+ Command Reference Files](docs/geogebra/commands/):** Detailed markdown files for every single command (e.g. `Intersect.md`, `Circle.md`, `Derivative.md`, `Slider.md`, `Sphere.md`).
- **[Core Guides](docs/geogebra/guides/):** In-depth guides for Scripting, 3D Graphics, Calculus, Points, Vectors, and Animation.
- **[Web & Applet API](docs/geogebra/api/):** Reference for Applet parameters, JavaScript API methods, Colors, and Toolbar IDs.

### Agent Skill

The repository includes a ready-to-use Agent Skill in `skills/geogebra-lab/` for Claude Code, Hermes, and other LLM orchestrators:
- `skills/geogebra-lab/SKILL.md`
- `skills/geogebra-lab/references/error_prevention_guide.md`
- `skills/geogebra-lab/references/command_signatures.md`
- `skills/geogebra-lab/references/styling_reference.md`

Recommended system prompt instruction for Obsidian agents:

```text
When generating mathematical diagrams in Obsidian, use the GeoGebra Lab plugin syntax.
Output a ```geogebra or ```ggb fenced code block containing pure YAML.
Always use PascalCase English command names in `commands:` (e.g. Intersect, Midpoint, Circle, Derivative, SetColor).
Always enclose each command string in double quotes.
Do not output raw HTML, iframe tags, or JavaScript code.
```

## Security

GeoGebra Lab strictly parses YAML structures and renders the applet inside an iframe with sandbox attributes `allow-scripts allow-same-origin`. Commands are passed exclusively to GeoGebra's `api.evalCommand()` and no user-supplied JavaScript is evaluated in Obsidian's main window.
