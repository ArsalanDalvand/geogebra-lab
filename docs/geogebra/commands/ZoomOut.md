# ZoomOut Command

#### `ZoomOut( <Scale Factor> )`
  Zooms the 
  [Graphics View](Graphics_View.md) out by given factor with respect to current zoom, center of the screen is used
  as center point for the zoom.

> [!EXAMPLE]
> `ZoomOut(2)` zooms the view out.

#### `ZoomOut( <Scale Factor>, <Center Point> )`
  Zooms the 
  [Graphics View](Graphics_View.md) out by given factor with respect to current zoom, second parameter specifies
  center point for the zoom.

> [!EXAMPLE]
> `ZoomOut(2, (0, 0))`

> [!NOTE]
> * `ZoomOut(t)` and `ZoomOut(t, A)` are equivalent to `ZoomIn(1/t)` and `ZoomIn(1/t, A)` respectively.
> * If multiple _Graphics Views_ are present, the active one is used.
> * See also [ZoomIn](ZoomIn.md), [SetActiveView](SetActiveView.md),
> [Pan](Pan.md) commands.
