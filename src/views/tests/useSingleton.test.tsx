import { cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useSingleton from "../../hooks/useSingleton";

describe("useSingleton", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("creates one value per hook instance and preserves it across rerenders", () => {
    const createInstance = vi.fn(() => ({ id: "singleton" }));
    const first = renderHook(() => useSingleton(createInstance));
    const firstValue = first.result.current;

    first.rerender();

    expect(first.result.current).toBe(firstValue);
    expect(createInstance).toHaveBeenCalledTimes(1);

    const second = renderHook(() => useSingleton(createInstance));
    expect(second.result.current).not.toBe(firstValue);
    expect(createInstance).toHaveBeenCalledTimes(2);
  });

  it("does not recreate a null value on rerender", () => {
    const createInstance = vi.fn(() => null);
    const { result, rerender } = renderHook(() => useSingleton(createInstance));

    rerender();

    expect(result.current).toBeNull();
    expect(createInstance).toHaveBeenCalledTimes(1);
  });
});

export {};
