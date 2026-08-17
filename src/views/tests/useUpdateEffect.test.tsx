import { cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useUpdateEffect from "../../hooks/useUpdateEffect";

describe("useUpdateEffect", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("skips mount, runs on dependency changes, and ignores unrelated rerenders", () => {
    const callback = vi.fn();
    const { rerender, unmount } = renderHook(
      ({ value, label }: { value: number; label: string }) => {
        useUpdateEffect(callback, [value]);
        return label;
      },
      { initialProps: { value: 0, label: "first" } }
    );

    expect(callback).not.toHaveBeenCalled();

    rerender({ value: 0, label: "unrelated" });
    expect(callback).not.toHaveBeenCalled();

    rerender({ value: 1, label: "changed" });
    expect(callback).toHaveBeenCalledTimes(1);

    unmount();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

export {};
