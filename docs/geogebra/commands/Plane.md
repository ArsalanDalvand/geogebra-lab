# Plane Command

#### `Plane( <Polygon> )`
  Creates the plane containing the given polygon.
#### `Plane( <Conic> )`
  Creates the plane containing the conic.
#### `Plane( <Point>, <Plane> )`
  Creates the plane through the given point, parallel to the given plane.
#### `Plane( <Point>, <Line> )`
  Creates the plane through the given point and line.
#### `Plane( <Line> , <Line> )`
  Creates the plane through the lines (that must be intersecting or parallel to each other).
#### `Plane( <Point>, <Point>, <Point> )`
  Creates the plane through the given points.
#### `Plane( <Point>, <Vector>, <Vector> )`
  Creates the plane through the given point and having as normal vector the cross product of the given vectors (that must not be collinear).

> [!NOTE]
> See also 
> [Plane through 3 Points](Plane_through_3_Points.md) and  [Plane](Plane.md) tools.
