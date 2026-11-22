# TrigCombine Command

#### `TrigCombine( <Expression> )`
  Combines products of trigonometric terms into sums, or combines sums of trigonometric terms into an expression containing only a trigonometric function.

> [!EXAMPLE]
> * `TrigCombine(sin(x) cos(3x))` gives stem:[\frac{1}{2} \sin \left( 4 x \right) - \frac{1}{2} \sin \left( 2 x \right)]
> * `TrigCombine(sin(x) + cos(x))` gives stem:[\sqrt{2} \cos \left( x - \frac{1}{4} \pi \right)].

#### `TrigCombine( <Expression>, <Target Function> )`
  Combines the terms of a trigonometric expression into an equivalent expression, containing only the given target function.

> [!EXAMPLE]
> `TrigCombine(sin(x) + cos(x), sin(x))` gives stem:[\sqrt{2} \sin \left( x + \frac{1}{4} \pi \right)].

> [!NOTE]
> * In the  [CAS View](CAS_View.md) undefined
> variables can be used as well.
> 
> +
> [EXAMPLE]

`TrigCombine(sin(p) cos(3p))` gives stem:[\frac{1}{2} \sin \left( 4 p \right) - \frac{1}{2} \sin \left( 2 p \right)].

====

* See also [TrigExpand Command](TrigExpand.md) and [TrigSimplify
Command](TrigSimplify.md).

====
