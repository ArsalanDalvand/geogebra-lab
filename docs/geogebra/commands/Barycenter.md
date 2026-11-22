# Barycenter Command

> [!NOTE]
>  This command differs among variants of English:
> 
> * Barycenter (US)
> * Barycentre (UK + Aus)

#### `Barycenter( <List of Points>, <List of Weights> )`
  Set the center of a system of points in the list, defined as the average of their positions, weighted by their value,
  using the https://en.wikipedia.org/wiki/Center_of_mass[proper formula].

> [!EXAMPLE]
> * `Barycenter({(2, 0), (0, 2), (-2, 0), (0, -2)}, {1, 1, 1, 1})` yields point _A(0, 0)_
> * `Barycenter({(2, 0), (0, 2), (-2, 0), (0, -2)}, {2, 1, 1, 1})` yields point _B(0.4, 0)_. The _x_-coordinate of
> this point was determined by _stem:[ \frac{1}{ 2+1+1+1 }*(2*2+1*0+1*(-2)+1*0)] = stem:[\frac{1}{ 5 }*2] = 0.4_
