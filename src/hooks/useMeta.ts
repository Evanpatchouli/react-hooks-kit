import { useState } from "react";

export interface SetMeta<T extends Object = {}, K extends keyof T = keyof T> {
  (key: K, value?: T[K]): void;
  (key: K, setAction: (pre: T[K]) => T[K]): void;
  (state: T): void;
  (setAction: (pre: T) => T): void;
}

export const useMeta = <T extends Object = {}>(initialState: T) => {
  const [meta, setState] = useState<T>(initialState);
  const setMeta: SetMeta<T, keyof T> = (args1, value = undefined) => {
    if (typeof args1 === "object") {
      setState((pre) => ({ ...pre, ...(args1 as T) }));
      return;
    } else if (typeof args1 === "function") {
      setState((pre) => args1(pre));
      return;
    } else {
      const key = args1;
      if (typeof value === "function") {
        setState((pre) => ({ ...pre, [key]: value(pre[key]) }));
      } else {
        setState((pre) => ({ ...pre, [key]: value }));
      }
    }
  };

  return [meta, setMeta] as const;
};
