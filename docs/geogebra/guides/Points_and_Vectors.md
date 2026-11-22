# Points and Vectors

Points and vectors may be entered via [Input Bar](Input_Bar.md) in Cartesian or polar coordinates (see
[Numbers and Angles](Numbers_and_Angles.md)). Points can also be created using  [Point tools](Point_Tools.md) and vectors can be created using the

[Vector from Point Tool](Vector_from_Point.md) or the  [Vector Tool](Vector.md) and a variety of [commands](Commands.md).

> [!NOTE]
> Upper case labels denote points, whereas lower case labels refer to vectors. This convention is not mandatory.

> [!EXAMPLE]
> * To enter a point _P_ or a vector _v_ in 2D in Cartesian coordinates you may use `P = (1, 0)` or `v = (0, 5)`.
> * To enter a point _P_ or a vector _v_ in 3D in Cartesian coordinates you may use `P = (1, 0, 2)` or
> `v = (0, 5, -1)`.
> * To enter a point _P_ in 2D in polar coordinates, you may use `P = (1; 0°)` or `v = (5; 90°)`.
> * To enter a point _P_ in 3D in spherical coordinates, enter three coordinates of the type (ρ, θ, φ) like e.g.
> `P = (1; 60°; 30°)`.
> * To enter a point in the 
> [Spreadsheet View](Spreadsheet_View.md), name it using its cell address, e.g.: `A2 = (1, 0)`

> [!NOTE]
> * You need to use a semicolon to separate polar coordinates. If you don’t type the degree symbol, GeoGebra will treat
> the angle as if entered in radians
> * Coordinates of points and vectors can be accessed using [predefined
> functions](Predefined_Functions_and_Operators.md) `x()` and `y()` (and `z()` for 3D points).
> * Polar coordinates of point _Q_ can be obtained using `abs(Q)` and `arg(Q)` (and also `alt(Q)` for 3D
> points).

> [!EXAMPLE]
> * If `P=(1,2)` is a point and `v=(3,4)` is a vector, `x(P)` returns 1 and `y(v)` returns 4.
> * `abs(P)` returns 2.24 and `arg(P)` returns 63.43°.

## Calculations

In GeoGebra, you can also do calculations with points and vectors.

> [!EXAMPLE]
> * You can create the midpoint M of two points A and B by entering `M = (A + B) / 2` into the Input Bar.
> * You may calculate the _length_ of a vector _v_ using `length = sqrt(v * v)` or `length = Length(v)`
> * You can get the coordinates of the _starting and terminal point_ of a vector _v_ using the commands `Point(v, 0) `
> and `Point(v, 1) ` respectively.
> * If _A = (a, b)_, then `A + 1` returns _(a + 1, b + 1)_. If _A_ is a [complex number](Complex_Numbers.md)
> _a+bί_, then `A+1` returns _a + 1 + bί_.

## Vector Product

Let _(a, b)_ and _(c, d)_ be two points or vectors. Then `(a, b) ⊗ (c, d)` returns the z-coordinate of vector
product _(a, b, 0) ⊗ (c, d, 0)_ as single number.

Similar syntax is valid for lists, but the result in such case is a list.

> [!EXAMPLE]
> * `{1, 2} ⊗ {4, 5}` returns _{0, 0, -3}_
> * `{1, 2, 3} ⊗ {4, 5, 6}` returns _{3, 6, -3}_.
