import { renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import useBroadcastChannel from "../../hooks/useBroadcastChannel";

class MockBroadcastChannel {
  static instances: MockBroadcastChannel[] = [];
  readonly name: string;
  onmessage: ((event: MessageEvent) => void) | null = null;
  postMessage = vi.fn();
  close = vi.fn();

  constructor(name: string) {
    this.name = name;
    MockBroadcastChannel.instances.push(this);
  }
}

describe("useBroadcastChannel", () => {
  beforeEach(() => {
    MockBroadcastChannel.instances = [];
    vi.stubGlobal("BroadcastChannel", MockBroadcastChannel);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("posts JSON and parses incoming JSON by default", () => {
    const handler = vi.fn();
    const { result } = renderHook(() =>
      useBroadcastChannel<{ value: number }>("events", handler)
    );
    const channel = MockBroadcastChannel.instances[0];

    result.current({ value: 1 });
    channel?.onmessage?.(
      new MessageEvent("message", { data: JSON.stringify({ value: 2 }) })
    );

    expect(channel?.postMessage).toHaveBeenCalledWith('{"value":1}');
    expect(handler).toHaveBeenCalledWith({ value: 2 });
  });

  it("uses a custom parser for incoming messages", () => {
    const parser = vi.fn((data?: string) => Number(data) + 1);
    const handler = vi.fn();
    renderHook(() => useBroadcastChannel("numbers", handler, parser));
    const channel = MockBroadcastChannel.instances[0];

    channel?.onmessage?.(new MessageEvent("message", { data: "41" }));

    expect(parser).toHaveBeenCalledWith("41");
    expect(handler).toHaveBeenCalledWith(42);
  });

  it("forwards serialized data unchanged when parsing is disabled", () => {
    const handler = vi.fn();
    const { result } = renderHook(() =>
      useBroadcastChannel<string>("raw", handler, false)
    );
    const channel = MockBroadcastChannel.instances[0];

    result.current("hello");
    channel?.onmessage?.(new MessageEvent("message", { data: '"world"' }));

    expect(channel?.postMessage).toHaveBeenCalledWith('"hello"');
    expect(handler).toHaveBeenCalledWith('"world"');
  });

  it("closes the old channel when the name changes and on unmount", () => {
    const handler = vi.fn();
    const { rerender, unmount } = renderHook(
      ({ name }) => useBroadcastChannel(name, handler),
      { initialProps: { name: "first" } }
    );
    const firstChannel = MockBroadcastChannel.instances[0];

    rerender({ name: "second" });
    const secondChannel = MockBroadcastChannel.instances[1];

    expect(firstChannel?.close).toHaveBeenCalledTimes(1);
    expect(secondChannel?.name).toBe("second");

    unmount();
    expect(secondChannel?.close).toHaveBeenCalledTimes(1);
  });
});

export {};
