# ZoomIn Command

#### `ZoomIn( )`
  Restores the 
  [Graphics View](Graphics_View.md) to the default initial position

#### `ZoomIn( <Scale Factor> )`
  Zooms the 
  [Graphics View](Graphics_View.md) in by given factor with respect to current zoom, center of the screen is used
  as center point for the zoom.

> [!EXAMPLE]
> `ZoomIn(1)` doesn't change the view, but does remove traces
> 
> `ZoomIn(2)` zooms the view in
> 
> `ZoomIn(0.5)` is equivalent to `ZoomOut(2)`, i.e. it zooms the view out.

#### `ZoomIn( <Scale Factor>, <Center Point> )`
  Zooms the 
  [Graphics View](Graphics_View.md) in by given factor with respect to current zoom, second parameter specifies
  center point for the zoom.

> [!EXAMPLE]
> `ZoomIn(2, (0, 0))`

#### `ZoomIn( <Min x>, <Min y>, <Max x>, <Max y> )`
  Zooms the graphics view to the rectangle given by vertices (Min x, Min y), (Max x, Max y).

> [!EXAMPLE]
> `ZoomIn(0, 1, 5, 6)`

> [!NOTE]
> If any of these parameters are dependent or has label set, the bounds of the view become dynamic. To avoid this
> behavior, use [CopyFreeObject Command](CopyFreeObject.md).

> [!EXAMPLE]
> If _a_ is a slider, `ZoomIn(-a, -a, a, a)` makes the zoom of the view dependent on slider _a_.

#### `ZoomIn( <Min x>, <Min y>, <Min z>, <Max x>, <Max y>, <Max z> )`
  Zooms the 3D graphics view to the cuboid given by vertices (Min x, Min y, Min z), (Max x, Max y, Max z).

> [!EXAMPLE]
> `ZoomIn(-5, -5, -5, 5, 5, 5)`

> [!NOTE]
> The dynamic behavior of the 2D version isn't supported

> [!NOTE]
> * If multiple 
> [Graphics Views](Graphics_View.md) are present, the active one is used
> * See also [ZoomOut](ZoomOut.md), [SetActiveView](SetActiveView.md),
> [Pan](Pan.md) commands.
