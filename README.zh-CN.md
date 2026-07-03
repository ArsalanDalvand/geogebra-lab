# GeoGebra Lab

[English README](README.md)

GeoGebra Lab 是一个 Obsidian 插件，用于在 Markdown 笔记中通过安全、结构化的 `geogebra` 代码块嵌入可交互的 GeoGebra 动态图像。

它面向教学笔记、数学可视化和 AI Agent 工作流：Agent 只需要生成 YAML，插件负责 iframe、GeoGebra 加载和命令执行。

## 当前状态

这是一个 MVP 版本。

- 当前在线加载 GeoGebra 官方脚本：`https://www.geogebra.org/apps/deployggb.js`。
- 不支持在 `geogebra` 代码块中写任意 JavaScript。
- Agent 应生成 YAML 结构，不应生成 iframe HTML 或 JS。
- 如果网络无法访问 GeoGebra，图像可能无法加载。
- 如果 Obsidian 的 CSP 阻止 GeoGebra CSS 或相关资源，可使用 Local viewer server 或 External viewer iframe 模式。
- 当前不包含离线 GeoGebra bundle。

## 安装

1. 安装依赖：

```bash
npm install
```

2. 构建：

```bash
npm run build
```

3. 将插件文件放入你的 Vault：

```text
YourVault/.obsidian/plugins/geogebra-lab/
```

4. 确保目录中至少有：

```text
main.js
manifest.json
styles.css
```

5. 打开 Obsidian 设置。
6. 启用社区插件。
7. 启用 `GeoGebra Lab`。

开发模式：

```bash
npm run dev
```

## 渲染模式与 CSP

Obsidian 的内容安全策略可能会阻止 GeoGebra 在 `srcdoc` iframe 中动态加载 CSS、字体或其他资源。表现通常是 GeoGebra 脚本能加载，但图像样式异常或界面不完整。

GeoGebra Lab 支持三种渲染模式：

| 模式 | 使用场景 |
| --- | --- |
| `Local viewer server` | 推荐用于 Obsidian 桌面端。插件自动启动临时 `127.0.0.1` viewer server，无需部署。 |
| `External viewer iframe` | 推荐用于移动端、同步 Vault、团队使用，或需要稳定远程 viewer URL 的场景。 |
| `srcdoc iframe` | 最简单的备用模式。仅在 Obsidian CSP 不阻止 GeoGebra 资源时适用。 |

无论使用哪种模式，Markdown 代码块语法都完全相同。

### Local Viewer Server

Local viewer server 模式会在渲染 GeoGebra 代码块时，在本机 `127.0.0.1` 上启动一个随机端口的临时 HTTP server。

iframe 地址类似：

```text
http://127.0.0.1:39217/viewer#encoded-config
```

这样 GeoGebra 不再运行在 Obsidian 的 `srcdoc` CSP 环境里，并且用户不需要自己部署任何服务。

注意：

- Local viewer server 仅适用于 Obsidian 桌面端。
- server 只绑定到 `127.0.0.1`，不会暴露到公网网卡。
- 插件卸载时 server 会关闭。
- 如果本地 server 启动失败，错误会显示在笔记页面中。

### External Viewer

External viewer 模式会从独立 HTTPS 页面加载 GeoGebra，而不是从 Obsidian 的 `srcdoc` 文档中加载。它适合移动端、跨设备或团队共享场景。

你可以直接使用本项目已经部署好的 viewer：

```text
https://geobsidian.vercel.app/
```

在 Obsidian 中：

1. 打开 `GeoGebra Lab` 设置。
2. 将 `Render mode` 设置为 `External viewer iframe`。
3. 将 `External viewer URL` 设置为：

```text
https://geobsidian.vercel.app/
```

4. 重新打开或刷新笔记。

如果你想部署自己的 viewer，也可以将以下文件部署到 Vercel、GitHub Pages、Cloudflare Pages、Netlify 或内部 HTTPS 静态服务器：

```text
viewer/index.html
```

Vercel 的简单部署方式：

1. 创建一个新的 Vercel 项目。
2. 将 `viewer/` 目录作为项目根目录。
3. 按静态站点部署。
4. 将部署后的 HTTPS URL 填入 `External viewer URL`。

插件会通过 iframe URL hash 把 GeoGebra 配置传给 viewer。正常浏览器请求不会把 URL hash 发送给服务器，但它会在本地浏览器或 WebView 地址中可见。

## 使用方法

在 Markdown 笔记中写入 `geogebra` fenced code block：

````markdown
```geogebra
appName: graphing
width: 800
height: 500
showToolBar: false
showAlgebraInput: true
showMenuBar: false

commands:
  - "f(x)=e^x"
  - "g(x)=1+x"
  - "A=(0,1)"

caption: "Exponential function and linear approximation near 0."
explain:
  - "This helps explain why e^x is close to 1+x near x=0."
  - "It also supports lim_{x->0}(e^x-1)/x=1."
```
````

插件会将其渲染为一个 sandbox iframe 中的 GeoGebra applet。

## 代码块语法

```yaml
appName: graphing
width: 800
height: 500
showToolBar: false
showAlgebraInput: true
showMenuBar: false
materialId:
filename:
commands:
  - "f(x)=e^x"
caption:
explain:
  - ""
```

## 字段说明

