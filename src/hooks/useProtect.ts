import { useState, useEffect, useMemo } from "react";
import isEqual from "./utils/isEqual";

type Condition<T> =
  | ((oldData: T, newState?: T) => boolean | string | undefined | null)
  | boolean
  | string
  | undefined
  | null;

export function useProtect<T>(
  initialData: T,
  ...conditions: Condition<T>[]
): [T, (newData: T | ((oldData: T) => T)) => void] {
  const [data, setData] = useState<T>(initialData);
  const messages: string[] = useMemo(
    () =>
      conditions
        .filter((condition) => (typeof condition === "function" ? condition(data, data) : condition))
        .map((result) => (typeof result === "string" ? result : "Data is protected and cannot be modified.")),
    [JSON.stringify(data), conditions]
  );

  const updateData = (newData: T | ((oldData: T) => T)) => {
    if (messages.length) {
      messages.forEach((msg) => {
        throw new Error(msg);
      });
    }
    if (typeof newData === "function") {
      // @ts-ignore
      newData = newData(data);
    }
    if (isEqual(data, newData)) return;
    else {
      if (conditions.length) {
        conditions.forEach((condition) => {
          if (typeof condition === "function") {
            // @ts-ignore
            const result = condition(data, newData);
            if (result) {
              switch (typeof result) {
                case "string":
                  throw new Error(result);
                case "boolean":
                  throw new Error("Data is protected and cannot be modified.");
                default:
                  break;
              }
            }
          }
        });
      }
      setData(newData);
    }
  };

  return [data, updateData];
}
