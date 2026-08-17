import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useOverflow from "../../hooks/useOverflow";

function setDimensions(
  element: HTMLElement,
  dimensions: {
    offsetWidth: number;
    scrollWidth: number;
    offsetHeight: number;
    scrollHeight: number;
  }
) {
  Object.entries(dimensions).forEach(([key, value]) => {
    Object.defineProperty(element, key, {
      configurable: true,
      value,
    });
  });
}

describe("useOverflow", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("detects horizontal and vertical overflow on resize", () => {
    const { result } = renderHook(() => useOverflow<HTMLDivElement>());
    const element = document.createElement("div");
    result.current[0].current = element;

    setDimensions(element, {
      offsetWidth: 100,
      scrollWidth: 100,
      offsetHeight: 50,
      scrollHeight: 50,
    });
    act(() => {
      window.dispatchEvent(new Event("resize"));
    });
    expect(result.current[1]).toBe(false);

    setDimensions(element, {
      offsetWidth: 100,
      scrollWidth: 120,
      offsetHeight: 50,
      scrollHeight: 80,
    });
    act(() => {
      window.dispatchEvent(new Event("resize"));
    });
    expect(result.current[1]).toBe(true);

    setDimensions(element, {
      offsetWidth: 100,
      scrollWidth: 100,
      offsetHeight: 50,
      scrollHeight: 50,
    });
    act(() => {
      window.dispatchEvent(new Event("resize"));
    });
    expect(result.current[1]).toBe(false);
  });

  it("removes the resize listener on unmount", () => {
    const removeEventListener = vi.spyOn(window, "removeEventListener");
    const { unmount } = renderHook(() => useOverflow());

    unmount();

    expect(removeEventListener).toHaveBeenCalledWith(
      "resize",
      expect.any(Function)
    );
  });
});

export {};
