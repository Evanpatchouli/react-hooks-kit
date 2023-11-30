import { useState } from "react";

const useTickState = <T extends unknown = any>(initialState?: T) => {
  const [tick, setTick] = useState(0);

  const [state, _setState] = useState<T | undefined>(initialState);

  const setState: typeof _setState = (value) => {
    _setState(value);
    setTick((pre) => pre + 1);
  };

  return [state, setState, tick];
};

export default useTickState;
