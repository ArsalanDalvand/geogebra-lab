# Object Command

*This command is deprecated - use in new files is unsupported*

#### `Object( <Name of Object as Text> )`
  Returns the object for a given name. The result is always a dependent object.

> [!EXAMPLE]
> If points _A1_, _A2_, ... , _A20_ exist and also a slider _n = 2_, then `Object("A" + n)` creates a copy of point
> _A2_.

> [!NOTE]
> * The *Object* command is the opposite of the [Name](Name.md) command.
> 
> * Object command cannot be used in [Custom Tools](Custom_Tools.md)
> 
> * Make sure that the objects you refer to are *earlier* in the  [Construction_Protocol](Construction_Protocol.md) than this command
