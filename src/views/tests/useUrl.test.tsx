import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useUrl from "../../hooks/useUrl";

describe("useUrl", () => {
  afterEach(() => {
    cleanup();
    window.history.replaceState({}, "", "/");
    vi.restoreAllMocks();
  });

  it("parses encoded, boolean, numeric, and equals-containing values", () => {
    window.history.replaceState(
      {},
      "",
      "/?count=2&enabled=true&name=Evan+Patchouli&token=a%3Db"
    );
    const { result } = renderHook(() => useUrl());

    expect(result.current.params).toEqual({
      count: 2,
      enabled: true,
      name: "Evan Patchouli",
      token: "a=b",
    });
    expect(result.current.href).toBe(window.location.href);
    expect(typeof result.current.pushState).toBe("function");

    act(() => {
      result.current.pushState({}, "", "/?source=returned");
    });
    expect(window.location.search).toBe("?source=returned");
  });

  it("passes custom parser values from the current URL", () => {
    window.history.replaceState({}, "", "/?date=2026-08-17");
    const parseDate = vi.fn((value: string | undefined) =>
      value ? new Date(`${value}T00:00:00Z`) : undefined
    );
    const { result } = renderHook(() =>
      useUrl<{ date: Date }>(undefined, undefined, undefined, {
        custom: { date: parseDate },
      })
    );

    expect(parseDate).toHaveBeenCalledWith("2026-08-17");
    expect(result.current.params.date).toEqual(
      new Date("2026-08-17T00:00:00Z")
    );
  });

  it("updates on popstate, supports immediate callbacks, and cleans up", () => {
    window.history.replaceState({}, "", "/?page=1");
    const callback = vi.fn();
    const { result, unmount } = renderHook(() =>
      useUrl(undefined, "pages", true, {})
    );

    expect(callback).not.toHaveBeenCalled();
    expect(result.current.name).toBe("pages");

    const callbackHook = renderHook(() =>
      useUrl(callback, "pages", true, {})
    );
    expect(callback).toHaveBeenCalledTimes(1);

    window.history.pushState({}, "", "/?page=2");
    act(() => {
      window.dispatchEvent(new PopStateEvent("popstate"));
    });

    expect(callback).toHaveBeenCalledTimes(2);
    expect(callbackHook.result.current.params.page).toBe(2);

    callbackHook.unmount();
    callback.mockClear();
    window.history.pushState({}, "", "/?page=3");
    act(() => {
      window.dispatchEvent(new PopStateEvent("popstate"));
    });
    expect(callback).not.toHaveBeenCalled();

    unmount();
  });
});

export {};
