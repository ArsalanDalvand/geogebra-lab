# GeoGebra Lab Testing Guide

This guide explains how to manually test the MVP inside Obsidian.

## 1. Build

Install dependencies:

```bash
npm install
```

Build the plugin:

```bash
npm run build
```

For development builds:

```bash
npm run dev
```

Expected output:

```text
main.js
manifest.json
styles.css
```

## 2. Manual Installation

Create this folder in a test vault:

```text
TestVault/.obsidian/plugins/geogebra-lab/
```

Copy these files into it:

```text
main.js
manifest.json
styles.css
```

Restart Obsidian or reload plugins, then enable `GeoGebra Lab` in Community plugins.

## 3. Basic Rendering Test

Create a note containing:

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

Expected:

- A GeoGebra iframe appears.
- The curves `e^x` and `1+x` appear.
- The caption appears below the iframe.
- The explanation list appears below the caption.

Test in both Reading mode and Live Preview.

## 4. Multiple Blocks Test

Create a note with two or more `geogebra` blocks.

Expected:

- Each block renders its own iframe.
- Changing or reloading one block does not break the others.
- Runtime errors are shown under the block that caused them.

## 5. YAML Error Test

Use invalid YAML:

````markdown
```geogebra
appName: graphing
commands:
  - "f(x)=x"
  - bad: yaml: value
```
````

Expected:

- An error is shown in the Obsidian page.
- The error is not only logged to the console.

## 6. Invalid Field Test

Use invalid values:

````markdown
```geogebra
appName: spreadsheet
width: wide
height: -1
commands: "f(x)=x"
unknownField: true
```
````

Expected:

- Invalid `appName`, `width`, `height`, and `commands` are reported.
- `unknownField` is shown as a warning.
- The plugin does not crash.

## 7. Command Failure Test

Use an invalid GeoGebra command:

````markdown
```geogebra
appName: graphing
width: 800
height: 500
commands:
  - "ThisCommandShouldFail("
caption: "Invalid command test."
```
````

Expected:

- The iframe loads.
- A command failure message appears in the Obsidian page.
- The iframe console also logs the error.

## 8. Network Failure Test

Open GeoGebra Lab settings and temporarily set the GeoGebra script URL to an invalid HTTPS URL.

Expected:

- The iframe displays no applet.
- The Obsidian page shows a script load failure message.

Restore the default URL afterward:

```text
https://www.geogebra.org/apps/deployggb.js
```

## 9. Local Viewer Server CSP Test

Use this test when Obsidian CSP blocks GeoGebra CSS or related resources in `srcdoc` mode on desktop.

In GeoGebra Lab settings:

1. Set `Render mode` to `Local viewer server`.
2. Open a note with a valid `geogebra` block.

Expected:

- The iframe loads from a `http://127.0.0.1:<port>/viewer` URL.
- GeoGebra renders with its expected CSS.
- Commands execute after the applet loads.
- Runtime errors appear in the Obsidian page.

Mobile note:

- Local viewer server mode is desktop-only.
- On mobile, use `srcdoc iframe` or `External viewer iframe`.

## 10. External Viewer CSP Test

Use this test when Obsidian CSP blocks GeoGebra CSS or related resources in `srcdoc` mode.

Host this file on an HTTPS static site:

```text
viewer/index.html
```

Vercel test:

1. Create a Vercel project.
2. Use the `viewer/` directory as the project root.
3. Deploy it as a static site.
4. Copy the deployed HTTPS URL.

Then in GeoGebra Lab settings:

1. Set `Render mode` to `External viewer iframe`.
2. Set `External viewer URL` to the hosted viewer page.
3. Open a note with a valid `geogebra` block.

Expected:

- The iframe loads the external viewer page.
- GeoGebra renders with its expected CSS.
- Commands execute after the applet loads.
- Runtime errors appear in the Obsidian page.

Invalid URL test:

1. Keep `Render mode` set to `External viewer iframe`.
2. Clear `External viewer URL`.
3. Reload a note with a `geogebra` block.

Expected:

- The Obsidian page shows an error explaining that a valid viewer URL is required.

Restore `Render mode` to `srcdoc iframe` if you do not want to keep using the external viewer.

## 11. Command Palette Test

Run these Obsidian commands:

- `Insert GeoGebra graph block`
- `Insert GeoGebra geometry block`

Expected:

- Each command inserts a complete fenced `geogebra` block at the cursor.
- The inserted block renders after switching to Reading mode or Live Preview rendering.

## 12. Example Files

Copy files from `examples/` into a test vault note folder and open them in Obsidian.

Expected:

- `exponential.md` renders an exponential comparison.
- `inverse-functions.md` renders inverse functions.
- `quadratic.md` renders a vertex and symmetry example.
- `triangle-geometry.md` renders an editable triangle.
- `material-id.md` renders after a valid material ID is provided.

## 13. Safety Checks

Confirm that:

- Raw JavaScript in a `geogebra` block is not evaluated as JavaScript.
- The plugin renders GeoGebra inside an iframe.
- Local viewer server mode binds to `127.0.0.1`.
- Local viewer server mode accepts error messages only from the local viewer origin.
- External viewer mode accepts error messages only from the configured viewer origin.
- The original Markdown content is not modified by rendering.
- No offline GeoGebra bundle is downloaded automatically.
