# CSolutions Command

## CAS Syntax

#### `CSolutions( <Equation> )`
  Solves a given equation for the main variable and returns a list of all solutions, allowing for complex solutions.

> [!EXAMPLE]
> `CSolutions(x^2 = -1)` yields _{ί, -ί}_, the complex solutions of _x<sup>2</sup> = -1_.

#### `CSolutions( <Equation>, <Variable> )`
  Solves an equation for a given unknown variable and returns a list of all solutions, allowing for complex solutions.

> [!EXAMPLE]
> `CSolutions(a^2 = -1, a)` yields _{ί, -ί}_, the complex solutions of _a<sup>2</sup> = -1_.

#### `CSolutions( <List of Equations>, <List of Variables> )`
  Solves a set of equations for a given set of unknown variables and returns a list of all solutions, allowing for
  complex solutions.

> [!EXAMPLE]
> `CSolutions({y^2 = x - 1, x = 2 * y - 1}, {x, y})` yields stem:[\begin{pmatrix}1 + 2 ί&1 + ί\\1 - 2 ί&1 -
> ί\end{pmatrix}], the complex solutions of _y<sup>2</sup> = x - 1_ and _x = 2 * y - 1_.

> [!NOTE]
> * The complex ί is obtained by pressing [.kcode]#ALT# + [.kcode]#i#.
> * See also [CSolve Command](CSolve.md) and [Solutions Command](Solutions.md).
