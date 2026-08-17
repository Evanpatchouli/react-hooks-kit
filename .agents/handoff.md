# Handoff

`useQrcodeScan` 1.4.0 now includes camera and image scanning, normalized result metadata, observable camera permission, torch, zoom, capability refresh, and guarded scanner/container lifecycles. The source implementation lives in `src/hooks/useQrcodeScan.ts`, with its scanner service in `src/hooks/utils/qrcodeScanService.ts`.

Public exports, Hook-standard JSDoc, README, changelog, tests, generated `dist` declarations/bundles, and `docs` artifacts are synchronized without changing the already-unreleased 1.4.0 version.

Verification passed: library TypeScript check, 20 test files / 312 tests (including 40 QR scanner tests), Vite documentation build, Rollup package build, npm pack dry run, lazy html5-qrcode import audit, diff whitespace, and UTF-8 without BOM.

Before release, perform real-device tests on iOS Safari, Android Chrome, and WeChat clients. Large image pixel dimensions can still cause memory pressure inside html5-qrcode 2.3.8, and its internal file object URL lifecycle cannot be fully corrected from this wrapper. Existing unrelated follow-ups remain: the package mixes `type: module` with a CommonJS `.js` main entry, documentation chunks exceed 500 kB, and five useTicker tests emit act warnings. No Git commit or package publication was performed.

## 2026-08-17: Hook TODO 测试收尾

按 `test.todo.md` 顺序完成了所有已有实现 hook 的测试补充、逐项测试、缺陷修复和独立提交，测试文件均位于 `src/views/tests`。`useEyeDropper` 仍是空实现占位，因此保留跳过状态。

本轮重点修复包括：异步生命周期与卸载清理、浏览器事件监听兼容、多实例回调隔离、URL 参数与 History 方法、toast 延迟/布局/React root 清理、虚拟区域并发加载与异常复位，以及首次渲染误报问题。最后一次 hook 提交为 `ef2a81e`，之后补充了新增测试的 TypeScript 类型修正。

验证结果：`npm run test:run` 通过，75 个测试文件、466 个测试全部通过；本次触碰的 hook 和测试文件无 TypeScript 诊断；完整 TypeScript 检查仍有 23 条仓库既有诊断。任务触碰文件未发现 UTF-8 BOM。

全量测试仍会输出非失败警告：`useToast` 测试环境中的 React root 卸载时机警告、既有 `useTicker` 的 act 警告，以及既有的表单和网络节流提示。
