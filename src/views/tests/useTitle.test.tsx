import { act, cleanup, renderHook, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import useTitle from "../../hooks/useTitle";

describe("useTitle", () => {
  afterEach(() => {
    cleanup();
    document.title = "";
  });

  it("sets the initial title, updates it, and restores the original title", () => {
    document.title = "Original title";
    const { result, unmount } = renderHook(() => useTitle("Initial title"));

    expect(result.current[0]).toBe("Initial title");
    expect(document.title).toBe("Initial title");

    act(() => {
      result.current[1]("Updated title");
    });
    expect(result.current[0]).toBe("Updated title");
    expect(document.title).toBe("Updated title");

    unmount();
    expect(document.title).toBe("Original title");
  });

  it("uses the existing title when no initial title is provided", () => {
    document.title = "Existing title";
    const { result } = renderHook(() => useTitle());

    expect(result.current[0]).toBe("Existing title");
    expect(document.title).toBe("Existing title");
  });

  it("synchronizes external document title changes", async () => {
    document.title = "Original title";
    const { result } = renderHook(() => useTitle("Managed title"));

    await act(async () => {
      await Promise.resolve();
    });
    act(() => {
      document.title = "External title";
    });

    await waitFor(() => {
      expect(result.current[0]).toBe("External title");
    });
  });
});

export {};
