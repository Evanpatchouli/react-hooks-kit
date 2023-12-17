import { Dispatch, SetStateAction, useEffect } from "react";
import useEmitter from "./useEmitter";

// 创建一个 Provider Hook
export function useProvide(
  name: string,
  state: any,
  setState?: Dispatch<SetStateAction<any>>
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
