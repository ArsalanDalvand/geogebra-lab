# UpdateConstruction Command

#### `UpdateConstruction( )`
  Recomputes all objects (random numbers are regenerated). Same as [.kcode]#F9# or [.kcode]#Ctrl# + [.kcode]#R#.

> [!NOTE]
> Use `ZoomIn(1)` (which is the same as [.kcode]#Ctrl# + [.kcode]#F#) to just refresh the view while keeping the current randomization. Refreshing removes [traces](Tracing.md) from the
>  [Graphics
> View](Graphics_View.md). If you are using more Graphic Views, use the [SetActiveView](SetActiveView.md) command first to activate the View to refresh.

#### `UpdateConstruction( <Number of times> )`
  Performs the command `UpdateConstruction()` several times.

> [!EXAMPLE]
> `UpdateConstruction(2)` updates the construction twice (e.g. to record several dice throws to the spreadsheet).
