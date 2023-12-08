import React from "react";
import isEqual from "./utils/isEqual";
import cloneDeep from "@/hooks/utils/cloneDeep";
import { PathArray, PathInto } from "./utils/types";

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

export type Path<T, K extends keyof any = keyof T> =
  | PathArray<T, K>
  | PathInto<T>;

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

  constructor(state: T, setState?: any, plugins?: P[]) {
    this._state = state;
    setState ? (this._setState = setState) : void 0;
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

  toJSON() {
    return this._state;
  }

  clone() {
    return new Reactor(this._state, this._setState, this._plugins);
  }

  get(path?: Path<T>) {
    if (!path) return this._state;
    try {
      // @ts-ignore
      return path.split(".").reduce((acc, cur) => acc[cur], this._state);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }

  set(path: Path<T>, value: any) {
    const newState = cloneDeep(this._state);
    // @ts-ignore
    const paths = path.split(".");
    let current = newState;
    for (let i = 0; i < paths.length - 1; i++) {
      // @ts-ignore
      current = current[paths[i]];
    }
    // @ts-ignore
    current[paths[paths.length - 1]] = value;
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
