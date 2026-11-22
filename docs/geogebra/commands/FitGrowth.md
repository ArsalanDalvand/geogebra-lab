# FitGrowth Command

#### `FitGrowth( <List of Points> )`
  Calculates a function of the form stem:[ a b ^ x ] to the points in the list. (Very similar to
  [FitExp](FitExp.md)[ <List of Points> ], just in a slightly different form).

> [!EXAMPLE]
> `FitGrowth({(0, 1), (2, 3), (4, 3), (6, 4)})` yields _1.31_ stem:[ \cdot ] _1.23<sup>x</sup>_.

> [!NOTE]
> * You can do a direct least-squares fitting with `Fit(list, a*b^x)`
> * See also [Fit](Fit.md), [FitExp](FitExp.md), [FitLine](FitLine.md),
> [FitLineX](FitLineX.md), [FitLog](FitLog.md),
> [FitLogistic](FitLogistic.md), [FitPoly](FitPoly.md), [FitPow](FitPow.md)
> and [FitSin](FitSin.md)
