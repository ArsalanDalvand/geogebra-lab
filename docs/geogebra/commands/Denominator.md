# Denominator Command

#### `Denominator( <Function> )`
  Returns the denominator of a function.

> [!EXAMPLE]
> `Denominator(5 / (x^2 + 2))` yields _f(x)=(x<sup>2</sup> + 2)_.

#### `Denominator( <Number> )`
  For a rational number returns its (simplified) denominator. It uses a numerical method, which limits this command to numbers with
  small denominator. For irrational input the denominator of its [continued
  fraction](ContinuedFraction.md) is returned.

> [!EXAMPLE]
> * `Denominator(5 / 3)` yields 3.
> * `Denominator(10 / 6)` yields 3.
> * `Denominator(15 / 3)` yields 1.

> [!NOTE]
> See also [Numerator Command](Numerator.md) and [FractionText Command](FractionText.md).

## CAS Syntax

#### `Denominator( <Expression> )`
  Returns the denominator of a rational number or expression.

> [!EXAMPLE]
> `Denominator(2 / 3 + 1 / 15)` yields _15_.
