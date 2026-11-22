# IsTangent Command

#### `IsTangent( <Line>, <Conic> )`
  Decides if the line is tangent to the conic.

Normally this command computes the result numerically. This behavior can be changed by using the
[Prove](Prove.md) command.

> [!EXAMPLE]
> `IsTangent(Line((0,0),(1,0)),Circle((0,1),1))` yields _true_.

> [!NOTE]
> See also [AreCollinear](AreCollinear.md), [AreConcurrent](AreConcurrent.md),
> [AreCongruent](AreCongruent.md), [AreConcyclic](AreConcyclic.md),
> [AreEqual](AreEqual.md), [AreParallel](AreParallel.md),
> [ArePerpendicular](ArePerpendicular.md) commands.
