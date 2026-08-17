import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useRafState from "../../hooks/useRafState";

describe("useRafState", () => {
  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("coalesces updates into the latest animation frame", () => {
    let nextId = 1;
    const callbacks = new Map<number, FrameRequestCallback>();
    const requestAnimationFrame = vi.fn((callback: FrameRequestCallback) => {
      const id = nextId++;
      callbacks.set(id, callback);
      return id;
    });
    const cancelAnimationFrame = vi.fn((id: number) => {
      callbacks.delete(id);
    });
    vi.stubGlobal("requestAnimationFrame", requestAnimationFrame);
    vi.stubGlobal("cancelAnimationFrame", cancelAnimationFrame);
    const { result } = renderHook(() => useRafState(0));

    act(() => {
      result.current[1](1);
      result.current[1]((value) => value + 2);
    });
    expect(result.current[0]).toBe(0);
    expect(cancelAnimationFrame).toHaveBeenCalledWith(1);

    act(() => {
      callbacks.get(2)?.(100);
    });
    expect(result.current[0]).toBe(2);
  });

  it("cancels a pending frame on unmount, including frame id zero", () => {
    const requestAnimationFrame = vi.fn(() => 0);
    const cancelAnimationFrame = vi.fn();
    vi.stubGlobal("requestAnimationFrame", requestAnimationFrame);
    vi.stubGlobal("cancelAnimationFrame", cancelAnimationFrame);
    const { result, unmount } = renderHook(() => useRafState(0));

    act(() => {
      result.current[1](1);
    });
    cancelAnimationFrame.mockClear();
    unmount();

    expect(cancelAnimationFrame).toHaveBeenCalledWith(0);
  });
});

export {};
