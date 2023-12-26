import { Dispatch, SetStateAction } from "react";
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
declare function useInject<T extends NamespaceMap = NamespaceMap, N extends keyof T = keyof T, K extends keyof T[N] = keyof T[N], V = K extends string ? T[N][K] | undefined : any, C extends ChangeCallback<V> | undefined = undefined>(name: K, options?: {
    namespace?: N;
    callback?: C;
}): [C extends ChangeCallback<infer R> ? R : V, Dispatch<SetStateAction<V>>];
export default useInject;
