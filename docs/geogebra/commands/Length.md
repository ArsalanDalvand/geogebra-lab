# Length Command

#### `Length( <Object> )`
  Yields the length of the object.

> [!EXAMPLE]
> * `Length( <Vector> )` yields the length of the vector.
> * `Length( <Point> )` yields the length of the position vector of the given point.
> * `Length( <List> )` yields the length of the list, which is the number of elements in the list.
> * `Length( <Text> )` yields the number of characters in the text.
> * `Length( <Locus> )` returns the number of points that the given locus is made up of. Use
> [Perimeter](Perimeter.md)(Locus) to get the length of the locus itself. For details see the article about
> [First Command](First.md).
> * `Length( <Arc> )` returns the _arc length_ (i.e. just the length of the curved section) of an arc or sector.

#### `Length( <Function>, <Start x-Value>, <End x-Value> )`
  Yields the length of the function graph in the given interval.

> [!EXAMPLE]
> `Length(2x, 0, 1)` returns _2.236067977_, about stem:[\sqrt{5}].

#### `Length( <Function>, <Start Point>, <End Point> )`
  Yields the length of the function graph between the two points.

> [!NOTE]
> If the given points do not lie on the function graph, their x‐coordinates are used to determine the interval.

#### `Length( <Curve>, <Start t-Value>, <End t-Value> )`
  Yields the length of the curve between the two values *of the parameter*.
#### `Length( <Curve>, <Start Point>, <End Point> )`
  Yields the length of the curve between the two points that lie on the curve.

## CAS Syntax

#### `Length( <Function>, <Start x-Value>, <End x-Value> )`
  Calculates the length of a function graph between the two points.

> [!EXAMPLE]
> `Length(2 x, 0, 1)` yields stem:[\sqrt{5}].

#### `Length( <Function>, <Variable>, <Start x-Value>, <End x-Value> )`
  Calculates the length of a function graph from _Start x-value_ to _End x-value_.

> [!EXAMPLE]
> `Length(2 a, a,  0, 1)` yields stem:[\sqrt{5}].

> [!NOTE]
> See also 
> [Distance or Length](Distance_or_Length.md) tool.
