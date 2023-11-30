import { useState, useEffect, useRef } from "react";

type Callback<V = any> = (newValue: V, oldValue: V) => void;

function get(object: object, path: string[]) {
  return path.reduce(
    //@ts-ignore
    (obj, key) => (obj && obj[key] !== "undefined" ? obj[key] : undefined),
    object
  );
}

type Path<T, Key extends keyof any = keyof T> = Key extends keyof T
  ? T[Key] extends object
    ? [Key, ...Path<T[Key]>] | [Key] | []
    : [Key] | []
  : never;

function isEqual(a: any, b: any): boolean {
  if (a === b) return true;

  if (a instanceof Date && b instanceof Date)
    return a.getTime() === b.getTime();

  if (!a || !b || (typeof a !== "object" && typeof b !== "object"))
    return a === b;

  if (a.prototype !== b.prototype) return false;

  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;

  return keys.every((k) => isEqual(a[k], b[k]));
}

function useWatch<
  V extends unknown = any,
  T extends object = {},
  P extends Path<T> = Path<T>
>(object: T, path: P, callback: Callback<V>) {
  const [value, setValue] = useState<V>(get(object, path as any) as V);
  const oldValueRef = useRef(value);

  useEffect(() => {
    const newValue = get(object, path as any);
    if (!isEqual(newValue as V, oldValueRef.current)) {
      callback(newValue as V, oldValueRef.current);
      setValue(newValue as V);
      oldValueRef.current = newValue as V;
    }
  }, [object, path, callback]);

  return value as V | undefined;
}

export default useWatch;
