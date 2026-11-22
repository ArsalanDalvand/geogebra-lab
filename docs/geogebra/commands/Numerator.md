# Numerator Command

#### `Numerator( <Function> )`
  Returns the numerator of the function.

> [!EXAMPLE]
> `Numerator((3x² + 1) / (2x - 1))` yields _f(x) = 3x² + 1_.

#### `Numerator( <Number> )`
  For a rational number returns its (simplified) numerator. It uses a numerical method, which limits this command to numbers with
  small denominator. For irrational input the numerator of its [continued fraction](ContinuedFraction.md)
  is returned.

> [!EXAMPLE]
> * `Numerator(5 / 3)` yields 5.
> * `Numerator(10 / 6)` yields 5.
> * `Numerator(15 / 3)` yields 5.

> [!NOTE]
> See also [Denominator Command](Denominator.md) and [FractionText
> Command](FractionText.md).

## CAS Syntax

#### `Numerator( <Expression> )`
  Returns the numerator of a rational number or expression.

> [!EXAMPLE]
> * `Numerator(2/3 + 1/15)` yields _11_.
> * If variables _a, b_ and _c_ haven't been previously defined in GeoGebra, then `Numerator(a/b)` yields _a_ and
> `Numerator(Simplify(a + b/c))` yields _a c + b_
