# GeoGebra Lab AI Agent Guide & Error Prevention

This guide is designed for AI agents (Claude, GPT, Hermes, Copilot, etc.) and human developers generating GeoGebra diagrams within Obsidian using the **GeoGebra Lab** plugin.

---

## Why Agent-Generated GeoGebra Code Fails (Top Pitfalls)

When AI agents generate GeoGebra code blocks, errors almost always fall into one of these 10 categories:

### 1. Wrong Command Casing (Lowercase instead of PascalCase)
- ❌ **Wrong:** `p = intersect(f, g)`, `m = midpoint(A, B)`, `c = circle(A, 3)`, `s = segment(A, B)`
- ✅ **Correct:** `P = Intersect(f, g, 1)`, `M = Midpoint(A, B)`, `c = Circle(A, 3)`, `s = Segment(A, B)`
- **Rule:** GeoGebra built-in commands are strictly **PascalCase** (`Intersect`, `Midpoint`, `Segment`, `Circle`, `Polygon`, `Derivative`, `Integral`, `Slider`, `SetColor`, `ZoomIn`).

### 2. Outputting JavaScript, Python, or LaTeX inside `commands`
- ❌ **Wrong:**
  ```yaml
  commands:
    - "let x = 5;"
    - "\frac{1}{2} x^2"
    - "for (let i = 0; i < 10; i++) { ... }"
  ```
- ✅ **Correct:**
  ```yaml
  commands:
    - "a = 5"
    - "f(x) = (1/2) * x^2"
    - "pts = Sequence((i, i^2), i, 1, 10)"
  ```
- **Rule:** The `commands:` list in GeoGebra Lab is passed item-by-item to GeoGebra's `api.evalCommand()`. It accepts only **GeoGebra Script commands or mathematical definitions**, NOT JavaScript or LaTeX.

### 3. Missing Quotes in YAML (YAML Syntax Errors)
- ❌ **Wrong:**
  ```yaml
  commands:
    - eq1: x^2 + y^2 = 25    # YAML thinks eq1: is an object key!
    - list = {1, 2, 3}       # YAML thinks {1, 2, 3} is inline JSON mapping!
    - f(x) = If(x > 0, 1, 0) # Colons and special chars break YAML
  ```
- ✅ **Correct:**
  ```yaml
  commands:
    - "eq1: x^2 + y^2 = 25"
    - "list1 = {1, 2, 3}"
    - "f(x) = If(x > 0, 1, 0)"
  ```
- **Rule:** **Always double-quote every entry in the `commands:` array.**

### 4. Dependent Object Order Violations
- ❌ **Wrong:**
  ```yaml
  commands:
    - "s = Segment(A, B)"    # Error! A and B do not exist yet!
    - "A = (1, 2)"
    - "B = (5, 6)"
  ```
- ✅ **Correct:**
  ```yaml
  commands:
    - "A = (1, 2)"
    - "B = (5, 6)"
    - "s = Segment(A, B)"
  ```
- **Rule:** Commands run sequentially. Every parent object must be defined *before* child objects that reference it.

### 5. App Mismatch (2D vs 3D)
- ❌ **Wrong:** Defining 3D shapes in 2D graphing:
  ```yaml
  appName: graphing
  commands:
    - "Sphere((0, 0, 0), 3)"   # Fails or cannot render in 2D graphing view!
    - "Plane((0, 0, 1), (0, 1, 0), (1, 0, 0))"
  ```
- ✅ **Correct:**
  ```yaml
  appName: 3d
  commands:
    - "A = (0, 0, 0)"
    - "s = Sphere(A, 3)"
  ```
