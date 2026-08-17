import { act, cleanup, renderHook, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import usePromise from "../../hooks/usePromise";

function deferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (reason: unknown) => void;
  const promise = new Promise<T>((resolvePromise, rejectPromise) => {
    resolve = resolvePromise;
    reject = rejectPromise;
  });

  return { promise, resolve, reject };
}

describe("usePromise", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("executes on mount, exposes manual execute, and invokes callbacks", async () => {
    const promiseFn = vi.fn().mockResolvedValue("loaded");
    const callbacks = {
      onResolve: vi.fn(),
      onFinally: vi.fn(),
    };
    const { result } = renderHook(() =>
      usePromise(promiseFn, callbacks, [])
    );

    expect(result.current[0].status).toBe("pending");
    await waitFor(() => {
      expect(result.current[0]).toEqual({
        status: "resolved",
        data: "loaded",
        error: null,
      });
    });
    expect(callbacks.onResolve).toHaveBeenCalledWith("loaded");
    expect(callbacks.onFinally).toHaveBeenCalledTimes(1);

    await act(async () => {
      result.current[2]();
      await Promise.resolve();
    });
    expect(promiseFn).toHaveBeenCalledTimes(2);
  });

  it("reexecutes for dependency changes and ignores stale results", async () => {
    const first = deferred<string>();
    const second = deferred<string>();
    const promiseFn = vi
      .fn<() => Promise<string>>()
      .mockReturnValueOnce(first.promise)
      .mockReturnValueOnce(second.promise);
    const { result, rerender } = renderHook(
      ({ value }: { value: number }) => usePromise(promiseFn, [value]),
      { initialProps: { value: 1 } }
    );

    expect(promiseFn).toHaveBeenCalledTimes(1);
    rerender({ value: 2 });
    expect(promiseFn).toHaveBeenCalledTimes(2);

    await act(async () => {
      second.resolve("new");
      await second.promise;
    });
    await waitFor(() => {
      expect(result.current[0].data).toBe("new");
    });

    await act(async () => {
      first.resolve("old");
      await first.promise;
    });
    expect(result.current[0]).toEqual({
      status: "resolved",
      data: "new",
      error: null,
    });
  });

  it("prevents an aborted promise from updating state or callbacks", async () => {
    const request = deferred<string>();
    const callbacks = {
      onResolve: vi.fn(),
      onFinally: vi.fn(),
    };
    const { result } = renderHook(() =>
      usePromise(() => request.promise, callbacks, [])
    );

    expect(result.current[0].status).toBe("pending");
    act(() => {
      result.current[1]();
    });

    await act(async () => {
      request.resolve("ignored");
      await request.promise;
    });

    expect(result.current[0].status).toBe("pending");
    expect(callbacks.onResolve).not.toHaveBeenCalled();
    expect(callbacks.onFinally).not.toHaveBeenCalled();
  });
});

export {};
