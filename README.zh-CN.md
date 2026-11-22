# GeoGebra Lab

[English README](README.md)

GeoGebra Lab 是一个专为 Obsidian 打造的动态数学图表插件，允许用户在 Markdown 笔记中通过安全、结构化的 YAML 代码块无缝嵌入可交互的 GeoGebra 图形。

本插件特别针对教学笔记、数学可视化及 **AI Agent 自动化工作流** 进行深度优化：AI Agent 仅需生成纯 YAML 配置，插件全权负责 iframe 沙箱隔离、CSP 安全绕过以及完整的 GeoGebra API 调用与命令执行。

## 核心特性

- **完整 GeoGebra API 覆盖：** 支持超过 40 项官方 GeoGebra 参数，零硬编码，全部可通过 YAML 灵活配置。
- **多代码块别名支持：** 原生支持 ```` ```geogebra ````、```` ```ggb ````、```` ```GeoGebra ```` 以及 ```` ```GGB ```` 语法。
- **Obsidian Prism 高亮集成：** 编辑器内自动为 GeoGebra 代码块提供纯净的 YAML 语法高亮，并支持生命周期无残留卸载。
- **支持全部 8 款官方应用：** 绘图计算器 (`graphing`)、几何 (`geometry`)、3D 计算器 (`3d`)、经典版 (`classic`)、计算器套件 (`suite`)、方程编辑器 (`evaluator`)、科学计算器 (`scientific`) 及数学白板 (`notes`)。
- **原生 Vault 附件解析：** 直接引用 Vault 中的本地 `.ggb` 文件（如 `filename: "model.ggb"` 或 `filename: "[[model.ggb]]"`），插件自动将其读取并转码为 `ggbBase64` 加载。
- **多语言字体与波斯语/阿拉伯语排版：** 内置系统字体与 `Vazirmatn`、`Inter`、`Segoe UI` 现代字体栈，确保波斯语、阿拉伯语、西文数学符号及公式清晰美观，并自动通过 `api.setLanguage` 强制同步界面语言。
- **9 大设置分类继承体系：** 极其完善的 Vault 全局设置选项，代码块省略字段时自动继承库设置默认值。
- **内置离线 GeoGebra 文档与 Agent 防错指南：** `docs/geogebra/` 目录下内嵌 500+ 官方命令手册、核心指南及针对 AI Agent 的命令语法避坑防错手册。
- **安全沙箱环境：** 严格解析 YAML 结构，并在受控 iframe 中运行，不执行代码块中的任意外部 JavaScript 代码。

## 安装

1. 克隆或下载本仓库。
2. 安装依赖：

```bash
npm install
```

3. 构建插件：

```bash
npm run build
```

4. 将产物文件夹复制到你的 Vault 插件目录：

```text
YourVault/.obsidian/plugins/geogebra-lab/
```

5. 确保目录下存在以下文件：

```text
main.js
manifest.json
styles.css
```

6. 打开 Obsidian 设置 -> 社区插件 -> 启用 **GeoGebra Lab**。

开发模式（热重载）：

```bash
npm run dev
```

运行单元测试：

```bash
npm test
```

## 渲染模式与 CSP

Obsidian 严格的内容安全策略 (CSP) 可能会限制 `srcdoc` iframe 动态加载外部 GeoGebra 资源。GeoGebra Lab 提供了三种渲染模式：

| 模式 | 推荐场景 | 说明 |
| --- | --- | --- |
| `Local viewer server` | **Obsidian 桌面端首选** | 自动在本地 `127.0.0.1` 启动极速临时 HTTP 服务，无需用户配置任何端口或服务器。 |
| `External viewer iframe` | **移动端 / 多端同步** | 指向已托管的静态 HTTPS 页面（如默认的 `https://geobsidian.vercel.app/` 或自建静态服务）。 |
| `srcdoc iframe` | 轻量回退方案 | 在 CSP 允许直连的受控环境中使用。 |

所有模式下的 Markdown YAML 语法完全统一。

## 代码块语法与示例

使用任意支持的代码块标识符（如 `geogebra` 或 `ggb`）：

````markdown
```geogebra
appName: suite
width: 800
height: 500
language: fa
loadingText: "در حال بارگذاری هندسه پویا..."
transparentGraphics: true
showToolBar: true
showResetIcon: true
showZoomButtons: true

commands:
  - "f(x) = sin(x)"
  - "g(x) = cos(x)"
  - "P = Intersect(f, g, 1)"
  - "SetColor(f, \"#2563eb\")"
  - "SetColor(g, \"#dc2626\")"

caption: "بررسی تقاطع توابع مثلثاتی"
explain:
  - "تابع سینوس و کسینوس در نقاط پیوسته متقاطع هستند."
```
````

使用极简 `ggb` 别名：

