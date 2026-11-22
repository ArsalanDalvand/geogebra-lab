# TaylorPolynomial Command

#### `TaylorPolynomial( <Function>, <x-Value>, <Order Number> )`
  Creates the Taylor series expansion of the given function at the point _x-Value_ up to the given order.

> [!EXAMPLE]
> `TaylorPolynomial(x^2, 3, 1)` gives _9 + 6 (x - 3)_, the Taylor series expansion of _x<sup>2</sup>_ at _x = 3_ up to order _1_.

## CAS Syntax

#### `TaylorPolynomial( <Expression>, <x-Value>, <Order Number> )`
  Creates the Taylor series expansion of the given expression at the point _x-Value_ up to the given order.

> [!EXAMPLE]
> `TaylorPolynomial(x^2, a, 1)` gives _a<sup>2</sup> + 2a (x - a)_, the Taylor series expansion of _x<sup>2</sup>_ at _x = a_ up to order
> _1_.

#### `TaylorPolynomial( <Expression>, <Variable>, <Variable Value>, <Order Number> )`
  Creates the Taylor series expansion of the given expression with respect to the given variable at the point _Variable
  Value_ up to the given order.

> [!EXAMPLE]
> * `TaylorPolynomial(x^3 sin(y), x, 3, 2)` gives _27 sin(y) + 27 sin(y) (x - 3) + 9 sin(y) (x - 3)<sup>2</sup>_, the Taylor 
> series expansion with respect to _x_ of _x<sup>3</sup> sin(y)_ at _x = 3_ up to order _2_.
> * `TaylorPolynomial(x^3 sin(y), y, 3, 2)` gives _x<sup>3</sup> sin(3) + x<sup>3</sup> cos(3) (y - 3) - x<sup>3</sup> stem:[\frac{sin(3) }{2}]
> (y - 3)<sup>2</sup>_, the Taylor series expansion with respect to _y_ of _x<sup>3</sup> sin(y)_ at _y = 3_ up to order _2_.

> [!NOTE]
> The order has got to be an integer greater or equal to zero.
