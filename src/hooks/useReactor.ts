import React from "react";
import isEqual from "./utils/isEqual";
import cloneDeep from "./utils/cloneDeep";
import { Path } from "./utils/types";
import getter from "./utils/getFrom";
import setTo from "./utils/setTo";

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

const eventBus: { events: { [key: string]: Listener<any>[] } } = { events: {} };

/**
 * Reactor is a state management tool based on React Hooks with the following features:
 * - View updates are only triggered by set invocation or value reassignment.
 * - Direct changes to deep state properties won't trigger view updates but are stored in memory and applied on the next view update.
 * - Reactor is a reactive, proxy, cloneable, resettable, dispatchable, serializable, subscribable, listenable, and pluginable object.
 * ---
 */
export class Reactor<T = any, P extends ReactorPlugin<T> = ReactorPlugin<T>>
  implements ReactorModel
{
  private _state: T;
  private _setState: any = (newState: T) => {
    this._state = newState;
  };
  private _defaultValue: T | undefined = undefined;
  private _plugins: P[] = [];
  private _listeners: Listener<Readonly<T>>[] = [];
  private _deepCloneWhenSet: boolean = false;

  constructor(
    state: T,
    setState?: any,
    plugins?: P[],
    deepSet: boolean = false
  ) {
    this._state = state;
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

  get value(): T {
    return this._state;
  }

  set value(newState: T) {
    this.setValue(newState);
  }

  setValue = (newState: T) => {
    if (isEqual(this._state, newState)) return;
    this._setState?.(newState);
    this._listeners.forEach((listener) => listener(newState));
    this._plugins.forEach((plugin) => {
      plugin.onStateChange?.(newState, this);
    });
  };

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
      eventBus.events[eventName] = eventBus.events[eventName].filter(
        (l) => l !== listener
      );
    };
  }

  toJSON() {
    return this._state;
  }

  clone() {
    return new Reactor(this._state, this._setState, this._plugins);
  }

  get<P extends Path<T> = Path<T>>(path?: P, strict: boolean = true) {
    if (!path) return this._state;
    try {
      // @ts-ignore
      return getter(this._state, path, strict ?? true);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }

  set<P extends Path<T> = Path<T>>(path: P, value: any, deepSet?: boolean) {
    const newState = setTo(
      this._state,
      path as any,
      value,
      deepSet ?? this._deepCloneWhenSet
    );
    this.setValue(newState);
  }

  cloneValue() {
    return cloneDeep(this._state);
  }

  setDefaultValue(defaultValue: T) {
    this._defaultValue = defaultValue;
  }

  reset() {
    if (this._defaultValue) {
      this.setValue(this._defaultValue);
    }
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
export function listen<T = any>(
  target: Omit<Reactor<T>, "_state" | "_setState">
) {
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
export const useReactor = <T = any>(
  initialValue: T,
  plugins?: ReactorPlugin<T>[]
): Reactor<T> => {
  const [state, setState] = React.useState<T>(initialValue);
  const observer = new Reactor(state, setState, plugins);
  return observer;
};

/**
 * apply is same with useReactor
 */
export const apply = useReactor;

export default useReactor;
