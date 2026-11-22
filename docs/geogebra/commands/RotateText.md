# RotateText Command

#### `RotateText( <Text>, <Angle> )`
  Creates a new [LaTeX](LaTeX.md) text, rotated by the given angle.

> [!NOTE]
> * The text needs to be enclosed in double quotes `"`.
> * The text is rotated around the top left corner (also known as Corner 4) of the box containing it, and placed at the origin of the coordinate system.
> * The default setting for the angle is radians. Use the degree symbol `°` for rotation angles measured in degrees.

> [!EXAMPLE]
> * `RotateText("a = 5", 45°)`
> 
> * If you want to place the text "GeoGebra", rotated by 42°, at point (6,6), use the command `Text(RotateText("GeoGebra", 42°), (6, 6),true,true)`
