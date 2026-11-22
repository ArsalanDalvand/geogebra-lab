# Polynomial Command

#### `Polynomial( <Function> )`
  Expands the expression of a polynomial function and simplifies the result.

> [!EXAMPLE]
> `Polynomial((x - 3)^2)` yields _x<sup>2</sup> - 6x + 9_.

> [!EXAMPLE]
> `Polynomial(y^2+(x+y)^2)` yields _x<sup>2</sup> + 2xy + 2y<sup>2</sup>_.

> [!EXAMPLE]
> `Polynomial(2x³ - 1 x² + 0x + 4)` yields _2x³ - x² + 4_.

#### `Polynomial( <List of Points> )`
  Creates the interpolation polynomial of degree _n-1_ through the given _n_ points.

> [!EXAMPLE]
> `Polynomial({(1, 1), (2, 3), (3, 6)})` yields _0.5 x<sup>2</sup> + 0.5 x_.

## CAS Syntax

#### `Polynomial( <Function> )`
  Expands the function and writes it as a polynomial in x (grouping the coefficients).

> [!EXAMPLE]
> `Polynomial((x - 3)^2 + (a + x)^2)` yields _2 x<sup>2</sup> + (2a - 6) x + a<sup>2</sup> + 9_.

#### `Polynomial( <Function>, <Variable> )`
  Expands the function and writes it as a polynomial in the variable (grouping the coefficients).

> [!EXAMPLE]
> `Polynomial((x - 3)^2 + (a + x)^2, a)` yields _a<sup>2</sup> + 2 x a + 2 x<sup>2</sup> - 6 x + 9_.
