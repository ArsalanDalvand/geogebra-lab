# CFactor Command

> [!NOTE]
>  This command differs among variants of English:
> 
> * CFactor (US)
> * CFactorise (UK + Aus)

## CAS Syntax

#### `CFactor( <Expression> )`
  Factorizes a given expression, allowing for complex factors.

> [!EXAMPLE]
> `CFactor(x^2 + 4)` yields _(x + 2 ί) (x - 2 ί)_, the factorization of _x<sup>2</sup> + 4_.

#### `CFactor( <Expression>, <Variable> )`
  Factorizes an expression with respect to a given variable, allowing for complex factors.

> [!EXAMPLE]
> * `CFactor(a^2 + x^2, a)` yields _(ί x + a) (- ί x + a)_, the factorization of _a<sup>2</sup> + x<sup>2</sup>_ with respect to _a_.
> * `CFactor(a^2 + x^2, x)` yields _(x + ί a) (x - ί a)_, the factorization of _a<sup>2</sup> + x<sup>2</sup>_ with respect to _x_.

> [!NOTE]
> This command factors expressions over the https://en.wikipedia.org/wiki/Gaussian_rational[Complex Rational Numbers]. To
> factor over rational numbers, see the [Factor Command](Factor.md).
