import {
  DependencyList,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

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
const useTickState = <T extends unknown = any>(
  initialState: T,
  tickBy: "onSetState" | "onChange" = "onSetState",
  dependencies?: ((state: T) => DependencyList) | DependencyList
): [T, Dispatch<SetStateAction<T>>, number] => {
  const [tick, setTick] = useState(tickBy === "onSetState" ? 0 : -1);
  const [state, _setState] = useState<T>(initialState);

  const setState: typeof _setState = (value) => {
    _setState(value);
    if (tickBy === "onSetState") {
      setTick((pre) => pre + 1);
    }
  };

  useEffect(
    () => {
      if (tickBy === "onChange") {
        setTick((pre) => pre + 1);
      }
    },
    dependencies
      ? typeof dependencies === "function"
        ? dependencies(state)
        : dependencies
      : [state]
  );

  return [state, setState, tick];
};

export default useTickState;
