import { PathArray, PathInto } from "./utils/types";
type Callback<V = any> = (newValue: V, oldValue: V) => void;
type Getter<V = any, T extends object = {}> = (object: T, ...args: any[]) => V | undefined;
export type Path<T, K extends keyof any = keyof T> = PathArray<T, K> | PathInto<T>;
interface Config {
    strict?: boolean;
    immediate?: boolean;
}
interface UseWatch {
    <V extends unknown = any, T extends object = {}, P extends Path<T> = Path<T>>(object: T, path: P, callback?: Callback<V>, config?: Config): V | undefined;
    <V extends unknown = any, T extends object = {}>(object: T, getter: Getter<V, T>, callback?: Callback<V>, config?: Config): V | undefined;
    <V extends unknown = any, T extends object = {}, P extends Path<T> = Path<T>>(object: T, path: P, callback?: Callback<V>, strict?: boolean, immediate?: boolean): V | undefined;
    <V extends unknown = any, T extends object = {}>(object: T, getter: Getter<V, T>, callback?: Callback<V>, strict?: boolean, immediate?: boolean): V | undefined;
}
declare const useWatch: UseWatch;
export default useWatch;
