import { useState, useCallback, useEffect, useRef } from "react";

const useRafState = <T>(
  initialState: T
): [T, (value: T | ((prevState: T) => T)) => void] => {
  const frame = useRef<number | null>(null);
  const [state, setState] = useState(initialState);

  const setRafState = useCallback((value: T | ((prevState: T) => T)) => {
    if (frame.current !== null) {
      cancelAnimationFrame(frame.current);
    }

    frame.current = requestAnimationFrame(() => {
      frame.current = null;
      setState((prevState) =>
        typeof value === "function"
          ? (value as (prevState: T) => T)(prevState)
          : value
      );
    });
  }, []);

  useEffect(() => {
    return () => {
      if (frame.current !== null) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  return [state, setRafState];
};

export default useRafState;