- **App Selection Matrix:**
  - `graphing`: Functions $y = f(x)$, derivatives, integrals, calculus, limits, polynomials.
  - `geometry`: Euclidean geometry (points, segments, triangles, circles, angle bisectors).
  - `3d`: Surfaces, planes, spheres, polyhedra, 3D parametric curves, vectors in $\mathbb{R}^3$.
  - `suite`: Calculator Suite (universal; has tabs for graphing, geometry, 3d, and CAS).
  - `classic`: All-in-one view with spreadsheet, CAS, and geometry.
  - `scientific`: Calculations and numerical evaluations.
  - `evaluator`: Formula and equation editing.

### 6. Ambiguous Variable Multiplication
- ❌ **Wrong:** `f(x) = 2ax + b` -> GeoGebra treats `ax` as a single variable name `ax`, not $a \times x$!
- ✅ **Correct:** `f(x) = 2*a*x + b` or `f(x) = 2 a x + b`.
- **Rule:** Use explicit `*` when multiplying two variables (e.g. `a*b`, `m*x`, `r*cos(t)`).

### 7. Non-English Commands in Localized Diagrams
- ❌ **Wrong:** Translating command names when `language: fa` or `es` is set:
  ```yaml
  language: fa
  commands:
    - "نقطه(1, 2)"     # Fails!
  ```
- ✅ **Correct:**
  ```yaml
  language: fa
  commands:
    - "A = (1, 2)"    # Commands are always English!
  ```
- **Rule:** Even if `language: fa` is set to give Persian UI menus to the user, `commands:` **MUST ALWAYS use standard English GeoGebra command names**.

### 8. Handling Multiple Intersections
- ❌ **Problematic:** `P = Intersect(f, g)` when $f$ and $g$ intersect at multiple points. In GeoGebra, this creates a list of points or might fail if assigned to a single point name.
- ✅ **Correct:**
  - Get specific point: `P_1 = Intersect(f, g, 1)` and `P_2 = Intersect(f, g, 2)`
  - Or within interval: `P = Intersect(f, g, -2, 2)`
  - Or as a list: `pts = {Intersect(f, g)}`

### 9. Viewport Not Framing the Content
- If your points are at $(100, 200)$, default GeoGebra zoom $[-10, 10]$ will show a blank screen!
- ✅ **Solution:** Use `ZoomIn(minX, minY, maxX, maxY)`:
  ```yaml
  commands:
    - "ZoomIn(-2, -2, 10, 10)"
  ```

### 10. Cluttered Diagrams (Unstyled Intermediate Objects)
- Diagrams look amateurish when every construction line, helper circle, and intermediate point has its name and label showing.
- ✅ **Solution:** Use visual styling commands:
  ```yaml
  commands:
    - "ShowLabel(helperLine, false)"
    - "SetColor(mainCurve, \"#2563eb\")"
    - "SetLineThickness(mainCurve, 4)"
    - "SetPointSize(targetPoint, 5)"
    - "SetLineStyle(helperLine, 1)"       # Dashed line
    - "SetFilling(polygonArea, 0.25)"    # 25% opacity fill
    - "SetFixed(basePoint, true)"        # Lock from accidental drag
  ```

---

## Standard Code Block Template

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
  # 1. Geometry / Free objects
  - "A = (0, 0)"
  - "B = (4, 3)"
  
  # 2. Dependent objects / Functions
  - "s = Segment(A, B)"
  - "M = Midpoint(A, B)"
  
  # 3. Styling & Presentation
  - "SetColor(s, \"#2563eb\")"
  - "SetLineThickness(s, 3)"
  - "SetColor(M, \"#dc2626\")"
  - "SetPointSize(M, 5)"
  - "ShowLabel(s, false)"
  - "ZoomIn(-2, -2, 6, 5)"

caption: "Midpoint of segment AB."
explain:
  - "Point M divides segment AB into two equal halves."
