import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useTheme from "../../hooks/useTheme";

type Matcher = {
  matches: boolean;
  emit: () => void;
  addEventListener?: ReturnType<typeof vi.fn>;
  removeEventListener?: ReturnType<typeof vi.fn>;
  addListener?: ReturnType<typeof vi.fn>;
  removeListener?: ReturnType<typeof vi.fn>;
};

function createMatcher(
  matches: boolean,
  api: "modern" | "legacy" = "modern"
): Matcher {
  const listeners = new Set<(event: MediaQueryListEvent) => void>();
  const matcher: Matcher = {
    matches,
    emit() {
      listeners.forEach((listener) =>
        listener({ matches: matcher.matches } as MediaQueryListEvent)
      );
    },
  };
  const addEventListener = vi.fn(
    (_type: string, listener: (event: MediaQueryListEvent) => void) => {
      listeners.add(listener);
    }
  );
  const removeEventListener = vi.fn(
    (_type: string, listener: (event: MediaQueryListEvent) => void) => {
      listeners.delete(listener);
    }
  );
  const addListener = vi.fn((listener: (event: MediaQueryListEvent) => void) => {
    listeners.add(listener);
  });
  const removeListener = vi.fn(
    (listener: (event: MediaQueryListEvent) => void) => {
      listeners.delete(listener);
    }
  );

  if (api === "modern") {
    matcher.addEventListener = addEventListener;
    matcher.removeEventListener = removeEventListener;
  } else {
    matcher.addListener = addListener;
    matcher.removeListener = removeListener;
  }

  return matcher;
}

describe("useTheme", () => {
  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("tracks modern preference changes and invokes the callback", () => {
    const matcher = createMatcher(true);
    vi.stubGlobal("matchMedia", vi.fn(() => matcher));
    const callback = vi.fn();
    const { result, unmount } = renderHook(() => useTheme(callback));

    expect(result.current).toBe("dark");
    expect(matcher.addEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function)
    );

    act(() => {
      matcher.matches = false;
      matcher.emit();
    });
    expect(result.current).toBe("light");
    expect(callback).toHaveBeenCalledWith("light");

    unmount();
    expect(matcher.removeEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function)
    );
  });

  it("supports legacy MediaQueryList listener methods", () => {
    const matcher = createMatcher(false, "legacy");
    vi.stubGlobal("matchMedia", vi.fn(() => matcher));
    const { result, unmount } = renderHook(() => useTheme());

    expect(result.current).toBe("light");
    expect(matcher.addListener).toHaveBeenCalledWith(expect.any(Function));

    act(() => {
      matcher.matches = true;
      matcher.emit();
    });
    expect(result.current).toBe("dark");

    unmount();
    expect(matcher.removeListener).toHaveBeenCalledWith(expect.any(Function));
  });
});

export {};
