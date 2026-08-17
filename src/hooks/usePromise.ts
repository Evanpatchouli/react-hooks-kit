import { useCallback, useEffect, useRef, useState } from "react";

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
  const promiseFnRef = useRef(promiseFn);
  const callbacksRef = useRef(callbacks);
  const requestIdRef = useRef(0);
  const activeRequestRef = useRef<{
    id: number;
    controller: AbortController;
  } | null>(null);

  promiseFnRef.current = promiseFn;
  callbacksRef.current = callbacks;

  const abort = useCallback(() => {
    activeRequestRef.current?.controller.abort();
  }, []);

  const execute = useCallback(() => {
    activeRequestRef.current?.controller.abort();

    const id = requestIdRef.current + 1;
    requestIdRef.current = id;
    const controller = new AbortController();
    activeRequestRef.current = { id, controller };

    setState({ status: "pending", data: null, error: null });

    let promise: Promise<T>;
    try {
      promise = promiseFnRef.current();
    } catch (error) {
      promise = Promise.reject(error);
    }

    Promise.resolve(promise)
      .then((data) => {
        const activeRequest = activeRequestRef.current;
        if (
          !controller.signal.aborted &&
          activeRequest?.id === id
        ) {
          setState({ status: "resolved", data, error: null });
          callbacksRef.current.onResolve?.(data);
        }
      })
      .catch((error) => {
        const activeRequest = activeRequestRef.current;
        if (
          controller.signal.aborted ||
          activeRequest?.id !== id
        ) {
          return;
        }

        setState({ status: "rejected", data: null, error });
        callbacksRef.current.onReject?.(error);
      })
      .finally(() => {
        const activeRequest = activeRequestRef.current;
        if (
          !controller.signal.aborted &&
          activeRequest?.id === id
        ) {
          callbacksRef.current.onFinally?.();
        }
      });
  }, []);

  useEffect(() => {
    execute();

    return abort;
  }, [execute, abort, ...(deps || [])]);

  return [state, abort, execute];
}
