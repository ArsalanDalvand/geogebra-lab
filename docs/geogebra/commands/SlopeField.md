# SlopeField Command

#### `SlopeField( <f(x,y)> )`
  Plots a https://en.wikipedia.org/wiki/Slope_field[slope field] of the differential equation
  stem:[\frac{dy}{dx}=f(x,y)]

> [!EXAMPLE]
> `SlopeField(x+y)` plots the slope field of the differential equation stem:[\frac{dy}{dx}=x+y].

#### `SlopeField( <f(x,y)>, <Number n> )`
  Plots a slope field of the differential equation stem:[\frac{dy}{dx}=f(x,y)] on an n by n grid (if the
   [Graphics
  View](Graphics_View.md) is square) or a smaller grid if not. Default is 40.

#### `SlopeField( <f(x,y)>, <Number n>, <Length Multiplier a> )`
  Plots a slope field of the differential equation stem:[\frac{dy}{dx}=f(x,y)]. The Length Multiplier 0<a≤1 determines
  how long the segments are.

#### `SlopeField( <f(x,y)>, <Number n>, <Length Multiplier a>, <Min x>, <Min y>, <Max x>, <Max y> )`
  Plots a slope field of the differential equation stem:[\frac{dy}{dx}=f(x,y)] inside the specified rectangle (rather
  than filling the 
  [Graphics View](Graphics_View.md))

> [!NOTE]
> * Use the following tools: 
> [Move Graphics View](Move_Graphics_View.md),  [Zoom In](Zoom_In.md),  [Zoom Out](Zoom_Out.md) and observe the effect.
> * See also [SolveODE](SolveODE.md), [Locus](Locus.md),
> [Integral](Integral.md)
