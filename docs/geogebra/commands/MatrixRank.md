# MatrixRank Command

#### `MatrixRank( <Matrix> )`
  Returns the https://en.wikipedia.org/wiki/Rank_(linear_algebra)[rank] of given matrix.

> [!EXAMPLE]
> * `MatrixRank({{2, 2}, {1, 1}})` yields _1_.
> * `MatrixRank({{1, 2}, {3, 4}})` yields _2_.
> * Let `A = {{1, 2, 3}, {1, 1, 1}, {2, 2, 2}}` be a 3x3-matrix. `MatrixRank(A)` yields _2_.

> [!NOTE]
> * Hint:* In the  [CAS View](CAS_View.md) this command also works with undefined variables.

> [!EXAMPLE]
> `MatrixRank({{1, 2}, {k*1,  k*2}})` yields _1_.
