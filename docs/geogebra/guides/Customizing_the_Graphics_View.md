# Customizing the Graphics View

In order to adjust the visible part of the  [Graphics View](Graphics_View.md), you can drag it by using tool

[Move Graphics View Tool](Move_Graphics_View.md) and use the following ways of zooming:

* You may use the  [Zoom In
Tool](Zoom_In.md) and  [Zoom Out Tool](Zoom_Out.md)
in order to zoom in the  _Graphics
View_.
+
> [!NOTE]
> The position of your click determines the center of zoom.

* You may use the scroll wheel of your mouse in order to zoom in the  _Graphics View_.
* You may use keyboard shortcuts to zoom in [.kcode]#Ctrl# + [.kcode]#+# and to zoom out [.kcode]#Ctrl# + [.kcode]#-#.
* After right clicking (Mac OS: Ctrl-click) on an empty spot in the  _Graphics View_ a context menu appears which allows you to zoom.
* You may also specify range of _x_- and _y_-axis in the
 [Properties Dialog](Properties_Dialog.md) for
 _Graphics View_ (see
<<graphics-view-properties,below>>).

## Showing and hiding objects

In the  [Algebra
View](Algebra_View.md), the icon to the left of every object shows its current visibility state (shown or hidden). You may directly click
on the little marble icon in order to change the visibility status of an object. For more information see
[visibility](Object_Properties.md).

[#graphics-view-properties]
## Properties of Graphics View (Properties Dialog)

Coordinate axes, grid and some other properties can be customized using the
 [Properties Dialog](Properties_Dialog.md) of
the  _Graphics View_. After right
clicking (Mac OS: Ctrl-click) in the 
_Graphics View_, you can open this dialog window by selecting _Graphics..._ from the appearing
[Context Menu](Context_Menu.md).

## Customizing Coordinate Axes and Grid

To show or hide the axes and the grid, right click (Mac OS: Ctrl-click) on the drawing pad and select the corresponding
items  _Axes_ or  _Grid_ from the appearing context menu. For further setting
you need to open the  _Properties Dialog_.

* On tab _Basic_, you can, for example, change the line style and color of the coordinate axes, and set the the ratio
between the axes. To make sure the axes ratio cannot be changed by any command or user action, you may lock it using the
lock icon.

* Clicking on tabs _xAxis_ and _yAxis_ allows you to customize the axes individually, set the distance of the tickmarks,
labeling, axes visibility, units and more. If you want the cross of the axes to be at point _(a,b)_, you can set _Cross
at_ parameter for _xAxis_ to _b_ and for _yAxis_ to _a_. Option _Stick to edge_ means that the line remains close to the
bottom or left border of the screen. To draw only the part of the axis to the right or to the top of the axes
intersection, you can select _Positive direction only_.

* On tab _Grid_, you can change the color and line style of the coordinate grid, set the distance and ratio for grid
lines to a certain value, and the grid visibility. Three types of grid are available: Cartesian, polar and isometric.

> [!NOTE]
> * Axes scaling is possible in every mode by pressing and holding the [.kcode]#Shift#-key (PC: also [.kcode]#Ctrl#-key)
> while dragging the axis.
> * Range of the axes may be given dynamically, e.g. in _Basic_ tab you can set _X Min_ to `x(A)` and _Y Min_ to
> `y(A)` to ensure the lower left corner of the view remains in point _A_. In such setting, the view cannot be zoomed.

## Showing Navigation Bar

You can add the [Navigation Bar for Construction Steps](Navigation_Bar.md) to the
 _Graphics View_ by enabling it in
_Basic_ tab of the  _Properties Dialog_. You can
also add the _Play_ button to allow animating the construction steps and a button to show the

[Construction Protocol](Construction_Protocol.md).

## Miscellaneous settings

These settings are located in the last part of the _Basic_ tab of
 _Properties Dialog_.

Background color

Allows you to change background color of the  _Graphics View_.

Tooltips

Allows you to set the behavior of tooltips in the  _Graphics View_. See article on [Tooltips](Tooltips.md) for details.

Show mouse coordinates

Enables display of mouse coordinates next to the mouse pointer.
