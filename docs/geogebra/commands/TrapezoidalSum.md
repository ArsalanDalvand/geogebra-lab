# TrapezoidalSum Command

> [!NOTE]
> 
> 
> This command differs among variants of English:
> 
> * TrapezoidalSum (US)
> * TrapeziumSum (UK + Aus)

#### `TrapezoidalSum( <Function>, <Start x-Value>, <End x-Value>, <Number of Trapezoids> )`
  Calculates the trapezoidal sum of the function in the interval [_Start x-Value, End x-Value_] using _n_ trapezoids.

> [!EXAMPLE]
> `TrapezoidalSum(x^2, -2, 3, 5)` yields _12.5_.

> [!NOTE]
> This command draws the trapezoids of the trapezoidal sum as well.
> * This command is designed as a visual aid so won't give accurate answers if the number of rectangles is too large.
> * See also the commands: [LowerSum](LowerSum.md), [LeftSum](LeftSum.md),
> [RectangleSum](RectangleSum.md) and [UpperSum](UpperSum.md).
