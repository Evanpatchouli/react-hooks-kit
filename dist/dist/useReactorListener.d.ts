import { Reactor } from "./useReactor";
/**
 *
 * @param target
 * @param callback
 * @param immediate
 */
declare const useReactorListener: <T = any>(target: Omit<Reactor<T, import("./useReactor").ReactorPlugin<T>>, "_state" | "_setState">, callback: (state: T) => any, immediate?: boolean) => void;
export default useReactorListener;
