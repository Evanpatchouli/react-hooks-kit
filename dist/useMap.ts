import { useState } from "react";
import { Hintable, Property } from './typings';

export type ReadonlyMap<T extends object = Record<string, any>> = Readonly<Omit<Map<keyof T, T[keyof T]>, "set" | "delete" | "clear">>



const useMap = <T extends Object = {}>(initialState: T) => {
  const [map, setMap] = useState<Map<string, T[keyof T]>>(new Map(Object.entries(initialState)));

  function set<K extends Hintable<keyof T> = Hintable<keyof T>>(key: K, value: Property<T, K>): void;
  function set<K extends Hintable<keyof T> = Hintable<keyof T>>(key: K, setValueAction: (prev?: Property<T, K>) => Property<T, K>): void;
  function set(record: Partial<T>, mode?: 'rehydrate' | 'override'): void;
  function set<K extends Hintable<keyof T>>(setMapAction: (prev: Map<K, Property<T, K>>) => T | Map<K, Property<T, K>>, mode?: 'rehydrate' | 'override'): void;

  // 实现
  function set(...args: any[]) {
    if (args.length === 0) {
      throw new Error('No arguments provided');
    }

    if (args.length === 1 && typeof args[0] === 'object') {
      const record: Partial<T> = args[0];
      const mode: 'rehydrate' | 'override' = args[1] || 'rehydrate';
      // 处理 record 和 mode 的逻辑
      setMap((prev) => {
        if (mode === 'override') {
          return new Map(Object.entries(record));
        }
        return new Map([...prev, ...Object.entries(record)]);
      })
    } else if (args.length === 2 && typeof args[0] === 'function') {
      const setMapAction: (prev: Map<Hintable<keyof T>, T[keyof T]>) => T = args[0];
      const mode: 'rehydrate' | 'override' = args[1] || 'override';
      // 处理 setMapAction 和 mode 的逻辑
      setMap((prev) => {
        const instance = setMapAction(prev);
        const newmap = instance instanceof Map ? instance : new Map(Object.entries(instance));
        if (mode === 'override') {
          return newmap;
        }
        return new Map([...prev, ...newmap]);
      })
    } else if (args.length === 2 && typeof args[0] !== 'function' && typeof args[1] === 'function') {
      const key: Hintable<keyof T> = args[0];
      const setValueAction: (prev?: T[keyof T]) => T[keyof T] = args[1];
      // 处理 key 和 setValueAction 的逻辑
      setMap((prev) => {
        const prevValue = map.get(key as any);
        return new Map(prev.entries()).set(key as any, setValueAction(prevValue));
      });
    } else if (args.length === 2 && typeof args[0] !== 'function' && typeof args[1] !== 'function') {
      const key: Hintable<keyof T> = args[0];
      const value: T[keyof T] = args[1];
      // 处理 key 和 value 的逻辑
      setMap((prev) => {
        return new Map(prev.entries()).set(key as any, value);
      });
    } else {
      throw new Error('Invalid arguments');
    }
  }

  function get<K extends Hintable<keyof T>>(key: K): Property<T, K> {
    return map.get(key as any) as Property<T, K>;
  };

  function del(key: Hintable<keyof T>) {
    setMap((prev) => {
      if (!prev.has(key as any)) {
        return prev;
      }
      prev.delete(key as any);
      return new Map(prev);
    });
  }

  function add<K extends Hintable<keyof T>>(key: K, value: Property<T, K>) {
    setMap((prev) => {
      if (prev.has(key as any) && prev.get(key as any) === value) {
        return prev;
      }
      const newMap = new Map(prev);
      newMap.set(key as any, value);
      return newMap;
    });
  }
  return {
    map: map as any as ReadonlyMap<T>, set, get, del, add
  };
}

export default useMap;