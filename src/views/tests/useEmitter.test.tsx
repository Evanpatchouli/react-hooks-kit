import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useEmitter, { useGlobalListeners } from "../../hooks/useEmitter";

describe("useEmitter", () => {
  afterEach(() => {
    const { result, unmount } = renderHook(() => useGlobalListeners());
    result.current.clear();
    unmount();
  });

  it("publishes events to listeners in the same namespace", () => {
    const listener = vi.fn();
    const subscriber = renderHook(() =>
      useEmitter({
        name: "subscriber",
        initialEventName: "message",
        initialListener: listener,
      })
    );
    const publisher = renderHook(() => useEmitter("publisher"));

    act(() => {
      publisher.result.current.emit("message", "hello", 42);
    });

    expect(listener).toHaveBeenCalledWith("hello", 42);
    subscriber.unmount();
    publisher.unmount();
  });

  it("supports subscribe, unsubscribe, and unsubscribeAll", () => {
    const first = vi.fn();
    const second = vi.fn();
    const { result: listener } = renderHook(() => useEmitter("listener"));
    const { result: publisher } = renderHook(() => useEmitter("publisher"));

    act(() => {
      listener.current.subscribe("event", first);
      listener.current.subscribe("other", second);
      publisher.current.emit("event", 1);
      publisher.current.emit("other", 2);
      listener.current.unsubscribe("event");
      publisher.current.emit("event", 3);
      listener.current.unsubscribeAll();
      publisher.current.emit("other", 4);
    });

    expect(first).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledTimes(1);
  });

  it("rejects duplicate listeners with the same name and event", () => {
    const first = renderHook(() => useEmitter("same-name"));
    const second = renderHook(() => useEmitter("same-name"));

    act(() => {
      first.result.current.subscribe("event", vi.fn());
    });

    expect(() => {
      second.result.current.subscribe("event", vi.fn());
    }).toThrow(/already registered/);
  });

  it("keeps listeners in different namespaces isolated", () => {
    const defaultListener = vi.fn();
    const customListener = vi.fn();
    const defaultSubscriber = renderHook(() =>
      useEmitter({
        name: "default-listener",
        initialEventName: "event",
        initialListener: defaultListener,
      })
    );
    const customSubscriber = renderHook(() =>
      useEmitter({
        name: "custom-listener",
        namespace: "custom",
        initialEventName: "event",
        initialListener: customListener,
      })
    );
    const customPublisher = renderHook(() =>
      useEmitter({ name: "custom-publisher", namespace: "custom" })
    );

    act(() => {
      customPublisher.result.current.emit("event", "value");
    });

    expect(customListener).toHaveBeenCalledWith("value");
    expect(defaultListener).not.toHaveBeenCalled();
    defaultSubscriber.unmount();
    customSubscriber.unmount();
    customPublisher.unmount();
  });

  it("removes listeners when the subscriber unmounts", () => {
    const listener = vi.fn();
    const subscriber = renderHook(() =>
      useEmitter({
        name: "temporary-subscriber",
        initialEventName: "event",
        initialListener: listener,
      })
    );
    const publisher = renderHook(() => useEmitter("publisher"));

    subscriber.unmount();
    act(() => {
      publisher.result.current.emit("event");
    });

    expect(listener).not.toHaveBeenCalled();
    publisher.unmount();
  });
});

export {};
