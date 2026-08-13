import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import useConsoleLog from "../../hooks/useConsoleLog";

describe("useConsoleLog", () => {
  let originalLog: typeof console.log;
  let logSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    originalLog = console.log;
    logSpy = vi.spyOn(console, "log").mockImplementation(() => undefined);
  });

  afterEach(() => {
    console.log = originalLog;
    vi.restoreAllMocks();
  });

  it("captures formatted console.log arguments and forwards the call", () => {
    const { result, unmount } = renderHook(() => useConsoleLog());

    act(() => {
      console.log("hello", 42, true);
    });

    expect(result.current).toEqual(["hello 42 true"]);
    expect(logSpy).toHaveBeenCalledWith("hello", 42, true);
    unmount();
  });

  it("restores console.log after unmount", () => {
    const { unmount } = renderHook(() => useConsoleLog());

    expect(console.log).not.toBe(logSpy);
    unmount();

    expect(console.log).toBe(logSpy);
  });

  it("keeps other hook instances subscribed when one unmounts", () => {
    const first = renderHook(() => useConsoleLog());
    const second = renderHook(() => useConsoleLog());

    act(() => {
      console.log("before");
    });
    first.unmount();
    act(() => {
      console.log("after");
    });

    expect(first.result.current).toEqual(["before"]);
    expect(second.result.current).toEqual(["before", "after"]);
    second.unmount();
  });
});

export {};
