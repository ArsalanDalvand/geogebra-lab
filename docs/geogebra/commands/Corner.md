# Corner Command

#### `Corner( <Number of Corner> )`
  For number _n = 1, 2, 3, 4_ creates a point at the corner of the  [Graphics View](Graphics_View.md), for _n = 5_ returns point _(w, h)_, where
  _w_ and _h_ are width and height of the Graphics View in pixels. Always uses
   [first
  Graphics View](Graphics_View.md), even if second is active.

> [!NOTE]
> Corner( <Number of Corner> ) won't work inside other commands. Instead create eg `C_1 = Corner(1)` and use that.

#### `Corner( <Graphics View>, <Number of Corner> )`
  Creates a point at the corner of 
  Graphics View (1, 2) which is never visible in that view. Supported values of number _n_ are _1, 2, 3, 4_ and _5_ as
  above.

> [!NOTE]
> Corner( <Graphics View>, <Number of Corner> ) won't work inside other commands. Instead create eg
> `C_1 = Corner(1, 1)` and use that.

> [!NOTE]
> Use `-1` for the  [3D Graphics View](3D_Graphics_View.md)'s corners (available values for
> _Number_: from 1 to 8).  Moreover:
> 
> * `Corner(-1,9)` returns point (_w_, _h_, 0), where _w_ and _h_ are width and height of the 3D Graphics
> View in pixels
> 
> * `Corner(-1,10)` returns point (_w_, _h_, 0), where _w_ and _h_ are width and height of the main window in
> pixels
> 
> * `Corner(-1,11)` returns view direction (for parallel projections) or eye position (for e.g. perspective
> projection)
> 
> * `Corner(-1,12)` returns screen left-to-right direction
> 
> * `Corner(-1,13)` returns scales for _x_, _y_ and _z_ axes.

#### `Corner( <Image>, <Number of Corner> )`
  Creates a point at the corner of the image (number _n_ = 1, 2, 3, 4).

#### `Corner( <Text>, <Number of Corner> )`
  Creates a point at the corner of the text (number _n_ = 1, 2, 3, 4).

> [!NOTE]
> * `Corner( <Text>, <Number of Corner> )` won't work inside the [Sequence](Sequence.md) or
> [Zip](Zip.md) commands. Also the _Absolute Position on Screen_ property must be unchecked
> 
> * The numbering of the corners is counter‐clockwise and starts at the lower left corner.
