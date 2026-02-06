import { useState } from "react";
import { Hintable, Property } from "./typings";

export type ReadonlyMap<T extends object = Record<string, any>> = Readonly<
  Omit<Map<keyof T, T[keyof T]>, "set" | "delete" | "clear">
>;

/**
 * **useMap** is a React Hook that manages a Map state with convenient methods for manipulation.
 * ### Parameters
 * - initialState: `T extends Object` - The initial state object that will be converted to a Map.
 * ---
 * ### Return (Object)
 * - map: `ReadonlyMap<T>` - The readonly Map instance (cannot use set/delete/clear directly).
 * - set: `function` - Set values in the map, has four overloads:
 *   + (key: K, value: Property<T, K>): void - Set a single key-value pair.
 *   + (key: K, setValueAction: (prev?: Property<T, K>) => Property<T, K>): void - Set value using a function.
 *   + (record: Partial<T>, mode?: 'rehydrate' | 'override'): void - Set multiple key-value pairs.
 *   + (setMapAction: (prev: Map<K, Property<T, K>>) => T | Map<K, Property<T, K>>, mode?: 'rehydrate' | 'override'): void - Set using a function that receives the previous Map.
 * - get: `(key: K) => Property<T, K>` - Get value by key.
 * - del: `(key: Hintable<keyof T>) => void` - Delete a key from the map.
 * - add: `(key: K, value: Property<T, K>) => void` - Add or update a key-value pair (alias for set).
 * ---
 * ### Usage
 * ```tsx
 * const { map, set, get, del, add } = useMap({
 *   name: "John",
 *   age: 18
 * });
 *
 * // Set single value
 * set("name", "Evan");
 *
 * // Set with function
 * set("age", (prev) => (prev || 0) + 1);
 *
 * // Set multiple values
 * set({ name: "Alice", age: 25 }, "rehydrate");
 *
 * // Get value
 * const name = get("name");
 *
 * // Delete key
 * del("age");
 * ```
 * ---
 * ### Example
 * ```tsx
 * import { useMap } from "@evanpatchouli/react-hooks-kit";
 *
 * const UserProfile = () => {
 *   const { map, set, get, del } = useMap({
 *     username: "john_doe",
 *     email: "john@example.com",
 *     age: 25
 *   });
 *
 *   return (
 *     <div>
 *       <p>Username: {get("username")}</p>
 *       <button onClick={() => set("age", (prev) => (prev || 0) + 1)}>
 *         Increment Age
 *       </button>
 *       <button onClick={() => del("email")}>
 *         Remove Email
 *       </button>
 *     </div>
 *   );
 * };
 * ```
 * ---
 * ### FAQs
 * - Q: Why useMap instead of useState with Map?
 * - A: useMap provides convenient methods (set, get, del, add) and ensures immutability automatically.
 * ---
 * - Q: What's the difference between 'rehydrate' and 'override' mode?
 * - A: 'rehydrate' merges new values with existing ones, 'override' replaces the entire map.
 * ---
 * - Q: Can I use map.set() directly?
 * - A: No, the returned map is readonly. Use the provided set() method instead.
 */
const useMap = <T extends Object = {}>(initialState: T) => {
  const [map, setMap] = useState<Map<string, T[keyof T]>>(
    new Map(Object.entries(initialState)),
  );

  function set<K extends Hintable<keyof T> = Hintable<keyof T>>(
    key: K,
    value: Property<T, K>,
  ): void;
  function set<K extends Hintable<keyof T> = Hintable<keyof T>>(
    key: K,
    setValueAction: (prev?: Property<T, K>) => Property<T, K>,
  ): void;
  function set(record: Partial<T>, mode?: "rehydrate" | "override"): void;
  function set<K extends Hintable<keyof T>>(
    setMapAction: (prev: Map<K, Property<T, K>>) => T | Map<K, Property<T, K>>,
    mode?: "rehydrate" | "override",
  ): void;

  // 实现
  function set(...args: any[]) {
    if (args.length === 0) {
      throw new Error("No arguments provided");
    }

    const firstArg = args[0];
    const secondArg = args[1];

    // 判断第一个参数是否为函数 - map action 模式
    if (typeof firstArg === "function") {
      const setMapAction: (
        prev: Map<Hintable<keyof T>, T[keyof T]>,
      ) => T | Map<Hintable<keyof T>, T[keyof T]> = firstArg;
      const mode: "rehydrate" | "override" = secondArg || "override";
      setMap((prev) => {
        const instance = setMapAction(prev);
        const newmap =
          instance instanceof Map
            ? instance
            : new Map(Object.entries(instance));
        if (mode === "override") {
          return newmap;
        }
        return new Map([...prev, ...newmap]) as any;
      });
    }
    // 判断第一个参数是否为对象（非基本类型） - record 模式
    else if (typeof firstArg === "object" && firstArg !== null) {
      const record: Partial<T> = firstArg;
      const mode: "rehydrate" | "override" = secondArg || "rehydrate";
      setMap((prev) => {
        if (mode === "override") {
          return new Map(Object.entries(record));
        }
        return new Map([...prev, ...Object.entries(record)]);
      });
    }
    // key-value 模式（第一个参数是基本类型）
    else if (args.length === 2) {
      const key: Hintable<keyof T> = firstArg;
      // 判断第二个参数是否为函数 - key + setValueAction
      if (typeof secondArg === "function") {
        const setValueAction: (prev?: T[keyof T]) => T[keyof T] = secondArg;
        setMap((prev) => {
          const prevValue = map.get(key as any);
          return new Map(prev.entries()).set(
            key as any,
            setValueAction(prevValue),
          );
        });
      }
      // key + value
      else {
        const value: T[keyof T] = secondArg;
        setMap((prev) => {
          return new Map(prev.entries()).set(key as any, value);
        });
      }
    } else {
      throw new Error("Invalid arguments");
    }
  }

  function get<K extends Hintable<keyof T>>(key: K): Property<T, K> {
    return map.get(key as any) as Property<T, K>;
  }

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
    map: map as any as ReadonlyMap<T>,
    set,
    get,
    del,
    add,
  };
};

export default useMap;
