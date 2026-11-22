# Object Properties

Following properties can be set via 
[Properties Dialog](Properties_Dialog.md).

## Visibility

You may show or hide objects in the 
[Graphics View](Graphics_View.md) in different ways.

* You may use tool 
[Show_/_Hide Object Tool](Show_Hide_Object.md) to show or hide objects.
* Open the [Context Menu](Context_Menu.md) and select item  _Show Object_ to change the visibility status of the selected object.
* In the  [Algebra
View](Algebra_View.md), the icon to the left of every object shows its current visibility state (shown or hidden). You may directly click
on the little marble icon in order to change the visibility status of an object.
* You can also use the 
[Check Box Tool](Check_Box.md) in order to show or hide one or several objects.

> [!NOTE]
> To make an object "invisible" in the 
> _Algebra View_, make it [Auxiliary](Free_Dependent_and_Auxiliary_Objects.md).

## Fixed objects

You can define an object to be fixed via 
_Properties Dialog_. Fixed objects (both [free and dependent](Free_Dependent_and_Auxiliary_Objects.md)) cannot be
moved. To stop an object being selected / deleted you can uncheck its "Selection Allowed" option in the Advanced Tab.

## Filling

For closed [Curves](Curves.md) and [regions](Geometric_Objects.md) you can specify filling using the _Style_
tab of  _Object properties dialog_. There are three
types of filling:

#### `Standard`
  Fills the object by color specified in the _Color_ tab. The same color is used to draw border of that object. Using
  _Style_ tab you can define opacity -- e.g. Conics have by default opacity 0 which means they are transparent.
#### `Hatching`
  The object is hatched, angle of hatches and distance between them can be specified. Thickness of hatches equals the
  thickness of object's border.
Cross-hatching::
  The object is cross-hatched (available angle for hatches: 0° - 45°) and the distance between lines can be specified.
  Thickness of hatches equals the thickness of object's border.
#### `Chessboard`
  Fills the object using a chessboard pattern (available angle for squares: 0° - 45°). The squares' heights can be
  specified.
#### `Dots`
  Fills the object using a dotted pattern, distance between dots can be specified.
#### `Honeycomb`
  Fills the object using a honeycomb pattern, distance between the cells can be specified.
#### `Bricks`
  Fills the object using a brick pattern, angles and bricks' heights can be specified.
#### `Weaving`
  Fills the object using a weaving pattern, angles and spacing can be specified.
#### `Symbol`
  Fills the object using a special symbol chosen from a list, distance between symbols can be specified.
#### `Image`
  You can specify location of image on the local disc. The image is repeated periodically, its size is fixed in pixels
  and top left corner is aligned to the top left corner of the view.

> [!NOTE]
> You can also check the _Inverse filling_ box to fill with the selected pattern the whole
>  _Graphics View_, except the selected
> object.

## Advanced properties

Advanced properties such as [Dynamic Colors](Dynamic_Colors.md) and [Conditional
Visibility](Conditional_Visibility.md) are listed in article [Advanced Features](Advanced_Features.md).
