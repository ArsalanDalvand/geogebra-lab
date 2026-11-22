# AreParallel Command

#### `AreParallel( <Line>, <Line> )`
  Decides if the lines are parallel.

Normally this command computes the result numerically. This behavior can be changed by using the
[Prove](Prove.md) command.

> [!EXAMPLE]
> `AreParallel(Line[(1, 2), (3, 4)), Line((5, 6),(7,8)))` yields _true_ since the given lines are parallel.

> [!NOTE]
> See also [AreCollinear](AreCollinear.md), [AreConcurrent](AreConcurrent.md),
> [AreCongruent](AreCongruent.md), [AreConcyclic](AreConcyclic.md),
> [AreEqual](AreEqual.md), [ArePerpendicular](ArePerpendicular.md),
> [IsTangent](IsTangent.md) commands.
