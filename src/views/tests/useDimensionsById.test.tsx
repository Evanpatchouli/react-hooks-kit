import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import useDimensionsById from "../../hooks/useDimensionsById";

class MockResizeObserver {
  static instances: MockResizeObserver[] = [];
  readonly callback: ResizeObserverCallback;
  observe = vi.fn();
  unobserve = vi.fn();

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

describe("useDimensionsById", () => {
  beforeEach(() => {
    MockResizeObserver.instances = [];
    vi.stubGlobal("ResizeObserver", MockResizeObserver);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    document.body.replaceChildren();
  });

  it("returns zero dimensions when the id is not found", () => {
    const { result } = renderHook(() => useDimensionsById("missing"));

    expect(result.current).toEqual({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
    });
    expect(MockResizeObserver.instances).toHaveLength(0);
  });

  it("observes the element and updates dimensions", () => {
    const element = document.createElement("div");
    element.id = "target";
    document.body.append(element);
    const { result, unmount } = renderHook(() => useDimensionsById("target"));
    const observer = MockResizeObserver.instances[0];

    expect(observer?.observe).toHaveBeenCalledWith(element);
    act(() => {
      observer?.trigger({ width: 240, height: 120, top: 8, left: 16 });
    });

    expect(result.current).toEqual({
      width: 240,
      height: 120,
      top: 8,
      left: 16,
    });
    unmount();
    expect(observer?.unobserve).toHaveBeenCalledWith(element);
  });

  it("stops observing the old id and observes the new id", () => {
    const first = document.createElement("div");
    first.id = "first";
    const second = document.createElement("div");
    second.id = "second";
    document.body.append(first, second);
    const { rerender } = renderHook(({ id }) => useDimensionsById(id), {
      initialProps: { id: "first" },
    });
    const firstObserver = MockResizeObserver.instances[0];

    rerender({ id: "second" });
    const secondObserver = MockResizeObserver.instances[1];

    expect(firstObserver?.unobserve).toHaveBeenCalledWith(first);
    expect(secondObserver?.observe).toHaveBeenCalledWith(second);
  });
});

export {};
