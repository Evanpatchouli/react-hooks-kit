import { useState, useEffect, useCallback } from "react";

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

export default function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

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
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        setStoredValue(() => {
          try {
            return event.newValue ? JSON.parse(event.newValue) : initialValue;
          } catch (error) {
            console.error(error);
            return initialValue;
          }
        });
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key, initialValue]);

  return [storedValue, setValue];
}