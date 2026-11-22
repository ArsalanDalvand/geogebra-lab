# FitLogistic Command

#### `FitLogistic( <List of Points> )`
  Calculates the regression curve in the form stem:[\frac{a}{1+b e^{-kx}}].

> [!EXAMPLE]
> `FitLogistic({(-6, 2), (0, 2), (3, 4), (3.4, 8)})` yields stem:[ \frac{1.98}{1 - 0.03 e^{1x}}].

> [!NOTE]
> * The first and last data points should be fairly close to the curve. The list should have at least 3 points, preferably
> more. All points should have positive y-coordinates
> * See also [Fit](Fit.md), [FitExp](FitExp.md), [FitGrowth](FitGrowth.md),
> [FitLine](FitLine.md), [FitLineX](FitLineX.md), [FitLog](FitLog.md),
> [FitPoly](FitPoly.md), [FitPow](FitPow.md) and [FitSin](FitSin.md).
> * If you work with big/small numbers, you should consider normalizing them for a more accurate result, see
> [Normalize Command](Normalize.md).
