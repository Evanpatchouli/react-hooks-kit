import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useSafeArea from "../../hooks/useSafeArea";

describe("useSafeArea", () => {
  afterEach(() => {
    cleanup();
    vi.useRealTimers();
    vi.restoreAllMocks();
    document.body.replaceChildren();
  });

  it("reads all safe-area insets on mount without losing fractional pixels", () => {
    const values = {
      top: "12.5px",
      right: "8.25px",
      bottom: "24px",
      left: "3.75px",
    };
    const getComputedStyle = vi
      .spyOn(window, "getComputedStyle")
      .mockImplementation(() =>
        ({
          paddingTop: values.top,
          paddingRight: values.right,
          paddingBottom: values.bottom,
          paddingLeft: values.left,
        } as CSSStyleDeclaration)
      );

    const { result } = renderHook(() => useSafeArea());

    expect(result.current).toEqual({
      top: 12.5,
      right: 8.25,
      bottom: 24,
      left: 3.75,
    });
    expect(getComputedStyle).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it("debounces resize and updates immediately on orientation changes", () => {
    vi.useFakeTimers();
    const values = {
      top: "1px",
      right: "2px",
      bottom: "3px",
      left: "4px",
    };
    vi.spyOn(window, "getComputedStyle").mockImplementation(() =>
      ({
        paddingTop: values.top,
        paddingRight: values.right,
        paddingBottom: values.bottom,
        paddingLeft: values.left,
      } as CSSStyleDeclaration)
    );
    const { result } = renderHook(() => useSafeArea());

    values.top = "10px";
    act(() => {
      window.dispatchEvent(new Event("resize"));
    });
    expect(result.current.top).toBe(1);

    act(() => {
      vi.advanceTimersByTime(99);
    });
    expect(result.current.top).toBe(1);

    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(result.current.top).toBe(10);

    values.top = "20px";
    act(() => {
      window.dispatchEvent(new Event("orientationchange"));
    });
    expect(result.current.top).toBe(20);
  });

  it("cancels a pending resize computation on unmount", () => {
    vi.useFakeTimers();
    const getComputedStyle = vi
      .spyOn(window, "getComputedStyle")
      .mockImplementation(
        () =>
          ({
            paddingTop: "1px",
            paddingRight: "1px",
            paddingBottom: "1px",
            paddingLeft: "1px",
          } as CSSStyleDeclaration)
      );
    const { unmount } = renderHook(() => useSafeArea());

    act(() => {
      window.dispatchEvent(new Event("resize"));
    });
    unmount();

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(getComputedStyle).toHaveBeenCalledTimes(1);
  });
});

export {};
