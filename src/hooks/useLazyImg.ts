import { LazySource, Prettify, Writeable } from "./typings";
import { useState, useEffect } from "react";

export type LazyImage = LazySource & {
  error?: boolean;
};

const LazySourceBuilder = (src: string, loaded?: boolean, error?: boolean) => {
  const _src: Writeable<LazyImage> = src;
  _src.loaded = loaded;
  _src.error = error;
  return _src as LazyImage;
};

export interface LazyImageActions {
  onLoad?: (loaded: boolean) => void;
  onError?: (error: boolean) => void;
}

export type LazyImageOptions = {
  src?: string;
  defaultSrc?: string;
  errorSrc?: string;
  actions?: LazyImageActions;
};

interface UseLazyImage {
  (options: LazyImageOptions): Prettify<LazyImage>;
  (src: string, options?: LazyImageOptions): Prettify<LazyImage>;
  (
    src: string,
    defaultSrc?: string,
    errorSrc?: string,
    actions?: LazyImageActions
  ): Prettify<LazyImage>;
}

const useLazyImage: UseLazyImage = (
  src,
  defaultSrc?: string | LazyImageOptions,
  errorSrc?: string,
  actions?: LazyImageActions
) => {
  let $src = "";
  let $defaultSrc = "";
  let $errorSrc = "";
  let $actions: LazyImageActions = {};

  if (typeof src === "object") {
    $src = src.src ?? "";
    $defaultSrc = src.defaultSrc ?? "";
    $errorSrc = src.errorSrc ?? "";
    $actions = src.actions ?? {};
  } else if (typeof src === "string" && typeof defaultSrc !== "object") {
    $src = src;
    $defaultSrc = defaultSrc ?? "";
    $errorSrc = errorSrc ?? "";
    $actions = actions ?? {};
  } else if (typeof src === "string" && typeof defaultSrc === "object") {
    $src = src;
    $defaultSrc = defaultSrc.src ?? "";
    $errorSrc = defaultSrc.errorSrc ?? "";
    $actions = defaultSrc.actions ?? {};
  }

  const [source, setSource] = useState<LazyImage>(
    LazySourceBuilder($defaultSrc)
  );

  useEffect(() => {
    const img = new Image();
    img.src = $src;
    img.onload = () => {
      setSource(LazySourceBuilder($src, true, false));
      actions?.onLoad?.(true);
    };
    img.onerror = () => {
      setSource(
        LazySourceBuilder(($errorSrc || $defaultSrc) ?? "", false, true)
      );
      $actions?.onError?.(true);
    };
  }, [$src]);

  return source;
};

export default useLazyImage;
