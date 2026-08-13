import { useRef, useEffect } from "react";

function useBeforeMount(callback: Function) {
  const callbackRef = useRef(callback);
  const hasRunRef = useRef(false);

  // 在组件挂载前执行回调
  if (!hasRunRef.current) {
    hasRunRef.current = true;
    callbackRef.current();
  }

  // 确保回调在组件卸载时不会再次执行
  useEffect(() => {}, []);
}

export default useBeforeMount;
