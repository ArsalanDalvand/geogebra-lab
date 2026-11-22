# RandomUniform Command

#### `RandomUniform( <Min>, <Max> )`
  Returns random real number from https://en.wikipedia.org/wiki/Uniform_distribution_(continuous)[uniform distribution]
  on interval [_min_, _max_].

> [!EXAMPLE]
> `RandomUniform(0, 1)` returns a random number between _0_ and _1_

#### `RandomUniform( <Min>, <Max>, <Number of Samples n> )`
  Returns a list of _n_ random real numbers from https://en.wikipedia.org/wiki/Uniform_distribution_(continuous)[uniform
  distribution] on interval [_min_, _max_].

> [!EXAMPLE]
> `RandomUniform(0, 1, 3)` returns a list of three random numbers between _0_ and _1_

> [!NOTE]
> * `RandomUniform(0,1)` is equivalent to `random()` (see [Predefined
> Functions and Operators](Predefined_Functions_and_Operators.md)).
> * See also [SetSeed](SetSeed.md), [RandomBetween](RandomBetween.md),
> [RandomElement](RandomElement.md), [RandomBinomial](RandomBinomial.md),
> [RandomNormal](RandomNormal.md) , [RandomPoisson](RandomPoisson.md) commands.
