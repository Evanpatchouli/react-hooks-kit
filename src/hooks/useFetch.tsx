import { useState, useEffect, useRef } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: unknown;
}

interface Callbacks<T> {
  onResolve?: (value: T) => void;
  onReject?: (reason: unknown) => void;
  onFinally?: () => void;
}

interface FetchHttpError {
  status: number;
  statusText: string;
}

export default function useFetch<T>(
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
  const optionsRef = useRef(options);
  const callbacksRef = useRef(callbacks);

  optionsRef.current = options;
  callbacksRef.current = callbacks;

  useEffect(() => {
    const abortController = new AbortController();
    let settled = false;

    setState((previousState) => ({
      data: previousState.data,
      loading: true,
      error: null,
    }));

    const fetchData = async () => {
      try {
        const requestOptions = {
          ...optionsRef.current,
          signal: abortController.signal,
        };
        const response = await fetch(url, requestOptions);

        if (!response.ok) {
          const error: FetchHttpError = {
            status: response.status,
            statusText: response.statusText,
          };
          throw error;
        }

        const data = (await response.json()) as T;
        if (!abortController.signal.aborted) {
          settled = true;
          setState({ data, loading: false, error: null });
          callbacksRef.current?.onResolve?.(data);
        }
      } catch (error) {
        if (!abortController.signal.aborted) {
          settled = true;
          setState({ data: null, loading: false, error });
          callbacksRef.current?.onReject?.(error);
        }
      } finally {
        if (!abortController.signal.aborted && !settled) {
          settled = true;
        }
        if (!abortController.signal.aborted) {
          callbacksRef.current?.onFinally?.();
        }
      }
    };

    void fetchData();
    return () => {
      abortController.abort();
    };
  }, [url, ...deps]);

  return state;
}
