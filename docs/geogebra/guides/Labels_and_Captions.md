# Labels and Captions

In GeoGebra, each object has its unique *label*. For labeling you can choose one or more letters, possibly with
subscript. For details see [Naming Objects](Naming_Objects.md).

## Show and Hide Labels

You can show or hide the objects labels in the  [Graphics View](Graphics_View.md) in different ways:

* Select the 
[Show / Hide Label Tool](Show_Hide_Label.md) and select the object whose label you would like to show or
hide.
* Open the [Context Menu](Context_Menu.md) for the desired object and select
 _Show Label_.
* Open the  [Properties
Dialog](Properties_Dialog.md) for the desired object and check or un-check the checkbox _Show Label_ on tab _Basic_.

## Name and Value

In GeoGebra, every object has a unique name that can be used to label the object in the
 _Graphics View_. In addition, an object
can also be labeled using its value or its name and value. You can change this label setting in the
 _Properties Dialog_ on tab _Basic_ by selecting the
corresponding option _Name_, _Value_, or _Name & Value_ from the drop down menu next to the checkbox _Show Label_.

> [!NOTE]
> The value of a point is its coordinates, while the value of a function is its equation.

## Caption

However, sometimes you might want to give several objects the same label, for example, to label the four edges of a
square _a_. In this case, GeoGebra offers captions for all objects, in addition to the three labeling options mentioned
above. You can set the caption of an object on tab _Basic_ of the
 _Properties Dialog_ by entering the desired caption
into the text field called "Caption". Afterwards, you can select the labeling option "Caption" from the drop down menu
next to the checkbox "Show Label".

You can use following placeholders in captions:

[cols=",",options="header",]

| Placeholder | Meaning | %c | The value of the adjacent spreadsheet cell (to the right), which should be an independent text. Not dynamic: i.e. the |
| --- | --- | --- | --- |
| %v | Value | %n | Name |
| %d | Description | %f | Definition |
| %x | _x_ coordinate (or _x_ coefficient for the line a x + b y + c = 0) |  |  |
| %y | _y_ coordinate (or _y_ coefficient for the line a x + b y + c = 0) |  |  |
| %z | _z_ coordinate (or constant _c_ term for the line a x + b y + c = 0)_ |  |  |

> [!EXAMPLE]
> Let A be a point and (1,2) be its coordinates. Setting the caption to "Point %n has coordinates %v" results in caption
> "Point A has coordinates (1,2)"

### LaTeX in Captions

You can also use [LaTeX](LaTeX.md) in your labels, enclosing the desired LaTeX command in dollar characters (e.g.
`$ x^{2} $`), and choose from a list of most commonly used Greek letters and operators, just clicking on the little
box displayed at the end of the _Caption_ field.

> [!EXAMPLE]
> If you want to display a nicely formatted math text, use LaTeX in captions, e.g. to display a fraction like stem:[
> \frac{a}{b} ], in the caption field type: *`$\frac{a}{b}$`*.