| 字段 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `appName` | `graphing`, `geometry`, `3d`, `classic` | `graphing` | GeoGebra 应用类型。 |
| `width` | number | `800` | 图像请求宽度，iframe 不会超过笔记容器宽度。 |
| `height` | number | `500` | 图像高度，单位为像素。 |
| `showToolBar` | boolean | `false` | 是否显示 GeoGebra 工具栏。 |
| `showAlgebraInput` | boolean | `true` | 是否显示代数输入栏。 |
| `showMenuBar` | boolean | `false` | 是否显示菜单栏。 |
| `materialId` | string | 无 | 可选 GeoGebra material ID。 |
| `filename` | string | 无 | 可选 `.ggb` 文件名或 GeoGebra 可接受的 URL。暂未实现 Obsidian 附件路径解析。 |
| `commands` | string array | `[]` | applet 加载后执行的 GeoGebra 命令。 |
| `caption` | string | 无 | iframe 下方的图注。 |
| `explain` | string array | `[]` | 图注下方的教学说明。 |

未知字段会被忽略，并显示警告。

## 示例

### 指数函数近似

````markdown
```geogebra
appName: graphing
width: 800
height: 500
commands:
  - "f(x)=e^x"
  - "g(x)=1+x"
caption: "Compare e^x and 1+x near x=0."
explain:
  - "This helps explain why lim_{x->0}(e^x-1)/x=1."
```
````

### 动态三角形

````markdown
```geogebra
appName: geometry
width: 800
height: 500
showToolBar: true
commands:
  - "A=(0,0)"
  - "B=(4,0)"
  - "C=(2,3)"
  - "Polygon(A,B,C)"
caption: "Dynamic triangle example."
explain:
  - "Drag points A, B, C to change the triangle."
```
````

更多示例见 `examples/` 目录。

## 命令面板

GeoGebra Lab 添加了两个命令：

- `Insert GeoGebra graph block`
- `Insert GeoGebra geometry block`

它们会在当前光标处插入可编辑模板。

## 设置项

设置页支持：

- 渲染模式；
- 默认 app 类型；
- 默认宽度和高度；
- 默认工具栏、代数输入栏、菜单栏显示状态；
- GeoGebra 脚本 URL；
- External viewer URL；
- 是否显示图注；
- 是否显示解释说明。

## 给 Obsidian 内 Agent 的说明

Obsidian 内的 AI Agent 应只创建和修改结构化 `geogebra` YAML 代码块。

Agent 不应输出：

- iframe HTML；
- JavaScript；
- `<script>` 标签；
- 自定义 GeoGebra loader 代码。

推荐给 Agent 的提示词：

```text
When creating GeoGebra diagrams in this vault, use the GeoGebra Lab plugin syntax.

Always output a complete Markdown fenced code block using ```geogebra.
Inside the block, write YAML only.
Do not output iframe HTML, script tags, JavaScript, or custom loader code.

Use appName: graphing for functions, limits, derivatives, integrals, and inverse functions.
Use appName: geometry for points, segments, polygons, circles, and constructions.
Use commands as an array of GeoGebra command strings.
Use caption for a short visible description.
Use explain for short teaching notes.
Keep commands simple, editable, and reviewable.
```

## 安全说明

GeoGebra Lab 不会执行 Markdown 代码块中的任意 JavaScript。

插件会：

- 解析 YAML；
- 校验已知字段；
- 将 `commands` 作为字符串传给 GeoGebra 的 `api.evalCommand`；
- 使用 `srcdoc`、Local viewer server 或 External viewer 渲染 GeoGebra；
- 将 GeoGebra 脚本 URL 和 External viewer URL 放在设置项中；
- 在 Obsidian 页面中显示解析和运行时错误。

iframe 使用：

```html
sandbox="allow-scripts allow-same-origin"
```

GeoGebra 需要脚本执行。`allow-same-origin` 可能是 GeoGebra 内部运行所需，因此 iframe 是隔离边界，但不是完整的浏览器安全墙。

在 Local viewer server 和 External viewer 模式下，GeoGebra Lab 会同时校验 iframe window 和 viewer origin 后，才显示 `postMessage` 错误。

## 已知限制

- 需要能在线访问 GeoGebra。
- 当前不包含离线 GeoGebra bundle。
- Local viewer server 仅适用于桌面端。
- External viewer 需要可用的 HTTP 或 HTTPS viewer URL，可以直接使用 `https://geobsidian.vercel.app/`。
- Local viewer server 和 External viewer 模式下，大型构造可能导致 iframe URL hash 较长。
- 暂未实现 `.ggb` 附件路径解析。
- GeoGebra 命令是否有效由 GeoGebra 运行时判断。
- `api.evalCommand` 不一定能稳定报告所有无效命令。
- 当前尚不支持保存或恢复用户编辑后的 applet 状态。

## Roadmap

- 支持将当前 applet 状态保存为 base64。
- 支持 `getXML()` / `setXML()`。
- 支持 `.ggb` 附件加载。
- 支持本地离线 GeoGebra bundle。
- 支持导出 PNG / SVG。
- 支持更丰富的 postMessage 通信。
- 添加复制当前构造按钮。
- 支持 Agent 从选中文本生成 GeoGebra block。
- 支持代码块语法校验。
- 添加更多教学模板。
