任务：按 test.todo.md 顺序为已有实现补充 hook 测试，逐项运行并修复失败项；每个 hook 通过后独立暂存并提交。

状态：进行中（useAsyncEffect b79e8f7、useAutoPageSize 73e803b、useBatchHooks 98a3f7e、useBattery f672b7f、useBeforeMount 9b97757、useBroadcastChannel 70ff710、useClickAway d2bdb95、useConsoleLog 137b340、useCookie 2d666c7、useDimensions c7861cb、useDimensionsById ce9998a、useEmitter ad89871、useFavicon 3daec8d、useFetch 357943e、useForceUpdate b4b2e59、useForm bc4a55f、useGenerator e48277b、useGuide 4caa768、useHover e330acf、useIndexDB 8765c5c、useInfiniteScroll aad7277、useInject 311ca51、useKeyPress d6a3a13、useLazy e639e71、useLazyImg 25c6453、useLocalStorage 586cc96、useMediaQuery eef0205、useMixRef 4f0ece6、useMount 5544975、useMousePosition 0ee22f5、useNetWork e56fa0c、useOverflow c8fa267、useParticle 5a18628、usePromise e2323fd、useProtect 343dd92、useProvide c23db81、useRaf 0c7519d、useRafState 0c43c3f、useReceiver c27237f、useRecord a23dd6e、useReflect 607e26e、useResize 7cf4f03、useRipple 4f718d9、useSafeArea 8c977f0、useScroll a94c283、useSingleton 12f48c5、useTheme 0f7fa60、useTitle 169a715、useToast d493312、useUnMount eaf7fd8、useUpdate 2be55c6、useUpdateEffect 18e712d、useUrl 已完成；useEyeDropper 为未实现占位已跳过，当前处理 useVirtualArea）。

约束：
- 测试文件放在 src/views/tests。
- 不存在实现的 hook 跳过。
- 修复缺陷前先补充可复现的回归测试。
- 所有文本文件保持 UTF-8 无 BOM。
