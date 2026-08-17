import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useReflect from "../../hooks/useReflect";

describe("useReflect", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("reads, checks, and sets reflected properties", () => {
    const { result } = renderHook(() => useReflect({ count: 1 }));

    expect(result.current.get()).toEqual({ count: 1 });
    expect(result.current.get("count")).toBe(1);
    expect(result.current.has("count")).toBe(true);
    expect(result.current.has("missing")).toBe(false);

    act(() => {
      result.current.set("count", 2);
    });
    expect(result.current.get("count")).toBe(2);
  });

  it("passes the reflected object to apply and rerenders after mutation", () => {
    const { result } = renderHook(() => useReflect({ count: 1 }));
    const apply = vi.fn((value: { count: number }) => {
      value.count += 1;
    });

    act(() => {
      result.current.apply(apply);
    });

    expect(apply).toHaveBeenCalledWith({ count: 2 });
    expect(result.current.get("count")).toBe(2);
  });
});

export {};
