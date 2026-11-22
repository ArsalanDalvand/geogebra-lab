# 3D Graphics View

## [#3D_Graphics_View_User_Interface]# 3D Graphics View User Interface#

By default, the  _3D Graphics View_ is opened next to the  _[Algebra View](Algebra_View.md)_. In addition, either the
_[Input Bar](Input_Bar.md)_ is displayed at the bottom of the GeoGebra window (GeoGebra Desktop), or an
_[Input Field](Input_Bar.md)_ is integrated directly in the  _[Algebra View](Algebra_View.md)_ (GeoGebra Web and Tablet Apps).
The [_3D Graphics View Toolbar_](3D_Graphics_Tools.md) is displayed at the top of the GeoGebra window, with
the

_Undo / Redo_ buttons in the top right corner.

The  _3D
Graphics View_ is part of the  [_3D Graphics Perspective_](Perspectives.md), although you may add a
 _3D Graphics
View_ window to any [_Perspective_](Perspectives.md) at any time by using the
 _[View Menu](View_Menu.md)_ or the
 _Views button_ in the
[_Style Bar_](Style_Bar.md).

### Customizing the 3D Graphics View

You can customize the  _3D Graphics View_ according to the mathematical topic you want to work with. The
basic setup can be changed using the [_3D Graphics View Style Bar_](Style_Bar.md) (e.g. display of coordinate
axes, _xOy_-plane, grid). In addition, the _[Preferences Dialog](Settings_Dialog.md)_ provides more options to
customize the 
_3D Graphics View_. You may also [change the layout](GeoGebra_5_0_Desktop_vs_Web_and_Tablet_App.md) of GeoGebra’s
user interface according to your needs.

## [#Creating_Mathematical_Objects]#Creating Mathematical Objects#

### Constructions with the Mouse

Using the [construction _Tools_](3D_Graphics_Tools.md) available in the [_3D
Graphics View Toolbar_](3D_Graphics_View.md) you can create geometric constructions in the
 _3D Graphics
View_ with the mouse. Select any construction tool from the _3D Graphics View Toolbar_ and read the tooltip provided in
the  _3D
Graphics View_ in order to find out how to use the selected [_Tool_](3D_Graphics_Tools.md).

> [!NOTE]
> Any object you create in the  _3D Graphics View_ also has an algebraic representation in the
> 
> _[Algebra View](Algebra_View.md)_.

> [!EXAMPLE]
> Select the 
> _[Sphere with Center through Point Tool](Sphere_with_Center_through_Point.md)_ and click in the _3D Graphics
> View_ twice. The first click creates the center point while the second click creates a sphere and a point on the sphere.

> [!NOTE]
> * Hint:* In order to create a new point in the
> 3-dimensional space, you need to...
> 
> * click and hold the mouse key (tap and hold) in order to define it's _x_- and _y_-coordinate, then
> * drag the point up or down in order to change the _z_-coordinate and
> * release the click (tap) once you reached the desired coordinates.

### 3D Graphics View Toolbar

The [_3D Graphics View Toolbar_](3D_Graphics_Tools.md) provides a wide range of _[Tools](Tools.md)_
that can be operated with the mouse and allow you to create the three-dimensional graphical representations of objects
directly in the  _3D Graphics View_. Every icon in the _[Toolbar](Toolbar.md)_ represents a
[_Toolbox_](Tools.md) that contains a selection of related [construction _Tools_](Tools.md). In order to
open a _Toolbox_, you need to click on the corresponding default _Tool_ shown in the _3D Graphics View Toolbar_
(GeoGebra Web and Tablet Apps) or on the small arrow in the lower right corner of the _Toolbar_ icon (GeoGebra Desktop).

> [!NOTE]
> The _Tools_ of the _3D Graphics View Toolbar_ are organized by the nature of resulting objects or the functionality of
> the _Tools_. You will find _Tools_ that create different types of planes in the
> 
> _[Planes Toolbox](3D_Graphics_Tools.md)_ or _Tools_ that allow you to create geometric solids in the
>  [Geometric Solids
> Toolbox](3D_Graphics_Tools.md).

### Direct Input using the Input Bar

GeoGebra’s 
_3D Graphics View_ supports points, vectors, lines, segments, rays, polygons, and circles in a three-dimensional
coordinate system. You may either use the _[Tools](Tools.md)_ provided in the [_3D
Graphics View Toolbar_](3D_Graphics_View.md), or directly enter the algebraic representation of these objects in the
_[Input Bar](Input_Bar.md)_ or [_Input Field_](Input_Bar.md) of the

_[Algebra View](Algebra_View.md)_ (GeoGebra Web and Tablet Apps).

> [!EXAMPLE]
> Enter `A=(5, -2, 1)` into the _Input Bar_ or _Input Field_ of the  _Algebra View_ in order to create a point in the three-dimensional
> coordinate system.

