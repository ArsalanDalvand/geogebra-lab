# GeoGebra Lab Skill: Error Prevention & Syntax Rules

This guide specifies strict rules that agents must follow when creating or revising `geogebra` code blocks in Obsidian to prevent runtime and rendering failures.

---

## 1. PascalCase Command Names (Never Lowercase)
GeoGebra commands are case-sensitive. All command names must be written in **PascalCase**:
- ✅ `Intersect(f, g, 1)`, `Midpoint(A, B)`, `Circle(A, B)`, `Segment(A, B)`, `Polygon(A, B, C)`
- ❌ `intersect`, `midpoint`, `circle`, `segment`, `polygon`

## 2. GeoGebra Script Only (No JavaScript, Python, or LaTeX)
- The `commands:` array is executed via GeoGebra's `api.evalCommand()`.
- Do not output `let`, `var`, `function`, `for`, or DOM operations.
- Do not output LaTeX commands like `\frac{a}{b}` or `\sqrt{x}` inside `commands:`. Use GeoGebra algebra syntax: `(a)/(b)` and `sqrt(x)`.

## 3. Mandatory Double-Quoting in YAML
Special mathematical symbols (`:`, `{`, `}`, `[`, `]`, `*`, `^`, `#`, `!`) break YAML parsers if unquoted.
- ✅ Always enclose command strings in double quotes:
  ```yaml
  commands:
    - "eq1: x^2 + y^2 = 25"
    - "f(x) = If(x > 0, x^2, -x)"
    - "L = {1, 2, 3, 4}"
  ```

## 4. Sequential Evaluation Order
GeoGebra evaluates commands one after another. Dependent objects must appear AFTER their parents:
1. Define base points / numbers: `A = (0, 0)`, `B = (4, 0)`
2. Define dependent lines / circles / polygons: `s = Segment(A, B)`
3. Define intersections / midpoints: `M = Midpoint(A, B)`
4. Apply styles: `SetColor(s, "blue")`, `ShowLabel(s, false)`

## 5. Explicit Variable Multiplication
- In GeoGebra, `ab` is parsed as a single variable name with two letters.
- Always write `a * b` or `a b` with a space when multiplying distinct variables.
- Write `2*x` or `2x`.

## 6. App Selection Compatibility
- For 3D geometry (`Sphere`, `Plane`, `Cylinder`, `Cube`, `Surface`, `Curve` with 3 coordinates, $z = f(x, y)$), set `appName: 3d`.
- For functions, derivatives, integrals, and limits, set `appName: graphing`.
- For ruler-and-compass geometry, set `appName: geometry`.
- For comprehensive or multi-view diagrams, set `appName: suite` or `appName: classic`.

## 7. English Commands in All Languages
- Even if `language: fa` or another UI language is specified, always use standard English GeoGebra command names in `commands:`.

## 8. Clean Visual Styling
Always include visual styling commands so diagrams are polished and readable:
```yaml
commands:
  - "SetColor(targetObj, \"#2563eb\")"   # Hex or standard color name
  - "SetLineThickness(targetObj, 3)"     # 1 to 13
  - "SetPointSize(targetPoint, 5)"       # 1 to 9
  - "SetLineStyle(helperObj, 1)"         # 0=solid, 1=dashed, 2=dotted
  - "ShowLabel(helperObj, false)"        # Hides label clutter
  - "ZoomIn(minX, minY, maxX, maxY)"     # Properly frames the viewport
```
