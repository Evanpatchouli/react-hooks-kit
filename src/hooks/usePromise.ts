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
): [PromiseState<T>, () => void, () => void];
export function usePromise<T>(
  promiseFn: () => Promise<T>,
  deps?: any[]
): [PromiseState<T>, () => void, () => void];
export default function usePromise<T>(
  promiseFn: () => Promise<T>,
  callbacksOrDeps?: Callbacks<T> | any[],
  deps?: any[]
): [PromiseState<T>, () => void, () => void] {
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

  const execute = () => {
    setState({ ...state, status: "pending" });
    promiseFn()
      .then((data) => {
        setState({ status: "resolved", data, error: null });
        callbacks.onResolve?.(data);
      })
      .catch((error) => {
        if (error.name === "AbortError") return;
        setState({ status: "rejected", data: null, error });
        callbacks.onReject?.(error);
      })
      .finally(() => {
        callbacks.onFinally?.();
      });
  }

  /**
   * Abort the promise
   */
  const abort = () => {
    abortController.abort();
  };

  return [state, abort, execute];
}
