# RandomPolynomial Command

#### `RandomPolynomial( <Degree> , <Minimum for Coefficients>, <Maximum for Coefficients> )`
  Returns a randomly generated polynomial in _x_ of degree _d_, whose (integer) coefficients are in the range from
  _minimum_ to _maximum_, both included.

> [!EXAMPLE]
> * `RandomPolynomial(0, 1, 2)` yields either _1_ or _2_.
> * `RandomPolynomial(2, 1, 2)` yields a random polynomial with a degree of two and only _1_ and _2_ as coefficients,
> for example _2x<sup>2</sup> + x + 1_.

## CAS Syntax

The following command is only available in the 
[CAS View](CAS_View.md).

#### `RandomPolynomial( <Variable>, <Degree> , <Minimum for Coefficients>, <Maximum for Coefficients> )`
  Returns a randomly generated polynomial in _Variable_ of degree _d_, whose (integer) coefficients are in the range
  from _minimum_ to _maximum_, both included.

> [!EXAMPLE]
> * `RandomPolynomial(a, 0, 1, 2)` yields either _1_ or _2_.
> * `RandomPolynomial(a, 2, 1, 2)` yields a random polynomial with a degree of two and only _1_ and _2_ as
> coefficients, for example _2a<sup>2</sup> + a + 1_.

> [!NOTE]
> In both cases if _minimum_ or _maximum_ are not integers, _round(minimum)_ and _round(maximum)_ are used instead.
