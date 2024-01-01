import {
  DependencyList,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const useTickState = <T extends unknown = any>(
  initialState: T,
  tickBy: "onSetState" | "onChange" = "onSetState",
  dependencies?: ((state: T) => DependencyList) | DependencyList
): [T, Dispatch<SetStateAction<T>>, number] => {
  const [tick, setTick] = useState(0);
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
