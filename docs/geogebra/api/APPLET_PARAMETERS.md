# GeoGebra App Parameters

This page lists all parameters that can be used to configure GeoGebra Apps. Please see
[GeoGebra Apps Embedding](g.md) to learn how to embed GeoGebra apps into your pages and
where these parameters can be used.

| Name | Value | Description | Since |  |
| --- | --- | --- | --- | --- |
| appName | eg `"graphing"` a |  |  |  |
| 6.0 | width | eg `800` | Applet width (*compulsory field* unless using `scaleContainerClass`) |  |
| height | eg `600` | Applet height (*compulsory field* unless using `scaleContainerClass`) |  |  |
| material_id | eg `"RHYH3UQ8"` a |  |  |  |
| 5.0 | filename | eg `"myFile.ggb"` a |  |  |
| 4.0 | ggbBase64 | base64 encoded .ggb file a |  |  |
| 4.0 | borderColor | e.g. `#FFFFFF` for white | Color of the border line drawn around the applet panel (as hex rgb string). |  |
| borderRadius | number | Size of applet's https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius[border radius] in |  |  |
| enableRightClick | `true` or `false` | States whether right clicks should be handled by the applet. Setting this |  |  |
| enableLabelDrags | `true` or `false` | States whether labels can be dragged. Default: true | 3.2 |  |
| enableShiftDragZoom | `true` or `false` | States whether the Graphics View(s) should be moveable using Shift + |  |  |
| showZoomButtons | `true` or `false` | States whether the zoom in / zoom out / home buttons should be shown in the |  |  |
| errorDialogsActive | `true` or `false` | States whether error dialogs will be shown if an invalid input is |  |  |
| showMenuBar | `true` or `false` | States whether the menubar of GeoGebra should be shown in the applet. Default: |  |  |
| showToolBar | `true` or `false` | States whether the toolbar with the construction mode buttons should be shown |  |  |
| showToolBarHelp | `true` or `false` | States whether the toolbar help text right to the toolbar buttons should be |  |  |
| customToolBar | e.g. `0  1 2  3 , 4  5 6 7` | Sets the toolbar according to a custom toolbar string where the int |  |  |
| customToolbox | e.g. `pen, shapes.line, shapes.square, link` | Sets the Notes toolbox content using the |  |  |
| showAlgebraInput | `true` or `false` | States whether the algebra input line (with input field, greek letters and |  |  |
| showResetIcon | `true` or `false` | States whether a small icon (GeoGebra ellipse) should be shown in the upper |  |  |
| language | http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes[iso language string] | GeoGebra tries to set your local |  |  |
| country | iso country string, e.g. `AT` for Austria | This parameter only makes sense if you use it together with the |  |  |
| id | eg `applet2` | This parameter allows you to specify the argument passed to the JavaScript function ggbOnInit(), |  |  |
| allowStyleBar | `true` or `false` | Determines whether the Style Bar can be shown (or will be shown if just |  |  |
| randomize | `true` or `false` | Determines whether random numbers should be randomized on file load. Useful when |  |  |
| randomSeed | eg `"randomSeed":33` | Specify seed for random numbers. Note that if you save a state of the app after |  |  |
| appletOnLoad | eg `function(api){ api.evalCommand('Segment((1,2),(3,4))'); }` | JavaScript method to run when the |  |  |
| useBrowserForJS | `true` or `false` a |  |  |  |
| 4.0 | showLogging | `true` or `false` | Determines whether logging is shown in the Browser's console**Default:** false |  |
| 4.2 | capturingThreshold | integer | Determines the sensitivity of object selection. The default value of 3 is usually fine to |  |
| enableFileFeatures | `true` or `false` | Determines whether file saving, file loading, sign in and Options > Save |  |  |
| enableUndoRedo | `true` or `false` | Determines whether Undo and Redo icons are shown. This argument is ignored |  |  |
| perspective | string | For values see [SetPerspective_Command](SetPerspective.md). Just for a blank start |  |  |
| enable3d | `true` or `false` or none | Whether 3D should be enabled (for exam mode). When neither true nor false |  |  |
| enableCAS | `true` or `false` or none | Whether CAS should be enabled (for exam mode). When neither true nor |  |  |
| algebraInputPosition | `algebra`, `top` or `bottom` | Determines whether input bar should be shown in |  |  |
| preventFocus | `true` or `false` | When set to true, this prevents the applet from getting focus automatically at |  |  |
| scaleContainerClass | String | Name of CSS class that is used as container; applet will scale to fit into the container. |  |  |
| 5.0 | autoHeight | boolean | • `true` to restrict the width of the applet and compute height automatically, add |  |
| allowUpscale | `true` or `false` | Determines whether automatic scaling may scale the applet up**Default:** false |  |  |
| 5.0 | playButton | `true` or `false` | Determines whether a preview image and a play button should be rendered in place |  |
| scale | number | Ratio by which the applet should be scaled (eg. 2 makes the applet 2 times bigger, including all texts |  |  |
| showAnimationButton | `true` or `false` | Whether animation button should be visible | 5.0 |  |
| showFullscreenButton | `true` or `false` | Whether fullscreen button should be visible | 6.0 |  |
| showSuggestionButtons | `true` or `false` | Whether suggestion buttons (special points, solve) in Algebra View |  |  |
| showStartTooltip | `true` or `false` | Whether "Welcome" tooltip should be shown | 5.0 |  |
| rounding | string | String composed of number of decimal places and flags -- valid flags are "s" for significant digits |  |  |
| buttonShadows | `true` or `false` | Whether buttons should have shadow | 6.0 |  |
| buttonRounding | Number (0 - 0.9) | Relative radius of button's rounded border. The border radius in pixels is |  |  |
| buttonBorderColor | Hex color (`#RGB`, `#RGBA`, `#RRGGBB` or `#RRGGBBAA`) | Border color of buttons on |  |  |
| editorBackgroundColor | Hex color | Background color of the evaluator app | 6.0 |  |
| editorForegroundColor | Hex color | Foreground (text) color of the equation editor (appname = "evaluator") | 6.0 |  |
| textmode | `true` or `false` | Whether editor is in text mode or not (appname = "evaluator")*Default:* |  |  |
| showKeyboardOnFocus | `false`, `true` or `auto` | Whether to show keyboard when input is focused. When set to |  |  |
| keyboardType | `scientific`, `normal`, `notes` | Which keyboard is shown for equation editor (appname = "evaluator") |  |  |
| 6.0 | transparentGraphics | `true` or `false` | Whether the Graphics View and Graphics View 2 should be transparent |  |
| 6.0 | disableJavaScript | `true` or `false` | Whether running JavaScript from material files is disabled or not. | 6.0 |
| detachKeyboard | `true`, `false` or `auto` (default) | Whether the keyboard should be detached from the applet. |  |  |
| detachedKeyboardParent | String | When set, the keyboard should be attached to the first element in DOM that fits the |  |  |
