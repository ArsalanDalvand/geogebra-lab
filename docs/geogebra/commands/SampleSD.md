# SampleSD Command

#### `SampleSD( <List of Raw Data> )`
  Returns the https://en.wikipedia.org/wiki/Standard_deviation#Estimation[sample standard deviation] of the given
  [list](Lists.md) of numbers.

> [!NOTE]
> This command has also the equivalent syntax `stdev( <List of Raw Data> )`.

> [!EXAMPLE]
> * `SampleSD({1, 2, 3})` yields _1_.
> 
> * `stdev({1, 2, 3})` yields _1_.

#### `SampleSD( <List of Numbers>, <List of Frequencies> )`
  Returns the https://en.wikipedia.org/wiki/Standard_deviation#Estimation[sample standard deviation] of the numbers in the given _list_, having the specified frequencies.

> [!NOTE]
> This command has also the equivalent syntax `stdev( <List of Numbers>, <List of Frequencies> )`.

> [!EXAMPLE]
> * `SampleSD({1, 2, 3, 4},{1, 1, 1, 2})` yields _1.3_.
> * `stdev({1, 2, 3, 4},{1, 1, 1, 2})` yields _1.3_.

> [!NOTE]
> If the list contains undefined variables in the  [CAS View](CAS_View.md), the command yields
> a formula for the _sample standard deviation_.

> [!EXAMPLE]
> `SampleSD({1, 2, a})` yields stem:[\frac{\sqrt{a²-3a+3}}{\sqrt{3}}].
