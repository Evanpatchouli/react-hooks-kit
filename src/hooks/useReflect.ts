import { useRef } from "react";
import useForceUpdate from "./useForceUpdate";

function useReflect<T extends object, K extends keyof T>(initialValue: T) {
  const ref = useRef<T>(initialValue);
  const fsr = useForceUpdate();

  return {
    get: (
      prop?: K
    ): typeof prop extends undefined
      ? T
      : typeof ref.current extends null
      ? null
      : T[K] => {
      if (prop === void 0 || ref.current === null) {
        // @ts-ignore
        return ref.current;
      }
      // @ts-ignore
      return Reflect.get(ref.current, prop);
    },
    set: (key: keyof T, val: T[typeof key]) => {
      const res = Reflect.set(ref.current, key, val);
      fsr();
      return res;
    },
    has: (key: keyof T | (string & {})) => {
      return Reflect.has(ref.current, key);
    },
    apply: (func: (value: T) => void) => {
      return Reflect.apply(func, ref.current, []);
    },
  };
}

export default useReflect;
