# SetAxesRatio Command

#### `SetAxesRatio( <Number>, <Number> )`
  Changes the axes ratio of active 
  [Graphics View](Graphics_View.md) so that X units on [_x_-axis](Lines_and_Axes.md) correspond to the same
  number of pixels as Y units on _y_-axis and point (0,0) stays on its coordinates. If a unitary ratio is used, the
  related axis is fixed with the unit value, and the other one is adjusted as indicated.

> [!EXAMPLE]
> * `SetAxesRatio(1,2)` fixes the _x_-axis and compresses the _y_-axis
> * `SetAxesRatio(2,1)` fixes the _y_-axis and shrinks the _x_-axis.

#### `SetAxesRatio( <Number>, <Number>, <Number> )`
  Similar to above syntax, works with  [3D Graphics View](3D_Graphics_View.md).
