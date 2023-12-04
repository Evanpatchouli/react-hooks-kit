import { useState, useEffect, useMemo } from "react";
import { ApplyMode, ParseQueryString } from "./utils/types";
import { Prettify } from "./typings";

type UrlInfo<T extends Record<string, any>> = {
  readonly params: Prettify<Readonly<T>>;
  readonly name?: string;
} & Location &
  History;

type UrlChangeCallback<T extends Record<string, any>> = (urlInfo: UrlInfo<T>) => void;

function getParams<T>(
  url: string,
  mode: "string" | "auto" = "auto",
  autoParams: (keyof T | (string & {}))[] = [],
  stringifyParams: (keyof T | (string & {}))[] = [],
  custom: { [K in keyof T]?: (value: string | undefined) => any } = {}
) {
  const params: {
    [key: string]: string | number | boolean | null | undefined;
  } = {};

  // 先处理 custom 对象
  for (const key in custom) {
    const value = new URLSearchParams(url).get(key);
    params[key] = custom[key as keyof T]?.(value ?? undefined);
  }

  const questionMarkIndex = url.indexOf("?");
  if (questionMarkIndex !== -1) {
    const queryString = url.substring(questionMarkIndex + 1);
    const pairs = queryString.split("&");
    for (const pair of pairs) {
      const [key, value] = pair.split("=");
      try {
        const decodedKey = decodeURIComponent(key);
        const decodedValue = decodeURIComponent(value);
        if (custom[decodedKey as keyof T]) {
          continue; // 如果这个键在 custom 对象中，我们已经处理过它了
        }
        if (stringifyParams.includes(decodedKey)) {
          params[decodedKey] = decodedValue;
        } else if (autoParams.includes(decodedKey) || mode === "auto") {
          if (decodedValue === "true") {
            params[decodedKey] = true;
          } else if (decodedValue === "false") {
            params[decodedKey] = false;
          } else if (decodedValue === "null") {
            params[decodedKey] = null;
          } else if (decodedValue === "undefined") {
            params[decodedKey] = undefined;
          } else if (!isNaN(Number(decodedValue))) {
            params[decodedKey] = Number(decodedValue);
          } else {
            params[decodedKey] = decodedValue;
          }
        } else {
          params[decodedKey] = decodedValue;
        }
      } catch (error) {
        console.error("Failed to decode URL parameter:", error);
      }
    }
  }
  return params as T;
}

// 全局的事件监听器
const listeners = new Set<Function>();

window.addEventListener("popstate", () => {
  listeners.forEach((listener) => listener());
});

/**
 * ## useUrl hook
 * Converts a string to a query parameter object. Return an object merged with location, history, params and name.
 *
 * ### Parameters
 * - callback (?) - The **callback** to call when the url changes.
 * - name (?) - The name of the listener
 * - immediate (`false`) - Whether to call the callback immediately.
 * - config (?) - The configuration of the params parser.
 *   + mode (`"auto"`) - The mode of the params parser: `"string"` | `"auto"` = `"auto"`.
 *   + autoParams (?) - The parameters to treat as auto.
 *   + stringifyParams (?) - The parameters to treat as string.
 *   + custom (?) - The custom parser of certain query parameters.
 *
 * ### Type Parameters
 * - T - `string` or `object`.
 *   + The string to convert, like `"http://localhost?id=1&name=evan"`
 *   + object: object to inferred as, like `{ id: 1, name: "evan" }`
 * - Mode - The mode to use when converting: `"string"` | `"fuzzy"` | `"auto"` | `"strict"` | `"any"` = `"auto"`.
 * - StrictParams - The parameters to treat as strict.
 * - FuzzyParams - The parameters to treat as fuzzy.
 *
 * ### Notes
 * - Type infer mode is not associated with the mode parameter of parser.
 *
 * @return location merged with history, params and name.
 */
function useUrl<
  T extends Record<string, any> | string,
  Mode extends "any" | "fuzzy" | "auto" | "auto" | "strict" = "auto",
  StrictParams extends string[] = [],
  FuzzyParams extends string[] = []
>(
  callback?: UrlChangeCallback<
    Partial<
      T extends string
        ? ParseQueryString<T, Mode, StrictParams, FuzzyParams>
        : ApplyMode<T, Mode, StrictParams, FuzzyParams>
    >
  >,
  name?: string,
  immediate?: boolean,
  config: {
    mode?: "string" | "auto";
    autoParams?: (keyof (T extends string ? ParseQueryString<T> : ApplyMode<T>) | (string & {}))[];
    stringifyParams?: (keyof (T extends string ? ParseQueryString<T> : ApplyMode<T>) | (string & {}))[];
    custom?: {
      [K in keyof (T extends string ? ParseQueryString<T> : ApplyMode<T>)]?: (value: string | undefined) => any;
    };
  } = {}
): UrlInfo<
  Partial<
    T extends string
      ? ParseQueryString<T, Mode, StrictParams, FuzzyParams>
      : ApplyMode<T, Mode, StrictParams, FuzzyParams>
  >
> {
  function getUrlInfo() {
    return {
      params: getParams(
        window.location.href,
        config?.mode,
        config?.autoParams,
        config?.stringifyParams,
        config?.custom
      ),
      name: name,
      ...window.location,
      ...window.history,
    };
  }
  const [urlInfo, setUrlInfo] = useState<
    UrlInfo<
      T extends string
        ? ParseQueryString<T, Mode, StrictParams, FuzzyParams>
        : ApplyMode<T, Mode, StrictParams, FuzzyParams>
    >
  >(getUrlInfo() as any);

  const memoizedConfig = useMemo(() => config, [config.mode, config.autoParams, config.stringifyParams, config.custom]);

  useEffect(() => {
    if (immediate) {
      const urlInfo = getUrlInfo();
      callback?.(urlInfo as any);
      setUrlInfo(urlInfo as any);
    }
  }, [immediate, JSON.stringify(memoizedConfig), name]);

  useEffect(() => {
    const handlePopState = () => {
      const urlInfo = getUrlInfo();
      setUrlInfo(urlInfo as any);
      callback?.(urlInfo as any);
    };

    // 在组件挂载时注册回调函数
    listeners.add(handlePopState);

    return () => {
      // 在组件卸载时注销回调函数
      listeners.delete(handlePopState);
    };
  }, [callback]);

  return urlInfo as any;
}

export default useUrl;
