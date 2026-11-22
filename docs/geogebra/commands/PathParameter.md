# PathParameter Command

#### `PathParameter( <Point On Path> )`
  Returns the parameter (i.e. a number ranging from _0_ to _1_) of the point that belongs to a
  [path](Geometric_Objects.md).

> [!EXAMPLE]
> Let `f(x) = x² + x - 1` and  _A_ is a point attached to this function with coordinates (1,1) (you can create such point using the point on object tool or `A=Point(f)`, `SetCoords(A,1,1)` commands). Then `PathParameter(A)` yields _a
> # 0.47_.

In the following table stem:[f(x)=\frac{x}{1+|x|}] is a function used to map all real numbers into interval (-1,1) and
stem:[\phi(X,A,B)=\frac{\overrightarrow{AX}\cdot\overrightarrow{AB}}{|AB|^2}] is a linear map from line AB to reals
which sends A to 0 and B to 1.

[cols=",",]

| Line AB | stem:[\frac{f(\phi(X,A,B))+1}2] | Ray AB | stem:[f(\phi(X,A,B))] |
| --- | --- | --- | --- |
| Segment AB | stem:[\phi(X,A,B)] | Circle with center _C_ and radius _r_ | Point stem:[X=C+(r\cdot \cos(\alpha),r\cdot \sin(\alpha))], where stem:[\alpha\in \]-\pi,\pi\]] has path parameter stem:[\frac{\alpha+\pi}{2\pi}] |
| Ellipse with center _C_ and semiaxes stem:[\vec{a}], stem:[\vec{b}] | Point stem:[X=C+ \vec{a} \cdot \cos(\alpha) + \vec{b} \cdot \sin(\alpha) ] , where stem:[\alpha\in \]-\pi,\pi\]] has path parameter |  |  |
| Hyperbola | Point stem:[X = C \pm \vec{a} · \cosh(t) + \vec{b} · \sinh(t)] has path parameter stem:[ \frac{f(t)+1}{4}] |  |  |
| Parabola with vertex V and direction of axis stem:[\vec{v}]. | Point stem:[V+\frac{1}{2}p\cdot t^2\cdot \vec{v}+p\cdot t \cdot \vec{v}^{\perp}] has path parameter stem:[\frac{f(t)+1}2]. | Polyline A<sub>1</sub>...A<sub>n</sub> | If X lies on A<sub>k</sub>A~k+1~, path parameter of _X_ is stem:[\frac{k-1+\phi(X,A,B)}{n-1}] |
| Polygon A<sub>1</sub>...A<sub>n</sub> | If X lies on A<sub>k</sub>A~k+1~ (using A~n+1~=A<sub>1</sub>), path parameter of _X_ is |  |  |
| List of paths L={p<sub>1</sub>,...,p<sub>n</sub>} | If X lies on p<sub>k</sub> and path parameter of X w.r.t. p<sub>k</sub> is _t_, path parameter of _X_ |  |  |
| List of points L={A<sub>1</sub>,...,A<sub>n</sub>} | Path parameter of A<sub>k</sub> is stem:[\frac{k-1}{n}]. Point[L,t] returns |  |  |
| Locus |  | Implicit polynomial | No formula available. |