```
````

---

## Fast Command Cheatsheet for Common Math Domains

### 1. Geometry (Euclidean & Coordinate)
| Action | Syntax |
| --- | --- |
| Point | `A = (2, 3)` |
| Segment | `s = Segment(A, B)` |
| Line through points | `l = Line(A, B)` |
| Perpendicular line | `p = PerpendicularLine(P, line)` |
| Parallel line | `p = Line(P, line)` |
| Angle bisector | `b = AngleBisector(A, B, C)` |
| Circle (Center & Point) | `c = Circle(A, B)` |
| Circle (Center & Radius) | `c = Circle(A, 5)` |
| Circle through 3 Points | `c = Circle(A, B, C)` |
| Polygon | `poly1 = Polygon(A, B, C)` |
| Midpoint | `M = Midpoint(A, B)` |
| Intersection | `P = Intersect(obj1, obj2, 1)` |
| Distance | `d = Distance(A, B)` |
| Vector | `u = Vector(A, B)` |

### 2. Calculus & Functions
| Action | Syntax |
| --- | --- |
| Function definition | `f(x) = x^3 - 3*x + 1` |
| Piecewise function | `f(x) = If(x < 0, -x, x^2)` |
| Domain restriction | `f(x) = Function(sin(x), 0, 2*pi)` |
| Derivative | `f'(x)` or `df = Derivative(f)` |
| N-th derivative | `d2f = Derivative(f, 2)` |
| Integral (indefinite) | `F = Integral(f)` |
| Integral (definite area) | `area = Integral(f, 0, 2)` |
| Area between curves | `a = IntegralBetween(f, g, -1, 1)` |
| Tangent line | `t = Tangent(x0, f)` or `Tangent(P, f)` |
| Extrema | `ext = Extremum(f)` |
| Roots / Zeros | `r = Root(f)` |
| Inflection points | `inf = InflectionPoint(f)` |
| Taylor polynomial | `taylor = TaylorPolynomial(f, x0, 3)` |
| Asymptotes | `asymp = Asymptote(f)` |

### 3. 3D Geometry (`appName: 3d`)
| Action | Syntax |
| --- | --- |
| 3D Point | `P = (1, 2, 3)` |
| Sphere | `s = Sphere(center, radius)` |
| Plane through 3 points | `p = Plane(A, B, C)` |
| Plane through point & line | `p = Plane(A, line)` |
| Cylinder | `cyl = Cylinder(bottomPoint, topPoint, radius)` |
| Cone | `c = Cone(bottomPoint, topPoint, radius)` |
| Cube | `cube = Cube(A, B)` |
| 3D Parametric Curve | `c = Curve(cos(t), sin(t), t, t, 0, 4*pi)` |
| 3D Surface | `s = Surface(u, v, u^2 - v^2, u, -2, 2, v, -2, 2)` |

### 4. Interactive Sliders & Animations
| Action | Syntax |
| --- | --- |
| Create Slider | `a = Slider(-5, 5, 0.1)` |
| Set Slider Value | `SetValue(a, 2.5)` |
| Start Animation | `StartAnimation(a)` |
| Pause Animation | `StartAnimation(false)` |

### 5. Styling & Visual Polish
| Action | Syntax |
| --- | --- |
| Set Color (Name) | `SetColor(obj, "blue")` or `SetColor(obj, "crimson")` |
| Set Color (Hex) | `SetColor(obj, "#10b981")` |
| Set Color (RGB 0..1) | `SetColor(obj, 0.2, 0.6, 1.0)` |
| Set Point Size (1..9) | `SetPointSize(point, 5)` |
| Set Line Thickness (1..13)| `SetLineThickness(line, 4)` |
| Set Line Style (0..4) | `SetLineStyle(line, 1)` (0=solid, 1=dashed, 2=dotted) |
| Set Opacity / Filling | `SetFilling(polygon, 0.3)` |
| Hide Label | `ShowLabel(obj, false)` |
| Show/Hide Object | `SetVisibleInView(obj, 1, false)` |
| Lock Object | `SetFixed(obj, true)` |
| Set Caption | `SetCaption(obj, "Focal Point")` |
| Set Viewport | `ZoomIn(xmin, ymin, xmax, ymax)` |
