import { useState, useEffect, useRef } from "react";

type WatchGetterResult<T> = T | [T, () => void];

function WatchGetterAnimation<T>(
  getter: () => T,
  callback: (v: T) => void,
  updater: boolean,
): WatchGetterResult<T> {
  const [value, setValue] = useState(getter());
  const valueRef = useRef(value);

  useEffect(() => {
    let animationFrameId: number;

    const loop = () => {
      const newValue = getter();
      if (newValue !== valueRef.current) {
        valueRef.current = newValue;
        setValue(newValue);
        callback?.(newValue);
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [getter]);

  const update = () => {
    const newValue = getter();
    if (newValue !== valueRef.current) {
      valueRef.current = newValue;
      setValue(newValue);
      callback?.(newValue);
    }
  };

  return updater ? [value, update] : value;
}

/**
 * Watches a getter and optionally exposes an imperative update function.
 */
function useWatchGetter<T>(
  getter: () => T,
  callback?: (v: T) => void,
  updater?: false,
): T;
function useWatchGetter<T>(
  getter: () => T,
  callback: ((v: T) => void) | undefined,
  updater: true,
): [T, () => void];
function useWatchGetter<T>(
  getter: () => T,
  callback: (v: T) => void = () => { },
  updater: boolean = false,
): WatchGetterResult<T> {
  return WatchGetterAnimation(getter, callback, updater);
}

export default useWatchGetter;
