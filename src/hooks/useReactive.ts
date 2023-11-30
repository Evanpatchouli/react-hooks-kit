import { useState, useEffect } from "react";

type Watcher<T> = (value: any, state: T) => void;
type Watch<T> = (key: keyof T, watcher: Watcher<T>) => void;

function deepProxy<T>(
  obj: T,
  setState: React.Dispatch<React.SetStateAction<T>>
): T {
  // @ts-ignore
  return new Proxy(obj, {
    get(target, property, receiver) {
      const value = Reflect.get(target, property, receiver);
      if (typeof value === "object" && value !== null) {
        return deepProxy(value, setState);
      }
      return value;
    },
    set(target, property, value) {
      setState((prevState) => ({
        ...prevState,
        [property as string]: value,
      }));
      return true;
    },
  });
}

function useReactive<T>(
  initialState: T,
  ...args: Array<Watcher<T> | Watch<T>>
): T {
  const [state, setState] = useState(initialState);
  const watchers = args.filter(
    (arg): arg is Watcher<T> => typeof arg === "function"
  );
  const watch = (key: keyof T, watcher: Watcher<T>) => {
    watchers.push((value: any, state: T) => {
      // @ts-ignore
      if (key in state) {
        watcher(state[key], state);
      }
    });
  };

  args
    .filter((arg): arg is Watch<T> => typeof arg === "function")
    .forEach((watchFunc) => {
      // @ts-ignore
      watchFunc(watch);
    });

  useEffect(() => {
    watchers.forEach((watcher) => watcher(state, state));
  }, [state]);

  return deepProxy(state, setState);
}

export default useReactive;
