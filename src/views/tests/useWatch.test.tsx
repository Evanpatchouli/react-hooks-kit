import { renderHook, act } from "@testing-library/react";
import useWatch from "../../hooks/useWatch";
import { useState } from "react";

describe("useWatchGetter", () => {
  it("should return value", () => {
    const obj = { a: 1, b: 2 };
    const { result } = renderHook(() => useWatch(obj, "a"));
    expect(result.current).toBe(1);
  });

  it("should watch value from state", () => {
    const { result: stateResult } = renderHook(() => useState({ a: 1, b: 2 }));
    const { result, rerender } = renderHook(() => useWatch(stateResult.current[0], "a"));
    act(() => {
      stateResult.current[1]({ a: 20, b: 2 });
    });
    rerender(); // 重新渲染以获取最新的值
    expect(result.current).toBe(20);
  });

  it("should watch value from state with deep watch", () => {
    const { result: stateResult } = renderHook(() => useState({ a: { b: 1 }, b: 2 }));
    const { result, rerender } = renderHook(() => useWatch(stateResult.current[0], "a.b"));
    act(() => {
      stateResult.current[1]({ a: { b: 20 }, b: 2 });
    });
    rerender(); // 重新渲染以获取最新的值
    expect(result.current).toBe(20);
  });
});
