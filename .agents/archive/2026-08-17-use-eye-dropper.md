# useEyeDropper

完成时间：2026-08-17

实现内容：
- 参考 VueUse 封装浏览器原生 EyeDropper API。
- 返回 isSupported、sRGBHex 和稳定的 open 回调。
- 支持 initialValue 与 AbortSignal 参数透传。
- 原生取消和错误继续通过 Promise 抛出，卸载后不写 React 状态。
- 补充公开类型、JSDoc、入口导出、README、变更记录和 6 个测试。
- 按用户要求保留现有 1.4.0 版本，不写入发布 changelog。

验证：
- useEyeDropper 专项测试：6/6 通过。
- 全量测试：76 个文件、472 个测试全部通过。
- Rollup 库打包和 Vite 文档站生产构建成功，生成声明包含 useEyeDropper 及其公开类型。
- `dist` 与 `docs` 生成产物已刷新。
- git diff --check 通过，触碰文件均为 UTF-8 无 BOM。

已知既有问题：独立 TypeScript 检查仍被 useIndexDB.ts 三处 TS18047 阻断；Rollup 将其报告为警告但成功完成打包。
