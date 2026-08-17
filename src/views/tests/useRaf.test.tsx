import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useRaf from "../../hooks/useRaf";

describe("useRaf", () => {
  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("runs on every frame and uses the latest callback", () => {
    let nextId = 0;
    const callbacks = new Map<number, FrameRequestCallback>();
    const requestAnimationFrame = vi.fn((callback: FrameRequestCallback) => {
      const id = nextId++;
      callbacks.set(id, callback);
      return id;
    });
    const cancelAnimationFrame = vi.fn();
    vi.stubGlobal("requestAnimationFrame", requestAnimationFrame);
    vi.stubGlobal("cancelAnimationFrame", cancelAnimationFrame);
    const firstCallback = vi.fn();
    const secondCallback = vi.fn();
    const initialProps: { callback: FrameRequestCallback } = {
      callback: firstCallback,
    };
    const { rerender, unmount } = renderHook(
      ({ callback }: { callback: FrameRequestCallback }) => useRaf(callback),
      { initialProps }
    );

    act(() => {
      callbacks.get(0)?.(100);
    });
    expect(firstCallback).toHaveBeenCalledWith(100);
    expect(requestAnimationFrame).toHaveBeenCalledTimes(2);

    rerender({ callback: secondCallback });
    act(() => {
      callbacks.get(1)?.(200);
    });
    expect(secondCallback).toHaveBeenCalledWith(200);
    expect(firstCallback).toHaveBeenCalledTimes(1);

    unmount();
    expect(cancelAnimationFrame).toHaveBeenCalledWith(2);
  });

  it("cancels frame id zero on unmount", () => {
    const requestAnimationFrame = vi.fn(() => 0);
    const cancelAnimationFrame = vi.fn();
    vi.stubGlobal("requestAnimationFrame", requestAnimationFrame);
    vi.stubGlobal("cancelAnimationFrame", cancelAnimationFrame);

    const { unmount } = renderHook(() => useRaf(vi.fn()));
    unmount();

    expect(cancelAnimationFrame).toHaveBeenCalledWith(0);
  });
});

export {};
