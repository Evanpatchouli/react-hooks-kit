# useIndexDB TypeScript warning

完成时间：2026-08-17

问题：`request` 被声明为 `IDBOpenDBRequest | null` 并由异步事件闭包捕获，TypeScript 无法保留赋值后的非空窄化，产生三处 TS18047。

修复：将 `request` 声明为非空 `IDBOpenDBRequest`，由 try 分支赋值；同步打开失败时 catch 直接返回 cleanup。未使用非空断言，未改变公开 API 或运行时行为。

验证：
- useIndexDB 专项测试：2/2 通过。
- 独立 Hook TypeScript 检查：零诊断。
- 全量测试：76 个文件、472 个测试全部通过。
- Rollup 发布包构建成功，不再输出 useIndexDB TS18047 警告。
- UTF-8 无 BOM 与 diff 检查通过。
