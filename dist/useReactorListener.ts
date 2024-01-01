import { useEffect } from "react";
import { Reactor, listen } from "./useReactor";

const useReactorListener = <T = any>(
  target: Omit<Reactor<T>, "_state" | "_setState">,
  callback: (state: T) => any
) => {
  useEffect(() => {
    const unsubscribe = listen(target).then(callback);
    return () => unsubscribe();
  }, []);
};

export default useReactorListener;
