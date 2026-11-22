# Substitute Command

## CAS Syntax

#### `Substitute( <Expression>, <from>, <to> )`
  Replaces in _expression_ all occurrences of _from_ with _to_ and evaluates the result when variables are substituted with values.

> [!EXAMPLE]
> * `Substitute((3 m - 3)^2 - (m + 3)^2, m, a)` yields _8 a<sup>2</sup> - 24 a_.
> 
> * `Substitute((3 m - 3)^2 - (m + 3)^2, m, 2)` yields _-16_.

#### `Substitute( <Expression>, <Substitution List> )`
  Replaces in _expression_ every occurrence of the variables in the _substitution list_ with the corresponding terms or values, and evaluates numerical substitutions.

> [!EXAMPLE]
> * `Substitute(2x + 3y - z, {x = a, y = 2, z = b})` yields _2a - b + 6_.
> 
> * `Substitute(2x + 3y - z, x = a, y = 2, z = b)` yields _2a - b + 6_.
