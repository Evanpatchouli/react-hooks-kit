import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import useMixRef from "../../hooks/useMixRef";

describe("useMixRef", () => {
  it("writes nodes to object and callback refs and clears them", () => {
    const callbackRef = vi.fn();
    const objectRef = { current: null as HTMLDivElement | null };
    const { result } = renderHook(() =>
      useMixRef<HTMLDivElement>([callbackRef, objectRef])
    );
    const node = document.createElement("div");

    result.current(node);
    expect(callbackRef).toHaveBeenCalledWith(node);
    expect(objectRef.current).toBe(node);

    result.current(null);
    expect(callbackRef).toHaveBeenLastCalledWith(null);
    expect(objectRef.current).toBeNull();
  });

  it("uses the latest refs after the refs list changes", () => {
    const firstRef = vi.fn();
    const secondRef = vi.fn();
    const { result, rerender } = renderHook(
      ({ refs }: { refs: React.Ref<HTMLDivElement>[] }) =>
        useMixRef<HTMLDivElement>(refs),
      { initialProps: { refs: [firstRef] } }
    );
    const node = document.createElement("div");

    result.current(node);
    rerender({ refs: [secondRef] });
    result.current(node);

    expect(firstRef).toHaveBeenCalledWith(node);
    expect(secondRef).toHaveBeenCalledWith(node);
  });
});

export {};
