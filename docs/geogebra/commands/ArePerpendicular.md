# ArePerpendicular Command

#### `ArePerpendicular( <Line>, <Line> )`
  Decides if the lines are perpendicular.
  Normally this command computes the result numerically. This behavior can be changed by using the
  [Prove](Prove.md) command.

> [!EXAMPLE]
> `ArePerpendicular(Line((-1, 0), (0, -1)), Line((0, 0),(2,2)))` yields _true_ since the given lines are
> perpendicular.

> [!NOTE]
> See also [AreCollinear](AreCollinear.md), [AreConcurrent](AreConcurrent.md),
> [AreConcyclic](AreConcyclic.md), [AreCongruent](AreCongruent.md),
> [AreEqual](AreEqual.md), [AreParallel](AreParallel.md),
> [IsTangent](IsTangent.md) commands.
