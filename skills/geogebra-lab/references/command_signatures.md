# Common GeoGebra Command Signatures

Quick reference of the most frequently used GeoGebra commands for agents.

---

## 1. 2D Euclidean Geometry
- `Point`: `A = (x, y)`
- `Segment`: `Segment( <Point>, <Point> )` or `Segment( <Point>, <Length> )`
- `Line`: `Line( <Point>, <Point> )` or `Line( <Point>, <Parallel Line> )`
- `Ray`: `Ray( <Start Point>, <Through Point> )`
- `Midpoint`: `Midpoint( <Point>, <Point> )` or `Midpoint( <Segment> )`
- `PerpendicularLine`: `PerpendicularLine( <Point>, <Line> )`
- `AngleBisector`: `AngleBisector( <Point>, <Point>, <Point> )`
- `Circle`: `Circle( <Center Point>, <Radius Number> )` or `Circle( <Center Point>, <Point> )` or `Circle( <Point>, <Point>, <Point> )`
- `Polygon`: `Polygon( <Point>, <Point>, <Point>, ... )`
- `Intersect`: `Intersect( <Object>, <Object> )` or `Intersect( <Object>, <Object>, <Index> )` or `Intersect( <Function>, <Function>, <Start x>, <End x> )`
- `Distance`: `Distance( <Point>, <Point> )` or `Distance( <Point>, <Line> )`
- `Angle`: `Angle( <Point>, <Point>, <Point> )` or `Angle( <Line>, <Line> )`
- `Tangent`: `Tangent( <Point>, <Conic> )` or `Tangent( <Point>, <Function> )`
- `Area`: `Area( <Polygon> )` or `Area( <Conic> )`
- `Centroid`: `Centroid( <Polygon> )`
- `Incircle`: `Incircle( <Point>, <Point>, <Point> )`
- `CircumcircleArc`: `CircumcircularArc( <Point>, <Point>, <Point> )`

## 2. Functions & Calculus
- Function: `f(x) = <Expression>` (e.g. `f(x) = x^2 - 4*x + 3`)
- Piecewise / Conditional: `f(x) = If( <Condition>, <Then Expression>, <Else Expression> )`
- Domain Restriction: `f(x) = Function( <Function>, <Start x>, <End x> )`
- Derivative: `f'(x)` or `Derivative( <Function> )` or `Derivative( <Function>, <Order> )`
- Integral: `Integral( <Function> )` (indefinite) or `Integral( <Function>, <Start x>, <End x> )` (definite)
- Area Between: `IntegralBetween( <Function>, <Function>, <Start x>, <End x> )`
- Root / Zeros: `Root( <Polynomial> )` or `Root( <Function>, <Start x>, <End x> )`
- Extremum: `Extremum( <Polynomial> )`
- InflectionPoint: `InflectionPoint( <Polynomial> )`
- Asymptote: `Asymptote( <Function> )`
- Limit: `Limit( <Function>, <Value> )` or `LimitAbove( <Function>, <Value> )` or `LimitBelow( <Function>, <Value> )`
- TaylorPolynomial: `TaylorPolynomial( <Function>, <x-Value>, <Order Number> )`
- Curve (Parametric): `Curve( <x-expr>, <y-expr>, <var>, <start>, <end> )` (e.g. `Curve(cos(t), sin(t), t, 0, 2*pi)`)

## 3. 3D Spatial Geometry (`appName: 3d`)
- 3D Point: `P = (x, y, z)`
- Sphere: `Sphere( <Point>, <Radius Number> )` or `Sphere( <Point>, <Point> )`
- Plane: `Plane( <Point>, <Point>, <Point> )` or `Plane( <Point>, <Line> )` or `Plane( <Point>, <Plane> )`
- Cylinder: `Cylinder( <Bottom Point>, <Top Point>, <Radius Number> )`
- Cone: `Cone( <Bottom Point>, <Top Point>, <Radius Number> )`
- Cube: `Cube( <Point>, <Point> )`
- Prism: `Prism( <Polygon>, <Height> )`
- Pyramid: `Pyramid( <Polygon>, <Height> )`
- 3D Curve: `Curve( <x-expr>, <y-expr>, <z-expr>, <var>, <start>, <end> )`
- 3D Surface: `Surface( <x-expr>, <y-expr>, <z-expr>, <u-var>, <u-min>, <u-max>, <v-var>, <v-min>, <v-max> )`

## 4. Vectors & Matrices
- Vector: `Vector( <Point>, <Point> )` or `u = (x, y)`
- UnitVector: `UnitVector( <Vector> )`
- OrthogonalVector: `OrthogonalVector( <Vector> )`
- Dot Product: `u * v`
- Cross Product: `Cross( <Vector>, <Vector> )`
- Matrix: `{{1, 2}, {3, 4}}`
- Determinant: `Determinant( <Matrix> )`
- Invert: `Invert( <Matrix> )`
- Transpose: `Transpose( <Matrix> )`
- ApplyMatrix: `ApplyMatrix( <Matrix>, <Object> )`

## 5. Sequences, Lists & Discrete
- List creation: `L = {1, 2, 3, 4}`
- Sequence: `Sequence( <Expression>, <Variable>, <Start Value>, <End Value>, <Step> )`
  Example: `pts = Sequence((i, i^2), i, -5, 5, 1)`
- Element: `Element( <List>, <Position> )`
- Length: `Length( <List> )`
- Sum: `Sum( <List> )`
- Product: `Product( <List> )`

## 6. Sliders & Interactive Elements
- Slider: `Slider( <Min>, <Max>, <Increment> )`
  Example: `a = Slider(-5, 5, 0.1)`
- SetValue: `SetValue( <Object>, <Value> )`
- StartAnimation: `StartAnimation( <Slider> )` or `StartAnimation( false )`
- Checkbox: `Checkbox( <Caption>, <List of Objects to Control> )`
