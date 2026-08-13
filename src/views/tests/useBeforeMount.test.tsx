import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import useBeforeMount from "../../hooks/useBeforeMount";

describe("useBeforeMount", () => {
  it("runs the callback during the initial render", () => {
    const calls: string[] = [];
    const callback = vi.fn(() => calls.push("callback"));

    renderHook(() => {
      calls.push("render");
      useBeforeMount(callback);
    });

    expect(callback).toHaveBeenCalledTimes(1);
    expect(calls).toEqual(["render", "callback"]);
  });

  it("does not run the callback again on rerender", () => {
    const callback = vi.fn();
    const { rerender } = renderHook(() => useBeforeMount(callback));

    rerender();
    rerender();

    expect(callback).toHaveBeenCalledTimes(1);
  });
});

export {};
