# ParseToNumber Command

#### `ParseToNumber( <Number>, <Text> )`
  Parses the text and stores the result to a [number](Numbers_and_Angles.md) _a_, which must be defined and
  [free](Free_Dependent_and_Auxiliary_Objects.md) before the command is used.

> [!EXAMPLE]
> Define ` a = 3` and ` text1 = "6"`. ` ParseToNumber(a, text1)` returns _a = 6_.

> [!NOTE]
> This is a [scripting command](Scripting_Commands.md) which only sets the value of a number once. To
> convert a text _text1_ into a number which is updated dynamically, use [FromBase](FromBase.md)(text1,10).

#### `ParseToNumber( <Text> )`
  Parses the text and stores the result to a [number](Numbers_and_Angles.md).

> [!EXAMPLE]
> `ParseToNumber("1+2+5-pi")` creates the number _a = 4.86_.

> [!NOTE]
> See also [ParseToFunction](ParseToFunction.md) command.
