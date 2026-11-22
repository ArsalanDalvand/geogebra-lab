# Pyramid Command

#### `Pyramid( <Point>, <Point>, ...)`
  Returns a pyramid defined by the given points.

> [!EXAMPLE]
> `Pyramid(A, B, C, D)` creates the pyramid with base _ABC_ and apex _D_.

#### `Pyramid( <Polygon>, <Point> )`
  Creates a pyramid with the given polygon as base and the point as apex.

> [!EXAMPLE]
> `Pyramid(poly1, A)` creates a pyramid with base _poly1_ and apex _A_.

#### `Pyramid( <Polygon>, <Height> )`
  Returns a centered pyramid defined by the polygon as base and given height.

> [!EXAMPLE]
> `Pyramid(poly1, 3)` creates a centered pyramid with base _poly1_ and height 3.

> [!NOTE]
> See also  [Pyramid](Pyramid.md) and
>  [Extrude
> to Pyramid](Extrude_to_Pyramid_or_Cone.md) tools.
