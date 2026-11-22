# Boolean values

You can use the Boolean variables _true_ and _false_ in GeoGebra. Just type, for example, `a = true` or
`b = false` into the [Input Bar](Input_Bar.md) and press the [.kcode]#Enter# key. With Boolean variables you
can e.g. define the [conditional visibility](Conditional_Visibility.md) of an object.

## Check Box and Arrow Keys

Free Boolean variables can be displayed as check boxes in the  [Graphics View](Graphics_View.md) (see tool
[Check Box
Tool](Check_Box.md)). After selecting a Boolean variable in the  [Algebra View](Algebra_View.md) you can use the arrow keys to change the value of
the Boolean variable (see [Manual Animation](Animation.md)).

> [!NOTE]
> You may also use Boolean variables like numbers (value 0 or 1). This allows you to use a checkbox as the dynamic speed
> of an animated slider allowing you to start and stop the animation. In this case, the animation button is only shown in
> the  _Graphics View_ if there is also an
> animated slider with static (i.e. non-dynamic) speed.

## Operations

You can use the following operations for Boolean variables and conditions in GeoGebra by either selecting them from the
list next to the Input Bar or by entering them using the keyboard:

[cols=",,,,",options="header",]

| Operation | List | Keyboard | Example | Object types |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Equal | ≟ | == | a ≟ b or a == b | numbers, points, lines, conics, functions (needs CAS), planes, a, b |  |  |  |  |
| Not equal | ≠ | != | a ≠ b or a != b | numbers, points, lines, conics, functions (needs CAS), planes a, b |  |  |  |  |
| Less than |  | < | a < b | numbers a, b |  |  |  |  |
| Greater than |  | > | a > b | numbers a, b |  |  |  |  |
| Less or equal than | ≤ | <= | a ≤ b or a <= b | numbers a, b |  |  |  |  |
| Greater or equal than | ≥ | >= | a ≥ b or a >= b | numbers a, b |  |  |  |  |
| And | ∧ | && | a ∧ b or a && b | booleans a, b |  |  |  |  |
| Or | ∨ | \ | \ |  | a ∨ b or a \ | \ | b | booleans a, b |
| Not | ¬ | ! | ¬a or !a | boolean a |  |  |  |  |
| Exclusive or |  | [.kcode]##Alt##[.kcode]##+## | a ⊕ b | booleans a, b |  |  |  |  |
| Implication | → | -> | a -> b | booleans a, b |  |  |  |  |
| Parallel | ∥ |  | a ∥ b | lines a, b |  |  |  |  |
| Perpendicular | ⊥ |  | a ⊥ b | lines a, b |  |  |  |  |
| Belongs to | ∈ |  | a ∈ list1 | number a, list of numbers list1 |  |  |  |  |
| Subset | ⊆ |  | list1 ⊆ list2 | lists list1 and list2 |  |  |  |  |
| Proper subset | ⊂ |  | list1 ⊂ list2 | lists list1 and list2 |  |  |  |  |
