# LCM Command

UK English: LCM = lowest common multiple

#### `LCM( <Number>, <Number> )`
  Calculates the least common multiple of two numbers.

> [!EXAMPLE]
> `LCM(12, 15)` yields _60_.

#### `LCM( <List of Numbers> )`
  Calculates the least common multiple of the elements in the list.

> [!EXAMPLE]
> `LCM({12, 30, 18})` yields _180_.

## CAS Syntax

In the  [CAS View](CAS_View.md) you can also use the following syntax:

#### `LCM( <Polynomial>, <Polynomial> )`
  Calculates the least common multiple of the two polynomials.

> [!EXAMPLE]
> `LCM(x^2 + 4 x + 4, x^2 - x - 6)` yields stem:[x^3 + x^2 - 8 x - 12].

#### `LCM( <List of Polynomials> )`
  Calculates the least common multiple of the polynomials in the list.

> [!EXAMPLE]
> `LCM({x^2 + 4 x + 4, x^2 - x - 6, x^3 - 4 x^2 - 3 x + 18})` yields stem:[x^4 - 2 x^3 - 11 x^2 + 12 x + 36].

> [!NOTE]
> See also [GCD Command](GCD.md).
