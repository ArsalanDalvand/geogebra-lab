# ShowAxes Command

#### `ShowAxes( )`
  Shows the axes in the active View.
#### `ShowAxes( <Boolean> )`
  Shows/hides the axes in the active View.

> [!EXAMPLE]
> * `ShowAxes(true)` shows the axes in the active View.
> * `ShowAxes(false)` hides the axes in the active View.

#### `ShowAxes( <View>, <Boolean> )`
  Shows/hides the axes in the  _Graphics
  View_ specified by the number 1 or 2 (or 3 for  _3D View_) .

> [!EXAMPLE]
> * `ShowAxes(1, true)` shows the axes in  _Graphics View_.
> * `ShowAxes(2, false)` hides the axes in  _Graphics 2 View_.

> [!NOTE]
> See also [ShowGrid command](ShowGrid.md). To show / hide a single axis please use
> [SetVisibleInView Command](SetVisibleInView.md).
