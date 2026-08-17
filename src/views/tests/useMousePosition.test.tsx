import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import useMousePosition from "../../hooks/useMousePosition";

describe("useMousePosition", () => {
  afterEach(() => {
    cleanup();
  });

  it("tracks mousemove coordinates by default", () => {
    const { result, unmount } = renderHook(() => useMousePosition());

    expect(result.current).toEqual({ x: null, y: null });

    act(() => {
      window.dispatchEvent(new MouseEvent("mousemove", { clientX: 120, clientY: 80 }));
    });
    expect(result.current).toEqual({ x: 120, y: 80 });

    act(() => {
      window.dispatchEvent(new MouseEvent("mousedown", { clientX: 20, clientY: 30 }));
    });
    expect(result.current).toEqual({ x: 120, y: 80 });

    unmount();
    act(() => {
      window.dispatchEvent(new MouseEvent("mousemove", { clientX: 1, clientY: 2 }));
    });
    expect(result.current).toEqual({ x: 120, y: 80 });
  });

  it("supports mousedown as the trigger and switches listeners", () => {
    const { result, rerender } = renderHook(
      ({ trigger }: { trigger: "mousemove" | "mousedown" }) =>
        useMousePosition(trigger),
      { initialProps: { trigger: "mousedown" as const } }
    );

    act(() => {
      window.dispatchEvent(new MouseEvent("mousemove", { clientX: 10, clientY: 20 }));
    });
    expect(result.current).toEqual({ x: null, y: null });

    act(() => {
      window.dispatchEvent(new MouseEvent("mousedown", { clientX: 30, clientY: 40 }));
    });
    expect(result.current).toEqual({ x: 30, y: 40 });

    rerender({ trigger: "mousemove" });
    act(() => {
      window.dispatchEvent(new MouseEvent("mousedown", { clientX: 50, clientY: 60 }));
    });
    expect(result.current).toEqual({ x: 30, y: 40 });

    act(() => {
      window.dispatchEvent(new MouseEvent("mousemove", { clientX: 70, clientY: 90 }));
    });
    expect(result.current).toEqual({ x: 70, y: 90 });
  });
});

export {};
