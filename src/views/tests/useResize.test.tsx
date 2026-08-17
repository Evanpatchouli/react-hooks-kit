import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useResize from "../../hooks/useResize";

describe("useResize", () => {
  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
    document.body.replaceChildren();
  });

  it("tracks window size and invokes the callback on resize", () => {
    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      value: 1024,
    });
    Object.defineProperty(window, "innerHeight", {
      configurable: true,
      value: 768,
    });
    const callback = vi.fn();
    const { result, unmount } = renderHook(() => useResize({ callback }));

    expect(result.current).toEqual({ width: 1024, height: 768 });
    expect(callback).toHaveBeenCalledWith({ width: 1024, height: 768 });

    Object.defineProperty(window, "innerWidth", { configurable: true, value: 1280 });
    Object.defineProperty(window, "innerHeight", { configurable: true, value: 720 });
    act(() => {
      window.dispatchEvent(new Event("resize"));
    });
    expect(result.current).toEqual({ width: 1280, height: 720 });
    expect(callback).toHaveBeenLastCalledWith({ width: 1280, height: 720 });

    unmount();
    act(() => {
      window.dispatchEvent(new Event("resize"));
    });
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it("observes a target element by id and cleans up the observer", () => {
    const element = document.createElement("div");
    element.id = "resize-target";
    Object.defineProperty(element, "clientWidth", { configurable: true, value: 200 });
    Object.defineProperty(element, "clientHeight", { configurable: true, value: 100 });
    document.body.appendChild(element);

    let observerCallback: ResizeObserverCallback | undefined;
    const observer = {
      observe: vi.fn(),
      unobserve: vi.fn(),
    };
    const ResizeObserverMock = vi.fn(function (this: typeof observer, callback: ResizeObserverCallback) {
      observerCallback = callback;
      this.observe = observer.observe;
      this.unobserve = observer.unobserve;
    });
    vi.stubGlobal("ResizeObserver", ResizeObserverMock);
    const callback = vi.fn();
    const { result, unmount } = renderHook(() =>
      useResize({ target: "resize-target", callback })
    );

    expect(observer.observe).toHaveBeenCalledWith(element);
    act(() => {
      observerCallback?.([
        { target: element } as ResizeObserverEntry,
      ], {} as ResizeObserver);
    });
    expect(result.current).toEqual({ width: 200, height: 100 });
    expect(callback).toHaveBeenCalledWith({ width: 200, height: 100 });

    unmount();
    expect(observer.unobserve).toHaveBeenCalledWith(element);
  });
});

export {};
