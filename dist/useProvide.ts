import { Dispatch, SetStateAction, useEffect } from "react";
import useEmitter from "./useEmitter";

export function useProvide<T = any>(
  name: string,
  state: T,
  options?: {
    setState?: Dispatch<SetStateAction<T>>;
    namespace?: string;
  }
) {
  const emitter = useEmitter(`__Provider::${name}`, {
    namespace: options?.namespace || "__provide_inject__",
    initialEventName: `__Inject::${name}::query`,
    initialListener() {
      emitter.emit(`__Provider::${name}`, state, options?.setState);
    },
  });
  useEffect(() => {
    emitter.emit(`__Provider::${name}`, state, options?.setState);
  }, [name, state, options?.setState, options?.namespace]);
}

export default useProvide;
