import { renderHook, act } from "@testing-library/react";
import useWatchGetter from "../../hooks/useWatchGetter";
import { useState } from "react";

describe("useWatchGetter", () => {
  it("should return value", () => {
    const { result } = renderHook(() => useWatchGetter(() => 10));
    expect(result.current).toBe(10);
  });

  it("should watch value from state", () => {
    const { result: stateResult } = renderHook(() => useState(10));
    const { result, rerender } = renderHook(() => useWatchGetter(() => stateResult.current[0]));

    act(() => {
      stateResult.current[1](20);
    });

    rerender(); // 重新渲染以获取最新的值

    expect(result.current).toBe(20);
  });

  it("should watch value from state with deep watch", () => {
    const { result: stateResult } = renderHook(() => useState({ a: { b: 1 }, b: 2 }));
    const { result, rerender } = renderHook(() => useWatchGetter(() => stateResult.current[0].a.b));

    act(() => {
      stateResult.current[1]({ a: { b: 20 }, b: 2 });
    });

    rerender(); // 重新渲染以获取最新的值

    expect(result.current).toBe(20);
  });
});
