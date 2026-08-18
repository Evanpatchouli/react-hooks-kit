import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useProtect from "../../hooks/useProtect";

describe("useProtect", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("updates primitive data directly and with a functional updater", () => {
    const { result } = renderHook(() => useProtect(1));

    act(() => {
      result.current[1](2);
    });
    expect(result.current[0]).toBe(2);

    act(() => {
      result.current[1]((value) => value + 3);
    });
    expect(result.current[0]).toBe(5);
  });

  it("throws the default message for a boolean protection condition", () => {
    const { result } = renderHook(() => useProtect(1, true));

    expect(() => {
      act(() => {
        result.current[1](2);
      });
    }).toThrow("Data is protected and cannot be modified.");
    expect(result.current[0]).toBe(1);
  });

  it("uses a string condition message", () => {
    const { result } = renderHook(() => useProtect(1, "Locked"));

    expect(() => {
      act(() => {
        result.current[1](2);
      });
    }).toThrow("Locked");
    expect(result.current[0]).toBe(1);
  });

  it("evaluates function conditions", () => {
    const condition = vi.fn((_oldValue: number, newValue?: number) =>
      (newValue ?? 0) > 5 ? "Value is too large" : null
    );
    const { result } = renderHook(() => useProtect<number>(1, condition));

    act(() => {
      result.current[1](3);
    });
    expect(result.current[0]).toBe(3);
    expect(condition).toHaveBeenCalledWith(1, 3);

    expect(() => {
      act(() => {
        result.current[1](6);
      });
    }).toThrow("Value is too large");
    expect(result.current[0]).toBe(3);
  });

  it("supports BigInt state without serializing it", () => {
    const { result } = renderHook(() => useProtect(BigInt(1)));

    act(() => {
      result.current[1](BigInt(2));
    });
    expect(result.current[0]).toBe(BigInt(2));
  });
});

export {};
