import { Hintable, Property } from "./typings";
export type ReadonlyMap<T extends object = Record<string, any>> = Readonly<Omit<Map<keyof T, T[keyof T]>, "set" | "delete" | "clear">>;
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
declare const useMap: <T extends Object = {}>(initialState: T) => {
    map: Readonly<Omit<Map<keyof T, T[keyof T]>, "set" | "delete" | "clear">>;
    set: {
        <K extends Hintable<keyof T> = Hintable<keyof T>>(key: K, value: Property<T, K>): void;
        <K_1 extends Hintable<keyof T> = Hintable<keyof T>>(key: K_1, setValueAction: (prev?: Property<T, K_1> | undefined) => Property<T, K_1>): void;
        (record: Partial<T>, mode?: "rehydrate" | "override"): void;
        <K_2 extends Hintable<keyof T>>(setMapAction: (prev: Map<K_2, Property<T, K_2>>) => T | Map<K_2, Property<T, K_2>>, mode?: "rehydrate" | "override"): void;
    };
    get: <K_3 extends Hintable<keyof T>>(key: K_3) => Property<T, K_3>;
    del: (key: Hintable<keyof T>) => void;
    add: <K_4 extends Hintable<keyof T>>(key: K_4, value: Property<T, K_4>) => void;
};
export default useMap;
