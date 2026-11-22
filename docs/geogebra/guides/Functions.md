# Functions

To enter a function you can use previously defined variables (e.g. numbers, points, vectors) as well as other functions.

> [!EXAMPLE]
> * Function f: `f(x) = 3 x^3 – x^2`
> * Function g: `g(x) = tan(f(x))`
> * Nameless function: `sin(3 x) + tan(x)`

> [!NOTE]
> All available predefined functions (e.g. sin, cos, tan) are described in section
> [Predefined Functions and Operators](Predefined_Functions_and_Operators.md).

In GeoGebra you can also use commands to get for example, the [integral](Integral.md) and
[derivative](Derivative.md) of a function. You can use [If Command](If.md) to get
conditional functions.

> [!NOTE]
> You can also use the commands f'(x) or f''(x), … in order to get the derivatives of a previously defined function f(x).

> [!EXAMPLE]
> Define function _f_ as `f(x) = 3 x^3 – x^2`. Then, you can type in `g(x) = cos(f' (x + 2))` in order to get
> function _g_.

Furthermore, functions can be translated by a vector (see [Translate Command](Translate.md)) and a free
function can be moved by using the [Move Tool](Move.md). Other
[Transformation Commands](Transformation_Commands.md) can be also applied to functions, but in most cases
the result is not a function but a curve.

## Limit Function to Interval

In order to limit a function to an interval [a, b], you need to use the [Function Command](Function.md)
or the [If Command](If.md).

> [!EXAMPLE]
> `If[3<=x<=5,x^2]` and `Function[x^2,3,5]` both define a function _x<sup>2</sup>_ restricted to interval [3,5]
