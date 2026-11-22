# SetImage Command

#### `SetImage( <Object>, <Image> )`
  Fills the given object with an image. 

> [!NOTE]
> The object needs to allow filling, e.g. polygons, closed conics, buttons…

#### `SetImage( <Object>, <Text> )`
  Fills the object with one of the GeoGebra’s predefined action images, identified by the texts listed below.
   

> [!EXAMPLE]
> `SetImage(button1,"pause")` shows the GeoGebra’s predefined  Pause icon on button1.

> [!NOTE]
> The current version of the command supports only button objects. The names of the images (Text parameter) need
> to be enclosed in " ".

GeoGebra’s predefined action images

| Text | Image | pause a |  |
| --- | --- | --- | --- |
| play a |   | stop a |  |
| replay a |   | skip_next a |  |
| skip_previous a |   | loop a |  |
| zoom_in a |   | zoom_out a |  |
| close a |   | arrow_up a |  |
| arrow_down a |   | arrow_forward a |  |
| arrow_back a |   | fast_forward a |  |
| fast_rewind a |   | zoom_to_fit a |  |
| center_view a |   | help a |  |
| settings a |   |  |  |
