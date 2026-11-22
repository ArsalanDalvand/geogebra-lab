# Fit Command

#### `Fit( <List of Points>, <List of Functions> )`
  Returns a linear combination of the _functions_ that best fit the _points_ in the list.

> [!EXAMPLE]
> * `Fit({(-2, 3), (0, 1), (2, 1), (2, 3)}, {x^2, x})` yields _0.625 x^2 - 0.25x_.
> * Let _L = {A, B, C, ...}_, _f(x) = 1_, _g(x) = x_, _h(x) = e^x_, _F = {f, g, h}_. `Fit(L, F)` calculates a
> function of the form _a + b x + c e^x_ that fits the points in the list.

#### `Fit( <List of points>, <Function> )`
  Returns a function that fits the _points_ in the list with minimum squared error with respect to the specified model. The given model _function_ must depend on one or more
  sliders, that are taken as start values of parameters to be optimized. The non-linear iteration might not converge,
  but adjusting the sliders to a better starting point might help.

> [!EXAMPLE]
> Let _a_ be slider with interval from _-5_ to _5_ and increment 1. `Fit({(-2, 3), (0, 1), (2, 1), (2, 3)}, a + x^2)`
> yields _-1 + x^2_.

> [!NOTE]
> * See also [FitExp](FitExp.md), [FitGrowth](FitGrowth.md),
> [FitLine](FitLine.md), [FitLineX](FitLineX.md), [FitLog](FitLog.md),
> [FitLogistic](FitLogistic.md), [FitPoly](FitPoly.md), [FitPow](FitPow.md)
> and [FitSin](FitSin.md)
> * If you work with big/small numbers, you should consider normalizing them for a more accurate result, see
> [Normalize Command](Normalize.md).
