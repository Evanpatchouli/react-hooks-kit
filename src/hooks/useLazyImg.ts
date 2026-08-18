import { LazySource, Prettify, Writeable } from "./typings";
import { useState, useEffect, useRef } from "react";

export type LazyImage = LazySource & {
  error?: boolean;
};

const LazySourceBuilder = (src: string, loaded?: boolean, error?: boolean) => {
  const _src = new String(src) as unknown as Writeable<LazyImage>;
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

const useLazyImg: UseLazyImage = (
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
    $defaultSrc = defaultSrc.defaultSrc ?? "";
    $errorSrc = defaultSrc.errorSrc ?? "";
    $actions = defaultSrc.actions ?? {};
  }

  const [source, setSource] = useState<LazyImage>(
    LazySourceBuilder($defaultSrc)
  );
  const defaultSrcRef = useRef($defaultSrc);
  const errorSrcRef = useRef($errorSrc);
  const actionsRef = useRef($actions);

  defaultSrcRef.current = $defaultSrc;
  errorSrcRef.current = $errorSrc;
  actionsRef.current = $actions;

  useEffect(() => {
    let active = true;
    const img = new Image();

    setSource(LazySourceBuilder(defaultSrcRef.current));
    img.onload = () => {
      if (!active) return;
      setSource(LazySourceBuilder($src, true, false));
      actionsRef.current.onLoad?.(true);
    };
    img.onerror = () => {
      if (!active) return;
      setSource(
        LazySourceBuilder(
          errorSrcRef.current || defaultSrcRef.current,
          false,
          true
        )
      );
      actionsRef.current.onError?.(true);
    };
    img.src = $src;

    return () => {
      active = false;
      img.onload = null;
      img.onerror = null;
    };
  }, [$src]);

  return source;
};

export default useLazyImg;
