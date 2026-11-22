# Zipf Command

#### `Zipf( <Number of Elements>, <Exponent> )`
  Returns a bar graph of a https://en.wikipedia.org/wiki/Zipf%27s_law[Zipf distribution].
  Parameters:
  _Number of Elements_: number of elements whose rank we study
  _Exponent_: exponent characterizing the distribution
#### `Zipf( <Number of Elements>, <Exponent> , <Boolean Cumulative> )`
  Returns a bar graph of a _Zipf distribution_ when _Cumulative_ = false.
  Returns a graph of a cumulative Zipf distribution when _Cumulative_ = true.
  First two parameters are same as above.
#### `Zipf( <Number of Elements>, <Exponent> , <Variable Value v>, <Boolean Cumulative> )`
  Let X be a Zipf random variable.
  Returns P( X = _v_) when _Cumulative_ = false.
  Returns P( X ≤ _v_) when _Cumulative_ = true.
  First two parameters are same as above.

> [!EXAMPLE]
> `Zipf(10, 1 , 5, false)` yields _0.07_ in the  _Algebra View_ and _stem:[\frac{504}{7381}]_ in the
>  _CAS View_.
