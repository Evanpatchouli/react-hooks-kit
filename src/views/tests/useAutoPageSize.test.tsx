import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import useAutoPageSize from "../../hooks/useAutoPageSize";

describe("useAutoPageSize", () => {
  let triggerResize: (() => void) | undefined;
  const observe = vi.fn();
  const disconnect = vi.fn();

  class MockResizeObserver {
    constructor(callback: ResizeObserverCallback) {
      triggerResize = () => callback([], this as unknown as ResizeObserver);
    }

    observe = observe;
    disconnect = disconnect;
  }

  beforeEach(() => {
    triggerResize = undefined;
    observe.mockClear();
    disconnect.mockClear();
    vi.stubGlobal("ResizeObserver", MockResizeObserver);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    document.body.replaceChildren();
  });

  function createContainer(id: string, height: number) {
    const container = document.createElement("div");
    container.id = id;
    vi.spyOn(container, "getBoundingClientRect").mockReturnValue({
      height,
    } as DOMRect);
    document.body.append(container);
    return container;
  }

  it("calculates page size from container height and buffer", () => {
    createContainer("list", 500);

    const { result } = renderHook(() => useAutoPageSize("list", 150));

    expect(result.current).toBe(6);
    expect(observe).toHaveBeenCalledTimes(1);
  });

  it("respects the minimum page size and explicit zero buffer", () => {
    createContainer("list", 100);

    const { result } = renderHook(() =>
      useAutoPageSize("list", 150, { minSize: 7, buffer: 0 })
    );

    expect(result.current).toBe(7);
  });

  it("updates page size when the container is resized", () => {
    const container = createContainer("list", 300);
    const getRect = vi.mocked(container.getBoundingClientRect);
    const { result } = renderHook(() => useAutoPageSize("list", 100));

    expect(result.current).toBe(5);
    getRect.mockReturnValue({ height: 700 } as DOMRect);

    act(() => {
      triggerResize?.();
    });

    expect(result.current).toBe(9);
  });

  it("disconnects after the first measurement when once is enabled", () => {
    createContainer("list", 200);
    const { result } = renderHook(() =>
      useAutoPageSize("list", 100, { once: true })
    );

    expect(result.current).toBe(5);
    act(() => {
      triggerResize?.();
    });

    expect(disconnect).toHaveBeenCalledTimes(1);
  });

  it("keeps the minimum size when the container does not exist", () => {
    const { result } = renderHook(() => useAutoPageSize("missing"));

    expect(result.current).toBe(5);
    expect(observe).not.toHaveBeenCalled();
  });
});

export {};
