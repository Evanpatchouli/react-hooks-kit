任务：按 test.todo.md 顺序为已有实现补充 hook 测试，逐项运行并修复失败项；每个 hook 通过后独立暂存并提交。

状态：进行中（useAsyncEffect b79e8f7、useAutoPageSize 73e803b、useBatchHooks 98a3f7e、useBattery f672b7f、useBeforeMount 9b97757、useBroadcastChannel 70ff710、useClickAway d2bdb95、useConsoleLog 137b340、useCookie 2d666c7、useDimensions c7861cb、useDimensionsById ce9998a、useEmitter ad89871、useFavicon 3daec8d、useFetch 357943e、useForceUpdate b4b2e59、useForm bc4a55f、useGenerator e48277b 已完成；useEyeDropper 为未实现占位已跳过，当前处理 useGuide）。

约束：
- 测试文件放在 src/views/tests。
- 不存在实现的 hook 跳过。
- 修复缺陷前先补充可复现的回归测试。
- 所有文本文件保持 UTF-8 无 BOM。
