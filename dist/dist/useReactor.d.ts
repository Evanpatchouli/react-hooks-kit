import { Path, PathValue } from "./utils/types";
export interface ReactorModel<T = any> {
    value: T;
    subscribe(listener: Listener<T>): () => void;
}
export type Listener<T> = (state: T) => any;
export type ReactorPlugin<T = any> = {
    name: string;
    action?: (state: T, payload: any, that: Reactor<T>) => any;
    onStateChange?: (state: T, that: Reactor<T>) => any;
    onAction?: (action: T, that: Reactor<T>) => any;
};
export interface SetValueAction<T> {
    (prevState: T): T;
}
export interface SetPropertyAction<T, P extends Path<T> = Path<T>> {
    (preValue: PathValue<T, P>): PathValue<T, P>;
}
type PluginNames<T extends ReactorPlugin[]> = T[number]["name"];
/**
 * Reactor is a state management tool based on React Hooks with the following features:
 * - View updates are only triggered by set invocation or value reassignment.
 * - Direct changes to deep state properties won't trigger view updates but are stored in memory and applied on the next view update.
 * - Reactor is a reactive, proxy, cloneable, resettable, dispatchable, serializable, subscribable, listenable, and pluginable object.
 * ---
 */
export declare class Reactor<T = any, P extends ReactorPlugin<T> = ReactorPlugin<T>> implements ReactorModel {
    private _state;
    private _setState;
    private _defaultValue;
    private _plugins;
    private _listeners;
    private _deepCloneWhenSet;
    private _id;
    constructor(state: T, setState?: any, plugins?: P[], deepSet?: boolean);
    get id(): number;
    get value(): T;
    set value(newState: T);
    setValue(newState: T | SetValueAction<T>): void;
    subscribe(listener: Listener<T>): () => void;
    dispatch<Actions = PluginNames<P[]>>(action: Actions, payload?: any): void;
    /**
     * Emit a custom event on the event bus (Only Reactor instance, not shared with other hooks like useEmitter, useReceiver.etc)
     */
    emit(eventName: string, payload?: any): void;
    /**
     * Listen a custom event on the event bus (Only Reactor instance, not shared with other hooks like useEmitter, useReceiver.etc)
     */
    on(eventName: string, listener: Listener<any>): () => void;
    toJSON(): T;
    clone(): Reactor<T, P>;
    get<P extends Path<T> = Path<T>>(path?: P, strict?: boolean): P extends undefined ? T | undefined : PathValue<T, P> | undefined;
    set<P extends Path<T> = Path<T>>(path: P, value: PathValue<T, P> | SetPropertyAction<T, P>, deepSet?: boolean): void;
    cloneValue(): T;
    setDefaultValue(defaultValue: T): void;
    getDefaultValue(): T | undefined;
    reset(): void;
    static isReactor(obj: any): boolean;
}
/**
 * When store.state changes, call the given function.
 * @param target listened Reactive store
 * @returns unlistener
 */
export declare function listen<T = any>(target: Omit<Reactor<T>, "_state" | "_setState">): {
    then: (...fns: ((value: T) => any)[]) => () => void;
};
/**
 * **useReactor** is a React Hook that returns a Reactor instance for advanced state management.
 * ### Parameters
 * - initialValue: `T` - The initial state value.
 * - plugins?: `ReactorPlugin<T>[]` - Optional array of plugins to extend Reactor functionality.
 *   - Each plugin can have: name, action, onStateChange, onAction callbacks.
 * ---
 * ### Return (Reactor Instance)
 * A Reactor instance with the following properties and methods:
 * - **value**: `T` - Get or set the current state value.
 * - **subscribe**: `(listener: (state: T) => any) => () => void` - Subscribe to state changes.
 * - **get**: `(path?: string) => any` - Get value by path (e.g., "user.name").
 * - **set**: `(path: string, value: any) => void` - Set value by path.
 * - **setValue**: `(newState: T | ((prev: T) => T)) => void` - Update the entire state.
 * - **dispatch**: `(action: string, payload?: any) => void` - Dispatch plugin actions.
 * - **emit**: `(eventName: string, payload?: any) => void` - Emit custom events.
 * - **on**: `(eventName: string, listener: Function) => () => void` - Listen to custom events.
 * - **clone**: `() => Reactor<T>` - Clone the reactor instance.
 * - **reset**: `() => void` - Reset to initial value.
 * - **toJSON**: `() => T` - Serialize to JSON.
 * ---
 * ### Usage
 * ```tsx
 * const reactor = useReactor({ count: 0, user: { name: "John" } });
 *
 * // Direct value access
 * reactor.value.count; // 0
 * reactor.value = { count: 1, user: { name: "Alice" } };
 *
 * // Path-based access
 * reactor.get("user.name"); // "John"
 * reactor.set("count", 10);
 *
 * // Subscribe to changes
 * reactor.subscribe((state) => console.log(state));
 *
 * // Reset to initial value
 * reactor.reset();
 * ```
 * ---
 * ### Example
 * ```tsx
 * import { useReactor } from "@evanpatchouli/react-hooks-kit";
 *
 * const Counter = () => {
 *   const reactor = useReactor({ count: 0 });
 *
 *   return (
 *     <div>
 *       <p>Count: {reactor.value.count}</p>
 *       <button onClick={() => reactor.set("count", reactor.get("count") + 1)}>
 *         Increment
 *       </button>
 *       <button onClick={() => reactor.reset()}>
 *         Reset
 *       </button>
 *     </div>
 *   );
 * };
 * ```
 * ---
 * ### FAQs
 * - Q: Why useReactor instead of useState?
 * - A: Reactor provides advanced features like path-based access, subscriptions, plugins, and event system.
 * ---
 * - Q: When should I use plugins?
 * - A: Use plugins to add custom logic that runs on state changes or actions, like logging, validation, or side effects.
 * ---
 * - Q: Can I use Reactor outside of React components?
 * - A: Yes, you can create a Reactor instance directly using `new Reactor(initialValue)`, but it won't trigger React re-renders.
 */
export declare const useReactor: <T = any>(initialValue: T, plugins?: ReactorPlugin<T>[] | undefined) => Reactor<T, ReactorPlugin<T>>;
/**
 * apply is same with useReactor
 */
export declare const apply: <T = any>(initialValue: T, plugins?: ReactorPlugin<T>[] | undefined) => Reactor<T, ReactorPlugin<T>>;
export default useReactor;
