import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import useKeyPress from "../../hooks/useKeyPress";

describe("useKeyPress", () => {
  afterEach(() => {
    cleanup();
  });

  it("tracks only the configured key across keydown and keyup", () => {
    const { result, unmount } = renderHook(() => useKeyPress("a"));

    expect(result.current).toBe(false);

    act(() => {
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "b" }));
    });
    expect(result.current).toBe(false);

    act(() => {
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));
    });
    expect(result.current).toBe(true);

    act(() => {
      window.dispatchEvent(new KeyboardEvent("keyup", { key: "b" }));
    });
    expect(result.current).toBe(true);

    act(() => {
      window.dispatchEvent(new KeyboardEvent("keyup", { key: "a" }));
    });
    expect(result.current).toBe(false);

    unmount();
    act(() => {
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));
    });
  });

  it("switches the tracked key when the target changes", () => {
    const { result, rerender } = renderHook(
      ({ targetKey }: { targetKey: string }) => useKeyPress(targetKey),
      { initialProps: { targetKey: "a" } }
    );

    act(() => {
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "a" }));
    });
    expect(result.current).toBe(true);

    rerender({ targetKey: "b" });
    expect(result.current).toBe(false);

    act(() => {
      window.dispatchEvent(new KeyboardEvent("keyup", { key: "b" }));
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "b" }));
    });
    expect(result.current).toBe(true);

    act(() => {
      window.dispatchEvent(new KeyboardEvent("keyup", { key: "b" }));
    });
    expect(result.current).toBe(false);
  });
});

export {};
