# GeoGebra Lab Offline Reference Documentation

Welcome to the offline documentation library for **GeoGebra Lab**. This library contains official GeoGebra commands, API parameters, guides, and error prevention rules bundled directly inside the plugin.

---

## Quick Navigation

1. **[AI Agent Guide & Error Prevention](AGENT_GUIDE_AND_PITFALLS.md)**
   - Top 10 reasons GeoGebra commands fail and how to write 100% error-free blocks.
   - App selection rules (2D vs 3D vs CAS).
   - Fast cheatsheets for Geometry, Calculus, 3D, and Styling.

2. **[GeoGebra Commands Catalog](COMMANDS_CATALOG.md)**
   - Categorized index of over 500 official GeoGebra commands with direct links to full command documentation.

3. **[Individual Command Specifications](commands/)**
   - 500+ Markdown files detailing syntax signatures, parameter types, and practical examples for every GeoGebra command (e.g. `Intersect.md`, `Circle.md`, `Derivative.md`, `Slider.md`, `Sphere.md`).

4. **[Core Mathematical & Graphical Guides](guides/)**
   - Detailed conceptual guides:
     - [Scripting in GeoGebra](guides/Scripting.md)
     - [Geometric Objects](guides/Geometric_Objects.md)
     - [Functions & Calculus](guides/Functions.md)
     - [3D Graphics View](guides/3D_Graphics_View.md)
     - [Points and Vectors](guides/Points_and_Vectors.md)
     - [Curves & Parametric Plots](guides/Curves.md)
     - [Conic Sections](guides/Conic_sections.md)
     - [Object Properties & Styling](guides/Object_Properties.md)
     - [Dynamic Colors](guides/Dynamic_Colors.md)
     - [Animation & Sliders](guides/Animation.md)
     - [Lists & Sequences](guides/Lists.md)
     - [Matrices & Linear Algebra](guides/Matrices.md)
     - [Complex Numbers](guides/Complex_Numbers.md)

5. **[GeoGebra Applet & Web API Specifications](api/)**
   - [Applet Embedding Parameters](api/APPLET_PARAMETERS.md): Complete list of 40+ GeoGebra applet options supported by GeoGebra Lab YAML.
   - [JavaScript API Reference](api/JAVASCRIPT_API.md): Full method reference for `api.evalCommand`, listeners, getters, and setters.
   - [Colors Reference](api/COLORS.md): Standard color names supported by `SetColor`.
   - [Toolbar IDs](api/TOOLBAR.md): Tool IDs for customizing `customToolBar`.
   - [XML Specification](api/XML_SPECIFICATION.md): Specification for internal GeoGebra XML representations.

---

## Code Block Quick Reference

GeoGebra Lab supports 4 code block aliases: `geogebra`, `ggb`, `GeoGebra`, and `GGB`.

````markdown
```geogebra
appName: graphing
width: 800
height: 500
language: en
transparentGraphics: true
showResetIcon: true

commands:
  - "f(x) = sin(x)"
  - "g(x) = cos(x)"
  - "P = Intersect(f, g, 1)"
  - "SetColor(f, \"#2563eb\")"
  - "SetColor(g, \"#dc2626\")"

caption: "Intersection of sine and cosine curves."
explain:
  - "Visual demonstration of trigonometric equality at pi/4."
```
````
