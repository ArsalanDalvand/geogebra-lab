# Cauchy Command

#### `Cauchy( <Median>, <Scale>, <Variable value> )`
  Calculates the value of the cumulative density function (cdf) at the given _variable value v_ of a https://en.wikipedia.org/wiki/Cauchy_distribution[Cauchy distribution], that is the probability _P(X≤v)_ where _X_ is a random variable of a Cauchy distribution of given parameters _median_ and _scale_.

> [!EXAMPLE]
> `Cauchy(1, 2, 3)` yields _0.75_ in the  [Algebra View](Algebra_View.md) and _stem:[\frac{3}{4}]_ in the
>  [CAS View](CAS_View.md).

> [!NOTE]
> This syntax returns the probability for a given value, that is the area under the Cauchy distribution curve to the left of the given _x_-coordinate.

#### `Cauchy( <Median>, <Scale>, <Variable value>, <Boolean Cumulative>)`
  If _Cumulative_ is _true_, calculates the value of a cumulative distribution function of a Cauchy distribution at _variable value_, otherwise it calculates the value of the probability density function (pdf) at _variable value_ of the given Cauchy distribution of parameters _median_ and _scale_.

#### `Cauchy( <Median>, <Scale>, x, <Boolean Cumulative>)`
  If _Cumulative_ is _true_, creates the cumulative distribution function of a Cauchy distribution, otherwise creates the probability density function of the given Cauchy distribution of parameters _median_ and _scale_.
