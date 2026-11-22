# PartialFractions Command

#### `PartialFractions( <Function> )`
  Yields, if possible, the https://en.wikipedia.org/wiki/Partial_fraction[partial fraction] of the given function for the
  main function variable. The graph of the function is plotted in the  [Graphics View](Graphics_View.md).

> [!EXAMPLE]
> `PartialFractions(x^2 / (x^2 - 2x + 1))` yields _1 + stem:[\frac{1}{(x - 1)²}] + stem:[\frac{2}{x-1}]_.

> [!NOTE]
> * Hint:* In the  [CAS View](CAS_View.md) you can also use the following syntax:

#### `PartialFractions( <Function>, <Variable> )`
  Yields, if possible, the partial fraction of the given function for the given function variable.

> [!EXAMPLE]
> `PartialFractions(a^2 / (a^2 - 2a + 1), a)` yields _1 + stem:[\frac{1}{(a - 1)²}] + stem:[\frac{2}{(a-1)}]_.
