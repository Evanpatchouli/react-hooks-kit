import { useEffect } from "react";
import { Reactor, listen } from "./useReactor";

/**
 * 
 * @param target 
 * @param callback 
 * @param immediate 
 */
const useReactorListener = <T = any>(
  target: Omit<Reactor<T>, "_state" | "_setState">,
  callback: (state: T) => any,
  immediate: boolean = false
) => {
  useEffect(() => {
    const unsubscribe = listen(target).then(callback);
    if (immediate) {
      callback(target.value);
    }
    return () => unsubscribe();
  }, [target.id]);
};

export default useReactorListener;
