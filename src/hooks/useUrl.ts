import { useState, useEffect } from "react";
import { ApplyMode, ParseQueryString } from "./utils/types";
import { Prettify } from "./typings";

type UrlInfo<T extends Record<string, any>> = {
  params: Prettify<T>;
  name?: string;
} & Location;

type UrlChangeCallback<T extends Record<string, any>> = (
  urlInfo: UrlInfo<T>
) => void;

function getParams<T>(url: string) {
  const params = {};
  const urlObj = new URL(url);
  const queryParams = new URLSearchParams(urlObj.search);
  // @ts-ignore
  for (let [key, value] of queryParams.entries()) {
    // @ts-ignore
    params[key] = value;
  }

  return params as T;
}

/**
 * ### Parameters
 *
 * Converts a string to a query parameter object.
 * ### Type Parameters
 * - T - `string` or `object`.
 *   + The string to convert, like `"http://localhost?id=1&name=evan"`
 *   + object: object to inferred as, like `{ id: 1, name: "evan" }`
 * - Mode - The mode to use when converting: `"string"` | `"fuzzy"` | `"auto"` | `"strict"` | `"any"` = `"auto"`.
 * - StrictParams - The parameters to treat as strict.
 * - FuzzyParams - The parameters to treat as fuzzy.
 *
 * @return location merged with params and name.
 */
function useUrl<
  T extends Record<string, any> | string,
  Mode extends "any" | "fuzzy" | "auto" | "auto" | "strict" = "auto",
  StrictParams extends string[] = [],
  FuzzyParams extends string[] = []
>(
  callback?: UrlChangeCallback<
    T extends string ? ParseQueryString<T, Mode, StrictParams, FuzzyParams> : T
  >,
  name?: string,
  immediate?: boolean
): UrlInfo<
  T extends string
    ? ParseQueryString<T, Mode, StrictParams, FuzzyParams>
    : ApplyMode<T, Mode, StrictParams, FuzzyParams>
> {
  const [urlInfo, setUrlInfo] = useState<
    UrlInfo<
      T extends string
        ? ParseQueryString<T, Mode, StrictParams, FuzzyParams>
        : T
    >
  >({
    params: getParams(window.location.href), // 你需要根据你的路由配置来解析 URL 参数
    name: name, // 你需要根据你的路由配置来获取路由名称
    ...window.location,
  });

  useEffect(() => {
    if (immediate) {
      const urlInfo = {
        params: getParams(window.location.href), // 你需要根据你的路由配置来解析 URL 参数
        name: name, // 你需要根据你的路由配置来获取路由名称
        ...window.location,
      };
      setUrlInfo(urlInfo as any);
      // callback?.(urlInfo as any);
      // console.log("immediate");
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const urlInfo = {
        params: getParams(window.location.href), // 你需要根据你的路由配置来解析 URL 参数
        name: name, // 你需要根据你的路由配置来获取路由名称
        ...window.location,
      };
      setUrlInfo(urlInfo as any);
      callback?.(urlInfo as any);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [callback]);

  return urlInfo as any;
}

export default useUrl;
