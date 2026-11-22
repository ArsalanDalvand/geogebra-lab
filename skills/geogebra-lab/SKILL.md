---
name: geogebra-lab
description: Use this skill when creating, revising, validating, or embedding interactive GeoGebra diagrams in Obsidian. Contains strict command syntax rules, visual styling, multi-app selection, and error prevention guidelines.
---

# GeoGebra Lab Skill

## Purpose

This skill guides AI agents in generating safe, structured, and 100% error-free GeoGebra code blocks for Obsidian notes using the **GeoGebra Lab** plugin.

## Core Principles

1. **Structured YAML Only:** Agents must output pure YAML inside fenced code blocks. Never output raw iframe HTML, `<script>` tags, or inline JavaScript.
2. **Supported Language Aliases:** The plugin recognizes four code block tags:
   - ```` ```geogebra ````
   - ```` ```ggb ````
   - ```` ```GeoGebra ````
   - ```` ```GGB ````
3. **Execution Responsibility:** The GeoGebra Lab plugin manages iframe isolation, CSP workarounds (srcdoc, local server, or external viewer), resource loading, and passes `commands:` directly to GeoGebra's `api.evalCommand()`.

---

## The Golden Rules for Error-Free GeoGebra Commands

Agents frequently produce runtime errors when writing GeoGebra commands. Strictly follow these rules:

1. **Strict PascalCase:**
   - Command names MUST be PascalCase: `Intersect`, `Midpoint`, `Segment`, `Circle`, `Polygon`, `Derivative`, `Integral`, `Slider`, `SetColor`, `ZoomIn`.
   - Never use lowercase names (`intersect`, `circle`, `segment`).
2. **Double-Quote Every Command in YAML:**
   - Special symbols (`:`, `{`, `}`, `[`, `]`, `*`, `^`, `#`, `!`) break YAML parsers.
   - Always wrap commands in double quotes: `- "f(x) = sin(x)"`, `- "eq1: x^2 + y^2 = 25"`.
3. **Sequential Dependency Order:**
   - Dependent objects must appear AFTER the objects they depend on.
   - Define base points first (`A = (0, 0)`), then lines/segments (`s = Segment(A, B)`), then intersections/midpoints (`M = Midpoint(A, B)`), then styling.
4. **App Matching (2D vs 3D):**
   - 3D elements (`Sphere`, `Plane`, `Cube`, `Cylinder`, `Surface`, 3D `Curve`) **require** `appName: 3d`.
   - 2D curves, functions, and calculus belong in `appName: graphing`.
   - Euclidean geometry belongs in `appName: geometry` or `appName: suite`.
5. **Pure GeoGebra Script Only:**
   - No JavaScript (`let`, `var`, `function`), Python, or LaTeX (`\frac`) inside `commands:`.
6. **Explicit Multiplication:**
   - `ab` is treated as a single two-letter variable name in GeoGebra. Use `a * b` or `a b` with a space.
7. **Always Use English Command Names:**
   - Even when `language: fa` or another UI language is set, `commands:` must use standard English GeoGebra command names (`Circle`, `Point`, `Midpoint`, etc.).
8. **Always Polish and Style:**
   - Use `SetColor`, `SetLineThickness`, `SetPointSize`, `ShowLabel`, and `ZoomIn` so the diagram looks clear and readable immediately upon loading.

---

## Standard Code Block Format

````markdown
```geogebra
appName: graphing
width: 800
height: 500
language: en
transparentGraphics: true
showToolBar: false
showResetIcon: true
showZoomButtons: true

commands:
  - "f(x) = x^3 - 3*x"
  - "df(x) = Derivative(f)"
  - "ext = {Extremum(f)}"
  - "SetColor(f, \"#2563eb\")"
  - "SetLineThickness(f, 4)"
  - "SetColor(df, \"#dc2626\")"
  - "SetLineStyle(df, 1)"
  - "SetColor(ext, \"#16a34a\")"
  - "SetPointSize(ext, 5)"
  - "ZoomIn(-4, -5, 4, 5)"

caption: "Cubic polynomial with its first derivative and extrema."
explain:
  - "Blue curve represents f(x) = x^3 - 3x."
  - "Red dashed curve represents f'(x) = 3x^2 - 3."
  - "Green points highlight local extrema where f'(x) = 0."
```
````

---

## App Selection Reference

| `appName` | Best Used For |
| --- | --- |
| `graphing` | Functions $y=f(x)$, derivatives, integrals, limits, algebra curves, calculus. |
| `geometry` | Geometric constructions, triangles, circles, segments, compass, ruler. |
| `3d` | Spatial geometry, surfaces, planes, spheres, polyhedra, 3D parametric curves. |
| `suite` | Universal Calculator Suite (switches smoothly between graphing, geometry, 3D). |
| `classic` | All-in-one desktop view with algebra, geometry, CAS, and spreadsheet. |
| `scientific` | Numerical and scientific calculations. |
| `notes` | Interactive math whiteboard notes. |
| `evaluator` | Formula and expression input. |

---

## Key YAML Parameters

All 40+ GeoGebra applet parameters are configurable via YAML without hardcoding:

- **App & Content:** `appName`, `materialId`, `filename` (local `.ggb` vault file e.g. `"model.ggb"` or `"[[model.ggb]]"`), `ggbBase64`, `perspective`.
- **Dimensions & Styling:** `width` (default 800), `height` (default 500), `scale`, `autoHeight`, `allowUpscale`, `borderColor`, `borderRadius`, `transparentGraphics`.
- **Toolbars & Controls:** `showToolBar`, `showAlgebraInput`, `showMenuBar`, `allowStyleBar`, `enableUndoRedo`, `customToolBar`.
- **UI Buttons:** `showZoomButtons`, `showFullscreenButton`, `showAnimationButton`, `showResetIcon`, `showSuggestionButtons`.
- **Interactivity:** `enableRightClick`, `enableLabelDrags`, `enableShiftDragZoom`, `capturingThreshold`.
- **Localization:** `language` (`en`, `fa`, `de`, `fr`, etc.), `country`, `rounding`, `randomSeed`.
- **Educational Metadata:** `caption`, `explain`, `loadingText`.

---

## Detailed References in Plugin Folder

For deep command lookups and extended documentation, refer to:
- **Error prevention & syntax rules:** `docs/geogebra/AGENT_GUIDE_AND_PITFALLS.md`
- **Commands catalog:** `docs/geogebra/COMMANDS_CATALOG.md`
- **500+ individual command docs:** `docs/geogebra/commands/<CommandName>.md`
- **Guides:** `docs/geogebra/guides/` (`Scripting.md`, `3D_Graphics_View.md`, `Functions.md`, `Geometric_Objects.md`)
- **API reference:** `docs/geogebra/api/` (`APPLET_PARAMETERS.md`, `JAVASCRIPT_API.md`, `COLORS.md`, `TOOLBAR.md`)
- **Local skill references:** `skills/geogebra-lab/references/`
