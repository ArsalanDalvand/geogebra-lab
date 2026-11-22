# Intervals

An interval is a set of numbers between upper and lower bound. To create an interval, type e.g. `2 < x < 3` in
[Input Bar](Input_Bar.md). Interval in previous example is open. You can also define closed (`2 ≤ x ≤ 3`) and
semi-closed (`2 ≤ x < 3`) intervals.

> [!NOTE]
> See also [Boolean values](Boolean_values.md).

To determine whether number _c_ belongs to interval _r_ type `r(c)` into the Input Bar, the result will be a Boolean
value. Generalization of intervals are [Inequalities](Inequalities.md).

## Commands for intervals

* [Min](Min.md), [Max](Max.md), [Midpoint](Midpoint.md) for an interval
with lower bound _a_ and upper bound _b_ return numbers _a_, _b_ and stem:[\frac{a+b}2] respectively. The result
doesn't depend on whether the interval is open, closed or semi-closed.
* [Point](Point.md) returns a moveable [point](Points_and_Vectors.md) whose x-coordinate belongs to
the interval and y-coordinate is 0.
* [PointIn](PointIn.md) returns a moveable point whose x-coordinate belongs to the interval and
y-coordinate may be changed arbitrarily.
