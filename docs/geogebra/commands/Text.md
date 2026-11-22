# Text Command

#### `Text( <Object> )`
  Creates a [text](Texts.md) containing the formula of the given object.

> [!EXAMPLE]
> If _a = 2_ and _c = a<sup>2</sup>_, then `Text(c)` creates the text _"4"_.

> [!NOTE]
> By default, values are substituted to the corresponding variables.

#### `Text( <Object>, <Boolean for Substitution of Variables> )`
  Creates a text containing the formula of the given object. The Boolean variable determines whether values are substituted to
  variables (_true_) or variable names are shown in the text (_false_).

> [!EXAMPLE]
> If _a = 2_ and _c = a<sup>2</sup>_, then
> 
> * `Text(c, true)` creates the text _"4"_ and
> * `Text(c, false)` creates the text _"a<sup>2</sup>"_.

#### `Text( <Object>, <Point> )`
  Creates a text containing the formula of the given object at the given position (point). 

> [!EXAMPLE]
> `Text("hello", (2, 3))` creates the text _"hello"_ at _(2, 3)_.

#### `Text( <Object>, <Point>, <Boolean for Substitution of Variables> )`
   Creates a text containing the formula of the given object at the given position (point). The Boolean variable
  determines whether values are substituted to variables (_true_) or variable names are shown in the text (_false_).

> [!EXAMPLE]
> If _a = 2_ and _c = a<sup>2</sup>_, then `Text(c, (2, 1), true)` creates the text _"4"_ at _(2, 1)_.

#### `Text( <Object>, <Point>, <Boolean for Substitution of Variables>, <Boolean for LaTeX formula> )`
   Creates a text containing the formula of the given object at the given position (point). The first Boolean variable
  determines whether values are substituted to variables (_true_) or variable names are shown in the text (_false_). If
  the second Boolean variable is _true_, the text is rendered using [LaTeX](LaTeX.md).

> [!EXAMPLE]
> If _a = 2_ and _c = a<sup>2</sup>_, then `Text(c, (2, 1), true, true)` creates the LaTeX text _"4"_ at _(2, 1)_.

#### `Text( <Object>, <Point>, <Boolean for Substitution of Variables>, <Boolean for LaTeX formula>, <Horizontal alignment [-1|0|1]>, <Vertical alignment [-1|0|1]> )`
   Creates a text containing the formula of the given object at the given position (point). The first Boolean variable
  determines whether values are substituted to variables (_true_) or variable names are shown in the text (_false_). If
  the second Boolean variable is _true_, the text is rendered using [LaTeX](LaTeX.md). The values -1, 0, 1 define the horizontal and vertical alignment, shifting the text from the default position respectively as follows:
  * -1: horizontal shift leftwards / vertical shift downwards
  * 0: centers the text object horizontally / vertically at the given point
  * 1: horizontal shift rightwards / vertical shift upwards

> [!EXAMPLE]
> If _a = 2_ and _c = a<sup>2</sup>_, then `Text(c, (2, 1), true, true, -1, 0)` creates the LaTeX text _"4"_ to the left of
> _(2, 1)_, and vertically aligned with the point.

> [!NOTE]
> See also  [Text](Text.md) tool.
