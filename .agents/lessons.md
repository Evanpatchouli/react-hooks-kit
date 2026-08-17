# Lessons

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
