import { useState, useEffect, useCallback } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: any;
}

interface Callbacks<T> {
  onResolve?: (value: T) => void;
  onReject?: (reason: any) => void;
  onFinally?: () => void;
}

export function useFetch<T>(
  url: string,
  options?: RequestInit,
  callbacks?: Callbacks<T>,
  deps: any[] = []
): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const abortController = new AbortController();
  const opts = { ...options, signal: abortController.signal };

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(url, opts);
      const data = await res.json();
      if (!abortController.signal.aborted) {
        setState({ data, loading: false, error: null });
        if (callbacks?.onResolve) {
          callbacks.onResolve(data);
        }
      }
    } catch (error) {
      if (!abortController.signal.aborted) {
        setState({ data: null, loading: false, error });
        if (callbacks?.onReject) {
          callbacks.onReject(error);
        }
      }
    } finally {
      if (callbacks?.onFinally) {
        callbacks.onFinally();
      }
    }
  }, [url, opts, callbacks]);

  useEffect(() => {
    fetchData();
    return () => {
      abortController.abort();
    };
  }, [fetchData, ...deps]);

  return state;
}
