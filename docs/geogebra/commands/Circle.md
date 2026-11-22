# Circle Command

#### `Circle( <Point>, <Radius Number> )`
  Yields a circle with given center and radius.
#### `Circle( <Point>, <Segment> )`
  Yields a circle with given center and radius equal to the length of the given segment.
#### `Circle( <Point>, <Point> )`
  Yields a circle with given center through a given point.
#### `Circle( <Point>, <Point>, <Point> )`
  Yields a circle through the three given points (if they do not lie on the same line).

> [!NOTE]
> See also  [Compass](Compass.md),
> 
> [Circle with Center through Point](Circle_with_Center_through_Point.md),
> 
> [Circle with Center and Radius](Circle_with_Center_and_Radius.md), and  [Circle through 3 Points](Circle_through_3_Points.md) tools.

#### `Circle( <Line>, <Point> )`
  Creates a circle with line as axis and through the point.
#### `Circle( <Point>, <Radius>, <Direction> )`
  Creates a circle with center, radius, and axis parallel to direction, which can be a line, vector or plane.
#### `Circle( <Point>, <Point>, <Direction> )`
  Creates a circle with center, through a point, and axis parallel to direction.

> [!NOTE]
> In order to avoid the ambiguity line/plane of notations in 2D and 3D, don't use equations like `x = 0` or `y = 0` for the _Direction_.
> For example, you want the _Direction_ to be the plane `x = 0`, use an expression like `x + 0y + 0z = 0` instead.

> [!NOTE]
> See also [(Circle_with_Axis_through_Point.md)] [Circle with Axis through Point](Circle_with_Axis_through_Point.md) and [(Circle_with_Center_Radius_and_Direction.md)] [Circle with Center, Radius and Direction](Circle_with_Center_Radius_and_Direction.md) tools.
