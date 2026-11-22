# Delete Command

#### `Delete( <Object> )`
  Deletes the object and all its dependent objects.

> [!EXAMPLE]
> Let _P_ be a point, _sli_ a slider, and _seg=Segment(P, sli)_. The command `Delete(sli)` deletes the slider _sli_ and the segment _seg_, but doesn't delete point _P_ from the construction, since the point does not depend on the slider _sli_.

## CAS Syntax

#### `Delete( <Object> )`
  Deletes the object and all its dependent objects in GeoGebra and removes any value assigned to the object in the CAS View.

> [!EXAMPLE]
> Let _P_ be a point, _sli_ a slider, and _seg=Segment(P,sli)_. The command `Delete(sli)` deletes the slider _sli_ and the segment _seg_, but doesn't delete point _P_ from the construction, since the point does not depend on the slider _sli_.

> [!NOTE]
> See also  [Delete](Delete.md) tool.
