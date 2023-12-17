import { Dispatch, SetStateAction, useEffect } from "react";
import useReceiver from "./useReceiver";
import UKey from "./utils/Ukey";

// 创建一个 Inject Hook
function useInject<
  T extends Object = { [x: string]: any },
  // @ts-ignore
  K extends string = keyof T,
  // @ts-ignore
  V = K extends string ? T[K] | undefined : any
  // @ts-ignore
>(name: K): [V, Dispatch<SetStateAction<V>>] {
  // @ts-ignore
  const [result, { emit }] = useReceiver({
    name: `__Inject::${name}_${UKey()}`,
    eventName: `__Provider::${name}`,
    namespace: "__provide_inject__",
  });

  const query = () => emit(`__Inject::${name}::query`, true);

  useEffect(() => {
    query();
  }, []);

  return [result?.[0], result?.[1]];
}

export default useInject;
