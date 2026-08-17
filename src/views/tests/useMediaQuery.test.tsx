import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useMediaQuery from "../../hooks/useMediaQuery";

function createMediaQueryList(matches: boolean) {
  const listeners = new Set<(event: MediaQueryListEvent) => void>();
  return {
    matches,
    media: "",
    addEventListener: vi.fn(
      (_type: string, listener: (event: MediaQueryListEvent) => void) => {
        listeners.add(listener);
      }
    ),
    removeEventListener: vi.fn(
      (_type: string, listener: (event: MediaQueryListEvent) => void) => {
        listeners.delete(listener);
      }
    ),
    emitChange() {
      listeners.forEach((listener) => listener({} as MediaQueryListEvent));
    },
  } as any;
}

describe("useMediaQuery", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("tracks modern media query changes and removes listeners", () => {
    const mediaQuery = createMediaQueryList(true);
    vi.stubGlobal("matchMedia", vi.fn(() => mediaQuery));
    const { result, unmount } = renderHook(() =>
      useMediaQuery("(min-width: 800px)")
    );

    expect(result.current).toBe(true);
    expect(mediaQuery.addEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function)
    );

    act(() => {
      mediaQuery.matches = false;
      mediaQuery.emitChange();
    });
    expect(result.current).toBe(false);

    unmount();
    expect(mediaQuery.removeEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function)
    );
  });

  it("synchronizes the current value when the query changes", () => {
    const firstQuery = createMediaQueryList(true);
    const secondQuery = createMediaQueryList(false);
    vi.stubGlobal(
      "matchMedia",
      vi.fn((query: string) =>
        query.includes("800px") ? firstQuery : secondQuery
      )
    );
    const { result, rerender } = renderHook(
      ({ query }: { query: string }) => useMediaQuery(query),
      { initialProps: { query: "(min-width: 800px)" } }
    );

    expect(result.current).toBe(true);

    rerender({ query: "(max-width: 400px)" });
    expect(result.current).toBe(false);
    expect(firstQuery.removeEventListener).toHaveBeenCalled();
    expect(secondQuery.addEventListener).toHaveBeenCalled();
  });
});

export {};
