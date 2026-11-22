# SetValue Command

#### `SetValue( <Boolean>, <0|1> )`
  Sets the state of a boolean / check box : 1 = true, 0 = false

> [!EXAMPLE]
> If _b_ is a boolean, ` SetValue(b,1)` sets the boolean _b_ as _true_.

#### `SetValue( <Object>, <Object> )`
  Let _A_ be the first and _B_ the second object. If _A_ is a [free
  object](Free_Dependent_and_Auxiliary_Objects.md) or a [Point](Points_and_Vectors.md) restricted to [Path or Region](Geometric_Objects.md), its
  value is set to current value of _B_ (i.e. _A_ doesn't change value if _B_ is changed afterwards).

> [!EXAMPLE]
> If _f_ is a function, `SetValue(f, RandomElement({cos(x), 3x+2, ln(x)}))` defines, at random, f as being one of the
> functions proposed in the list.

#### `SetValue( <List>, <Number>, <Object> )`
  Let _n_ be the _<Number>_. The command SetValue sets the n-th element of a free list to the current value of the
  object. Number _n_ can be at most 1 + length of L.

#### `SetValue( <Dependent Object>, ? )`
  This is a special syntax that will set a dependent object to undefined without needing to fully redefine it using
  `=`.

#### `SetValue( <[drop-down list](Action_Objects.md)>, <Number n > )`
  Set _n_ as [the index of the selected element](SelectedIndex.md) in the drop-down list.
