import { useRef } from 'react';

const UNINITIALIZED = Symbol("useSingleton.uninitialized");

function useSingleton<T>(createInstance: () => T): T {
  const instanceRef = useRef<T | typeof UNINITIALIZED>(UNINITIALIZED);

  if (instanceRef.current === UNINITIALIZED) {
    instanceRef.current = createInstance();
  }

  return instanceRef.current as T;
}

export default useSingleton;
