import { useState, useEffect } from "react";

function WatchGetterInterval<T>(
  getter: () => T,
  interval: number = 1000,
  ...setters: ((value: any) => void)[]
): T {
  const [value, setValue] = useState(getter());

  useEffect(() => {
    const id = setInterval(() => {
      const newValue = getter();
      if (newValue !== value) {
        setValue(newValue);
      }
    }, interval);

    return () => {
      clearInterval(id);
    };
  }, [getter, interval, value]);

  return value;
}

function WatchGetterSetter<T>(
  getter: () => T,
  interval: number = 1000,
  ...setters: ((value: any) => void)[]
): T {
  const [value, setValue] = useState(getter());

  useEffect(() => {
    const _setters = setters.map((setter) => setter);
    _setters.forEach((setter) => {
      let originSetter = setter;
      // @ts-ignore
      originSetter = (...args) => {
        // @ts-ignore

        setValue(getter());
        originSetter(...args);
      };
    });

    return () => {
      _setters.forEach((setter) => {
        let originSetter = setter;
        // @ts-ignore
        originSetter = (...args) => {
          // @ts-ignore
          originSetter(...args);
        };
      });
    };
  }, [getter, setters]);

  return value;
}

function useWatchGetter<T>(
  getter: () => T,
  interval: number | ((value: any) => void) = 1000,
  ...setters: ((value: any) => void)[]
): T {
  if (typeof interval === "function") {
    setters.unshift(interval);
    interval = 1000;
  }
  if (setters.length === 0) {
    // @ts-ignore
    return WatchGetterInterval(getter, interval);
  } else {
    return WatchGetterSetter(getter, interval, ...setters);
  }
}

export default useWatchGetter;
