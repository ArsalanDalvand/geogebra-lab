# FitLog Command

#### `FitLog( <List of Points> )`
  Calculates the logarithmic regression curve.

> [!EXAMPLE]
> `FitLog({(ℯ, 1), (ℯ^2, 4)})` yields _-2 + 3 ln(x)_.

## CAS Syntax

#### `FitLog( <List of Points> )`
  Calculates the logarithmic regression curve.

> [!EXAMPLE]
> `FitLog({(ℯ, 1), (ℯ^2, 4)})` yields _3 ln(x) - 2_.

> [!NOTE]
> * Euler's number ℯ can be obtained by pressing [.kcode]#ALT# + [.kcode]#e#.
> * See also [FitExp Command](FitExp.md), [FitPoly Command](FitPoly.md),
> [FitPow Command](FitPow.md) and [FitSin Command](FitSin.md).
> * If you work with big/small numbers, you should consider normalizing them for a more accurate result, see
> [Normalize Command](Normalize.md).
