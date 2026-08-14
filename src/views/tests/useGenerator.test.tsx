import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import useGenerator from "../../hooks/useGenerator";

function createDeferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (reason?: unknown) => void;
  const promise = new Promise<T>((promiseResolve, promiseReject) => {
    resolve = promiseResolve;
    reject = promiseReject;
  });

  return { promise, resolve, reject };
}

describe("useGenerator", () => {
  it("runs each asynchronous yield once and completes the generator", async () => {
    const first = createDeferred<string>();
    const generatorFn = vi.fn(function* () {
      const firstValue = yield first.promise;
      yield Promise.resolve(`${firstValue}-second`);
    });

    const { result } = renderHook(() => useGenerator<string>(generatorFn));

    expect(generatorFn).toHaveBeenCalledTimes(1);
    expect(result.current).toEqual({
      value: undefined,
      done: false,
      error: null,
    });

    first.resolve("first");

    await waitFor(() => {
      expect(result.current).toEqual({
        value: "first-second",
        done: true,
        error: null,
      });
    });
    expect(generatorFn).toHaveBeenCalledTimes(1);
  });

  it("exposes rejected yields as errors without restarting", async () => {
    const failure = createDeferred<string>();
    const generatorFn = vi.fn(function* () {
      yield failure.promise;
    });
    const { result } = renderHook(() => useGenerator<string>(generatorFn));
    const error = new Error("request failed");

    failure.reject(error);

    await waitFor(() => {
      expect(result.current.error).toBe(error);
    });
    expect(result.current.done).toBe(false);
    expect(generatorFn).toHaveBeenCalledTimes(1);
  });
});

export {};
