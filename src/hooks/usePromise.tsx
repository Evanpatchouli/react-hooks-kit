import { useState, useEffect, useCallback } from "react";

type PromiseStatus = "idle" | "pending" | "resolved" | "rejected";

interface PromiseState<T> {
  status: PromiseStatus;
  data: T | null;
  error: any;
}

interface Callbacks<T> {
  onResolve?: (value: T) => void;
  onReject?: (reason: any) => void;
  onFinally?: () => void;
}

export function usePromise<T>(
  promiseFn: () => Promise<T>,
  callbacks?: Callbacks<T>,
  deps?: any[]
): [PromiseState<T>, () => void];
export function usePromise<T>(
  promiseFn: () => Promise<T>,
  deps?: any[]
): [PromiseState<T>, () => void];
export default function usePromise<T>(
  promiseFn: () => Promise<T>,
  callbacksOrDeps?: Callbacks<T> | any[],
  deps?: any[]
): [PromiseState<T>, () => void] {
  let callbacks: Callbacks<T> = {};
  if (Array.isArray(callbacksOrDeps)) {
    deps = callbacksOrDeps;
  } else if (callbacksOrDeps) {
    callbacks = callbacksOrDeps;
  }

  const [state, setState] = useState<PromiseState<T>>({
    status: "idle",
    data: null,
    error: null,
  });

  const abortController = new AbortController();

  const execute = useCallback(() => {
    setState({ status: "pending", data: null, error: null });
    promiseFn()
      .then((data) => {
        if (!abortController.signal.aborted) {
          setState({ status: "resolved", data, error: null });
          if (callbacks.onResolve) {
            callbacks.onResolve(data);
          }
        }
      })
      .catch((error) => {
        if (!abortController.signal.aborted) {
          setState({ status: "rejected", data: null, error });
          if (callbacks.onReject) {
            callbacks.onReject(error);
          }
        }
      })
      .finally(() => {
        if (callbacks.onFinally) {
          callbacks.onFinally();
        }
      });
  }, [promiseFn, callbacks]);

  useEffect(() => {
    execute();
    return () => {
      abortController.abort();
    };
  }, [execute, ...(deps || [])]);

  /**
   * Abort the promise
   */
  const abort = () => {
    abortController.abort();
  };

  return [state, abort];
}