````markdown
```ggb
appName: graphing
width: 800
height: 500
commands:
  - "f(x) = x^3 - 3*x"
  - "df = Derivative(f)"
  - "SetColor(df, \"red\")"
  - "SetLineStyle(df, 1)"
caption: "函数与其导数曲线"
```
````

### 嵌入本地 `.ggb` 附件

直接引用库内的 GeoGebra 文件：

````markdown
```geogebra
appName: classic
filename: "physics-pendulum.ggb"
width: 800
height: 600
showResetIcon: true
caption: "单摆物理模型仿真"
```
````

同时也原生支持双链语法 `filename: "[[physics-pendulum.ggb]]"`。

## 完整 YAML 参数索引（40+ 项）

| 分类 | 核心参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| **应用与载荷** | `appName` | string | `graphing` | 应用模式 (`graphing`, `geometry`, `3d`, `classic`, `suite`, `evaluator`, `scientific`, `notes`) |
| | `filename` | string | 无 | 本地 `.ggb` 附件文件或远程文件链接 |
| | `materialId` | string | 无 | 官方 geogebra.org 材料 ID |
| | `ggbBase64` | string | 无 | Base64 编码的 ggb 二进制数据 |
| | `perspective` | string | 无 | 界面透视布局代码 (如 `"AG"`, `"3D"`) |
| **尺寸与外观** | `width`, `height`| number | `800`, `500`| 画布像素尺寸 |
| | `scale` | number | `1` | 缩放比例 (0.1 至 10) |
| | `transparentGraphics` | boolean | `false` | 画布背景透明 |
| | `borderColor` | string | 无 | 容器边框颜色 (如 `#e0e0e0`) |
| | `borderRadius`| number | `0` | 容器圆角弧度 |
| **工具栏与菜单**| `showToolBar` | boolean | `false` | 显示顶部绘图工具栏 |
| | `showAlgebraInput` | boolean | `true` | 显示代数输入框 |
| | `showMenuBar` | boolean | `false` | 显示顶部菜单栏 |
| | `customToolBar` | string | 无 | 自定义工具 ID 字符串 |
| **控件与交互** | `showZoomButtons` | boolean | `false` | 显示缩放控制按钮 |
| | `showFullscreenButton`| boolean| `false` | 显示全屏按钮 |
| | `showResetIcon` | boolean | `false` | 右上角显示重置图表按钮 |
| | `enableRightClick` | boolean| `true` | 启用右键菜单与对象属性 |
| | `enableShiftDragZoom` | boolean | `true` | 允许 Shift+拖拽缩放 |
| **语言与运算** | `language` | string | `en` | 界面语言代码 (如 `fa`, `en`, `zh`, `de`)，自动强制执行 |
| | `rounding` | string | 无 | 小数或有效数字精度 (如 `"2"`, `"5s"`) |
| **呈现与教学** | `commands` | array | `[]` | 初始化后依次执行的 GeoGebra 命令列表 |
| | `loadingText` | string | `Loading...`| 自定义加载占位文字 |
| | `caption` | string | 无 | 图表底部描述文字 |
| | `explain` | array | `[]` | 教学说明要点列表 |

## 离线文档与 AI Agent 协同

为杜绝 AI Agent 在生成 GeoGebra 命令时频繁遇到的语法报错，本插件在 `docs/geogebra/` 中内置了完备的离线参考文档：

- **[AI Agent 避坑与防错指南](docs/geogebra/AGENT_GUIDE_AND_PITFALLS.md)：** 深入剖析 Agent 写 GeoGebra 代码常犯的 10 大错误（如命令大小写 PascalCase 混淆、YAML 字符串未加引号、3D 与 2D 应用混淆、变量隐式乘法解析错误等）。
- **[命令索引目录](docs/geogebra/COMMANDS_CATALOG.md)：** 500+ 个官方命令分类汇总。
- **[单命令手册](docs/geogebra/commands/)：** 每一个命令的独立 Markdown 规范文件（如 `Intersect.md`、`Circle.md`、`Derivative.md`）。
- **[API 与参数规范](docs/geogebra/api/)：** 包含参数列表、JavaScript API、颜色表及工具栏 ID。

### Agent Skill

仓库内附带开箱即用的 Agent Skill（位于 `skills/geogebra-lab/`），兼容 Claude Code、Hermes 等智能助手：
- `skills/geogebra-lab/SKILL.md`
- `skills/geogebra-lab/references/error_prevention_guide.md`
- `skills/geogebra-lab/references/command_signatures.md`
- `skills/geogebra-lab/references/styling_reference.md`

## 安全性

GeoGebra Lab 仅对 YAML 结构进行严格的字段解析，通过 iframe 沙箱 (`sandbox="allow-scripts allow-same-origin"`) 隔离运行。命令仅作为受控字符串传递给 GeoGebra 原生 `api.evalCommand()` 执行，绝不会在 Obsidian 主进程中求值任何任意脚本。
