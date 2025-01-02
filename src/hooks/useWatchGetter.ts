import { useState, useEffect, useRef } from "react";

function WatchGetterAnimation<T>(getter: () => T, callback: (v: T) => void, updater?: boolean):
  typeof updater extends true ? [T, () => void] : T {
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
  }
  // @ts-ignore
  return updater ? [value, update] : value;
}

function useWatchGetter<T>(
  getter: () => T,
  callback: (v: T) => void = () => { },
  updater: boolean = false
): typeof updater extends true ? [T, () => void] : T {
  return WatchGetterAnimation(getter, callback, updater);
}

export default useWatchGetter;