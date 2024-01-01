import { Reactor } from "./useReactor";
declare const useReactorListener: <T = any>(target: Omit<Reactor<T, import("./useReactor").ReactorPlugin<T>>, "_state" | "_setState">, callback: (state: T) => any) => void;
export default useReactorListener;
