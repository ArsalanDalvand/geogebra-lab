# Cone Command

#### `Cone( <Circle>, <Height> )`
  Creates a cone with given base and height.
#### `Cone( <Point>, <Point>, <Radius> )`
  Creates a cone with vertex (second point), circle center (first point) and given radius.
#### `Cone( <Point>, <Vector>, <Angle α> )`
  Creates an infinite cone with given point as vertex, axis of symmetry parallel to the given vector and apex angle 2α.

> [!NOTE]
> This command yields _undefined_ if angle ≥ stem:[\frac{\pi}{2}].

> [!NOTE]
> See also [InfiniteCone](InfiniteCone.md) command, the  [Cone](Cone.md) tool and the  [Extrude to Pyramid or Cone](Extrude_to_Pyramid_or_Cone.md) tool, that
> operates by dragging or selecting a circle and entering altitude to create a right circular cone.
