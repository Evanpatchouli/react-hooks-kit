import { useState, useCallback, useRef } from "react";

const useRafState = <T>(
  initialState: T
): [T, (value: T | ((prevState: T) => T)) => void] => {
  const frame = useRef(0);
  const [state, setState] = useState(initialState);

  const setRafState = useCallback((value: T | ((prevState: T) => T)) => {
    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      setState((prevState) =>
        typeof value === "function"
          ? (value as (prevState: T) => T)(prevState)
          : value
      );
    });
  }, []);

  return [state, setRafState];
};

export default useRafState;
