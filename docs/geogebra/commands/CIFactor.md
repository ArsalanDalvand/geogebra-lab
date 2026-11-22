# CIFactor Command

## CAS Syntax

#### `CIFactor( <Expression> )`
  Factors over the complex irrationals.

> [!EXAMPLE]
> `CIFactor(x^2 + x + 1)` returns stem:[ \left( x + \frac{-ί \sqrt{3} + 1}{2} \right) \left( x + \frac{ί \sqrt{3}
> + 1}{2} \right)]

#### `CIFactor( <Expression>, <Variable> )`
  Factors over the complex irrationals with respect to a given variable.

> [!EXAMPLE]
> `CIFactor(a^2 + a + 1, a)` returns stem:[ \left( a + \frac{-ί \sqrt{3} + 1}{2} \right) \left( a + \frac{ί
> \sqrt{3} + 1}{2} \right)]

> [!NOTE]
> See also [IFactor](IFactor.md) command.
