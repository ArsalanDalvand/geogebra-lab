# UnitVector Command

#### `UnitVector( <Vector> )`
  Yields a vector with length 1, which has the same direction and orientation as the given vector. The vector must be
  defined first.

> [!EXAMPLE]
> Let _v=stem:[\begin{pmatrix}3\\4\end{pmatrix}]_. `UnitVector(v)` yields
> _stem:[\begin{pmatrix}0.6\\0.8\end{pmatrix}]_.

#### `UnitVector( <Line> )`
  Yields the direction vector of the given line with length 1.

> [!EXAMPLE]
> `UnitVector(3x + 4y = 5)` yields _stem:[\begin{pmatrix}0.8\\-0.6\end{pmatrix}]_.

#### `UnitVector( <Segment> )`
  Yields the direction vector of the given segment with length 1.

> [!EXAMPLE]
> Let `s = Segment((1,1),(4,5))`.
> 
> `UnitVector(s)` yields _stem:[\begin{pmatrix}0.6\\0.8\end{pmatrix}]_.

> [!NOTE]
> * Hint:* In the  [CAS View](CAS_View.md) three-dimensional vectors and vectors with undefined variables
> are also valid inputs.

> [!EXAMPLE]
> * `UnitVector((a, b))` yields _(stem:[\frac{a}{\sqrt{a^2 + b^2}}], stem:[\frac{b}{\sqrt{a^2 + b^2}}])_.
> * `UnitVector((2, 4, 4))` yields _(stem:[\frac{1}{3}], stem:[\frac{2}{3}], stem:[\frac{2}{3}])_.
