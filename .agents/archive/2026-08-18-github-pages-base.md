# GitHub Pages 文档站资源 404 修复

- 日期：2026-08-18
- 状态：已完成
- 根因：Vite 默认 `base: "/"`，与 GitHub Pages 项目站 `/react-hooks-kit/` 不匹配。
- 修复：配置 `base: "/react-hooks-kit/"`，刷新 `docs` 产物，并固定 HTML LF 换行。
- 静态验证：HTML 中 5 个入口资源全部使用 `/react-hooks-kit/` 前缀并存在对应文件。
- 自动验证：TypeScript 零诊断；74 个测试文件、468 个测试通过；生产构建通过。
- 渲染验证：Playwright 桌面与移动首屏可见，Get started 成功进入 `#/docs`，8 个资源请求全部 200，控制台零错误。
- 已知边界：移动端顶部导航存在既有拥挤；未执行 Git commit、push 或 GitHub Pages 设置变更。
