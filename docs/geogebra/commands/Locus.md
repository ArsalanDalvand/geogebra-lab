# Locus Command

#### `Locus( <Point Creating Locus Line Q>, <Point P>)`
  Returns the locus curve of the point _Q_, which depends on the point _P_.

> [!NOTE]
> Point _P_ needs to be a point on an object (e. g. line, segment, circle).

#### `Locus( <Point Creating Locus Line Q>, <Slider t>)`
  Returns the locus curve of the point _Q_, which depends on the values assumed by the slider _t_.
#### `Locus( <Slopefield>, <Point> )`
  Returns the locus curve which equates to the slopefield at the given point.
#### `Locus( <f(x, y)>, <Point> )`
  Returns the locus curve which equates to the solution of the differential equation stem:[\frac{dy}{dx}=f(x,y)] in
  the given point. The solution is calculated numerically.

Loci are specific object types, and appear as [auxiliary objects](Free_Dependent_and_Auxiliary_Objects.md).
Besides Locus command, they are the result of some [Discrete Math Commands](Discrete_Math_Commands.md)
and [SolveODE Command](SolveODE.md). Loci are [paths](Geometric_Objects.md) and can be used within
path-related commands such as [Point](Point.md). Their properties depend on how they were obtained, see
e.g. [Perimeter Command](Perimeter.md) and [First Command](First.md).

> [!NOTE]
> See also  [Locus](Locus.md) tool.

 *Warning*

A locus is undefined when the dependent point is the result of a [Point Command](Point.md) with two parameters, or a
[PathParameter Command](PathParameter.md).
