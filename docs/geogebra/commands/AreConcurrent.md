# AreConcurrent Command

#### `AreConcurrent( <Line>, <Line>, <Line> )`
  Decides if the lines are concurrent. If the lines are parallel, they considered to have a common point in infinity,
  thus this command returns _true_ in this case.

Normally this command computes the result numerically. This behavior can be changed by using the
[Prove](Prove.md) command.

> [!EXAMPLE]
> `AreConcurrent(Line((1, 2), (3, 4)), Line((1, 2), (3, 5)), Line((1, 2), (3, 6)))` yields _true_ since all three
> lines contain the point (1,2).

> [!NOTE]
> See also [AreCollinear](AreCollinear.md), [AreConcyclic](AreConcyclic.md),
> [AreCongruent](AreCongruent.md), [AreEqual](AreEqual.md),
> [ArePerpendicular](ArePerpendicular.md), [AreParallel](AreParallel.md),
> [IsTangent](IsTangent.md) commands.
