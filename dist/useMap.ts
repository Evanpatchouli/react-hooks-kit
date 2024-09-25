import { useState } from "react";
import { Hintable } from './typings';

type ReadonlyMap<M extends Map<string | number | Symbol, unknown>> = Readonly<Omit<M, "set" | "delete" | "clear">>

const useMap = <T extends Object = {}>(initialState: T) => {
  const [map, setMap] = useState<Map<string, T>>(new Map(Object.entries(initialState)));

  const set = (key: Hintable<keyof T>, value: T) => {
    setMap((prev) => {
      prev.set(key as any, value);
      return prev;
    });
  };

  const get = (key: Hintable<keyof T>): T | undefined => {
    return map.get(key as any);
  };

  const del = (key: Hintable<keyof T>) => {
    setMap((prev) => {
      prev.delete(key as any);
      return prev;
    });
  }

  const add = (key: Hintable<keyof T>, value: T) => {
    setMap(new Map(map.entries()).set(key as any, value));
  }
  return {
    map: map as ReadonlyMap<Map<Hintable<keyof T>, T>>, set, get, del, add
  };
}

export default useMap;