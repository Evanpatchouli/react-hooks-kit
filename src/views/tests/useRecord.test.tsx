import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useRecord from "../../hooks/useRecord";

describe("useRecord", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("reads and updates individual properties", () => {
    const { result } = renderHook(() =>
      useRecord({ name: "record", count: 1 })
    );

    expect(result.current[2]("count")).toBe(1);
    act(() => {
      result.current[1]("count", (value) => value + 1);
    });
    expect(result.current[0]).toEqual({ name: "record", count: 2 });
  });

  it("merges object and functional updates in rehydrate mode", () => {
    const { result } = renderHook(() => useRecord({ a: 1, b: 2 }));

    act(() => {
      result.current[1]({ b: 3 });
    });
    expect(result.current[0]).toEqual({ a: 1, b: 3 });

    act(() => {
      result.current[1]((previous) => ({ a: previous.a + 1 }));
    });
    expect(result.current[0]).toEqual({ a: 2, b: 3 });
  });

  it("replaces the record in override mode", () => {
    const { result } = renderHook(() => useRecord({ a: 1, b: 2 }));

    act(() => {
      result.current[1]({ a: 10 }, "override");
    });
    expect(result.current[0]).toEqual({ a: 10 });

    act(() => {
      result.current[1](() => ({ b: 20 }), "override");
    });
    expect(result.current[0]).toEqual({ b: 20 });
  });

  it("rejects calls without arguments", () => {
    const { result } = renderHook(() => useRecord({}));

    expect(() => {
      act(() => {
        (result.current[1] as (...args: any[]) => void)();
      });
    }).toThrow("No arguments provided");
  });
});

export {};
