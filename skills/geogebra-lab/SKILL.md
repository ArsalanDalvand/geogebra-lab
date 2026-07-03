---
name: geogebra-lab
description: Use this skill when the user wants to create, revise, validate, or embed interactive GeoGebra diagrams in Obsidian using the GeoGebra Lab code block syntax.
---

# GeoGebra Lab Skill

## Purpose

This skill helps generate safe, editable, Agent-friendly GeoGebra code blocks for Obsidian notes.

## Core Principle

Agents should output structured `geogebra` code blocks, not raw iframe HTML or JavaScript.

The GeoGebra Lab plugin is responsible for rendering the iframe, loading GeoGebra, and executing GeoGebra commands. The Agent should only create or revise Markdown YAML blocks.

The plugin may render through `srcdoc`, Local viewer server, or External viewer mode to avoid Obsidian CSP issues. This does not change the Agent output format.

## Code Block Format

Use:

````markdown
```geogebra
appName: graphing
width: 800
height: 500

commands:
  - "f(x)=e^x"

caption: "Short description"
explain:
  - "Teaching purpose"
```
````

## App Selection

- Use `appName: graphing` for functions, calculus, limits, derivatives, inverse functions.
- Use `appName: geometry` for points, segments, triangles, circles, geometric constructions.
- Use `appName: 3d` only when 3D is necessary.
- Use `appName: classic` for mixed algebra and geometry.

## Rules

1. Do not output raw iframe HTML.
2. Do not output JavaScript.
3. Use `commands` for GeoGebra construction.
4. Keep commands simple.
5. Use English object names like `A`, `B`, `f`, `g`.
6. Use a concise `caption`.
7. Use `explain` to describe the teaching purpose.
8. Prefer editable constructions over static images.
9. If unsure whether a command is valid, mark it as needing review.
10. For Obsidian notes, always output a complete fenced code block.

## Revision Workflow

When editing an existing diagram:

1. Keep the outer fenced code block as ```geogebra.
2. Preserve fields that are unrelated to the user's request.
3. Update `commands`, `caption`, and `explain` when the mathematical meaning changes.
4. Do not replace the block with an image, iframe, or script.
5. If the user asks for interactivity, use editable GeoGebra objects and commands.

## Obsidian Agent System Prompt

Use this instruction when configuring an Agent inside Obsidian:

```text
When creating GeoGebra diagrams in this vault, use the GeoGebra Lab plugin syntax.

Always output a complete Markdown fenced code block using ```geogebra.
Inside the block, write YAML only.
Do not output iframe HTML, script tags, JavaScript, or custom loader code.

Use appName: graphing for functions and calculus.
Use appName: geometry for geometric constructions.
Use commands as an array of GeoGebra command strings.
Use caption for a short visible description.
Use explain for short teaching notes.
Keep commands simple, editable, and reviewable.
```

## Examples

### Exponential approximation

````markdown
```geogebra
appName: graphing
width: 800
height: 500
commands:
  - "f(x)=e^x"
  - "g(x)=1+x"
caption: "Compare e^x with its linear approximation near x=0."
explain:
  - "This helps explain why lim_{x->0}(e^x-1)/x=1."
```
````

### Inverse functions

````markdown
```geogebra
appName: graphing
width: 800
height: 500
commands:
  - "f(x)=e^x"
  - "g(x)=ln(x)"
  - "h(x)=x"
caption: "Show that e^x and ln(x) are inverse functions."
explain:
  - "The two curves are symmetric about y=x."
```
````
