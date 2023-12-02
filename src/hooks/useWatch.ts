import { useState, useEffect, useRef } from "react";
import { PathArray, PathInto, PathValue } from "./utils/types";

type Callback<V = any> = (newValue: V, oldValue: V) => void;
type Getter<V = any, T extends object = {}> = (object: T, ...args: any[]) => V | undefined;

function get(object: object, path?: string[] | string, strict: boolean = false) {
  if (!path) return undefined;
  if (typeof path === "string") {
    path = path.split(".");
  }

  if (!strict) {
    return path.reduce(
      //@ts-ignore
      (obj, key) => (obj && obj[key] !== "undefined" ? obj[key] : undefined),
      object
    );
  }

  let obj = object;
  for (let i = 0; i < path.length; i++) {
    let key = path[i];
    // @ts-ignore
    while (obj[key] === undefined && i + 1 < path.length) {
      key += "." + path[++i];
    }
    // @ts-ignore
    obj = obj[key];
  }

  return obj;
}

export type Path<T, K extends keyof any = keyof T> = PathArray<T, K> | PathInto<T>;

function isEqual(a: any, b: any): boolean {
  if (a === b) return true;

  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();

  if (!a || !b || (typeof a !== "object" && typeof b !== "object")) return a === b;

  if (a.prototype !== b.prototype) return false;

  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;

  return keys.every((k) => isEqual(a[k], b[k]));
}

interface Config {
  strict?: boolean;
  immediate?: boolean;
}

interface UseWatch {
  <V extends unknown = any, T extends object = {}, P extends Path<T> = Path<T>>(
    object: T,
    path: P,
    callback: Callback<V>,
    config?: Config
  ): V | undefined;
  <V extends unknown = any, T extends object = {}, P extends Path<T> = Path<T>>(
    object: T,
    getter: Getter<V, T>,
    callback: Callback<V>,
    config?: Config
  ): V | undefined;
  <V extends unknown = any, T extends object = {}, P extends Path<T> = Path<T>>(
    object: T,
    path: P,
    callback: Callback<V>,
    strict?: boolean,
    immediate?: boolean
  ): V | undefined;
  <V extends unknown = any, T extends object = {}, P extends Path<T> = Path<T>>(
    object: T,
    getter: Getter<V, T>,
    callback: Callback<V>,
    strict?: boolean,
    immediate?: boolean
  ): V | undefined;
}

const useWatch: UseWatch = <V extends unknown = any, T extends object = {}, P extends Path<T> = Path<T>>(
  object: T,
  path: P,
  callback: Callback<V>,
  configOrStrict?: Config | boolean,
  immediate?: boolean
) => {
  let strict = false;
  if (typeof configOrStrict === "boolean") {
    strict = configOrStrict;
  } else if (configOrStrict) {
    strict = configOrStrict.strict || false;
    immediate = configOrStrict.immediate;
  }
  let getter: typeof get | Getter<V, T> = get;
  if (path instanceof Function) {
    getter = path as unknown as Getter<V, T>;
  }

  let initValue = undefined;
  try {
    initValue = getter(object, path as any, strict);
  } catch (error) {
    console.error(error);
  }
  const [value, setValue] = useState<V>(initValue as V);
  const oldValueRef = useRef(value);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current && immediate) {
      callback(value, oldValueRef.current);
      mountedRef.current = true;
    }
  }, []);

  useEffect(() => {
    let newValue = undefined;
    try {
      newValue = getter(object, path as any, strict);
    } catch (error) {
      console.error(error);
    }
    if (!isEqual(newValue as V, oldValueRef.current)) {
      callback(newValue as V, oldValueRef.current);
      setValue(newValue as V);
      oldValueRef.current = newValue as V;
    }
  }, [object, path, callback]);
  return value as V | undefined; // PathValue<T, P> | undefined;
};

export default useWatch;
