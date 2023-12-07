import { useState, useEffect, useRef } from "react";

type Watcher<T> = (state: T) => void;

function deepProxy<T extends object>(
  obj: T,
  stateRef: React.MutableRefObject<T>,
  setState: React.Dispatch<React.SetStateAction<T>>,
  root?: any
) {
  const proxyObj = {} as any;

  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      proxyObj[key] = { value: deepProxy(obj[key] as any, stateRef, setState) };
    } else {
      proxyObj[key] = { value: obj[key] };
    }
  }

  const valueProxy = new Proxy(proxyObj, {
    get(target, prop) {
      return target[prop]?.value;
    },
    set(target, prop, value) {
      console.log("target", target);
      console.log("prop", prop);
      console.log("value", value);
      target[prop]["value"] = value;
      // 更新 stateRef.current
      const obj = unwrap(deProxy(target));
      // @ts-ignore
      // stateRef.current = {
      //   ...obj,
      // };
      console.log(obj);
      // 使用 setState 函数来修改 state 的值
      setState({ ...stateRef.current });
      return true;
    },
  });

  return valueProxy;
}

function deProxy(proxyObj: any) {
  const obj = {} as any;

  for (let key in proxyObj) {
    if (typeof proxyObj[key] === "object" && proxyObj[key] !== null) {
      obj[key] = deProxy(proxyObj[key]);
    } else {
      obj[key] = proxyObj[key];
    }
  }

  return obj;
}

function unwrap(obj: any) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const unwrappedObj = {} as any;

  for (let key in obj) {
    unwrappedObj[key] = obj[key].value;
  }

  return unwrappedObj;
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

type ReactiveState<T, D extends boolean> = D extends true
  ? {
      [K in keyof T]: T[K] extends object ? { value: ReactiveState<T[K], D> } : { value: T[K] };
    }
  : {
      [K in keyof T]: { value: T[K] };
    };

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
function useReactive<T, D extends boolean = true>(
  initialState: T,
  deep?: D | Watcher<T>,
  ...callbacks: Array<Watcher<T>>
): T {
  // ReactiveState<T, D>
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
    return stateRef.current as any;
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
