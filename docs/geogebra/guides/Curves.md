# Curves

GeoGebra supports the following types of curves:

## Parametric curves

Parametric curves of the form _a(t)_ = _(f(t), g(t))_ where _t_ is real parameter within a certain range can be created:

* using the [Curve Command](Curve.md) or
* by typing their expression directly in the _input bar_, e.g.`(t^2,t^3)`.

Parametric curves can be used as arguments in the following commands: [Tangent](Tangent.md),
[Point](Point.md), [Intersect](Intersect.md), [Derivative](Derivative.md),
[Length](Length.md), [Curvature](Curvature.md),
[CurvatureVector](CurvatureVector.md) and [OsculatingCircle](OsculatingCircle.md).

> [!NOTE]
> * Parametric curves can be used with pre-defined functions and arithmetic operations. For example, input `c(3)`
> returns the point at parameter position 3 on curve _c_.
> * You can also place a point on a curve using tool 
> [Point](Point.md) or command [Point](Point.md). Since the endpoints _a_ and _b_ are dynamic
> you can use slider variables as well (see tool 
> [Slider](Slider.md)).

Creating a parametric curve through some given points is not possible. You can however try e.g.
[FitPoly Command](FitPoly.md) to get a function going through these points.

## Polar curves

In order to draw a curve defined using polar coordinates, it is possible to use one of the following (equivalent)
syntaxes:

> [!EXAMPLE]
> `ρ=sin(2 θ)`, or `sin(2 θ)`, or `f(t)=(sin(2*t); t)`, or `(sin(2*t); t)`, or
> `f(t)=(sin(2*t); t), 0< t < 2pi`, or `(sin(2*t); t), 0 < t < 2pi`, or `Curve((sin(2*t); t), t, 0, 2pi)`.

## Implicit curves

Implicit curves are polynomials in variables _x_ and _y_. The can be entered directly using the
[Input Bar](Input_Bar.md). The [ImplicitCurve](ImplicitCurve.md) command generates an implicit
curve through a list of points.

> [!EXAMPLE]
> `x^4 + y^3 = 2xy`
