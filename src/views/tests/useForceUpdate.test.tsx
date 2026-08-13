import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import useForceUpdate from "../../hooks/useForceUpdate";

describe("useForceUpdate", () => {
  it("forces a rerender and reports the previous counter value", () => {
    const renders = vi.fn();
    const callback = vi.fn();
    const { result } = renderHook(() => {
      renders();
      return useForceUpdate();
    });

    expect(renders).toHaveBeenCalledTimes(1);
    act(() => {
      result.current(callback);
    });

    expect(callback).toHaveBeenCalledWith(0);
    expect(renders).toHaveBeenCalledTimes(2);
  });

  it("increments the counter on every call and keeps the updater stable", () => {
    const callbacks = [vi.fn(), vi.fn(), vi.fn()];
    const { result, rerender } = renderHook(() => useForceUpdate());
    const update = result.current;

    act(() => {
      result.current(callbacks[0]);
      result.current(callbacks[1]);
      result.current(callbacks[2]);
    });
    rerender();

    expect(callbacks[0]).toHaveBeenCalledWith(0);
    expect(callbacks[1]).toHaveBeenCalledWith(1);
    expect(callbacks[2]).toHaveBeenCalledWith(2);
    expect(result.current).toBe(update);
  });
});

export {};
