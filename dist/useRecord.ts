import { useState } from "react";
import { Hintable, Property } from "./typings";

export default function useRecord<T extends object = Record<string, any>>(initial?: T) {
  if (initial && typeof initial !== "object") {
    throw new Error("Initial value must be an object");
  }
  const [record, setRecord] = useState<T>(initial || Object.create({}));

  function get<K extends Hintable<keyof T>>(key: K): Property<T, K> {
    // @ts-ignore
    return record[key];
  }
  function set<K extends Hintable<keyof T>>(key: K, value: Property<T, K>): void;
  function set<K extends Hintable<keyof T>>(key: K, setValueAction: (value: Property<T, K>) => Property<T, K>): void;
  function set(state: Partial<T>, mode?: 'rehydrate' | 'override'): void;
  function set(setRecordAction: (prev: T) => Partial<T>, mode?: 'rehydrate' | 'override'): void;
  function set(...args: any[]) {
    if (args.length === 0) {
      throw new Error("No arguments provided");
    }
    if (['string', 'number', 'symbol'].includes(typeof args[0])) {
      const key = args[0];
      const value = args[1];
      setRecord((prev) => {
        return {
          ...prev,
          // @ts-ignore
          [key]: typeof value === 'function' ? value(prev[key]) : value
        }
      });
    } else if (typeof args[0] === 'object') {
      const state = args[0];
      const mode = args[1] || 'rehydrate';
      setRecord((prev) => {
        return mode === 'override'
          ? { ...state, ...prev }
          : { ...prev, ...state };
      });
    } else if (typeof args[0] === 'function') {
      const setRecordAction = args[0];
      const mode = args[1] || 'rehydrate';
      setRecord((prev) => {
        const instance = setRecordAction(prev);
        return mode === 'override'
          ? { ...instance }
          : { ...prev, ...instance };
      });
    } else {
      throw new Error('Invalid arguments');
    }
  }

  return [record, set, get] as const;
}