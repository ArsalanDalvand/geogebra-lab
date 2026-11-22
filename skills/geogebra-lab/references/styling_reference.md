# GeoGebra Lab Skill: Styling, Colors & Viewport Reference

Polishing diagrams with proper styling avoids clutter and makes mathematical concepts clear.

---

## 1. Visual Styling Commands

All styling commands should be placed in `commands:` after objects are defined:

| Command | Syntax | Example | Description |
| --- | --- | --- | --- |
| `SetColor` | `SetColor(obj, "color")` | `SetColor(f, "blue")` | Set color using English name |
| `SetColor` (Hex) | `SetColor(obj, "#hex")` | `SetColor(f, "#2563eb")` | Set color using hex RGB string |
| `SetColor` (RGB) | `SetColor(obj, r, g, b)` | `SetColor(f, 0.2, 0.5, 0.9)` | RGB values between 0.0 and 1.0 |
| `SetPointSize` | `SetPointSize(point, size)` | `SetPointSize(P, 5)` | Point diameter in pixels (1 to 9) |
| `SetPointStyle`| `SetPointStyle(point, style)` | `SetPointStyle(P, 2)` | 0=dot, 1=cross, 2=empty circle, 3=plus |
| `SetLineThickness`| `SetLineThickness(obj, width)` | `SetLineThickness(line, 4)` | Line width (1 to 13) |
| `SetLineStyle` | `SetLineStyle(obj, style)` | `SetLineStyle(line, 1)` | 0=solid, 1=dashed, 2=dotted, 3=dash-dot |
| `SetFilling` | `SetFilling(obj, opacity)` | `SetFilling(poly, 0.25)` | Opacity fill from 0.0 to 1.0 |
| `ShowLabel` | `ShowLabel(obj, boolean)` | `ShowLabel(helperLine, false)` | Show or hide the object label text |
| `SetCaption` | `SetCaption(obj, "text")` | `SetCaption(A, "Center")` | Custom label or LaTeX caption |
| `SetFixed` | `SetFixed(obj, boolean)` | `SetFixed(A, true)` | Lock object to prevent accidental dragging |
| `SetVisibleInView` | `SetVisibleInView(obj, view, bool)` | `SetVisibleInView(obj, 1, false)` | Toggle visibility in specific view |
| `ZoomIn` | `ZoomIn(minX, minY, maxX, maxY)` | `ZoomIn(-5, -5, 5, 5)` | Set viewport coordinates |
| `CenterView` | `CenterView(point)` | `CenterView((0, 0))` | Pan viewport center to given point |
| `ShowAxes` | `ShowAxes(boolean)` | `ShowAxes(true)` | Show/hide Cartesian axes |
| `ShowGrid` | `ShowGrid(boolean)` | `ShowGrid(true)` | Show/hide grid lines |

---

## 2. Standard Named Colors in GeoGebra

Common color strings recognized by `SetColor`:
- `black`, `white`, `gray`, `silver`, `dimgray`
- `red`, `crimson`, `firebrick`, `darkred`, `coral`, `tomato`
- `blue`, `navy`, `royalblue`, `dodgerblue`, `deepskyblue`, `cornflowerblue`
- `green`, `forestgreen`, `seagreen`, `limegreen`, `darkgreen`, `olive`
- `yellow`, `gold`, `goldenrod`, `orange`, `darkorange`
- `purple`, `darkorchid`, `violet`, `magenta`, `fuchsia`, `indigo`
- `cyan`, `teal`, `darkturquoise`, `aquamarine`

---

## 3. Recommended Palette for Clean Diagrams

- **Primary function / curve:** `"#2563eb"` (Blue) or `"blue"`, thickness 4
- **Secondary function / curve:** `"#dc2626"` (Red) or `"crimson"`, thickness 3
- **Tangent line:** `"#16a34a"` (Green) or `"forestgreen"`, thickness 2
- **Construction / Guide lines:** `"#94a3b8"` (Slate gray), style `1` (dashed), thickness 2, `ShowLabel(line, false)`
- **Key Intersections / Focus points:** `"#b91c1c"`, size 5
- **Shaded area / Integrals:** `SetFilling(area, 0.25)`
