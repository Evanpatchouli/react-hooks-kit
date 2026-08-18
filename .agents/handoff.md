# Handoff

## 2026-08-18: GitHub Pages 文档站资源路径

文档站部署在 `/react-hooks-kit/`，但此前 Vite 以 `/` 为基础路径生成入口资源，导致线上 JS、CSS、图标和 manifest 请求 404。`vite.config.ts` 现已配置 `base: "/react-hooks-kit/"`，并刷新 `docs` 产物；`.gitattributes` 固定 HTML 为 LF，避免 Windows 构建产生混合换行。未推送远端。

验证通过：线上只读探测确认错误根路径 404、仓库子路径资源 200；生成 HTML 的 5 个入口引用均带正确前缀且文件存在；TypeScript 零诊断；74 个测试文件/468 个测试通过；Vite 生产构建通过。内置 Browser 因受信任连接不可用，经用户授权改用 Playwright：929×917 桌面首屏、Get started 到 `#/docs`、390×844 移动首屏均可渲染，8 个实际加载资源全部 200，控制台 0 error/0 warning。移动端顶部导航仍有既有拥挤/裁切，未在本次资源路径修复中扩展处理。

## 2026-08-18: TypeScript 类型诊断优化

已按 8 个独立提交单元修复 SVG 资源声明、浏览器定时器类型、文档 `deprecated` 状态、React Ref、`useForm` 示例、`useWatchGetter` 元组返回值、浏览器 Hook 测试桩类型及 ES5 目标下的 BigInt 测试写法。`useWatchGetter` 现在使用重载表达 `updater: true` 的元组结果，并新增对应回归测试；其余修改不改变运行时行为。

验证通过：`npx tsc -p tsconfig.json --noEmit --pretty false` 零诊断，74 个测试文件/468 个测试全部通过，隔离输出目录的 Vite 生产构建成功，diff whitespace 与触碰文件 UTF-8 无 BOM 检查通过。仍存在既有非失败警告：`useTicker` 的 React `act(...)` 提示、`useToast` 的同步卸载提示、`useNetWork` 的节流建议、Browserslist 数据陈旧和大分块提示。

## 2026-08-17: v2.0.0 release metadata

项目、源码包和发布包版本已统一提升至 2.0.0。`src/hooks/changeLog.md` 与发布副本基于 `cff1970..HEAD` 的 60 个提交整理，涵盖 useEyeDropper、新文档配置、39 个 Hook 修复、完整测试覆盖和生成产物同步；没有声明 Git 历史无法证明的破坏性变化。三份 README 的徽章与 Report 已同步。

验证通过：三个 package JSON 可解析且版本一致、独立 Hook TypeScript 检查零诊断、全量 76 个测试文件/472 个测试、Rollup 发布包构建、发布包清单、changelog/README 副本一致、diff whitespace 和 UTF-8 无 BOM。`useIndexDB.ts` 原有三处 TS18047 已通过非空请求控制流修复，Rollup 不再输出对应警告。未创建 Git tag、未执行 Git commit 或 npm publish。

## 2026-08-17: useEyeDropper

`useEyeDropper` 已参考 VueUse 完成：它封装浏览器原生 EyeDropper API，提供 `isSupported`、`sRGBHex` 和稳定的 `open` 回调，并支持 `initialValue` 与 `AbortSignal`。原生取消/错误保持 Promise rejection，不支持的浏览器返回 `undefined`，异步拾色完成时若组件已卸载则不再写状态。

公开类型、JSDoc、入口导出、使用文档与测试 TODO 已同步，`dist` 和 `docs` 生成产物已刷新。按用户要求保留现有 1.4.0 版本且不写入发布 changelog。验证通过：专项 6/6、全量 76 个文件/472 个测试、Rollup 库打包、Vite 文档站生产构建、生成声明审计、diff whitespace 和 UTF-8 无 BOM。独立 TypeScript 检查仍被既有 `useIndexDB.ts` 三处 TS18047 阻断，Rollup 仅将其作为警告；本任务没有修改该文件。未执行 Git commit 或发布。

`useQrcodeScan` 1.4.0 now includes camera and image scanning, normalized result metadata, observable camera permission, torch, zoom, capability refresh, and guarded scanner/container lifecycles. The source implementation lives in `src/hooks/useQrcodeScan.ts`, with its scanner service in `src/hooks/utils/qrcodeScanService.ts`.

Public exports, Hook-standard JSDoc, README, changelog, tests, generated `dist` declarations/bundles, and `docs` artifacts are synchronized without changing the already-unreleased 1.4.0 version.

Verification passed: library TypeScript check, 20 test files / 312 tests (including 40 QR scanner tests), Vite documentation build, Rollup package build, npm pack dry run, lazy html5-qrcode import audit, diff whitespace, and UTF-8 without BOM.

Before release, perform real-device tests on iOS Safari, Android Chrome, and WeChat clients. Large image pixel dimensions can still cause memory pressure inside html5-qrcode 2.3.8, and its internal file object URL lifecycle cannot be fully corrected from this wrapper. Existing unrelated follow-ups remain: the package mixes `type: module` with a CommonJS `.js` main entry, documentation chunks exceed 500 kB, and five useTicker tests emit act warnings. No Git commit or package publication was performed.

## 2026-08-17: Hook TODO 测试收尾

按 `test.todo.md` 顺序完成了所有已有实现 hook 的测试补充、逐项测试、缺陷修复和独立提交，测试文件均位于 `src/views/tests`。`useEyeDropper` 仍是空实现占位，因此保留跳过状态。

本轮重点修复包括：异步生命周期与卸载清理、浏览器事件监听兼容、多实例回调隔离、URL 参数与 History 方法、toast 延迟/布局/React root 清理、虚拟区域并发加载与异常复位，以及首次渲染误报问题。最后一次 hook 提交为 `ef2a81e`，之后补充了新增测试的 TypeScript 类型修正。

验证结果：`npm run test:run` 通过，75 个测试文件、466 个测试全部通过；本次触碰的 hook 和测试文件无 TypeScript 诊断；完整 TypeScript 检查仍有 23 条仓库既有诊断。任务触碰文件未发现 UTF-8 BOM。

全量测试仍会输出非失败警告：`useToast` 测试环境中的 React root 卸载时机警告、既有 `useTicker` 的 act 警告，以及既有的表单和网络节流提示。
