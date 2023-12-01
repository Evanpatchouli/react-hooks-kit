import { useEffect } from "react";

function useUnmount(callback: Function) {
  useEffect(() => {
    return () => {
      callback();
    };
  }, []); // 空数组表示这个 useEffect 只会在组件挂载后执行一次
}

export default useUnmount;
