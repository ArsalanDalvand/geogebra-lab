# StartAnimation Command

#### `StartAnimation( )`
  Resumes all animations if they are paused.

#### `StartAnimation( <Boolean> )`
  When the boolean is false, pauses all animations, otherwise resumes them.

#### `StartAnimation( <Point or Slider>, <Point or Slider>, .... )`
  Starts animating given points and sliders, the points must be on [paths](Geometric_Objects.md).

#### `StartAnimation( <Point or Slider>, <Point or Slider>, ...., <Boolean> )`
  Starts (for boolean = true) or permanently stops (for boolean = false) animating given points and sliders, the points
  must be on [paths](Geometric_Objects.md).

> [!NOTE]
> See also [Animation](Animation.md).
