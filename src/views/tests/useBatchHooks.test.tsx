import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import useBatchHooks from "../../hooks/useBatchHooks";

const useAdd = (value: number, offset: number) => value + offset;

describe("useBatchHooks", () => {
  it("runs the same hook the requested number of times", () => {
    const { result } = renderHook(() => useBatchHooks(useAdd, 3, 4, 2));

    expect(result.current).toEqual([6, 6, 6]);
  });

  it("runs configured hooks with their individual arguments in order", () => {
    const hooks: Array<{
      hook: typeof useAdd;
      args: Parameters<typeof useAdd>;
    }> = [
      { hook: useAdd, args: [1, 10] },
      { hook: useAdd, args: [2, 20] },
      { hook: useAdd, args: [3, 30] },
    ];

    const { result } = renderHook(() => useBatchHooks(hooks));

    expect(result.current).toEqual([11, 22, 33]);
  });

  it("returns an empty array when the batch count is zero", () => {
    const { result } = renderHook(() => useBatchHooks(useAdd, 0, 1, 2));

    expect(result.current).toEqual([]);
  });
});

export {};
