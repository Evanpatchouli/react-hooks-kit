import { useState, useEffect, useCallback, useRef } from "react";

// 派发StorageEvent事件
const dispatchStorageEvent = <V = unknown>(key: string, newValue: V) => {
  const event = new StorageEvent('storage', {
    key: key,
    newValue: newValue as any,
    oldValue: undefined, // 这里我们无法获取旧值，所以使用undefined
    url: window.location.href,
  });
  window.dispatchEvent(event);
};

const readStoredValue = <T,>(key: string, initialValue: T): T => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    console.error(error);
    return initialValue;
  }
};

export default function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const initialValueRef = useRef(initialValue);
  initialValueRef.current = initialValue;
  const [storedValue, setStoredValue] = useState<T>(() =>
    readStoredValue(key, initialValue)
  );

  const setValue = useCallback((value: T) => {
    try {
      const valueToStore =
        value === undefined ? null : JSON.stringify(value);
      window.localStorage.setItem(key, valueToStore as any);
      dispatchStorageEvent(key, valueToStore);
    } catch (error) {
      console.error(error);
    }
  }, [key]);

  useEffect(() => {
    setStoredValue(readStoredValue(key, initialValueRef.current));

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        if (!event.newValue) {
          setStoredValue(initialValueRef.current);
          return;
        }
        try {
          setStoredValue(JSON.parse(event.newValue));
        } catch (error) {
          console.error(error);
          setStoredValue(initialValueRef.current);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  return [storedValue, setValue];
}
