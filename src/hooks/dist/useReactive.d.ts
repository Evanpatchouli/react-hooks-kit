/**
 * @param {*} state The new state value
 */
type Watcher<T> = (state: T) => void;
export type ReactiveInstance<T> = T extends object ? T & {
    __isReactive?: true;
} : {
    value: T;
    __isReactive?: true;
};
export declare class Reactive<T extends object> {
    constructor(obj: T, fsr?: Function);
    private __isReactive;
    static isReactive(target: any): any;
}
export declare function deepProxy<T extends object>(obj: T, fsr?: Function): Reactive<any>;
export declare function reactive<T extends object>(obj: T, fsr?: Function): Reactive<any>;
export declare function unwrap(obj: any): any;
/**
 * #### params
 * - **initialState** - support **primitives**, **object**, **array**, **Date**, **Map** and **Set** types.
 * If given a non-object type, it will return the proxy wrapped with struct `{value: T}`.
 * - **deep** - If the second parameter is typeof `boolean`, it means whether the object is deeply reactive.
 * If the second parameter is typeof `function`, it means that the callback function will be triggered when the state changes.
 * - **callback** - Watcher callback function, which will be triggered when the state changes
 * #### FAQs
 * - Why not use `useMemo`? Use `useMemo` to return a new object, which will cause the object to be re-rendered every time,
 * and the object will be re-rendered every time it is used.
 * - Why did not the state change when I change the property deconstructed from the state?
 * Because the deconstructed property is a copy of the original object, it will not trigger the state change.
 */
declare function useReactive<T, D extends boolean = true>(initialState: T, deep?: D | Watcher<T>, ...callbacks: Array<Watcher<T>>): ReactiveInstance<T>;
export default useReactive;
