import { useRef, useEffect } from "react";

function useBeforeMount(callback: Function) {
  const callbackRef = useRef(callback);

  // 在组件挂载前执行回调
  callbackRef.current();

  // 确保回调在组件卸载时不会再次执行
  useEffect(() => {}, []);
}

export default useBeforeMount;
