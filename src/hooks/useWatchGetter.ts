import { useState, useEffect } from "react";

function WatchGetterAnimation<T>(getter: () => T): T {
  const [value, setValue] = useState(getter());

  useEffect(() => {
    let animationFrameId: number;

    const loop = () => {
      const newValue = getter();
      if (newValue !== value) {
        setValue(newValue);
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [getter, value]);

  return value;
}

function WatchGetterSetter<T>(
  getter: () => T,
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
  ...setters: ((value: any) => void)[]
): T {
  if (setters.length === 0) {
    return WatchGetterAnimation(getter);
  } else {
    return WatchGetterSetter(getter, ...setters);
  }
}

export default useWatchGetter;
