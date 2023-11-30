import { useState, useEffect, useRef } from "react";

type Watcher<T> = (state: T) => void;

function deepProxy<T extends object>(
  obj: T,
  stateRef: React.MutableRefObject<T>,
  setState: React.Dispatch<React.SetStateAction<T>>
) {
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      obj[key] = deepProxy(obj[key] as any, stateRef, setState) as any;
    }
  }

  return new Proxy(obj, {
    get(target, prop) {
      // @ts-ignore
      return target[prop];
    },
    set(target, prop, value) {
      // @ts-ignore
      target[prop] = value;
      setState({ ...stateRef.current });
      return true;
    },
  });
}

function shallowProxy<T extends object>(
  obj: T,
  stateRef: React.MutableRefObject<T>,
  setState: React.Dispatch<React.SetStateAction<T>>
) {
  return new Proxy(obj, {
    get(target, prop) {
      // @ts-ignore
      return target[prop];
    },
    set(target, prop, value) {
      // @ts-ignore
      target[prop] = value;
      setState({ ...stateRef.current });
      return true;
    },
  });
}

/**
 * #### params
 * - **initialState** - Only supports object type as reactive data source.
 * If given a non-object type, it will return the original value
 * - **deep** - If the second parameter is typeof `boolean`, it means whether the object is deeply reactive.
 * If the second parameter is typeof `function`, it means that the callback function will be triggered when the state changes.
 * - **callback** - Watcher callback function, which will be triggered when the state changes
 * #### FAQs
 * - Why not use `useMemo`? Use `useMemo` to return a new object, which will cause the object to be re-rendered every time,
 * and the object will be re-rendered every time it is used.
 * - Why did not the state change when I change the property deconstructed from the state?
 * Because the deconstructed property is a copy of the original object, it will not trigger the state change.
 */
function useReactive<T>(initialState: T, deep?: boolean | Watcher<T>, ...callbacks: Watcher<T>[]): T {
  const [state, setState] = useState<T>(initialState);
  const stateRef = useRef(state);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    if (typeof deep === "function") {
      callbacks.unshift(deep);
    }
    callbacks.forEach((callback) => callback(stateRef.current));
  }, [stateRef.current, callbacks]);

  if (typeof initialState !== "object" || initialState === null) {
    return stateRef.current;
  }

  let reactiveState =
    deep === false
      ? shallowProxy(
          initialState,
          stateRef as React.MutableRefObject<T & object>,
          setState as React.Dispatch<React.SetStateAction<T & object>>
        )
      : deepProxy(
          stateRef.current as T & object,
          stateRef as React.MutableRefObject<T & object>,
          setState as React.Dispatch<React.SetStateAction<T & object>>
        );
  return reactiveState;
}

export default useReactive;
