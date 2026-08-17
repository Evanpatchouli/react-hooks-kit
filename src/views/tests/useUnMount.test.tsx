import { cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useUnMount from "../../hooks/useUnMount";

describe("useUnMount", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("runs the latest callback only when the component unmounts", () => {
    const firstCallback = vi.fn();
    const latestCallback = vi.fn();
    const { rerender, unmount } = renderHook(
      ({ callback }: { callback: () => void }) => useUnMount(callback),
      { initialProps: { callback: firstCallback } }
    );

    expect(firstCallback).not.toHaveBeenCalled();
    expect(latestCallback).not.toHaveBeenCalled();

    rerender({ callback: latestCallback });
    unmount();

    expect(firstCallback).not.toHaveBeenCalled();
    expect(latestCallback).toHaveBeenCalledTimes(1);
  });
});

export {};
