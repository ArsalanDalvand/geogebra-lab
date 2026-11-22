# AreCongruent Command

#### `AreCongruent( <Object>, <Object> )`
  Decides if the objects are congruent.

Normally this command computes the result numerically. This behavior can be changed by using the
[Prove](Prove.md) command.

> [!EXAMPLE]
> `AreCongruent(Circle((0, 0),1),x^2+y^2=1)` and `AreCongruent(Circle((1, 1),1),x^2+y^2=1)` yield _true_ since the
> two circles have the same radius.

> [!NOTE]
> See also [AreEqual](AreEqual.md), [AreCollinear](AreCollinear.md),
> [AreConcyclic](AreConcyclic.md), [AreConcurrent](AreConcurrent.md),
> [ArePerpendicular](ArePerpendicular.md), [AreParallel](AreParallel.md),
> [IsTangent](IsTangent.md) commands.