Furthermore, you may now create surfaces, planes, as well as geometric solids (pyramids, prisms, spheres, cylinders, and
cones).

> [!EXAMPLE]
> Enter `f(x, y)=sin(x*y)` in order to create the corresponding surface.

### Commands

In addition to the wide range of [_Commands_](All_Commands.md) available for the other _[Views](Views.md)_
of GeoGebra, there also is a selection of _3D Commands_ specifically for the _3D Graphics View_.

> [!EXAMPLE]
> Let `A=(2, 2, 0)`, `B=(-2, 2, 0)`, `C=(0, -2, 0)`, and `D=(0, 0, 3)`. Input the command
> `Pyramid[A, B, C, D]` and hit the [.kcode]#Enter# key in order to create the pyramid with base _ABC_ and apex _D_.

## [#Moving_Mathematical_Objects_in_3D]#Moving Mathematical Objects in 3D#

### Move Tool

Using the  _[Move
Tool](Move.md)_ you may drag and drop [_Free Points_](Free_Dependent_and_Auxiliary_Objects.md) in the
 _3D Graphics
View_. In order to move a point in the three-dimensional coordinate system, you can switch between two modes by clicking
on the point:

* *Mode _xOy_-plane*: You may move the point parallel to the _xOy_-plane without changing the _z_-coordinate.
* *Mode _z_-axis*: You may move the point parallel to the _z_-axis without changing the _x_- and _y_-coordinates.

### Moving Objects using Keyboard Shortcuts

In the  _3D
Graphics View_, you may use the [.kcode]#Page Up# key in order to move a selected object up and the [.kcode]#Page Down#
key in order to move a selected object down.

## [#Display_of_Mathematical_Objects]#Display of Mathematical Objects#

### Translation of the Coordinate System

You may translate the coordinate system by using the  _[Move Graphics View Tool](Move_Graphics_View.md)_ and dragging the
background of the  _3D Graphics View_ with your pointing device. Thereby, you can switch between two
modes by clicking on the background of the  _3D Graphics View_:

* *Mode _xOy_-plane*: You may translate the scene parallel to the _xOy_-plane.
* *Mode _z_-axis*: You may translate the scene parallel to the _z_-axis.

Alternatively you can hold the [.kcode]#Shift# key and drag the background of the
 _3D Graphics
View_ in order to translate the coordinate system. Again, you need to click in order to switch between the two modes
while holding the [.kcode]#Shift# key.

> [!NOTE]
> You can go back to the default view by selecting the button
> 
> _Back to Default View_ in the [_3D Graphics View Style Bar_](Style_Bar.md).

### Rotation of the Coordinate System

You may rotate the coordinate system by using the  _[Rotate 3D
Graphics View Tool](Rotate_3D_Graphics_View.md)_ and dragging the background of the  _3D Graphics View_ with your pointing device.

Alternatively you can right-drag the background of the  _3D Graphics View_ in order to rotate the coordinate system.

If you want to continue the rotation of the coordinate system when the mouse is released, you may use the option

_Start Rotating the View_ and  _Stop Rotating the View_ in the [_3D Graphics View Style Bar_](Style_Bar.md).

> [!NOTE]
> You can go back to the default rotation by selecting the button
>  _Rotate back to default view_ in the [_3D Graphics View Style Bar_](Style_Bar.md).

### Viewpoint in front of an Object

You may use the 
_[View in front of Tool](View_in_front_of.md)_ in order to view the coordinate system from a viewpoint in
front of the selected object.

### Zoom

You may use the  _[Zoom In
Tool](Zoom_In.md)_ and  _[Zoom Out
Tool](Zoom_Out.md)_ in order to zoom in the  _3D Graphics View_.

> [!NOTE]
> * Hint:* You may also use the wheel of your mouse to zoom.

### 3D Graphics View Style Bar

The [_3D Graphics View Style Bar_](Style_Bar.md) contains buttons to

*  show /
hide the coordinate axes,  the _xOy_-plane, and a
 grid in the _xOy_-plane
* go  back to default view
* change the  _[Point Capturing](Point_Capturing.md)_ settings
* 
start / stop rotating the view automatically
* adjust the  view
direction
*  choose the type of projection
* open the  _[Properties
Dialog](Properties_Dialog.md)_ (GeoGebra Web and Tablet Apps)
* display additional 
_[Views](Views.md)_ in the GeoGebra window (GeoGebra Web and Tablet Apps)

### Style Bar for Tools and Objects

Depending on the [_Tool_](Tools.md) or object you select, the buttons in the _[Style Bar](Style_Bar.md)_
adapt to your selection. Please see [Style Bar Options for Tools and Objects](Style_Bar.md) for more information.
