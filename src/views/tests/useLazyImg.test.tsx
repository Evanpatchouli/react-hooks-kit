import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useLazyImg from "../../hooks/useLazyImg";

class MockImage {
  static instances: MockImage[] = [];
  onload: (() => void) | null = null;
  onerror: (() => void) | null = null;
  private currentSrc = "";

  constructor() {
    MockImage.instances.push(this);
  }

  set src(value: string) {
    this.currentSrc = value;
  }

  get src() {
    return this.currentSrc;
  }
}

describe("useLazyImg", () => {
  afterEach(() => {
    cleanup();
    MockImage.instances = [];
    vi.unstubAllGlobals();
  });

  it("uses the default source and switches to the loaded source", () => {
    const onLoad = vi.fn();
    vi.stubGlobal("Image", MockImage);
    const { result } = renderHook(() =>
      useLazyImg({
        src: "full.png",
        defaultSrc: "placeholder.png",
        actions: { onLoad },
      })
    );

    expect(String(result.current)).toBe("placeholder.png");
    expect(result.current.loaded).toBeUndefined();
    expect(MockImage.instances[0].src).toBe("full.png");

    act(() => {
      MockImage.instances[0].onload?.();
    });

    expect(String(result.current)).toBe("full.png");
    expect(result.current.loaded).toBe(true);
    expect(result.current.error).toBe(false);
    expect(onLoad).toHaveBeenCalledWith(true);
  });

  it("uses the error fallback and calls the error action", () => {
    const onError = vi.fn();
    vi.stubGlobal("Image", MockImage);
    const { result } = renderHook(() =>
      useLazyImg("full.png", {
        defaultSrc: "placeholder.png",
        errorSrc: "error.png",
        actions: { onError },
      })
    );

    act(() => {
      MockImage.instances[0].onerror?.();
    });

    expect(String(result.current)).toBe("error.png");
    expect(result.current.loaded).toBe(false);
    expect(result.current.error).toBe(true);
    expect(onError).toHaveBeenCalledWith(true);
  });

  it("supports the positional overload and default error fallback", () => {
    vi.stubGlobal("Image", MockImage);
    const { result } = renderHook(() =>
      useLazyImg("full.png", "placeholder.png", "error.png")
    );

    act(() => {
      MockImage.instances[0].onerror?.();
    });

    expect(String(result.current)).toBe("error.png");
    expect(result.current.error).toBe(true);
  });
});

export {};
