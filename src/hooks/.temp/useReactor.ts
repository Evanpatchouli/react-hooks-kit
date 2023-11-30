import React from "react";

export interface ReactorModel<T = any> {
  value: T;
  subscribe(listener: Listener<T>): () => void;
}

export type Listener<T> = (state: T) => any;

export class Reactor<T = any> implements ReactorModel {
  private _state: T;
  private _setState: any = (newState: T) => {
    this._state = newState;
  };
  private _listeners: Listener<Readonly<T>>[] = [];

  constructor(state: T, setState?: any) {
    this._state = state;
    setState ? (this._setState = setState) : void 0;
  }

  get value(): T {
    return this._state;
  }

  set value(newState: T) {
    this._setState?.(newState);
    this._listeners.forEach((listener) => listener(newState));
  }

  subscribe(listener: Listener<T>) {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter((l) => l !== listener);
    };
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

export const useReactorListener = listen;

export const useReactor = <T = any>(initialValue: T): Reactor<T> => {
  const [state, setState] = React.useState<T>(initialValue);
  const observer = new Reactor(state, setState);
  return observer;
};

/**
 * apply is same with useReactor
 */
export const apply = useReactor;

export default useReactor;
