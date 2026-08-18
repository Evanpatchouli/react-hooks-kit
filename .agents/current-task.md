# TypeScript 类型诊断优化

- 日期：2026-08-18
- 状态：实施中（3/8）
- 目标：修复用户列出的 TypeScript 诊断；每类修复验证后执行 `git add .` 并独立提交。

## 提交计划

1. SVG 模块声明
   - `src/types.d.ts`：补充 `*.svg` 默认字符串导出声明，覆盖 `src/components/header/index.tsx` 与 `src/views/home.tsx`。
2. 浏览器定时器类型
   - `src/hooks/useDebounce.ts`、`src/hooks/useThrottle.ts`、`src/hooks/useTicker.ts`：以 `ReturnType<typeof setTimeout>` 替代 `NodeJS.Timeout`。
   - `src/views/docs/views/examples/UsePrevious/example.1.tsx`、`src/views/docs/views/examples/UseTitle/example.4.tsx`：同步浏览器定时器类型及展示代码。
3. 文档状态类型
   - `src/components/Status/index.tsx`：导出统一状态类型。
   - `src/views/docs/docs.map.tsx`：显式声明文档条目结构，并允许 `deprecated`。
   - `src/views/docs/index.tsx`：沿用统一状态类型，消除 4 处无交集比较诊断。
4. React Ref 类型
   - `src/hooks/useDimensions.ts`：修正 `RefObject` 的元素泛型。
   - `UseDimensions`、`UseHover` 示例与对应测试：为元素 Ref 使用准确的 `HTMLDivElement` 类型。
5. useForm 示例类型
   - `src/views/docs/views/examples/UseForm/example.1.tsx`：显式声明表单字段模型，消除 2 处 `unknown` 回调参数诊断。
6. useWatchGetter 返回类型
   - `src/hooks/useWatchGetter.ts`：用重载表达 `updater: true` 时的元组返回值。
   - `UseWatchGetter/example.2.tsx`：验证数字值可按声明安全解构为 `[value, update]`。
7. 测试类型
   - 修正 `useBattery`、`useEyeDropper`、`useFavicon`、`useFetch`、`useOverflow`、`useProtect`、`useResize` 测试中的删除、Mock、DOM、AbortSignal、Ref、数字泛型与 ResizeObserverEntry 类型。
8. useProtect BigInt 兼容
   - `src/views/tests/useProtect.test.tsx`：将 3 个 BigInt 字面量改为构造函数写法，兼容 ES5 编译目标。

## 验证

- 每步运行 `npx tsc -p tsconfig.json --noEmit --pretty false`，确认该批诊断消失后提交。
- 涉及测试的批次运行对应 Vitest 文件；最终运行完整 TypeScript 检查和 `npm run test:run`。
- 检查触碰文件无 UTF-8 BOM，并更新 `.agents/handoff.md`、`.agents/lessons.md`，完成后归档本任务。
