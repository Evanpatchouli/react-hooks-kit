# Lessons

## 2026-08-18: Patch version metadata synchronization

- 版本推进不仅要更新根 `package.json`，还要同步源码包、跟踪的发布包、锁文件根元数据、README 徽章、changelog 和会把版本内联到页面的构建产物。
- 重新生成带有依赖版本漂移的文档产物可能产生与版本无关的大 diff；若生成脚本可用，应确认资源路径、运行时版本和构建可重复性，再决定是否保留生成结果。
- Windows 下发布脚本递归清理包含现有依赖目录的 `dist` 可能触发 `EPERM`；在不扩大清理范围时，可安全地同步版本元数据并单独构建不依赖该清理步骤的文档产物。

## 2026-08-18: Vite on GitHub Pages project sites

- GitHub Pages 项目站位于 `/<repository>/`，Vite 必须设置对应 `base`；HashRouter 只解决客户端路由回退，不能修复脚本、样式和 public 资源的根路径。
- 诊断部署空白页时，可对比根路径与项目子路径下同一构建资源的 HTTP 状态；前者 404、后者 200 能直接证明是构建基路径问题。
- 修复后既要检查生成 HTML 的 URL 前缀，也要确认每个引用映射到真实构建文件；只看到构建成功不足以证明部署路径正确。
- Windows 下的 CRLF HTML 模板与 Vite 注入的 LF 标签可能形成混合换行；为 HTML 固定 `eol=lf` 可保持生成产物和 whitespace 检查稳定。

## 2026-08-18: Browser-facing TypeScript contracts

- 浏览器 Hook 的定时器句柄应使用 `ReturnType<typeof setTimeout>` 或 `ReturnType<typeof setInterval>`，避免公共源码依赖 `NodeJS` 命名空间。
- React 18 的 `RefObject<T>` 已在 `current` 上包含 `null`；写成 `RefObject<T | null>` 会扩大元素类型并破坏 JSX Ref 兼容性。面向多种元素的 Hook 应提供元素泛型，由调用方绑定准确的 DOM 类型。
- 运行时 `boolean` 参数不能让条件返回类型保留字面量信息；当 `true` 与 `false` 对应不同返回形状时，函数重载能同时描述调用约束与实现联合类型。
- 浏览器 API 测试桩应完整表达可调用 Mock、可空 `AbortSignal`、DOM 元素和观察器条目契约。低于 ES2020 的编译目标可使用 `BigInt(...)` 测试 BigInt 行为，而不使用 BigInt 字面量语法。

## 2026-08-17: TypeScript narrowing in asynchronous callbacks

- 可变的可空变量被事件回调闭包捕获后，TypeScript 不会保留外层赋值产生的非空窄化，因为回调执行前变量理论上可能再次变化。
- 如果失败分支会直接返回，应将变量声明为非空类型并依赖 definite assignment 控制流；这比在每个回调中使用非空断言或重复判空更准确。
- 对纯类型诊断修复，失败的 `tsc` 本身就是回归基线；现有运行时测试则用于证明控制流改写没有改变行为。

## 2026-08-17: Git-derived release notes

- 没有对应版本标签时，应先定位上一个明确的版本提交，再用该提交到 HEAD 的范围生成发布日志，避免混入更早历史。
- 大量同类修复应按用户影响归并为生命周期、浏览器资源和状态数据等主题；逐提交罗列会掩盖发布价值。
- 主版本号本身不能证明存在破坏性 API 变更；changelog 只应声明 diff 和提交记录能够支持的事实。
- 源码包与已跟踪发布产物并存时，版本、README 和 changelog 必须做三方一致性检查。

## 2026-08-17: EyeDropper browser API wrapper

- 实验性浏览器 API 不应依赖当前 TypeScript DOM lib 是否已声明；在 Hook 内定义最小公开接口，可以保持类型安全并避免全局声明污染。
- 能力状态可在挂载时检测以兼容 SSR，而执行动作应再次读取构造器，避免闭包持有过期的浏览器能力。
- 原生拾色取消本身是可观察业务结果，Hook 不应擅自吞掉异常；调用方可按需区分 `AbortError`。
- 异步原生交互可能在组件卸载后才完成，返回结果仍可兑现，但 React 状态更新必须由挂载引用保护。

## 2026-08-11: QR scanner migration

- Browser scanner libraries should be loaded on first use, not at the library entry point.
- A scanner singleton makes component unmount and concurrent scanning interfere; scanner ownership should follow Hook ownership.
- An operation generation plus `AbortSignal` is needed because dynamic imports and WeChat SDK calls cannot always be physically cancelled.
- `html5-qrcode` treats per-frame decode misses as normal scanner feedback, so they must not be stored as operational errors.
- The previous TypeScript Rollup plugin could not parse public `export type` declarations; the official Rollup TypeScript plugin supports the required declaration build.

## 2026-08-17: Hook TODO 测试与修复

- 浏览器型 hook 的回归测试应显式控制 `matchMedia`、观察器、动画帧、定时器、History 和 DOM 生命周期，避免测试环境默认实现掩盖资源清理问题。
- 异步观察器回调不能只依赖 state 作为并发锁；应使用 ref 锁，并在 `finally` 中复位状态，同时保护卸载后的 state 更新。
- URL 参数应交给 `URLSearchParams` 解析，手写 `split("=")` 会损坏等号、加号和编码值；返回的 History 方法需要绑定正确的 `this`。
- 只在卸载或更新 effect 中调用回调的 hook，应使用 ref 保存最新回调，避免 effect 依赖策略导致闭包过期。
- 每个 hook 单独测试、暂存和提交，能把失败定位到具体生命周期或配置边界，并让任务进度可恢复。

## 2026-08-11: QR scanner capability extensions

- `Html5Qrcode.clear()` clears its whole target element, so sharing the caller's element directly creates a delayed-cleanup race; use one owned child element per scanner.
- A scanner awaiting `start()` or `scanFileV2()` cannot be safely cleared immediately. Mark it pending, hide its owned container on stop, and perform final cleanup after the pending promise settles.
- Camera switching needs a service-level generation check before and after camera enumeration; Hook-level stale-state guards alone cannot prevent a stopped camera from reopening.
- Torch arrays represent allowed values. `[true]` is not a bidirectional control; only arrays containing both `true` and `false` should expose a toggle.
- `BarcodeDetector in window` is insufficient capability detection because construction can throw. Probe construction and fall back to ZXing.
- `scanFileV2()` creates full-resolution canvases for large phone photos, and html5-qrcode 2.3.8 has an internal object URL lifecycle limitation. Expose an optional byte limit and document client-side resizing; a dependency upgrade or replacement is required for a complete upstream fix.
