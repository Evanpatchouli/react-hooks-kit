import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import isEqual from "./utils/isEqual";
import cloneDeep from "./utils/cloneDeep";
import { Path, PathValue } from "./utils/types";
import getter from "./utils/getFrom";
import setTo from "./utils/setTo";
import UKey from "./utils/Ukey";

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

const eventBus: { events: { [key: string]: Listener<any>[] } } = { events: {} };

/**
 * Reactor is a state management tool based on React Hooks with the following features:
 * - View updates are only triggered by set invocation or value reassignment.
 * - Direct changes to deep state properties won't trigger view updates but are stored in memory and applied on the next view update.
 * - Reactor is a reactive, proxy, cloneable, resettable, dispatchable, serializable, subscribable, listenable, and pluginable object.
 * ---
 */
export class Reactor<T = any, P extends ReactorPlugin<T> = ReactorPlugin<T>> implements ReactorModel {
  private _state: T;
  private _setState: Dispatch<SetStateAction<T>> = (newState) => {
    this._state = newState instanceof Function ? newState(this._state) : newState;
  };
  private _defaultValue: T | undefined = undefined;
  private _plugins: P[] = [];
  private _listeners: Listener<Readonly<T>>[] = [];
  private _deepCloneWhenSet: boolean = false;
  private _id = UKey();

  constructor(state: T, setState?: any, plugins?: P[], deepSet: boolean = false) {
    this._state = state;
    this._defaultValue = cloneDeep(state);
    setState ? (this._setState = setState) : void 0;
    this._deepCloneWhenSet = deepSet;
    plugins ? (this._plugins = plugins) : void 0;
    // 绑定所有的 onAction 到每个 action 上，最后将 action 按照 plugn.name 绑定到 this
    this._plugins.forEach((plugin) => {
      const originAction = plugin.action;
      plugin.action = (action: any, payload, that) => {
        if (!originAction) return;
        const res = originAction(action, payload, that);
        plugin.onAction?.(action, this);
        return res;
      };
    });
  }

  get id() {
    return this._id;
  }

  get value(): T {
    return this._state;
  }

  set value(newState: T) {
    this.setValue(newState);
  }

  // @toFix concurrency and asynchronous issues
  setValue(newState: T | SetValueAction<T>) {
    let state = this._state;
    if (isEqual(this._state, newState)) return;
    this._setState?.((prevState: T) => {
      state = newState instanceof Function ? newState(prevState) : newState;
      // state has already been overwritten by newState, so it doesn't point to this._state refernce again.
      // we need to update this._state by ourselves.
      this._state = state;
      return state;
    });
    this._listeners.forEach((listener) => listener(state));
    this._plugins.forEach((plugin) => {
      plugin.onStateChange?.(state, this);
    });
  }

  subscribe(listener: Listener<T>) {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter((l) => l !== listener);
    };
  }

  dispatch<Actions = PluginNames<P[]>>(action: Actions, payload?: any) {
    this._plugins.forEach((plugin) => {
      if (plugin.name === action) {
        plugin.action?.(this._state, payload, this);
      }
    });
  }

  /**
   * Emit a custom event on the event bus (Only Reactor instance, not shared with other hooks like useEmitter, useReceiver.etc)
   */
  emit(eventName: string, payload?: any) {
    (eventBus.events[eventName] || []).forEach((listener) => listener(payload));
  }

  /**
   * Listen a custom event on the event bus (Only Reactor instance, not shared with other hooks like useEmitter, useReceiver.etc)
   */
  on(eventName: string, listener: Listener<any>) {
    if (!eventBus.events[eventName]) {
      eventBus.events[eventName] = [];
    }
    eventBus.events[eventName].push(listener);
    return () => {
      eventBus.events[eventName] = eventBus.events[eventName].filter((l) => l !== listener);
    };
  }

  toJSON() {
    return this._state;
  }

  clone() {
    return new Reactor(this._state, this._setState, this._plugins);
  }

  get<P extends Path<T> = Path<T>>(
    path?: P,
    strict: boolean = true
  ): P extends undefined ? T | undefined : PathValue<T, P> | undefined {
    if (!path) return this._state as any;
    try {
      // @ts-ignore
      return getter(this._state, path, strict ?? true);
    } catch (e) {
      console.warn(e);
      return undefined as any;
    }
  }

  set<P extends Path<T> = Path<T>>(path: P, value: PathValue<T, P> | SetPropertyAction<T, P>, deepSet?: boolean) {
    this.setValue((prev) => {
      // @ts-ignore
      let newValue = getter(prev, path, true) as PathValue<T, P>;
      if (value instanceof Function) {
        newValue = value(newValue);
      } else {
        newValue = value;
      }
      const newState = setTo(prev, path as any, newValue, deepSet ?? this._deepCloneWhenSet);
      return newState;
    });
  }

  cloneValue() {
    return cloneDeep(this._state);
  }

  setDefaultValue(defaultValue: T) {
    this._defaultValue = defaultValue;
  }

  getDefaultValue() {
    return this._defaultValue;
  }

  reset() {
    this.setValue(this._defaultValue!);
  }

  static isReactor(obj: any) {
    return Reactor.prototype.isPrototypeOf(obj);
  }
}

/**
 * When store.state changes, call the given function.
 * @param target listened Reactive store
 * @returns unlistener
 */
export function listen<T = any>(target: Omit<Reactor<T>, "_state" | "_setState">) {
  return {
    then: (...fns: ((value: T) => any)[]) => {
      const fn = (value: T) => fns.forEach((f) => f(value));
      const dispose = target.subscribe(fn);
      return dispose;
    },
  };
}

/**
 * useReactor is a React Hook that returns a Reactor instance.
 * @param initialValue
 * @param plugins
 * @returns Reactor instance
 */
export const useReactor = <T = any>(initialValue: T, plugins?: ReactorPlugin<T>[]): Reactor<T> => {
  const [state, setState] = useState<T>(initialValue);
  const reactorRef = useRef<Reactor<T> | null>(null);

  // Reassign if initial value changes.
  // useEffect(() => {
  //   if (reactorRef.current) {
  //     reactorRef.current.setValue(initialValue);
  //     reactorRef.current.setDefaultValue(initialValue);
  //   }
  // }, [initialValue]);

  let reactor: Reactor<T>;
  if (reactorRef.current) {
    reactor = reactorRef.current;
    return reactor;
  }
  reactor = new Reactor(state, setState, plugins);
  reactorRef.current = reactor;

  return reactor;
};

/**
 * apply is same with useReactor
 */
export const apply = useReactor;

export default useReactor;
