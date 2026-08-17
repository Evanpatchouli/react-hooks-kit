# Hook TODO 测试任务

- 日期：2026-08-17
- 状态：已完成
- 范围：按 `test.todo.md` 顺序检查实现完整性、补充 `src/views/tests` 测试、逐项运行并修复失败项。
- 结果：所有已有实现 hook 已标记完成；`useEyeDropper` 是空实现占位，按规则跳过。
- 验证：75 个测试文件、466 个测试全部通过；本次触碰文件无 UTF-8 BOM；触碰 hook/test 文件无 TypeScript 诊断。
- 提交：每个 hook 按 staged diff 生成中文提交信息并独立提交，最终 hook 提交为 `ef2a81e`。
