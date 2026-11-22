# AreConcyclic Command

#### `AreConcyclic( <Point>, <Point>, <Point>, <Point> )`
  Decides if the points are concyclic.

Normally this command computes the result numerically. This behavior can be changed by using the
[Prove](Prove.md) command.

> [!EXAMPLE]
> `AreConcyclic((1, 2), (3, 4), (1, 4), (3, 2))` yields _true_ since the points are lying on the same circle.

> [!NOTE]
> See also [AreCollinear](AreCollinear.md), [AreConcurrent](AreConcurrent.md),
> [AreCongruent](AreCongruent.md), [AreEqual](AreEqual.md),
> [ArePerpendicular](ArePerpendicular.md), [AreParallel](AreParallel.md),
> [IsTangent](IsTangent.md) commands.
