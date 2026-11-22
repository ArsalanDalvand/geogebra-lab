# Action Objects

For interactive worksheets with [scripting](Scripting.md) Action Objects may come handy. There are four types of
them:

## Checkboxes

Checkboxes are graphical representations of [Boolean values](Boolean_values.md). See
 [Check Box
Tool](Check_Box.md) for details. Checkboxes can be created using the aforementioned tool or the [Checkbox
Command](Checkbox.md).

## Input Boxes

Input Boxes work as text inputs for [scripts](Scripting.md). The script is triggered by changing text in the Input
Box and either pressing enter or leaving the Input Box. The inserted value may be accessed using the %0 variable.

> [!EXAMPLE]
> Input Box with `a=a+%0` in its _OnClick_ script will increase number _a_ by the entered value. Works only if _a_ is
> [free](Free_Dependent_and_Auxiliary_Objects.md).

If you want the Input Box to change value of a free object (or redefine dependent object), you may define that object as
linked. This way you don't have to insert any script. Input Boxes can be created using the
 [Input
Box Tool](Input_Box.md) or the [InputBox Command](InputBox.md).

## Buttons

Buttons are meant to trigger scripts by being clicked. Although scripts can be triggered by clicking any other object
(e.g. an [image](Image.md)), using buttons for this makes your worksheet more intuitive. Buttons can be
created using the 
[Button Tool](Button.md) or the [Button Command](Button.md).

> [!NOTE]
> The _Properties_ panel of buttons needs to be closed for scripts to work.

## Drop-down lists

If you want to show the contents of a list, organized in a drop-down list:

* in the 
[Graphics View](Graphics_View.md): check the _Draw as drop-down list_ box in the _Basics_ tab of the
 [Properties Dialog](Properties_Dialog.md) of
the list.
* in the 
[Spreadsheet View](Spreadsheet_View.md): enter a list into the spreadsheet, then check the _Use Buttons and
Checkboxes_ box in the 
_Spreadsheet Options_.

The selected element of a drop-down list may be also obtained using [SelectedIndex](SelectedIndex.md) and
[SelectedElement](SelectedElement.md) commands.

> [!EXAMPLE]
> To create a drop-down list with three functions `x+1`, `x^2`, `sqrt(x)`, first create a list by typing
> `L={x+1, x^2,sqrt(x)}` in the input bar. Then right-click the list in _Algebra View_ and select _Object
> Properties..._. Select the _Draw as drop-down list_ option in the appearing dialog window. You can also enter a caption
> that describes the drop-down list. In order to plot in _Graphics View_ the currently selected function, enter the
> command `SelectedElement(L)` in the input bar .
