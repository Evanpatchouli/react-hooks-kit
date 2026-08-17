import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useScroll from "../../hooks/useScroll";

function setScrollPosition(x: number, y: number) {
  Object.defineProperty(window, "scrollX", {
    configurable: true,
    value: x,
  });
  Object.defineProperty(window, "scrollY", {
    configurable: true,
    value: y,
  });
}

describe("useScroll", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("reads the current scroll position and updates it with the callback", () => {
    setScrollPosition(120, 80);
    const callback = vi.fn();
    const { result } = renderHook(() => useScroll(callback));

    expect(result.current).toEqual({ x: 120, y: 80 });

    setScrollPosition(240, 180);
    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toEqual({ x: 240, y: 180 });
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith({ x: 240, y: 180 });
  });

  it("invokes each callback once and removes it with its hook instance", () => {
    const firstCallback = vi.fn();
    const secondCallback = vi.fn();
    const first = renderHook(() => useScroll(firstCallback));
    const second = renderHook(() => useScroll(secondCallback));

    setScrollPosition(30, 40);
    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });

    expect(firstCallback).toHaveBeenCalledTimes(1);
    expect(secondCallback).toHaveBeenCalledTimes(1);

    first.unmount();
    firstCallback.mockClear();
    secondCallback.mockClear();
    setScrollPosition(50, 60);
    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });

    expect(firstCallback).not.toHaveBeenCalled();
    expect(secondCallback).toHaveBeenCalledTimes(1);
    expect(second.result.current).toEqual({ x: 50, y: 60 });
  });
});

export {};
