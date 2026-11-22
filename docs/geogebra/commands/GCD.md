# GCD Command

> [!NOTE]
> 
> 
> This command differs among variants of English:
> 
> * GCD (US)
> * HCF (UK + Aus)

#### `GCD( <Number>, <Number> )`
  Calculates the greatest common divisor of the two numbers .

> [!EXAMPLE]
> `GCD(12, 15)` yields _3_.

#### `GCD( <List of Numbers> )`
  Calculates the greatest common divisor of the list of numbers.

> [!EXAMPLE]
> `GCD({12, 30, 18})` yields _6_.

## CAS Syntax
In the  [CAS View](CAS_View.md) you can also use the following syntax:

#### `GCD( <Polynomial>, <Polynomial> )`
  Calculates the greatest common divisor of the two polynomials.

> [!EXAMPLE]
> `GCD(x^2 + 4 x + 4, x^2 - x - 6)` yields _x + 2_.

#### `GCD( <List of Polynomials> )`
  Calculates the greatest common divisor of the list of polynomials.

> [!EXAMPLE]
> `GCD({x^2 + 4 x + 4, x^2 - x - 6, x^3 - 4 x^2 - 3 x + 18})` yields _x + 2_.

> [!NOTE]
> See also [LCM Command](LCM.md) and [ExtendedGCD Command](ExtendedGCD.md).
