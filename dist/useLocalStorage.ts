import { useState, useEffect } from "react";

// 全局的事件监听器
const listeners = new Set<Function>();

window.addEventListener("storage", () => {
  listeners.forEach((listener) => listener());
});

type Key = string | string[];

export default function useLocalStorage<T>(
  key?: Key,
  initialValue?: T
): [T | undefined, (value: T | undefined) => void] {
  const [storedValue, setStoredValue] = useState<T | undefined>(() => {
    try {
      if (!key) return initialValue;
      const keys = Array.isArray(key) ? key : [key];
      const item = keys.map((k) => window.localStorage.getItem(k));
      return item.every((i) => i !== null)
        ? JSON.parse(item.join(""))
        : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T | undefined) => {
    try {
      setStoredValue(value);
      if (key) {
        const keys = Array.isArray(key) ? key : [key];
        keys.forEach((k) =>
          window.localStorage.setItem(k, JSON.stringify(value))
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (key && (Array.isArray(key) ? key : [key]).includes(e.key || "")) {
        setStoredValue(e.newValue ? JSON.parse(e.newValue) : initialValue);
      }
    };

    // 在组件挂载时注册回调函数
    listeners.add(handleStorageChange);

    return () => {
      // 在组件卸载时注销回调函数
      listeners.delete(handleStorageChange);
    };
  }, [key, initialValue]);

  return [storedValue, setValue];
}
