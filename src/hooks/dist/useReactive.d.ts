type Watcher<T> = (state: T) => void;
export declare class Reactive<T extends object> {
    constructor(obj: T, fsr?: Function);
}
/**
 * #### params
 * - **initialState** - Only supports object type as reactive data source.
 * If given a non-object type, it will return the original value
 * - **deep** - If the second parameter is typeof `boolean`, it means whether the object is deeply reactive.
 * If the second parameter is typeof `function`, it means that the callback function will be triggered when the state changes.
 * - **callback** - Watcher callback function, which will be triggered when the state changes
 * #### FAQs
 * - Why not use `useMemo`? Use `useMemo` to return a new object, which will cause the object to be re-rendered every time,
 * and the object will be re-rendered every time it is used.
 * - Why did not the state change when I change the property deconstructed from the state?
 * Because the deconstructed property is a copy of the original object, it will not trigger the state change.
 */
declare function useReactive<T, D extends boolean = true>(initialState: T, deep?: D | Watcher<T>, ...callbacks: Array<Watcher<T>>): T;
export default useReactive;
