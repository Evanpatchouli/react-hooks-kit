import { useState, useEffect } from "react";

type UrlInfo<T extends Record<string, any>> = {
  params: T;
  name: string;
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

function useUrl<T extends Record<string, any>>(
  ...callbacks: UrlChangeCallback<T>[]
): UrlInfo<T> {
  const [urlInfo, setUrlInfo] = useState<UrlInfo<T>>({
    params: getParams(window.location.href), // 你需要根据你的路由配置来解析 URL 参数
    name: "", // 你需要根据你的路由配置来获取路由名称
    ...window.location,
  });

  useEffect(() => {
    const handlePopState = () => {
      const urlInfo = {
        params: getParams(window.location.href), // 你需要根据你的路由配置来解析 URL 参数
        name: "", // 你需要根据你的路由配置来获取路由名称
        ...window.location,
      };
      setUrlInfo(urlInfo as any);
      callbacks.forEach((callback) => callback(urlInfo as any));
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [callbacks]);

  return urlInfo;
}

export default useUrl;
