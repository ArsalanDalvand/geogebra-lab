# DataFunction Command

#### `DataFunction( <List of Numbers>, <List of Numbers> )`
  Yields a function that connects points (x<sub>1</sub>, y<sub>1</sub>), (x<sub>2</sub>, y<sub>2</sub>),...,(x<sub>n</sub>, y<sub>n</sub>) where {x<sub>1</sub>, ..., x<sub>n</sub>}, {y<sub>1</sub>,
  ..., y<sub>n</sub>} are the input lists. In between these points linear interpolation is used. This command is used by Sensors.

> [!EXAMPLE]
> * `DataFunction({0, 1, 2, 4}, {0, 1, 4, 16})` yields a function that goes through points (0, 0), (1,1), (2, 4), (4,
> 16).
