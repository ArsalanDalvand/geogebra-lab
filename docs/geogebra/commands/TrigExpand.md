# TrigExpand Command

#### `TrigExpand( <Expression> )`
  Expands trigonometric functions of a sum of variables into trigonometric functions of a single variable, or expands products of trigonometric functions into linear expressions.

> [!EXAMPLE]
> `TrigExpand(tan(x + y))` gives stem:[\frac{\frac{\sin(x)}{\cos(x)}+\frac{\sin(y)}{\cos(y)}}
> {1-\frac{\sin(x)}{\cos(x)} \cdot \frac{\sin(y)}{\cos(y)}} ].
> 
> 
> `TrigExpand(sin(x)sin(x/3))` gives stem:[\frac{1}{2} \; \cos \left( 2 \cdot \frac{x}{3} \right) -
> \frac{1}{2} \; \cos \left( 4 \cdot \frac{x}{3} \right) ].

#### `TrigExpand( <Expression>, <Target Function> )`
  Expands trigonometric functions of a sum of variables into expressions containing (when possible) the given target function of a single variable.

> [!EXAMPLE]
> `TrigExpand(tan(x + y), tan(x))` gives stem:[\frac{-\tan(x) - \tan(y)}{\tan(x) \tan(y) - 1}].

## CAS Syntax

CAS syntaxes may show different results, depending on the selected output mode:

> [!EXAMPLE]
> `TrigExpand(tan(x + y))` in  _Evaluate_ mode
> gives stem:[\frac{\frac{\sin(x)}{\cos(x)}+\frac{\sin(y)}{\cos(y)}} {1-\frac{\sin(x)}{\cos(x)} \cdot
> \frac{\sin(y)}{\cos(y)}} ] in  _Numeric_ mode gives
> stem:[\frac{\sin(x) \cos(y) + \sin(y) \cos(x)}{- \sin(x) \sin(y) +\cos(x) \cos(y) }] .

The following commands are only available in the 
[CAS View](CAS_View.md):

#### `TrigExpand( <Expression>, <Target Function>, <Target Variable> )`
  Expands trigonometric expressions into expressions containing (when possible) only the given target function and variable.

> [!EXAMPLE]
> * `TrigExpand(sin(x), sin(x), x/2)` gives stem:[2\cos \left( \frac{x}{2} \right) \sin \left( \frac{x}{2} \right) ]
> * `TrigExpand(sin(x)/(1+cos(x)), tan(x), x/2)` gives stem:[\tan \left( \frac{x}{2} \right)].

#### `TrigExpand( <Expression>, <Target Function>, <Target Variable>, <Target Variable> )`
  Expands trigonometric expressions into expressions containing (when possible) only the given target function and variables.

> [!EXAMPLE]
> `TrigExpand(csc(x) - cot(x) + csc(y) - cot(y), tan(x), x/2, y/2)` gives stem:[\tan \left( \frac{x}{2} \right) +\tan
> \left( \frac{y}{2} \right) ].

> [!NOTE]
> See also [TrigSimplify Command](TrigSimplify.md) and [TrigCombine
> Command](TrigCombine.md).
