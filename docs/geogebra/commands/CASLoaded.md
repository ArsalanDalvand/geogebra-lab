# CASLoaded Command

#### `CASLoaded()`
  Returns a boolean value: `true` if CAS commands were already loaded, `false` otherwise.
  The value is dynamic (changes to `true` when CAS commands are loaded)

> [!NOTE]
> This commands is useful in the web version of GeoGebra where CAS commands are loaded with
> a delay after the app is started. You can use this command together with
> [Conditional Visibility](y.md) to hide some construction elements while
> CAS is loading.
