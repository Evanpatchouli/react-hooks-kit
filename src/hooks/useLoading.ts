import { useState } from "react";

export interface UseLoading<
  T extends Record<string, boolean | number> = Record<string, boolean | number>
> {
  (loadingMap: T, returnType: undefined): readonly [
    typeof loadingMap,
    SetLoading<T>,
    /** value -> true */
    (key: keyof T) => void,
    /** value -> false */
    (key: keyof T) => void,
    /** value++ */
    (key: keyof T) => void,
    /** value-- */
    (key: keyof T) => void
  ] & {
    loading: typeof loadingMap;
    setLoading: SetLoading<T>;
    onLoading: (key: keyof T) => void;
    unLoading: (key: keyof T) => void;
    plusLoading: (key: keyof T) => void;
    minusLoading: (key: keyof T) => void;
  };
}

export function formatLoadingValue(
  value: number | boolean,
  zeroFalse: boolean = false
) {
  if (value !== 0 || !zeroFalse) {
    return value;
  }
  return value === 0 ? false : value;
}

export function formatLoadingState(
  values: any = {},
  zeroFalse: boolean = false
) {
  if (!zeroFalse) {
    return values;
  }
  const newValues = { ...values };
  Object.keys(newValues).forEach((key) => {
    newValues[key] = formatLoadingValue(newValues[key], zeroFalse);
  });
  return newValues;
}

/** Default `setType` will be `override` */
export interface SetLoading<
  T = Record<string, boolean | number>,
  K extends keyof T = keyof T
> {
  (key: K, value?: boolean | number): void;
  (key: K, setAction: (pre: boolean | number) => boolean | number): void;

  (
    stateOrSetAction:
      | Record<K, boolean | number>
      | ((
          prevState: Record<K, boolean | number>
        ) => Record<K, boolean | number>),
    /** Default `setType` will be `override` */
    setType?: "spread" | "override"
  ): void;
}

const setTypeOptions = ["spread", "override"] as const;

/**
 * #### 返回一个数组
 * - 0 loadings
 * - 1 setLoading
 * - 2 onLoading
 * - 3 unLoading
 * - 4 plusLoading
 * - 5 minusLoading
 */
// @ts-ignore
export const useLoading = <
  T extends Record<string, boolean | number> = Record<string, boolean | number>
>(
  loadingMap: T,
  options: {
    /** Default `setType` will be `override` */
    setType?: "spread" | "override";
    /** When value is 0 will be converted to false */
    zeroFalse?: boolean;
  } = {
    setType: "override",
    zeroFalse: true,
  }
) => {
  const [loading, _setLoading] = useState(loadingMap);
  const setLoading: SetLoading<T, keyof T> = (args1, value = true) => {
    if (typeof args1 === "object") {
      if (setTypeOptions.includes(value as any)) {
        if (value === "spread") {
          _setLoading((pre) =>
            formatLoadingState({ ...pre, ...args1 }, options.zeroFalse)
          );
        } else {
          _setLoading(formatLoadingState(args1, options.zeroFalse) as any);
        }
      } else {
        _setLoading(formatLoadingState(args1, options.zeroFalse) as any);
      }
      return;
    } else if (typeof args1 === "function") {
      if (setTypeOptions.includes(value as any)) {
        if (value === "spread") {
          _setLoading((pre) =>
            formatLoadingState({ ...pre, ...args1(pre) }, options.zeroFalse)
          );
        } else {
          _setLoading(formatLoadingState(args1, options.zeroFalse) as any);
        }
      } else {
        _setLoading(formatLoadingState(args1, options.zeroFalse) as any);
      }
      return;
    } else {
      const key = args1;
      if (typeof value === "function") {
        _setLoading((pre) =>
          formatLoadingState(
            { ...pre, [key]: value(pre[key]) },
            options.zeroFalse
          )
        );
      } else {
        _setLoading((pre) =>
          formatLoadingState({ ...pre, [key]: value }, options.zeroFalse)
        );
      }
    }
  };
  const onLoading = (key: keyof typeof loading) => {
    _setLoading((pre) =>
      formatLoadingState({ ...pre, [key]: 1 }, options.zeroFalse)
    );
  };
  const unLoading = (key: keyof typeof loading) => {
    _setLoading((pre) =>
      formatLoadingState({ ...pre, [key]: 0 }, options.zeroFalse)
    );
  };
  const plusLoading = (key: keyof typeof loading) => {
    _setLoading((pre) =>
      formatLoadingState(
        { ...pre, [key]: (pre[key] as number) + 1 },
        options.zeroFalse
      )
    );
  };
  const minusLoading = (key: keyof typeof loading) => {
    _setLoading((pre) =>
      formatLoadingState(
        { ...pre, [key]: (pre[key] as number) - 1 },
        options.zeroFalse
      )
    );
  };
  const returned = [
    loading,
    setLoading,
    onLoading,
    unLoading,
    plusLoading,
    minusLoading,
  ] as any as ReturnType<UseLoading<T>>;
  returned.loading = loading;
  returned.setLoading = setLoading as any;
  returned.onLoading = onLoading;
  returned.unLoading = unLoading;
  returned.plusLoading = plusLoading;
  returned.minusLoading = minusLoading;
  return returned;
};

export default useLoading;