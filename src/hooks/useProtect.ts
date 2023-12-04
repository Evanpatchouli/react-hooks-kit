import { useState, useEffect } from "react";

type Condition = (() => boolean) | boolean;

export function useProtect<T>(
  initialData: T,
  ...conditions: Condition[]
): [T, (newData: T) => void] {
  const [data, setData] = useState<T>(initialData);
  const [isProtected, setIsProtected] = useState<boolean>(false);

  useEffect(() => {
    setIsProtected(
      conditions.some((condition) =>
        typeof condition === "function" ? condition() : condition
      )
    );
  }, [conditions]);

  const updateData = (newData: T) => {
    if (isProtected) {
      throw new Error("Data is protected and cannot be modified.");
    }
    setData(newData);
  };

  return [data, updateData];
}
