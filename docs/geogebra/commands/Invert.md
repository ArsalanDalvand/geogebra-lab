# Invert Command

#### `Invert( <Matrix> )`
  Inverts the given matrix.

> [!EXAMPLE]
> `Invert({{1, 2}, {3, 4}})` yields stem:[\begin{pmatrix}-2 & 1\\1.5 & -0.5\end{pmatrix}], the inverse matrix of
> stem:[\begin{pmatrix}1 & 2\\3 & 4\end{pmatrix}].

> [!NOTE]
> * In the  [CAS View](CAS_View.md) undefined
> variables are allowed too.

> [!EXAMPLE]
> `Invert({{a, b}, {c, d}})` yields stem:[\begin{pmatrix}\frac{d}{ad- bc} & \frac{-b}{ad- bc}\\\frac{-c}{ad-
> bc}& \frac{a}{ad- bc}\end{pmatrix}], the inverse matrix of stem:[\begin{pmatrix}a & b\\c & d\end{pmatrix}].

#### `Invert( <Function> )`
  Gives the inverse of the function.

> [!EXAMPLE]
> `Invert(sin(x))` yields _asin(x)_.

> [!NOTE]
> * No account is taken of domain or range, for example for f(x) = x<sup>2</sup> or f(x) = sin(x).
> 
> * The command works faster for functions that only contain one _x_.
> To make your construction more efficient you may want to rearrange your functions and use eg `NInvert((x+1)^2-1)` rather than `NInvert(x^2+2x)`.
> 
> * See also [NInvert Command](NInvert.md), [Eigenvalues Command](Eigenvalues.md), [Eigenvectors Command](Eigenvectors.md),
> [SVD Command](SVD.md), [Transpose Command](Transpose.md), [JordanDiagonalization Command](JordanDiagonalization.md)
