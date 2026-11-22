# Polyline Command

#### `Polyline( <List of Points> )`
  Creates an open polygonal chain (i.e. a connected series of segments) having the initial vertex in the first point of
  the list, and the final vertex in the last point of the list.

> [!NOTE]
> The polygonal chain length is displayed in the  [Algebra View](Algebra_View.md).

#### `Polyline( <Point>, ..., <Point> )`
  Creates an open polygonal chain (i.e. a connected series of segments) having the initial vertex in the first entered
  point, and the final vertex in the last entered point.

> [!NOTE]
> * The polygonal chain length is displayed in the  [Algebra View](Algebra_View.md).
> * It is also possible to create a discontinuous polygonal:

> [!EXAMPLE]
> `Polyline((1, 3), (4, 3), (?,?), (6, 2), (4, -2), (2, -2))` yields the value _9.47_ in
>  _Algebra View_, and the corresponding
> polygonal in  _Graphics View_.

> [!NOTE]
> See also [Polygon](Polygon.md) command.
