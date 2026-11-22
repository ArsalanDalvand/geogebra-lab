# SetPerspective Command

#### `SetPerspective( <Text> )`

Changes the layout and visibility of _Views_. The text parameter is either the full description of the layout,
description of a single view you want to change or ID of one of the standard perspectives.

## Full layout description

To change the whole layout you can describe the view positions using an expression. _Views_ are represented by variables
(letters): the horizontal arrangement of _Views_ is represented by the related letters juxtaposition, and their vertical
arrangement by a division symbol ` /`.

[cols=",",options="header",]

| Letter | View | A |  [Algebra](Algebra_View.md) |
| --- | --- | --- | --- |
| B |  |  |  |
| C |  [CAS](CAS_View.md) |  |  |
| D |  [Graphics |  |  |
| G | (Graphics_View.md) [Graphics](Graphics_View.md) |  |  |
| L |  |  |  |
| P |  [Properties](Properties_Dialog.md) |  |  |
| R | Data analysis (Desktop only) | S |  |
| T |  |  |  |

> [!EXAMPLE]
> * `SetPerspective("G")` makes only the  _Graphics View_ visible
> * `SetPerspective("AGS")` makes 
> _Algebra_,  _Graphics_ and
>  _Spreadsheet View_ visible,
> aligned horizontally
> * `SetPerspective("S/G")` makes  _Spreadsheet_ and  _Graphics View_ visible with _Spreadsheet_ on top and _Graphics View_ below
> * `SetPerspective("S/(GA)")` is similar as above, the bottom part of the screen consists of
>  _Graphics View_ on the left and
>  _Algebra View_ on the right

## Single view change

To open or close individual _Views_, add the symbols `+` or `-` before the _View_ name (letter), respectively.
In apps other than GeoGebra Classic (e.g. the Graphing Calculator) you can also use `Tools` and `Table`for the
tools and table of values.

> [!EXAMPLE]
> * `SetPerspective("+D")` adds _Graphics View_ 2 to the currently displayed ones, on the right
> * `SetPerspective("-D")` removes _Graphics View_ 2 from the currently displayed ones
> * `SetPerspective("+Tools")` opens the sidebar in Graphing Calculator and switches it to tools tab
> * `SetPerspective("+Table")` opens the sidebar in Graphing Calculator and switches it to table of values
> * `SetPerspective("-Tools")` closes the sidebar in Graphing Calculator, no matter which tab is selected

## Standard perspectives

You may also use a text containing a single digit to use a predefined perspective:

[cols=",",options="header",]

| Text | Perspective | "1" | Algebra And Graphics |
| --- | --- | --- | --- |
| "2" | Geometry | "3" | Spreadsheet |
| "4" | CAS | "5" | 3D Graphics |
| "6" | Probability |  |  |

These roughly correspond to "AG", "G", "SG", "CG", "AT" and "B" respectively, but may also affect the display of
[Input Bar](Input_Bar.md) and content of [Toolbar](Toolbar.md).

> [!NOTE]
> * See also [SetActiveView](SetActiveView.md) command.
