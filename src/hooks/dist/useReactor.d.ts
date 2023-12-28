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
    constructor(state: T, setState?: any, plugins?: P[], deepSet?: boolean);
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
