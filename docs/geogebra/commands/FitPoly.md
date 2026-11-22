# FitPoly Command

#### `FitPoly( <List of Points>, <Degree of Polynomial> )`
  Calculates the polynomial regression model of given _degree_ that fits the specified _points_.

> [!EXAMPLE]
> `FitPoly({(-1, -1), (0, 1), (1, 1), (2, 5)}, 3)` yields _f(x) = x<sup>3</sup> - 1 x<sup>2</sup> + 1_.

#### `FitPoly( <Freehand Function>, <Degree of Polynomial> )`
  Calculates the polynomial regression model of given _degree_ that fits a function drawn using the
  [Freehand Shape Tool](Freehand_Shape.md).

> [!NOTE]
> * To obtain a polynomial of degree _n_ the list must contain at least _n_ + 1 points.
> * See also [FitExp Command](FitExp.md), [FitLog Command](FitLog.md),
> [FitPow Command](FitPow.md) and [FitSin Command](FitSin.md).
> * When working with big/small numbers, consider normalizing them for a more accurate result. See
> [Normalize Command](Normalize.md).

## CAS Syntax

#### `FitPoly( <List of Points>, <Degree of Polynomial> )`
  Calculates the polynomial regression model of given _degree_ that fits the specified _points_.

> [!EXAMPLE]
> `FitPoly({(-1, -1), (0, 1), (1, 1), (2, 5)}, 3)` yields _x<sup>3</sup> - x<sup>2</sup> + 1_.
