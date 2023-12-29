import { Dispatch, SetStateAction, useEffect } from "react";
import useReceiver from "./useReceiver";
import UKey from "./utils/Ukey";

type NamespaceMap = {
  [namespace: string]: {
    [key: string]: any;
  };
};

type ChangeCallback<T> = (value: T) => any;

/**
 * useInject is a hook that can be used to inject a value from a provider.
 *
 * ---
 * ### Parameters
 * - `name` - The name of the provider to inject from.
 *
 * ---
 * ### Returns
 * - [0]`value` - The value of the provider.
 * - [1]`setValue` - A function to set the value of the provider.
 */
function useInject<
  T extends NamespaceMap = NamespaceMap,
  N extends keyof T = keyof T,
  // @ts-ignore
  K extends keyof T[N] = keyof T[N],
  // @ts-ignore
  V = K extends string ? T[N][K] | undefined : any,
  // @ts-ignore
  C extends ChangeCallback<V> | undefined = undefined
>(
  name: K,
  options?: {
    namespace?: N;
    callback?: C;
  }
): [C extends ChangeCallback<infer R> ? R : V, Dispatch<SetStateAction<V>>] {
  // @ts-ignore
  const [result, { emit }] = useReceiver({
    name: `__Inject::${name as string}_${UKey()}`,
    eventName: `__Provider::${name as string}`,
    namespace: options?.namespace || "__provide_inject__",
    callback: (value: V) => {
      options?.callback?.(value);
      return value;
    },
  });

  const query = () => emit(`__Inject::${name as string}::query`, true);

  useEffect(() => {
    query();
  }, []);

  return [result?.[0], result?.[1]];
}

export default useInject;
