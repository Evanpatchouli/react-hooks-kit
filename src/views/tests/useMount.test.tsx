import { renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useMount from "../../hooks/useMount";

describe("useMount", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("runs once by default and executes cleanup on unmount", () => {
    const cleanup = vi.fn();
    const callback = vi.fn(() => cleanup);
    const { rerender, unmount } = renderHook(() => useMount(callback));

    expect(callback).toHaveBeenCalledTimes(1);
    rerender();
    expect(callback).toHaveBeenCalledTimes(1);

    unmount();
    expect(cleanup).toHaveBeenCalledTimes(1);
  });

  it("reruns with dependencies and cleans up the previous effect", () => {
    const cleanups = [vi.fn(), vi.fn()];
    const callback = vi
      .fn()
      .mockImplementationOnce(() => cleanups[0])
      .mockImplementationOnce(() => cleanups[1]);
    const { rerender, unmount } = renderHook(
      ({ value }: { value: number }) => useMount(callback, [value]),
      { initialProps: { value: 1 } }
    );

    rerender({ value: 2 });
    expect(callback).toHaveBeenCalledTimes(2);
    expect(cleanups[0]).toHaveBeenCalledTimes(1);

    unmount();
    expect(cleanups[1]).toHaveBeenCalledTimes(1);
  });

  it("passes callback errors to onError", () => {
    const error = new Error("mount failed");
    const onError = vi.fn();

    renderHook(() =>
      useMount(() => {
        throw error;
      }, onError)
    );

    expect(onError).toHaveBeenCalledWith(error);
  });
});

export {};
