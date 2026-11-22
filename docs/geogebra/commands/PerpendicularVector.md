# PerpendicularVector Command

#### `PerpendicularVector( <Line> )`
  Returns one of the perpendicular vector to the line.

> [!EXAMPLE]
> Let `Line((1, 4), (5, -3))` be the line _j_. `PerpendicularVector(j)` yields vector _u=(7, 4)_.

> [!NOTE]
> The components of the perpendicular vector to a line of equation _ax + by = c_ are _(a, b)_.

#### `PerpendicularVector( <Segment> )`
  Returns one of the perpendicular vector to the segment, having the same length.

> [!EXAMPLE]
> Let `Segment((3, 2), (14, 5))` be the segment _k_. `PerpendicularVector(k)` yields vector _u=(-3, 11)_.

#### `PerpendicularVector( <Vector> )`
  Returns one of the perpendicular vector to the given vector.

> [!EXAMPLE]
> Let `Vector((-12, 8))` be the vector _u_. `PerpendicularVector(u)` yields vector _v=(-8, -12)_.

> [!NOTE]
> If a point is specified in the definition of the line, segment, or vector, the perpendicular vector will originate from that point. Otherwise, the origin will be at (0, 0).

> [!EXAMPLE]
> * If point A is _(1, 4)_ and point B is _(5, -3)_, let `Line(A, B)` be the line _i_,`PerpendicularVector(i)` will have its origin at A.
> 
> * Let `Line((1, 4), (5, -3))` be the line _j_. `PerpendicularVector(j)` will have its origin at (0, 0).

> [!NOTE]
> In the  [CAS View](CAS_View.md) undefined
> variables are allowed as well.

> [!EXAMPLE]
> `PerpendicularVector((a, b))` yields the vector _{-b, a}_.

#### `PerpendicularVector( <Plane> )`
  Creates a vector orthogonal to the plane, with starting point at (0,0,0).

> [!EXAMPLE]
> `PerpendicularVector(xOyPlane)` yields the perpendicular vector _u=(0, 0, 1)_ to the xOy plane.

> [!NOTE]
> See also [UnitPerpendicularVector Command](UnitPerpendicularVector.md).
