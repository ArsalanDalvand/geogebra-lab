# JordanDiagonalization Command

> [!NOTE]
> 
> 
> This command differs among variants of English:
> 
> * JordanDiagonalization (US)
> * JordanDiagonalisation (UK + Aus)

## CAS Syntax

#### `JordanDiagonalization( <Matrix> )`
  Decomposes the given matrix into the form S J S⁻¹ where J is in
  https://mathworld.wolfram.com/JordanCanonicalForm.html[Jordan Canonical Form]

> [!EXAMPLE]
> `JordanDiagonalization({{1, 2}, {3, 4}})` yields stem:[ \left(\begin{array}{}\sqrt{33} - 3&-\sqrt{33} -
> 3\\6&6\\\end{array}\right) ], stem:[ \left(\begin{array}{}\frac{\sqrt{33} + 5}{2}&0\\0&\frac{-\sqrt{33} +
> 5}{2}\\\end{array}\right) ]

> [!NOTE]
> * See also [Eigenvalues Command](Eigenvalues.md), [Eigenvectors Command](Eigenvectors.md),
> [SVD Command](SVD.md), [Invert Command](Invert.md),
> [Transpose Command](Transpose.md)
