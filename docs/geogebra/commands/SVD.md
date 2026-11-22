# SVD Command

#### `SVD( <Matrix> )`
  Returns the https://en.wikipedia.org/wiki/Singular_value_decomposition[Singular Value Decomposition] of the matrix (as
  a list of 3 matrices).

> [!EXAMPLE]
> `SVD({{3, 1, 1}, {-1, 3, 1}})` yields a list containing stem:[
> \left(\begin{array}{rr}-0.71&0.71\\0.71&0.71\\\end{array}\right) ], stem:[
> \left(\begin{array}{rr}3.16&0\\0&3.46\\\end{array}\right)],
> stem:[\left(\begin{array}{rr}-0.89&0.41\\0.45&0.82\\0&0.41\\\end{array}\right)].

> [!NOTE]
> * This command is also supported in the 
> [CAS View](CAS_View.md). The numbers in the answer may vary in order between the
>  _Algebra View_ and
>  _CAS View_.
> * See also [Eigenvalues Command](Eigenvalues.md), [Eigenvectors Command](Eigenvectors.md),
> [Invert Command](Invert.md), [Transpose Command](Transpose.md),
> [JordanDiagonalization Command](JordanDiagonalization.md)
