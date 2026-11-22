# Simplify Command

#### `Simplify( <Function> )`
  Simplifies the terms of the given function, if possible.

> [!EXAMPLE]
> `Simplify(x + x + x)` yields the function _f(x) = 3x_.

#### `Simplify( <Text> )`
  Attempts to tidy up text expressions by removing repeated negatives etc.

> [!EXAMPLE]
> For _a_ = _b_ = _c_ = -1 `Simplify("f(x) = " + a + "x² + " + b + "x + " + c)` yields the text _f(x) = -x<sup>2</sup> - x -
> 1_.

> [!NOTE]
> The [FormulaText Command](FormulaText.md) normally produces better results and is simpler.

> [!NOTE]
> This command needs to load the Computer Algebra System, so can be slow on some computers. Try using the
> [Polynomial Command](Polynomial.md) instead.

## CAS Syntax

#### `Simplify( <Function> )`
  Simplifies the terms of the given function, if possible. Undefined variables can be included in the terms.

> [!EXAMPLE]
> * `Simplify(3 * x + 4 * x + a * x)` yields ` a x + 7x`.
> * `Assume(x<2,Simplify(sqrt(x-2sqrt(x-1))))` yields `-sqrt(abs(x - 1)) + 1`
> * `Assume(x>2,Simplify(sqrt(x-2sqrt(x-1))))` yields `sqrt(x - 1) + 1`

> [!NOTE]
> See also [Factor Command](Factor.md), [Assume Command](Assume.md),
> [PartialFractions Command](PartialFractions.md), [Expand Command](Expand.md),
> [Polynomial Command](Polynomial.md).
