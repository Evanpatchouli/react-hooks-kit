import { useState, useEffect } from "react";

type UrlInfo<T extends Record<string, any>> = {
  params: T;
  path: string;
  name: string;
};

type UrlChangeCallback<T extends Record<string, any>> = (urlInfo: UrlInfo<T>) => void;

function useUrl<T extends Record<string, any>>(...callbacks: UrlChangeCallback<T>[]): UrlInfo<T> {
  const [urlInfo, setUrlInfo] = useState<UrlInfo<T>>({
    params: {} as any, // 你需要根据你的路由配置来解析 URL 参数
    path: window.location.pathname,
    name: "", // 你需要根据你的路由配置来获取路由名称
  });

  useEffect(() => {
    const handlePopState = () => {
      const urlInfo = {
        params: {}, // 你需要根据你的路由配置来解析 URL 参数
        path: window.location.pathname,
        name: "", // 你需要根据你的路由配置来获取路由名称
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
