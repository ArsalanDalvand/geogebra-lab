# RSquare Command

#### `RSquare( <List of Points>, <Function> )`
  Calculates the https://en.wikipedia.org/wiki/Coefficient_of_determination[coefficient of determination] _R² = 1 -
  [SSE](SumSquaredErrors.md) / [Syy](Syy.md)_, between the _y_-values of the points in the
  list and the function values of the _x_-values in the list.

> [!EXAMPLE]
> `RSquare({(-3, 2), (-2, 1), (-1, 3), (0, 4), (1, 2), (2, 4), (3, 3), (4, 5), (6, 4)}, 0.5x + 2.5)` yields _0.28_.
