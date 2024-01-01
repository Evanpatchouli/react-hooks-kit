import { DependencyList, Dispatch, SetStateAction } from "react";
/**
 * ### Parameters
 * - **initialState** - initial value of the state
 * - **tickBy**
 *   + **onSetState** - only when setState invoked will increment the tick
 *   + **onChange** - only when the dependencies change will increment the tick (useEffect)
 * - **dependencies** - default will be [state], you can pass a fn or an array:
 *
 * ---
 *
 * ```ts
 *
 * useTickState(0, "onChange", (state) => [state])
 * // or
 * // use other variables as dependencies
 * useTickState(0, "onChange", [num])
 * ```
 */
declare const useTickState: <T extends unknown = any>(initialState: T, tickBy?: "onSetState" | "onChange", dependencies?: DependencyList | ((state: T) => DependencyList) | undefined) => [T, Dispatch<SetStateAction<T>>, number];
export default useTickState;
