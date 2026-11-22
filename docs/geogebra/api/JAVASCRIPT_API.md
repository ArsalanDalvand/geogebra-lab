# GeoGebra Apps API

This page describes the GeoGebra Apps API to interact with GeoGebra apps. Please see
[GeoGebra Apps Embedding](g.md) on how to embed our apps into your web pages.

## [#Examples]#Examples#

In these examples you can see the GeoGebra Apps API in action:

* https://geogebra.github.io/integration/example-api.html[Showing & hiding objects with buttons]
* https://geogebra.github.io/integration/example-api-save-state.html[Saving & loading state]
* https://geogebra.github.io/integration/example-api-listeners.html[Listening to update, add, remove events]

> [!NOTE]
> Arguments in square brackets can be omitted.

## Creating objects

[cols=",^,",options="header",]

| Method Signature | Since | Description |
| --- | --- | --- |
| boolean evalCommand(String cmdString) | 3.0 | Evaluates the given string just like it would be evaluated when entered |
| boolean evalLaTex(String input) | 5.0 | Evaluates LaTeX string to a construction element. Basic syntaxes like `x^`{2}`` or `\frac` are supported. |
| String evalCommandGetLabels(String cmdString) | 5.0 | Like evalCommand(), but the return value is a String containing a |
| String evalCommandCAS(String string) | 3.2 | Passes the string to GeoGebra's CAS and returns the result as a String. |
| String evalLaTeX(String string) | 6.0 | Evaluates input as LaTeX. Common LaTeX constructs like `\sqrt{x}` or `\frac{x}{x-1}` are supported. |
| void insertEmbed(String type, String uri) | 6.0 (Notes) | Inserts embedded element with specific type and URI. |

## [#Setting_the_state_of_objects]#Setting the state of objects#

### [#General_methods]#General methods#

[cols=",^,",options="header",]

