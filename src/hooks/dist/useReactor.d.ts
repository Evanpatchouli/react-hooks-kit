import { Path } from "./utils/types";
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
type PluginNames<T extends ReactorPlugin[]> = T[number]["name"];
/**
 * Reactor is a state management tool based on React Hooks.
 * - Only invoke set or reassign value will cause the view to update.
 * - Directly change deep properties of the state will not cause the view to update, but it has been stored in memory, then last time the view is updated, the view will be updated.
 * - Reactor is a reactive object, which means that you can get the value of the state through the get method, and the value will be updated when the state changes.
 * - Reactor is a proxy object, which means that you can directly get the value of the state through the dot syntax, and the value will be updated when the state changes.
 * - Reactor is a cloneable object, which means that you can clone a Reactor object through the clone method, and the cloned object will have the same state as the original object.
 * - Reactor is a resettable object, which means that you can reset the state of the Reactor object to the default value through the reset method.
 * - Reactor is a dispatchable object, which means that you can dispatch an action through the dispatch method, and the action will be executed by the corresponding plugin.
 * - Reactor is a serializable object, which means that you can serialize the Reactor object through the toJSON method.
 * - Reactor is a subscribable object, which means that you can subscribe to the Reactor object through the subscribe method, and the listener will be called when the state changes.
 * - Reactor is a listenable object, which means that you can listen to the Reactor object through the listen method, and the listener will be called when the state changes.
 * - Reactor is a pluginable object, which means that you can add a plugin to the Reactor object through the use method, and the plugin will be executed when the state changes.
 *
 */
export declare class Reactor<T = any, P extends ReactorPlugin<T> = ReactorPlugin<T>> implements ReactorModel {
    private _state;
    private _setState;
    private _defaultValue;
    private _plugins;
    private _listeners;
    private _deepCloneWhenSet;
    constructor(state: T, setState?: any, plugins?: P[], deepSet?: boolean);
    get value(): T;
    set value(newState: T);
    setValue: (newState: T) => void;
    subscribe(listener: Listener<T>): () => void;
    dispatch<Actions = PluginNames<P[]>>(action: Actions, payload?: any): void;
    toJSON(): T;
    clone(): Reactor<T, P>;
    get<P extends Path<T> = Path<T>>(path?: P, strict?: boolean): object | T | undefined;
    set<P extends Path<T> = Path<T>>(path: P, value: any, deepSet?: boolean): void;
    cloneValue(): T;
    setDefaultValue(defaultValue: T): void;
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
 * useReactor is a React Hook that returns a Reactor instance.
 * @param initialValue
 * @param plugins
 * @returns Reactor instance
 */
export declare const useReactor: <T = any>(initialValue: T, plugins?: ReactorPlugin<T>[] | undefined) => Reactor<T, ReactorPlugin<T>>;
/**
 * apply is same with useReactor
 */
export declare const apply: <T = any>(initialValue: T, plugins?: ReactorPlugin<T>[] | undefined) => Reactor<T, ReactorPlugin<T>>;
export default useReactor;
