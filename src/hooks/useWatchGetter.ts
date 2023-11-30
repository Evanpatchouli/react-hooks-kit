import { useState, useEffect } from 'react';

function useWatchGetter<T>(getter: () => T, interval: number = 1000): T {
  const [value, setValue] = useState(getter());

  useEffect(() => {
    const id = setInterval(() => {
      const newValue = getter();
      if (newValue !== value) {
        setValue(newValue);
      }
    }, interval);

    return () => {
      clearInterval(id);
    };
  }, [getter, interval, value]);

  return value;
}

export default useWatchGetter;