import { act, renderHook, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import useCookie from "../../hooks/useCookie";

describe("useCookie", () => {
  beforeEach(() => {
    document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    document.cookie = "profile.name=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  });

  afterEach(() => {
    document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    document.cookie = "profile.name=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  });

  it("uses the existing cookie instead of the initial value", async () => {
    document.cookie = "session=stored; path=/";

    const { result } = renderHook(() => useCookie("session", "initial", 7));

    expect(result.current[0]).toBe("stored");
    await waitFor(() => expect(document.cookie).toContain("session=stored"));
  });

  it("uses the initial value and persists it when the cookie is absent", async () => {
    const { result } = renderHook(() => useCookie("session", "initial", 7));

    expect(result.current[0]).toBe("initial");
    await waitFor(() => expect(document.cookie).toContain("session=initial"));
  });

  it("updates the state and persists a value containing special characters", async () => {
    const { result } = renderHook(() => useCookie("session", "initial", 7));

    act(() => {
      result.current[1]("hello world; 你好");
    });

    expect(result.current[0]).toBe("hello world; 你好");
    await waitFor(() =>
      expect(document.cookie).toContain("session=hello%20world%3B%20%E4%BD%A0%E5%A5%BD")
    );
  });

  it("reads cookie names containing regular expression characters", () => {
    document.cookie = "profile.name=stored; path=/";

    const { result } = renderHook(() =>
      useCookie("profile.name", "initial", 7)
    );

    expect(result.current[0]).toBe("stored");
  });
});

export {};
