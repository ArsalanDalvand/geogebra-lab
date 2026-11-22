# IterationList Command

#### `IterationList( <Function>, <Start Value>, <Number of Iterations> )`
  Gives you a list of length _n+1_ (_n_ = number of iterations) whose elements are iterations of the function starting
  with the start value.

> [!EXAMPLE]
> After defining `f(x) = x^2` the command `IterationList(f, 3, 2)` gives you the list _{3, 9, 81}_.

You can also use this command to define a sequence where _a~k+1~_ depends on _a<sub>k</sub>_ and _k_. If the input function _f_
is a function of two variables and start value is a list of two numbers _{s, a<sub>s</sub>}_, then the output list consists of
numbers _a<sub>s</sub>_,_a~s+1~_,....,_a~s+n~_ where for _k>s_ we have _a~k+1~=f(k, a<sub>k</sub>)_.

> [!EXAMPLE]
> Define `f(k,a)=(k+1)*a`, which corresponds to the recursive definition of factorial. The command
> `IterationList(f, {3, 6}, 4)` gives you the list _{6, 24, 120, 720, 5040}_.

#### `IterationList( <Expression>, <Variable Name>, ..., <Start Values>, <Number of Iterations> )`
  Gives you a list of length _n+1_ (_n_ = number of iterations) whose elements are iterations of the expression starting
  with the given start value. In each iteration the variables in the expression are substituted by last elements of the
  list. There should be at least as many start values as there are variables, otherwise the result is _undefined_.

> [!EXAMPLE]
> Let _A_, _B_ be points. The command `IterationList(Midpoint(A, C), C, {B}, 3)` internally computes values __C__<sub>0</sub> =
> _B_,   __C__<sub>1</sub> = _Midpoint_(_A_, __C__<sub>0</sub>),   __C__<sub>2</sub> = _Midpoint_(_A_, __C__<sub>1</sub>),   __C__<sub>3</sub> = _Midpoint_(_A_,
> __C__<sub>2</sub>) and yields {__C__<sub>0</sub>, __C__<sub>1</sub>, __C__<sub>2</sub>, __C__<sub>3</sub>}. Hence for _A_ = (0,0) and _B_ = (8,0) the result will be
> {(8,0), (4,0), (2,0), (1,0)}.

> [!EXAMPLE]
> Let _f_<sub>0</sub>, _f_<sub>1</sub> be numbers. `IterationList(a + b, a, b, {f_0, f_1}, 5)` fills the first 2 values of the resulting
> list from the start values. Afterwards the values are computed as __f__<sub>2</sub> = __f__<sub>0</sub> + __f__<sub>1</sub>,   __f__<sub>3</sub> = __f__<sub>1</sub>
> + __f__<sub>2</sub>,   __f__<sub>4</sub> = __f__<sub>2</sub> + __f__<sub>3</sub>,   __f__<sub>5</sub> = __f__<sub>3</sub> + __f__<sub>4</sub>. Hence for _f_<sub>0</sub> = _f_<sub>1</sub> = 1 the result
> will be {1, 1, 2, 3, 5, 8}.

> [!NOTE]
> Only the first syntax is supported in the CAS currently

> [!NOTE]
> See also [Iteration Command](Iteration.md).
