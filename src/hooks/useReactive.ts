import { useState, useEffect, useRef } from "react";
import useForceUpdate from "./useForceUpdate";
import isEqual from "./utils/isEqual";

type Watcher<T> = (state: T) => void;

type ProxyObj<T> = {
  [P in keyof T]: {
    value: T[P];
  };
};

// @ts-ignore
export class Reactive<T extends object> {
  constructor(obj: T, fsr?: Function) {
    const instance = new Proxy(obj, {
      // @ts-ignore
      get(target: ProxyObj<T>, prop: keyof T, receiver) {
        // if (prop === "toJSON") {
        //   return () => deProxy(target);
        // }
        return target[prop]?.value;
      },
      // @ts-ignore
      set(target: ProxyObj<T>, prop: keyof T, value: T[keyof T]) {
        if (target[prop] && !isEqual(target[prop]["value"], value)) {
          const update = () => {
            target[prop]["value"] = value; // unwrap(deProxy(target))
            fsr?.();
          };
          update();
          // requestAnimationFrame(update);
        }
        return true;
      },
    }) as T;
    instance.toString = () => {
      return "[object Object]";
    };
    return instance;
  }
}

export function deepProxy<T extends object>(obj: T, fsr: Function) {
  const proxyObj = Array.isArray(obj) ? [] : ({} as any);

  if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      if (typeof item === "object" && item !== null) {
        proxyObj[index] = { value: deepProxy(item as any, fsr) };
      } else {
        proxyObj[index] = { value: item };
      }
    });
  } else {
    for (let key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        proxyObj[key] = { value: deepProxy(obj[key] as any, fsr) };
      } else {
        proxyObj[key] = { value: obj[key] };
      }
    }
  }

  return new Reactive(proxyObj, fsr);
}

// const arr = useReactive([1, 2, 3]);

function deProxy(proxyObj: any) {
  const obj = Array.isArray(proxyObj) ? [] : ({} as any);

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

function shallowProxy<T extends object>(obj: T, fsr?: Function) {
  return new Proxy(obj, {
    get(target, prop) {
      // @ts-ignore
      return target[prop];
    },
    set(target, prop, value) {
      // @ts-ignore
      target[prop] = value;
      fsr?.();
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
function useReactive<T, D extends boolean = true>(
  initialState: T,
  deep?: D | Watcher<T>,
  ...callbacks: Array<Watcher<T>>
): T {
  const fsr = useForceUpdate();
  const stateRef = useRef(initialState);

  useEffect(() => {
    if (typeof deep === "function") {
      callbacks.unshift(deep);
    }
    callbacks.forEach((callback) => callback(stateRef.current));
  }, [stateRef.current, callbacks]);

  useEffect(() => {
    let reactiveState: any = null;
    if (deep === false) {
      reactiveState = shallowProxy(initialState as any, fsr);
    } else {
      reactiveState = deepProxy(initialState as any, fsr);
    }
    stateRef.current = reactiveState;
    fsr();
  }, []);

  return stateRef.current;
}

export default useReactive;
