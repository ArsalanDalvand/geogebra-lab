# ParseToFunction Command

#### `ParseToFunction( <Text> )`
  Parses the text containing the function definition and creates the corresponding [function](Functions.md).

> [!EXAMPLE]
> * ` ParseToFunction("x^2")` creates the function _f_(_x_) = __x__<sup>2</sup>_._
> * ` ParseToFunction("t+2/t")` creates the function _f_(_t_) = _t_ + 2/_t_.

#### `ParseToFunction( <Function>, <Text> )`
  Parses the string and stores the result to a [function](Functions.md) _f_, which must be defined and
  [free](Free_Dependent_and_Auxiliary_Objects.md) before the command is used.

> [!EXAMPLE]
> Define ` f(x) = 3x² + 2` and ` text1 = "f(x) = 3x + 1"`. ` ParseToFunction(f, text1)` returns _f(x) = 3x +1_.

#### `ParseToFunction( <Text>, <List of variables> )`
  Parses the text containing the function definition and creates the corresponding [function](Functions.md) of the
  variables defined in the list.

> [!EXAMPLE]
> ` ParseToFunction("2u+3v",{"u", "v"})` creates the function _a(u,v) = 2u + 3v_.

> [!NOTE]
> See also [ParseToNumber](ParseToNumber.md) command.
