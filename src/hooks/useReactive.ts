import { useState, useEffect, useRef, useLayoutEffect } from "react";
import useForceUpdate from "./useForceUpdate";
import isEqual from "./utils/isEqual";

/**
 * @param {*} state The new state value
 */
type Watcher<T> = (state: T) => void;

type ProxyObj<T> = {
  [P in keyof T]: {
    value: T[P];
  };
};

export class Reactive<T extends object> {
  constructor(obj: T, fsr?: Function) {
    const instance = new Proxy(obj, {
      // @ts-ignore
      get(target: ProxyObj<T>, prop: keyof T, receiver) {
        if (prop === "toJSON") {
          // || prop === "valueOf" || prop === "toString"
          return () => unwrap(target);
        }
        // Handle special Types
        const specialMethodHandler = handleSpecialMethods(target, prop, fsr);
        if (specialMethodHandler) {
          return specialMethodHandler;
        }
        return target[prop]?.value;
      },
      // @ts-ignore
      set(target: ProxyObj<T>, prop: keyof T, value: T[keyof T]) {
        if (target[prop] && !isEqual(target[prop]["value"], value)) {
          const update = () => {
            // target[prop]["value"] = value;
            // @ts-ignore
            target[prop]["value"] = typeof value === "object" ? reactive(value, fsr) : value; // unwrap(deProxy(target))
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

function handleSpecialMethods(target: any, prop: any, fsr?: Function) {
  const types = [Array, Date, Map, Set];
  for (const Type of types) {
    if (target instanceof Type && prop in Type.prototype) {
      // @ts-ignore
      return function (...args) {
        // @ts-ignore
        const result = Type.prototype[prop].apply(target, args);
        fsr?.();
        return result;
      };
    }
  }
  return null;
}

export function deepProxy<T extends object>(obj: T, fsr?: Function) {
  if (typeof obj !== "object" || obj === null) {
    let wrapObj = { value: obj };
    return reactive(wrapObj, fsr);
  } else {
    return reactive(obj, fsr);
  }
}

export function reactive<T extends object>(obj: T, fsr?: Function) {
  let proxyObj: any;

  if (obj instanceof Date) {
    proxyObj = new Date(obj.getTime());
  } else if (obj instanceof Set) {
    proxyObj = new Set(obj);
  } else if (Array.isArray(obj)) {
    proxyObj = [];
    Object.setPrototypeOf(proxyObj, Array.prototype);
  } else {
    proxyObj = {};
  }

  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      proxyObj[key] = { value: reactive(obj[key] as any, fsr) };
    } else {
      proxyObj[key] = { value: obj[key] };
    }
  }

  return new Reactive(proxyObj, fsr);
}

function deProxy(proxyObj: any) {
  const obj = Array.isArray(proxyObj) ? [] : ({} as any);

  for (let key in proxyObj) {
    if (proxyObj[key] instanceof Reactive) {
      obj[key] = unwrap(proxyObj[key]);
    } else if (typeof proxyObj[key] === "object" && proxyObj[key] !== null) {
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

  const unwrappedObj = Array.isArray(obj) ? [] : ({} as any);

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
 * - **initialState** - support **primitives**, **object**, **array**, **Date**, **Map** and **Set** types.
 * If given a non-object type, it will return the proxy wrapped with struct `{value: T}`.
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
): T extends object ? T : { value: T } {
  const fsr = useForceUpdate();
  const stateRef = useRef(initialState);

  useEffect(() => {
    if (typeof deep === "function") {
      callbacks.unshift(deep);
    }
    callbacks.forEach((callback) => callback(stateRef.current));
  }, [stateRef.current, callbacks]);

  useLayoutEffect(() => {
    let reactiveState: any = null;
    reactiveState = deep !== false ? deepProxy(initialState as any, fsr) : shallowProxy(initialState as any, fsr);
    stateRef.current = reactiveState;
    fsr();
  }, []);

  //@ts-ignore
  return stateRef.current;
}

export default useReactive;
