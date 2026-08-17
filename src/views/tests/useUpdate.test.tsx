import { cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useUpdate from "../../hooks/useUpdate";

describe("useUpdate", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("runs the latest callback after dependency changes, not on mount or unmount", () => {
    const firstCallback = vi.fn();
    const latestCallback = vi.fn();
    const { rerender, unmount } = renderHook(
      ({ value, callback }: { value: number; callback: () => void }) => {
        useUpdate(callback, [value]);
      },
      { initialProps: { value: 0, callback: firstCallback } }
    );

    expect(firstCallback).not.toHaveBeenCalled();
    expect(latestCallback).not.toHaveBeenCalled();

    rerender({ value: 1, callback: latestCallback });
    expect(firstCallback).not.toHaveBeenCalled();
    expect(latestCallback).toHaveBeenCalledTimes(1);

    unmount();
    expect(latestCallback).toHaveBeenCalledTimes(1);
  });
});

export {};
