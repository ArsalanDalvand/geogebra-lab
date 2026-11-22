# FitPow Command

#### `FitPow( <List of Points> )`
  Calculates the regression curve in the form _a x<sup>b</sup>_.

> [!EXAMPLE]
> `FitPow({(1, 1), (3, 2), (7, 4)})` creates the regression curve _f(x) = 0.97 x^0.71^_.

## CAS Syntax

#### `FitPow( <List of Points> )`
  Calculates the regression curve in the form _a x<sup>b</sup>_.

> [!EXAMPLE]
> `FitPow({(1, 1), (3, 2), (7, 4)})` yields _0.97 x^0.71^_.

> [!NOTE]
> * All points used need to be in the first quadrant of the coordinate system.
> * See also [FitExp Command](FitExp.md), [FitLog Command](FitLog.md),
> [FitPoly Command](FitPoly.md), and [FitSin Command](FitSin.md).
> * If you work with big/small numbers, you should consider normalizing them for a more accurate result, see
> [Normalize Command](Normalize.md).
