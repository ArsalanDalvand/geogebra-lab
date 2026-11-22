# Rotate Command

#### `Rotate( <Object>, <Angle> )`

Rotates the [geometric object](Geometric_Objects.md) by the angle around the axis origin.

#### `Rotate( <Object>, <Angle>, <Point> )`

Rotates the geometric object by the angle around the given point.

#### `Rotate( <Object>, <Angle>, <Axis of Rotation>)`

Rotates the geometric object by the angle around the given axis of rotation.

#### `Rotate( <Object>, <Angle>, <Point on Axis>, <Axis Direction or Plane> )`

Rotates the geometric object by the angle around the axis defined by the given point and the axis direction or plane.

> [!NOTE]
> * Vectors are not rotated around axis origin, but around their initial point.
> * When a polygon, segment, arc, etc. is rotated, also images of the vertices / endpoints and sides (in case of polygon)
> are created.
> * This command also rotates images.
> * For text rotation use [RotateText Command](RotateText.md).
> * See also 
> [Rotate around Point](Rotate_around_Point.md) and  [Rotate around Line](Rotate_around_Line.md) tools.
