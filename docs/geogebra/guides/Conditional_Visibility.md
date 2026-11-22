# Conditional Visibility

Apart from just showing or hiding certain objects you can also have their visibility status depend on a certain
condition. For example, you would like an object to appear on screen if you check a checkbox positioned in the
 [Graphics View](Graphics_View.md)
or if a [slider](Slider.md) is changed to a certain value.

## Conditionally Show or Hide Existing Objects

You can use the 
[Check Box Tool](Check_Box.md) in order to create a checkbox that controls the visibility of one or more
existing objects on screen.

Alternatively, you could also create a [Boolean variable](Boolean_values.md) (e.g. `b = true`) using the
[Input Bar](Input_Bar.md) and make it visible as a checkbox in the  _Graphics View_ by changing its visibility status (e.g. use

[Show / Hide Object Tool](Show_Hide_Object.md) or the [Context Menu](Context_Menu.md)). A checkbox
therefore is a visible _Boolean variable_. In order to use this Boolean variable as a condition for the visibility of
certain objects, you need to follow the steps described below.

## Changing the Visibility of Newly Created Objects

In the  [Properties
Dialog](Properties_Dialog.md), you can enter a condition for the visibility of an object on tab _Advanced_.

> [!NOTE]
> You can select the [logic operators](Boolean_values.md) (e.g. ≠, ≥, ˄, ‖) from list to the right of the input
> field in order to create your conditional statements.

> [!EXAMPLE]
> * If a is a slider, then the conditional statement a < 2 means that the corresponding object is only shown in the
>  _Graphics View_ if the slider value is
> less than 2.
> * If b is a Boolean variable, you can use b as a conditional statement. The corresponding object is shown whenever the
> value of b is true and is hidden when the value of b is false.
> * If g and h are two lines and you would like a text to be shown whenever these lines are parallel, then you could use g
> ‖ h as a conditional statement for the text.

> [!NOTE]
> See also [SetVisibleInView](SetVisibleInView.md) command.
