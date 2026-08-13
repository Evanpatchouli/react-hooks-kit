import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import useDimensions from "../../hooks/useDimensions";

class MockResizeObserver {
  static instances: MockResizeObserver[] = [];
  readonly callback: ResizeObserverCallback;
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
    MockResizeObserver.instances.push(this);
  }

  trigger(contentRect: Partial<DOMRectReadOnly>) {
    this.callback(
      [{ contentRect } as ResizeObserverEntry],
      this as unknown as ResizeObserver
    );
  }
}

describe("useDimensions", () => {
  beforeEach(() => {
    MockResizeObserver.instances = [];
    vi.stubGlobal("ResizeObserver", MockResizeObserver);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns zero dimensions and does not observe without an attached element", () => {
    const { result } = renderHook(() => useDimensions());

    expect(result.current[1]).toEqual({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
    });
    expect(MockResizeObserver.instances).toHaveLength(0);
  });

  it("observes the attached element and updates all dimensions", () => {
    const element = document.createElement("div");
    const { result, unmount } = renderHook(() => {
      const [ref, dimensions] = useDimensions();
      (ref as { current: HTMLDivElement | null }).current = element;
      return { ref, dimensions };
    });
    const observer = MockResizeObserver.instances[0];

    expect(observer?.observe).toHaveBeenCalledWith(element);

    act(() => {
      observer?.trigger({ width: 320, height: 180, top: 12, left: 24 });
    });

    expect(result.current.dimensions).toEqual({
      width: 320,
      height: 180,
      top: 12,
      left: 24,
    });

    unmount();
    expect(observer?.unobserve).toHaveBeenCalledWith(element);
  });
});

export {};
