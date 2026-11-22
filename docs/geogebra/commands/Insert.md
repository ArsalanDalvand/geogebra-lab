# Insert Command

#### `Insert( <Object>, <List>, <Position> )`
  Inserts the object in the list at the given position.

> [!EXAMPLE]
> `Insert(x^2, {1, 2, 3, 4, 5}, 3)` places _x<sup>2</sup>_ at the third position and creates the list _{1, 2, x<sup>2</sup>, 3, 4, 5}_.

> [!NOTE]
> If the position is a negative number, then the position is counted from the right.

> [!EXAMPLE]
> `Insert(x^2, {1, 2, 3, 4, 5}, -1)` places _x<sup>2</sup>_ at the end of the list and creates the list _{1, 2, 3, 4, 5,
> x<sup>2</sup>}_.

#### `Insert( <List>, <List>, <Position> )`
  Inserts all elements of the first list in the second list at the given position.

> [!EXAMPLE]
> `Insert({11, 12}, {1, 2, 3, 4, 5}, 3)` places the elements of the first list at the third (and following)
> position(s) of the second list and creates the list _{1, 2, 11, 12, 3, 4, 5}_.

> [!NOTE]
> If the position is a negative number, then the position is counted from the right.

> [!EXAMPLE]
> `Insert({11, 12}, {1, 2, 3, 4, 5}, -2)` places the elements of the first list at the end of the second list before
> its last element and creates the list _{1, 2, 3, 4, 11, 12, 5}_.
