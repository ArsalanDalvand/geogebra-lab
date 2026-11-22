# Factor Command

> [!NOTE]
>  This command differs among variants of English:
> 
> * Factor (US)
> * Factorise (UK + Aus)

#### `Factor( <Polynomial> )`
  Factors the polynomial.

> [!EXAMPLE]
> `Factor(x^2 + x - 6)` yields _(x - 2) (x + 3)_.

> [!NOTE]
> This command needs to load the Computer Algebra System, so can be slow on some computers.

## CAS Syntax

In the  [CAS View](CAS_View.md) you can also
use the following syntax:

#### `Factor( <Number> )`
  Expresses a number in its prime factorization

> [!EXAMPLE]
> `Factor(360)` yields _2³ 3² 5_.

#### `Factor( <Expression>, <Variable> )`
  Factors an expression with respect to a given variable.

> [!EXAMPLE]
> * `Factor(x^2 - y^2, x)` yields _(x - y) (x + y)_, the factorization of _x<sup>2</sup> - y<sup>2</sup>_ with respect to _x_,
> * `Factor(x^2 - y^2, y)` yields _-(y - x) (y + x)_, the factorization of _x<sup>2</sup> - y<sup>2</sup>_ with respect to _y_.

> [!NOTE]
> This command factors expressions over the https://en.wikipedia.org/wiki/Rational_number[Rational Numbers]. To factor over
> irrational real numbers, see the [IFactor Command](IFactor.md). To factor over complex numbers, see the
> [CFactor Command](CFactor.md) and [CIFactor Command](CIFactor.md).
