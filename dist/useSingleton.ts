import { useRef } from 'react';

function useSingleton<T>(createInstance: () => T): T {
  const instanceRef = useRef<T | null>(null);

  if (instanceRef.current === null) {
    instanceRef.current = createInstance();
  }

  return instanceRef.current;
}

export default useSingleton;