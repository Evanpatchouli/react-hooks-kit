import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import useLocalStorage from "../../hooks/useLocalStorage";

describe("useLocalStorage", () => {
  afterEach(() => {
    window.localStorage.clear();
  });

  it("reads and writes JSON values while updating the hook state", () => {
    window.localStorage.setItem("settings", JSON.stringify({ dark: true }));
    const { result } = renderHook(() =>
      useLocalStorage("settings", { dark: false })
    );

    expect(result.current[0]).toEqual({ dark: true });

    act(() => {
      result.current[1]({ dark: false });
    });

    expect(result.current[0]).toEqual({ dark: false });
    expect(JSON.parse(window.localStorage.getItem("settings")!)).toEqual({
      dark: false,
    });
  });

  it("responds to matching storage events and ignores other keys", () => {
    const { result } = renderHook(() => useLocalStorage("count", 0));

    act(() => {
      window.dispatchEvent(
        new StorageEvent("storage", {
          key: "other",
          newValue: JSON.stringify(10),
        })
      );
    });
    expect(result.current[0]).toBe(0);

    act(() => {
      window.dispatchEvent(
        new StorageEvent("storage", {
          key: "count",
          newValue: JSON.stringify(10),
        })
      );
    });
    expect(result.current[0]).toBe(10);
  });

  it("loads the new value when the storage key changes", () => {
    window.localStorage.setItem("first", JSON.stringify("one"));
    window.localStorage.setItem("second", JSON.stringify("two"));
    const { result, rerender } = renderHook(
      ({ key }: { key: string }) => useLocalStorage(key, "fallback"),
      { initialProps: { key: "first" } }
    );

    expect(result.current[0]).toBe("one");

    rerender({ key: "second" });
    expect(result.current[0]).toBe("two");
  });
});

export {};