| Method Signature | Since | Description |  |
| --- | --- | --- | --- |
| void deleteObject(String objName) | 2.7 | Deletes the object with the given name. |  |
| void setAuxiliary(geo, true/false) | 5.0 | Affects or not the status of "auxiliary object" to object _geo_. |  |
| void setValue(String objName, double value) | 3.2 | Sets the double value of the object with the given name. Note: if the |  |
| void setTextValue(String objName, String value) | 3.2 | Sets the text value of the object with the given name. For any |  |
| void setListValue(String objName, int i, double value) | 5.0 | Sets the value of the list element at position 'i' to |  |
| void setCoords(String objName, double x, double y)void setCoords(String objName, double x, double y, double z) | 3.05.0 | Sets the coordinates of the object with the given name. Note: if the specified object is not a point, vector, line or |  |
| void setCaption(String objName, String caption) | 5.0 | Sets the caption of object with given name. |  |
| void setColor(String objName, int red, int green, int blue) | 2.7 | Sets the color of the object with the given name. |  |
| void setVisible(String objName, boolean visible) | 2.7 | Shows or hides the object with the given name in the graphics |  |
| void setLabelVisible(String objName, boolean visible) | 3.0 | Shows or hides the label of the object with the given name |  |
| void setLabelStyle(String objName, int style) | 3.0 | Sets the label style of the object with the given name in the |  |
| void setFixed(String objName, boolean fixed, boolean selectionAllowed) | 3.0 | Sets the "Fixed" and "Selection Allowed" |  |
| void setTrace(String objName, boolean flag) | 3.0 | Turns the trace of the object with the given name on or off. |  |
| boolean renameObject(String oldObjName, String newObjName) | 3.2 | Renames oldObjName to newObjName. Returns whether the |  |
| void setLayer(String objName, int layer) | 3.2 | Sets the layer of the object |  |
| void setLayerVisible(int layer, boolean visible) | 3.2 | Shows or hides the all objects in the given layer |  |
| void setLineStyle(String objName, int style) | 3.2 | Sets the line style for the object (0 to 4) |  |
| void setLineThickness(String objName, int thickness) | 3.2 | sets the thickness of the object (1 to 13, -1 for default) |  |
| void setPointStyle(String objName, int style) | 3.2 | Sets the style of points (-1 default, 0 filled circle, 1 cross, 2 |  |
| void setPointSize(String objName, int size) | 3.2 | Sets the size of a point (from 1 to 9) |  |
| void setDisplayStyle(String objName, String style) | 5.0 | Sets the display style of an object. Style should be one of |  |
| void setFilling(String objName, double filling) | 3.2 | Sets the filling of an object (from 0 to 1) |  |
| String getPNGBase64(double exportScale, boolean transparent, double DPI) | 4.0 | Returns the active Graphics View as a |  |
| void exportSVG(String filename) or void exportSVG(function callback) | HTML5 | Renders the active Graphics View as an SVG |  |
| void exportPDF(double scale, String filename, String sliderLabel) or void exportPDF(double scale, function callback, String sliderLabel) \|HTML5 \|Renders the active Graphics View as a PDF and either downloads it as the given filename or sends it to the callback function ` ggbApplet.exportPDF(1, pdf => console.log(pdf)); ` For Classic 5 compatibility please use `ExportImage("type", "pdf", "filename", "foo.pdf")` instead | void getScreenshotBase64(function callback) | 5.0 | Gets the screenshot of the whole applet as PNG and sends it to the |
| boolean writePNGtoFile(String filename, double exportScale, boolean transparent, double DPI) | 4.0 | Exports the active |  |
| boolean isIndependent(String objName) | 4.0 | checks if *objName* is independent |  |
| boolean isMoveable(String objName) | 4.0 | checks if *objName* is is moveable |  |
| void showAllObjects() | 5.0 | Changes bounds of the Graphics View so that all visible objects are on screen. |  |
| void registerEmbedResolver(String type, Function callback) | 6.0 | Adds a resolving function for specific embedded element type. The function gets an ID of the embed and returns a promise that resolves to an HTML string. |  |

### [#Automatic_Animation]#Automatic Animation#

[cols=",^,",options="header",]

| Method Signature | Since | Description |
| --- | --- | --- |
| void setAnimating(String objName, boolean animate) | 3.2 | Sets whether an object should be animated. This does not start |
| void setAnimationSpeed(String objName, double speed) | 3.2 | Sets the animation speed of an object. |
| void startAnimation() | 3.2 | Starts automatic animation for all objects with the animating flag set, see setAnimating() |
| void stopAnimation() | 3.2 | Stops animation for all objects with the animating flag set, see setAnimating() |
| boolean isAnimationRunning() | 3.2 | Returns whether automatic animation is currently running. |

## [#Getting_the_state_of_objects]#Getting the state of objects#

[cols=",^,",options="header",]

| Method Signature | Since | Description |
| --- | --- | --- |
| double getXcoord(String objName) | 2.7 | Returns the cartesian x-coord of the object with the given name. Note: returns 0 |
| double getYcoord(String objName) | 2.7 | Returns the cartesian y-coord of the object with the given name. Note: returns 0 |
| double getZcoord(String objName) | 5.0 | Returns the cartesian z-coord of the object with the given name. Note: returns 0 |
| double getValue(String objName) | 3.2 | Returns the double value of the object with the given name (e.g. length of |
| double getListValue(String objName, Integer index) | 5.0 | Returns the double value of the object in the list (with the |
| String getColor(String objName) | 2.7 | Returns the color of the object with the given name as a hex string, e.g. |
| boolean getVisible(String objName) | 3.2 | Returns true or false depending on whether the object is visible in the |
| boolean getVisible(String objName, int view) | 4.2 | Returns true or false depending on whether the object is visible in |
| String getValueString(String objName [, boolean useLocalizedInput = true]) | 2.7 | Returns the value of the object with |
| String getDefinitionString(String objName) | 2.7 | Returns the description of the object with the given name as a string |
| String getCommandString(String objName [, boolean useLocalizedInput]) | 5.0 | Returns the command of the object with the |
| String getLaTeXString(String objName) | 5.0 | Returns the value of given object in LaTeX syntax |
| String getLaTeXBase64(String objName, boolean value) | 5.0 | Returns base64 encoded PNG picture containing the object as |
| String getObjectType(String objName) | 2.7 | Returns the type of the given object as a string (like "point", "line", |
| boolean exists(String objName) | 2.7 | Returns whether an object with the given name exists in the construction. |
| boolean isDefined(String objName) | 2.7 | Returns whether the given object's value is valid at the moment. |
| String  getAllObjectNames([String type]) | 2.7 | Returns an array with all object names in the construction. If type |
| int getObjectNumber() | 3.0 | Returns the number of objects in the construction. |
| int getCASObjectNumber() | 3.0 | Returns the number of object (nonempty cells) in CAS. |
| String getObjectName(int i) | 3.0 | Returns the name of the n-th object of the construction. |
| String getLayer(String objName) | 3.2 | Returns the layer of the object. |
| int getLineStyle(String objName) | 3.2 | Gets the line style for the object (0 to 4) |
| int getLineThickness(String objName) | 3.2 | Gets the thickness of the line (1 to 13) |
| int getPointStyle(String objName) | 3.2 | Gets the style of points (-1 default, 0 filled circle, 1 circle, 2 cross, 3 |
| int getPointSize(String objName) | 3.2 | Gets the size of a point (from 1 to 9) |
| double getFilling(String objName) | 3.2 | Gets the filling of an object (from 0 to 1) |
| getCaption(String objectName, boolean substitutePlaceholders) | 5.0 | Returns the caption of the object. If the caption |
| getLabelStyle(String objectName) | 5.0 | Returns label type for given object, see setLabelStyle for possible values. |
| getLabelVisible() | 5.0 |  |
| isInteractive(String objName) |  | Returns true, if the object with label objName is existing and the user can get to |

## Construction / User Interface

| Method Signature | Since | Description |
| --- | --- | --- |
| void setMode(int mode) | 2.7 | Sets the mouse mode (i.e. tool) for the graphics window (see |
| int getMode() | 5.0 | Gets the mouse mode (i.e. tool), see [toolbar reference](r.md) for details |
| void openFile(String strURL) | 2.7 (Java only) | Opens a construction from a  file (given as absolute or relative URL |
| void reset() | 2.7 | Reloads the initial construction (given in filename parameter) of this applet. |
| void newConstruction() | 2.7 | Removes all construction objects |
| void refreshViews() | 2.7 | Refreshes all views. Note: this clears all traces in the graphics window. |
| void setOnTheFlyPointCreationActive(boolean flag) | 3.2 | Turns on the fly creation of points in graphics view on (true) |
| void setPointCapture(view, mode) | 5.0 a |  |
| void setRounding(string round) | 5.0 | The string consists of a number and flags, "s" flag for significant digits, "d" |
| void hideCursorWhenDragging(boolean flag) | 3.2 | Hides (true) or shows (false) the mouse cursor (pointer) when dragging |
| void setRepaintingActive(boolean flag) | 2.7 | Turns the repainting of this applet on (true) or off (false). Note: use |
| void setErrorDialogsActive(boolean flag) | 3.0 | Turns showing of error dialogs on (true) or off (false). Note: this is |
| void setCoordSystem(double xmin, double xmax, double ymin, double ymax) | 3.0 | Sets the Cartesian coordinate system of |
| void setCoordSystem(double xmin, double xmax, double ymin, double ymax, double zmin, double zmax, boolean yVertical) | 5.0 | Sets the Cartesian coordinate system of the 3D graphics window. The last parameter determines whether y-axis |
| void setAxesVisible(boolean xAxis, boolean yAxis) | 3.0 | Shows or hides the x- and y-axis of the coordinate system in |
| void setAxesVisible(int viewNumber, boolean xAxis, boolean yAxis, boolean zAxis) | 5.0 a |  |
| void setAxisLabels(int viewNumber, String xAxis, String yAxis, String zAxis) | 5.0 a |  |
| void setAxisSteps(int viewNumber, double xAxis, double yAxis, double zAxis) | 5.0 a |  |
| void setAxisUnits(int viewNumber, String xAxis, String yAxis, String zAxis) | 5.0 a |  |
| void setGridVisible(boolean flag) | 3.0 | Shows or hides the coordinate grid in the graphics windows 1 and 2. |
| void setGridVisible(int viewNumber, boolean flag) | 5.0 | Shows or hides the coordinate grid in given graphics view |
| getGridVisible(int viewNumber) | 5.0 | Returns true if grid is visible in given view. If view number is omitted, returns |
| getPerspectiveXML() | 5.0 | Returns an XML representation of the current perspective. |
| void setUndoPoint() | 3.2 | Sets an undo point. Useful if you want the user to be able to undo that action of evalCommand |
| undo() | 5.0 | Undoes one user action. |
| redo() | 5.0 | Redoes one user action. |
| showToolBar(boolean show) | HTML5 | Sets visibility of toolbar |
| setCustomToolBar(String toolbar) | 5.0 | Sets the layout of the main toolbar, see [toolbar |
| addCustomTool(String iconURL, String name, String category, Function callback) | 6.0 (Notes only) | Adds a custom tool with given name and icon (https: or data: URL) to the Notes toolbox. The `callback` function is called when user selects the tool, it may show custom UI and/or use object creation APIs to create new objects. The `category` parameter may be one of `upload`, `link` or `more` and specifies in which category to show the new tool; if omitted, the `more` category is used. |
| showMenuBar(boolean show) | HTML5 | Sets visibility of menu bar |
| showAlgebraInput(boolean show) | HTML5 | Sets visibility of input bar |
| showResetIcon(boolean show) | HTML5 | Sets visibility of reset icon |
| enableRightClick(boolean enable) | 5.0 | Enables or disables right click features |
| enableLabelDrags(boolean enable) | 5.0 | Enables or disables dragging object labels |
| enableShiftDragZoom(boolean enable) | 5.0 | Enables or disables zooming and dragging the view using mouse or keyboard |
| enableCAS(boolean enable) | 5.0 | Enables or disables CAS features (both the view and commands) |
| enable3D(boolean enable) | 5.0 | Enables or disables the 3D view |
| void setPerspective(string perspective) | 5.0 | Changes the open views, see |
| setWidth(int width) | 5.0 (HTML5) | Change width of the applet (in pixels) |
| setHeight(int height) | 5.0 (HTML5) | Change height of the applet (in pixels) |
| setSize(int width, int height) | 5.0 (HTML5) | Change width and height of the applet (in pixels) |
| recalculateEnvironments() | 5.0 (HTML5) | Update the applet after scaling by external CSS |
| getEditorState() | 5.0 (HTML5) | Get state of the equation editor in algebra view (or in evaluator applet). Returns JSON |
| setEditorState(Object state) | 5.0 (HTML5) | Set state of the equation editor in algebra view (or in evaluator applet). |
| getGraphicsOptions(int viewId) | 5.0 (HTML5) | Get the graphics options for euclidian view specified by viewId. It |
| setGraphicsOptions(int viewId, Object options) | 5.0 (HTML5) | Set the graphics options for euclidian view specified by |
| setAlgebraOptions(Object options) | 5.0 (HTML5) | Set the options for the algebra view. The argument should be a JSON |
| getViewProperties(int viewID) | 6.0 | Returns properties of a view as JSON-encoded string. |

## [#Event_listeners](r.md)#Event listeners#

With these methods you can implement Applet to JavaScript communication. For example, these methods can be used to:

* monitor user actions (see https://geogebra.github.io/integration/example-api-listeners.html[Event listeners example])
* communicate between two GeoGebra applets (see https://geogebra.github.io/integration/example-api-sync.html[two applets
example])

| Method Signature | Since | Description |
| --- | --- | --- |
| void registerAddListener(JSFunction function) | 3.0 a |  |
| void unregisterAddListener(JSFunction function) | 3.0 | Removes a previously registered add listener, see |
| void registerRemoveListener(JSFunction function) | 3.0 a |  |
| void unregisterRemoveListener(JSFunction function) | 3.0 | Removes a previously registered remove listener, see |
| void registerUpdateListener(JSFunction function) | 3.0 a |  |
| void unregisterUpdateListener(JSFunction function) | 3.0 | Removes a previously registered update listener, see |
| void registerClickListener(JSFunction function) | 5.0 | Registers a JavaScript function as a click listener for the |
| void unregisterClickListener(JSFunction function) | 3.0 | Removes a previously registered click listener, see |
| void registerObjectUpdateListener(String objName, JSFunction function) | 3.0 a |  |
| void unregisterObjectUpdateListener(String objName) | 3.0 | Removes a previously registered object update listener of the |
| void registerObjectClickListener(String objName, JSFunction function) | 5.0 a |  |
| void unregisterObjectClickListener(String objName) | 5.0 | Removes a previously registered object click listener of the |
| void registerRenameListener(JSFunction function) | 3.0 a |  |
| void unregisterRenameListener(String objName) | 3.0 | Removes a previously registered rename listener, see |
| void registerClearListener(JSFunction function) | 3.0 a |  |
| void unregisterClearListener(JSFunction function) | 3.0 | Removes a previously registered clear listener, see |
| void registerStoreUndoListener(JSFunction function) | 4.4 | Registers a listener that is called (with no arguments) |
| void unregisterStoreUndoListener(JSFunction function) | 4.4 | Removes previously registered listener for storing undo |
| void registerClientListener(JSFunction function) | 5.0 a |  |
| void unregisterClientListener(JSFunction function) | 5.0 | Removes previously registered client listener, see |

### [#Client_Events]#Client Events#

These events can be observed using the `registerClientListener` method

[cols=",,",options="header",]

| Type | Attributes | Description |  |
| --- | --- | --- | --- |
| addMacro | `argument`: macro name | when new macro is added |  |
| addPolygon |  | polygon construction started |  |
| addPolygonComplete | `target`: polygon label | polygon construction finished |  |
| algebraPanelSelected |  | Graphing / Geometry apps: algebra tab selected in sidebar |  |
| deleteGeos |  | multiple objects deleted |  |
| deselect | `target`: object name (for single object) or null (deselect all) | one or all objects removed from |  |
| dragEnd |  | mouse drag ended |  |
| dropdownClosed | `target`: dropdown list name, `index` index of selected item (0 based) | dropdown list closed |  |
| dropdownItemFocused | `target`: dropdown list name, `index` index of focused item (0 based) | dropdown list item |  |
| dropdownOpened | `target`: dropdown list name | dropdown list opened |  |
| editorKeyTyped |  | key typed in editor (Algebra view of any app or standalone Evaluator app) |  |
| editorStart | `target:` object label if editing existing object | user moves focus to the editor (Algebra view of any |  |
| editorStop | `target`: object label if editing existing object | user (Algebra view of any app or standalone |  |
| export | `argument`: JSON encoded array including export format | export started |  |
| mouseDown | `x`: mouse x-coordinate, `y`: mouse y-coordinate | user pressed the mouse button |  |
| movedGeos | `argument`: object labels | multiple objects move ended |  |
| movingGeos | `argument`: object labels | multiple objects are being moved |  |
| openDialog | `argument`: dialog ID | dialog is opened (currently just for export dialog) |  |
| openMenu | `argument`: submenu ID | main menu or one of its submenus were open |  |
| pasteElms | `argument`: pasted objects as XML | pasting multiple objects started |  |
| pasteElmsComplete |  | pasting multiple objects ended |  |
| perspectiveChange |  | perspective changed (e.g. a view was opened or closed) |  |
| redo |  | redo button pressed |  |
| relationTool | `argument`: HTML description of the object relation | relation tool used |  |
| removeMacro | `argument`: custom tool name | custom tool removed |  |
| renameComplete |  | object renaming complete (in case of chain renames) |  |
| renameMacro | `argument`: array [old name, new name] | custom tool was renamed |  |
| select | `target`: object label | object added to selection |  |
| setMode | `argument`: mode number (see toolbar reference for details) | app mode changed (e.g. a tool was selected) |  |
| showNavigationBar | `argument`: "true" or "false" | navigation bar visibility changed |  |
| showStyleBar | `argument`: "true" or "false" | style bar visibility changed |  |
| sidePanelClosed |  | side panel (where algebra view is in Graphing Calculator) closed |  |
| sidePanelOpened |  | side panel (where algebra view is in Graphing Calculator) opened |  |
| tablePanelSelected |  | table of values panel selected |  |
| toolsPanelSelected |  | tools panel selected |  |
| undo |  | undo pressed |  |
| updateStyle | `target`: object label | object style changed |  |
| viewChanged2D | `xZero`: horizontal pixel position of point (0,0), `yZero`: vertical pixel position of point (0,0), `xscale`: ratio pixels / horizontal units, `yscale`: ratio pixels / vertical units, `viewNo`: graphics view number (1 or 2) \|graphics view dimensions changed by zooming or panning | viewChanged3D | similar to 2D, e.g. |

## GeoGebra's File format

With these methods you can set everything in a construction (see [XML Reference](L.md) ).

[cols=",^,",options="header",]

| Method Signature | Since | Description |
| --- | --- | --- |
| void evalXML(String xmlString) | 2.7 | Evaluates the given XML string and changes the current construction. Note: the |
| void setXML(String xmlString) | 2.7 | Evaluates the given XML string and changes the current construction. Note: the |
| String getXML() | 2.7 | Returns the current construction in GeoGebra's XML format. This method could be used to save |
| String getXML(String objName) | 3.2 | Returns the GeoGebra XML string for the given object, i.e. only the <element> tag |
| String getAlgorithmXML(String objName) | 3.2 | For a dependent GeoElement objName the XML string of the parent algorithm |
| String getFileJSON() | 5.0 | Gets the current construction as JSON object including the XML and images |
| String setFileJSON(Object content) | 5.0 | Sets the current construction from a JSON (object or string) that includes XML |
| String getBase64() |  | Gets the current construction as a base64-encoded .ggb file |
| String getBase64(function callback) | 4.2 | Gets the current construction as a base64-encoded .ggb file asynchronously, |
| void setBase64(String [, function callback] ) | 4.0 | Sets the current construction from a base64-encoded .ggb file. If |

## [#Miscellaneous]#Miscellaneous#

[cols=",^,",options="header",]

| Method Signature | Since | Description |
| --- | --- | --- |
| void debug(String string) | 3.2 | Prints the string to the Java Console |
| String getVersion() | 5.0 | Returns the version of GeoGebra |
| void remove() | 5.0 | Removes the applet and frees up memory |

### [#Obtaining_the_API_Object]#Obtaining the API Object#

If you are loading GeoGebra using the `deployggb.js` script, you can access the api as an argument of
`appletOnLoad`:

```text
const ggb = new GGBApplet({
  appletOnLoad(ggbApi) {
    // ggbApi provides the applet API
  }
});
ggb.inject(document.body);
```

For compatibility reasons the API objects can be also accessed via global variables. The name of the global variable is
`ggbApplet` by default and can be overridden by the `id` parameter passed to `new GGBApplet(...)`. In case
you have multiple GeoGebra apps on a page, `ggbApplet` always contains API of the last active one. In such case you
should either avoid using global variables or use set the `id` parameter explicitly for all apps.

### [#Obtaining_the_API_Object_as_a_module:_The_ES6_way]#Obtaining the API Object as a module: The ES6 way#

You can use math-apps module now to inject the applet the ES6 way too

```text
<script type="module">
    import {mathApps} from 'https://www.geogebra.org/apps/latest/web3d/web3d.nocache.mjs';
    mathApps.create({'width':'800', 'height':'600',
        'showAlgebraInput': 'true',
        'material_id':'MJWHp9en'})
        .inject(document.querySelector("#applet1"));
</script>
<div id="applet1"></div>
```

Example of using the API:

```text
mathApps.create({'appName':'graphing'})
    .inject(document.querySelector("#plot"))
    .getAPI().then(api => api.evalCommand('f(x)=sin(x)'));
```
