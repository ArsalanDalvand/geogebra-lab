# Cell Command

#### `Cell( <Column>, <Row> )`
  Returns copy of [spreadsheet](Spreadsheet_View.md) cell in given column and row.

> [!EXAMPLE]
> `Cell(2, 1)` returns copy of B1.

> [!NOTE]
> * By default the cells in spreadsheet cells are [auxiliary](Free_Dependent_and_Auxiliary_Objects.md) and in such
> case this command returns auxiliary object as well.
> * You must make sure that the cells you refer to are *earlier* in the
> 
> [Construction Protocol](Construction_Protocol.md) than this command.
