# Matrices

GeoGebra supports real matrices, which are represented as a list of [lists](Lists.md) that contain the rows of the
matrix.

> [!EXAMPLE]
> In GeoGebra, `{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}` represents the 3x3 matrix stem:[\begin{pmatrix}1&2&3\\ 4&5&6\\ 7&8&9
> \end{pmatrix}]

To display a matrix using LaTeX formatting in the  [Graphics View](Graphics_View.md), use the [FormulaText](FormulaText.md)
command or drag and drop the matrix definition from _Algebra View_ to _Graphics View_.

> [!EXAMPLE]
> In the [Input Bar](Input_Bar.md) type `FormulaText[{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}]` to display the matrix
> using LaTeX formatting.

## Accessing Elements of Matrices

To access particular elements of a matrix you can use the [Element Command](Element.md) or the simplified
syntax shown in the example below:

> [!EXAMPLE]
> Let `matrix={{1, 2}, {3, 4}}`, then:
> 
> * `matrix(1, 1) ` returns the first element in the first line: _1_
> * `matrix(2, 2)`, `matrix(-1,2)`, `matrix(2,-1) ` and `matrix(-1,-1) ` all return the second element of
> the second line: _4_.
> * In general, `matrix(i, j) `, where _i_ and _j_ are integers, returns the element of the matrix that occupies the
> _i-th_ row and the _j-th_ column.

## Matrix Operations

Matrix operations are _operations with lists_, so the following syntaxes produce the described results.

> [!NOTE]
> Some syntaxes can represent operations which are not defined in the same way in the matrices set.

### Addition and subtraction

* `Matrix1 + Matrix2`: adds the corresponding elements of two compatible matrices.
* `Matrix1 – Matrix2`: subtracts the corresponding elements of two compatible matrices.

### Multiplication and division

* `Matrix * Number`: multiplies each element of _Matrix_ by the given _Number_.
* `Matrix1 * Matrix2`: uses matrix multiplication to calculate the resulting matrix.

> [!EXAMPLE]
> {{1, 2}, {3, 4}, {5, 6}} * {{1, 2, 3}, {4, 5, 6}} yields the matrix {{9, 12, 15}, {19, 26, 33}, {29, 40,
> 51}}.

> [!NOTE]
> The rows of the first and columns of the second matrix need to have the same number of elements.

* `2x2 Matrix * Point (or Vector)`: multiplies the _Matrix_ by the given _Point / Vector_ and yields a point.

> [!EXAMPLE]
> `{{1, 2}, {3, 4}} * (3, 4)` yields the point _A_ = (11, 25).

* `3x3 Matrix * Point (or Vector)`: multiplies the _Matrix_ by the given _Point / Vector_ and yields a point.

> [!EXAMPLE]
> `{{1, 2, 3}, {4, 5, 6}, {0, 0, 1}} * (1, 2)` gives you the point A = (8, 20).

> [!NOTE]
> This is a special case for affine transformations where homogeneous coordinates are used: (x, y, 1) for a point and (x,
> y, 0) for a vector. This example is therefore equivalent to: `{{1, 2, 3}, {4, 5, 6}, {0, 0, 1}} * {1, 2, 1}`.

* `Matrix1 / Matrix2`: Divides each element of _Matrix1_ by the corresponding element in _Matrix2_.

> [!NOTE]
> However, GeoGebra supports the syntax `Matrix1 * Matrix2 ^(-1)` .

## Other operations

The section [Matrix Commands](Vector_and_Matrix_Commands.md) contains the list of all available commands related to
matrices, such as:

* [Determinant](Determinant.md)[Matrix]: calculates the determinant for the given matrix.
* [Invert](Invert.md)[Matrix]: inverts the given matrix
* [Transpose](Transpose.md)[Matrix]: transposes the given matrix
* [ApplyMatrix](ApplyMatrix.md)[Matrix,Object]: apply affine transform given by matrix on object.
* [ReducedRowEchelonForm](ReducedRowEchelonForm.md)[Matrix]: converts the matrix to a reduced row-echelon
form
