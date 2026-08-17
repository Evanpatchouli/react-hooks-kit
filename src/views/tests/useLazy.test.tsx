import { renderHook, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useLazy from "../../hooks/useLazy";

describe("useLazy", () => {
  afterEach(() => {
    document.body.replaceChildren();
  });

  it("loads a module and exposes the completed state", async () => {
    const moduleValue = { default: "loaded" };
    const importFunction = vi.fn(() => Promise.resolve(moduleValue));
    const { result } = renderHook(() => useLazy(importFunction));

    expect(result.current.loading).toBe(true);
    expect(result.current.module).toBeNull();
    expect(result.current.error).toBeNull();

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.module).toBe(moduleValue);
    expect(result.current.error).toBeNull();
    expect(importFunction).toHaveBeenCalledTimes(1);
  });

  it("exposes import failures and stops loading", async () => {
    const error = new Error("import failed");
    const importFunction = vi.fn(() => Promise.reject(error));
    const { result } = renderHook(() => useLazy(importFunction));

    await waitFor(() => {
      expect(result.current.error).toBe(error);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.module).toBeNull();
  });

  it("does not repeat an inline import function after state updates", async () => {
    const moduleValue = { name: "inline" };
    const load = vi.fn(() => Promise.resolve(moduleValue));
    const { result } = renderHook(() => useLazy(() => load()));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.module).toBe(moduleValue);
    expect(load).toHaveBeenCalledTimes(1);
  });
});

export {};
