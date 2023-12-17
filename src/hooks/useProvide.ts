import { Dispatch, SetStateAction, useEffect } from "react";
import useEmitter from "./useEmitter";

export function useProvide<T = any>(
  name: string,
  state: T,
  setState?: Dispatch<SetStateAction<T>>
) {
  const emitter = useEmitter(`__Provider::${name}`, {
    namespace: "__provide_inject__",
    initialEventName: `__Inject::${name}::query`,
    initialListener() {
      emitter.emit(`__Provider::${name}`, state, setState);
    },
  });
  useEffect(() => {
    emitter.emit(`__Provider::${name}`, state, setState);
  }, [name, state, setState]);
}

export default useProvide;
