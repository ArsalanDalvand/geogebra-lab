# Min Command

#### `Min( <List> )`
  Returns the minimum of the numbers within the list.

> [!EXAMPLE]
> `Min({-2, 12, -23, 17, 15})` yields _-23_.

> [!NOTE]
> If the input consists of non-numeric objects, then this command considers the numbers associated with those objects. If
> you have a list of segments for example, the command Min( <List> ) will yield the minimum segment length.

#### `Min( <Interval> )`

Returns the lower bound of the interval.

> [!EXAMPLE]
> `Min(2 < x < 3)` yields _2_ .

> [!NOTE]
> Open and closed intervals are not distinguished.

#### `Min( <Number>, <Number> )`

Returns the minimum of the two given numbers.

> [!EXAMPLE]
> `Min(12, 15)` yields _12_.

#### `Min( <Function>, <Start x-Value>, <End x-Value> )`
  Calculates (numerically) the *local* minimum point for function in the given interval. The function should be
  continuous, defined over its natural domain (i.e. no domain restrictions are applied), and have only one _local_ minimum point in the interval (and no local maximum).

> [!EXAMPLE]
> `Min(exp(x) x^3,-4,-2)` creates the point (-3, -1.34425) .

> [!NOTE]
> For polynomials you should use the [Extremum Command](Extremum.md).

#### `Min( <List of Data>, <List of Frequencies> )`
  Returns the minimum of the list of data with corresponding frequencies.

> [!EXAMPLE]
> `Min({1, 2, 3, 4, 5}, {0, 3, 4, 2, 3})` yields 2, the lowest number of the first list whose frequency is greater
> than 0.

> [!NOTE]
> * If you want the minimum of two functions `f(x)` and `g(x)` then you can define
> `(f(x) + g(x) - abs(f(x) - g(x)))/2`
> * See also [Max Command](Max.md), [Extremum Command](Extremum.md) and
> [Function Inspector Tool](Function_Inspector.md).

## CAS Syntax

#### `Min( <Function>, <Start x-Value>, <End x-Value> )`
  Unlike in the Algebra View, this syntax will give the minimum over the interval, including endpoints. The function should be
  continuous, defined over its natural domain (i.e. no domain restrictions are applied), and have only one _local_ minimum point in the interval (and no local maximum).

> [!EXAMPLE]
> * `Min(x^2,-1,2)` yields the point _(0,0)_
> * `Min(-x^2,-1,2)` yields the point _(2,-4)_
