# AreEqual Command

#### `AreEqual( <Object>, <Object> )`
  Decides if the objects are equal.

Normally this command computes the result numerically. This behavior can be changed by using the
[Prove](Prove.md) command.

> [!EXAMPLE]
> `AreEqual(Circle((0, 0),1),x^2+y^2=1)` yields _true_ since the two circles have the same center and radius.

> [!NOTE]
> * `AreEqual(Segment((1, 2), (3, 4)), Segment((3, 4), (1, 6)))` is different from
> `Segment((1, 2), (3, 4)) == Segment((3, 4), (1, 6))` as the latter compares just the lengths
> * See also [AreCollinear](AreCollinear.md), [AreConcyclic](AreConcyclic.md),
> [AreConcurrent](AreConcurrent.md), [AreCongruent](AreCongruent.md),
> [ArePerpendicular](ArePerpendicular.md), [AreParallel](AreParallel.md),
> [IsTangent](IsTangent.md) commands.
