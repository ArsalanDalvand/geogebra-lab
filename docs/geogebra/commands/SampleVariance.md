# SampleVariance Command

#### `SampleVariance( <List of Raw Data> )`
  Returns the https://en.wikipedia.org/wiki/Sample_variance#Population_variance_and_sample_variance[sample variance] of the given list of numbers.

> [!EXAMPLE]
> `SampleVariance({1, 2, 3, 4, 5})` yields _a = 2.5_.

#### `SampleVariance( <List of Numbers>, <List of Frequencies> )`
  Returns the https://en.wikipedia.org/wiki/Sample_variance#Population_variance_and_sample_variance[sample variance] of the given list of numbers with the specified frequencies.

> [!EXAMPLE]
> `SampleVariance({1, 2, 3, 4, 5}, {3, 2, 4, 4, 1})` yields _a = 1.67_.

> [!NOTE]
> If the list in the  [CAS View](CAS_View.md)
> contains undefined variables, this command yields a formula for the sample variance.

> [!EXAMPLE]
> `SampleVariance({a, b, c})` yields stem:[\frac{1}{3} a^{2} - \frac{1}{3} ab - \frac{1}{3}ac + \frac{1}{3}
> b^{2} - \frac{1}{3} bc + \frac{1}{3} c^{2}].
