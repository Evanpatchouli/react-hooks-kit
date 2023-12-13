import { Reactor, ReactorModel } from "./useReactor";
import React from "react";
export declare const createReactiveContext: <T = any>(initialValue?: T | undefined) => React.Context<ReactorModel<T> | undefined>;
export declare const ReactorContext: React.Context<ReactorModel<any> | undefined>;
/**
 * Accept a value and return a reactive object. When initalValue is valid a new reactive object will be created.
 */
export declare const useReactorStore: <T = any>(initialValue?: T | undefined) => Reactor<T, import("./useReactor").ReactorPlugin<T>>;
export declare const useReactorStoreContext: <T = any>(context?: React.Context<ReactorModel<T> | undefined> | undefined) => Reactor<T, import("./useReactor").ReactorPlugin<T>>;
/**
 * Accept a value and return a reactive object binded on a ReactRef instance.
 */
export declare const useReactorStoreRef: <T = any>(initialValue?: T | undefined) => React.MutableRefObject<Reactor<T, import("./useReactor").ReactorPlugin<T>>>;
export default useReactorStore;
