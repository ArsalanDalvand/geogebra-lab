# UnitPerpendicularVector Command

#### `UnitPerpendicularVector( <Line>)`
  Returns the perpendicular vector with length 1 of the given line.

> [!EXAMPLE]
> `UnitPerpendicularVector(3x + 4y = 5)` yields _stem:[\begin{pmatrix}0.6\\0.8\end{pmatrix}]_.

#### `UnitPerpendicularVector( <Segment> )`
  Returns the perpendicular vector with length 1 of the given segment.

> [!EXAMPLE]
> Let `s = Segment((1,1), (4,5))`.
> 
> `UnitPerpendicularVector(s)` yields _stem:[\begin{pmatrix}-0.8\\0.6\end{pmatrix}]_.

#### `UnitPerpendicularVector( <Vector> )`
  Returns the perpendicular vector with length 1 of the given vector. The vector must be defined first.

> [!EXAMPLE]
> Let v=stem:[\begin{pmatrix}3\\4\end{pmatrix}]. `UnitPerpendicularVector(v)` yields
> _stem:[\begin{pmatrix}-0.8\\0.6\end{pmatrix}]_.

## CAS Syntax

> [!NOTE]
> In the  [CAS View](CAS_View.md) vectors with
> undefined variables are also valid input.

> [!EXAMPLE]
> `UnitPerpendicularVector((a, b))` yields _(stem:[\frac{-b}{\sqrt{a^2 +
> b^2}}],stem:[\frac{a}{\sqrt{a^2+ b^2}}])_.

#### `UnitPerpendicularVector( <Plane> )`
  Creates a unit vector orthogonal to the plane.

> [!NOTE]
> See also [PerpendicularVector Command](PerpendicularVector.md).
