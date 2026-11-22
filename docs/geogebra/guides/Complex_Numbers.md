# Complex Numbers

GeoGebra does not support complex numbers directly, but you can use [points and vectors](Points_and_Vectors.md) to display complex numbers in the plane and perform algebraic operations with complex numbers.

> [!EXAMPLE]
> When entering the complex number 3 + 4ί into the Input Bar, the point (3, 4) is displayed in the
>  [Graphics
> View](Graphics_View.md). The complex number is shown in rectangular form as 3 + 4ί in the  [Algebra View](Algebra_View.md).

> [!NOTE]
> You can display any point as a complex number in the  _Algebra View_. Open the
>  [Properties Dialog](Properties_Dialog.md) for
> the point and select _Complex Number_ from the list of Coordinates formats on tab _Algebra_.

Unless you are in the  [CAS View](CAS_View.md) or you have previously defined a variable named _i_, entering _i_ is recognized
as the ordered pair _i_ = (0, 1) or the complex number 0 + 1ί. This means that you can use _i_ to enter complex numbers into the _Input Bar_ (e.g. _w_ = 3 + 4 _i_) of the _Algebra View_.
In the CAS View use the shortcut [.kcode]#Alt# + [.kcode]#i#. to enter the imaginary unit ί.

> [!EXAMPLE]
> Addition and subtraction:
> 
> * `(2 + 1ί) + (1 – 2ί)` gives you the complex number 3 – 1ί.
> * `(2 + 1ί) - (1 – 2ί)` gives you the complex number 1 + 3ί.

> [!EXAMPLE]
> Multiplication and division:
> 
> * `(2 + 1ί) * (1 – 2ί)` gives you the complex number 4 – 3ί.
> * `(2 + 1ί) / (1 – 2ί)` gives you the complex number 0 + 1ί.

> [!NOTE]
> The usual multiplication `(2, 1)*(1, -2)` gives you the scalar product of the two vectors.

The following commands and [predefined operators](Predefined_Functions_and_Operators.md) can also be used:

* `x(w)` or `real(w)` return the real part of the complex number _w_
* `y(w)` or `imaginary(w)` return the imaginary part of the complex number _w_
* `abs(w)` or `Length(w)` return the absolute value of the complex number _w_
* `arg(w)` or `Angle(w)` return the argument of the complex number _w_

> [!NOTE]
> arg(w) is a number between -180° and 180°, while Angle(w) returns values between 0° and 360°.

* `conjugate(w)` or `Reflect(w,xAxis)` return the conjugate of the complex number _w_

GeoGebra also recognizes expressions involving [real](Numbers_and_Angles.md) and complex numbers.

> [!EXAMPLE]
> * `3 + (4 + 5ί)` gives you the complex number 7 + 5ί.
> * `3 - (4 + 5ί)` gives you the complex number -1 - 5ί.
> * `3 / (0 + 1ί)` gives you the complex number 0 - 3ί.
> * `3 * (1 + 2ί)` gives you the complex number 3 + 6ί.
