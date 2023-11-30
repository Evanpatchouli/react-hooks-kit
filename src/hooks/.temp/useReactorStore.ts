import { createContext } from "react";
import { Reactor, ReactorModel } from "./useReactor";
import React from "react";

export const createReactiveContext = <T = any>(initialValue?: T) => {
  const reactiveObject = new Reactor(initialValue);
  return createContext<ReactorModel<T> | undefined>(reactiveObject as any);
};

export const ReactorContext = createReactiveContext();

/**
 * Accept a value and return a reactive object. When initalValue is valid a new reactive object will be created.
 */
export const useReactorStore = <T = any>(initialValue?: T): Reactor<T> => {
  const [state, setState] = React.useState<T>(initialValue ?? (undefined as T));
  const reactiveObj = new Reactor(state, setState);
  // const context = createReactiveCtx(reactiveObj);
  // const newReactiveCtxModel = React.useContext(context);
  const defaultContextModel = React.useContext((initialValue as any) ?? ReactorContext);
  if (initialValue !== undefined && initialValue !== null) {
    return reactiveObj as Reactor<T>;
  }
  // @ts-ignore
  return defaultContextModel as Reactive<T>;
  // return initialValue ? newReactiveCtxModel : defaultContextModel;
};

export const useReactorStoreContext = <T = any>(context?: React.Context<ReactorModel<T> | undefined>): Reactor<T> => {
  const reactorModel = React.useContext(context || ReactorContext);
  // @ts-ignore
  return reactorModel;
  // return initialValue ? newReactiveCtxModel : defaultContextModel;
};

/**
 * Accept a value and return a reactive object binded on a ReactRef instance.
 */
export const useReactorStoreRef = <T = any>(initialValue?: T): React.MutableRefObject<Reactor<T>> => {
  const ctx = useReactorStore(initialValue);
  const reactiveRef = React.useRef<ReactorModel>() as React.MutableRefObject<Reactor>;
  if (!reactiveRef.current) {
    reactiveRef.current = ctx;
  }
  return reactiveRef;
};

export default useReactorStore;
