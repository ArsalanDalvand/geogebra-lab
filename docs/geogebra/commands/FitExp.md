# FitExp Command

#### `FitExp( <List of Points> )`
  Calculates the exponential regression curve in the form _aℯ<sup>bx</sup>_.

> [!EXAMPLE]
> `FitExp({(0, 1), (2, 3), (4, 3), (6, 4)})` yields _1.31ℯ^0.21x^_.

> [!NOTE]
> * If you want the answer in the form stem:[ a b ^ x ] then use the [FitGrowth Command](FitGrowth.md).
> * You can do a direct least-squares fitting with `Fit(list, a*exp(b*x))`
> * Euler's number ℯ can be obtained by pressing [.kcode]#ALT# + [.kcode]#e#.
> * See also [Fit](Fit.md), [FitGrowth](FitGrowth.md), [FitLine](FitLine.md),
> [FitLineX](FitLineX.md), [FitLog](FitLog.md),
> [FitLogistic](FitLogistic.md), [FitPoly](FitPoly.md), [FitPow](FitPow.md)
> and [FitSin](FitSin.md).
