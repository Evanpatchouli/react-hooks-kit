import { act, cleanup, render, renderHook, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import React, { useRef } from "react";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

function createDeferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (reason?: unknown) => void;
  const promise = new Promise<T>((promiseResolve, promiseReject) => {
    resolve = promiseResolve;
    reject = promiseReject;
  });

  return { promise, resolve, reject };
}

class FakeIntersectionObserver {
  static instances: FakeIntersectionObserver[] = [];
  root: Element | Document | null;
  rootMargin: string;
  threshold: number | number[];
  observe = vi.fn();
  disconnect = vi.fn();

  constructor(
    _callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) {
    this.root = options?.root ?? null;
    this.rootMargin = options?.rootMargin ?? "";
    this.threshold = options?.threshold ?? 0;
    FakeIntersectionObserver.instances.push(this);
  }

  unobserve() {}
  takeRecords() {
    return [];
  }
}

function ContainerView({ loadMore }: { loadMore: () => Promise<number[]> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { loader } = useInfiniteScroll({
    mode: "container",
    containerRef,
    loadMore,
    hasMore: false,
  });

  return (
    <div ref={containerRef} data-testid="scroll-container">
      {loader}
    </div>
  );
}

describe("useInfiniteScroll", () => {
  afterEach(() => {
    cleanup();
    FakeIntersectionObserver.instances = [];
    vi.unstubAllGlobals();
  });

  it("loads items once and resets loading after completion", async () => {
    const deferred = createDeferred<number[]>();
    const loadMore = vi.fn(() => deferred.promise);
    const { result } = renderHook(() =>
      useInfiniteScroll({ loadMore, hasMore: true })
    );

    let request: Promise<void> | undefined;
    act(() => {
      request = result.current.triggerLoadMore();
      void result.current.triggerLoadMore();
    });

    expect(loadMore).toHaveBeenCalledTimes(1);
    expect(result.current.loading).toBe(true);

    deferred.resolve([1, 2]);
    await act(async () => {
      await request;
    });

    expect(result.current.items).toEqual([1, 2]);
    expect(result.current.loading).toBe(false);
  });

  it("propagates load errors and clears the loading lock", async () => {
    const error = new Error("load failed");
    const loadMore = vi.fn().mockRejectedValue(error);
    const { result } = renderHook(() =>
      useInfiniteScroll({ loadMore, hasMore: true })
    );

    await act(async () => {
      await expect(result.current.triggerLoadMore()).rejects.toBe(error);
    });

    expect(result.current.loading).toBe(false);
    expect(loadMore).toHaveBeenCalledTimes(1);
  });

  it("uses the container as the observer root on first render", async () => {
    vi.stubGlobal("IntersectionObserver", FakeIntersectionObserver);
    vi.stubGlobal("requestAnimationFrame", vi.fn(() => 0));
    const loadMore = vi.fn(async () => []);

    const { getByTestId } = render(<ContainerView loadMore={loadMore} />);

    await waitFor(() => {
      expect(FakeIntersectionObserver.instances).toHaveLength(1);
    });
    expect(FakeIntersectionObserver.instances[0].root).toBe(
      getByTestId("scroll-container")
    );
  });
});

export {};
