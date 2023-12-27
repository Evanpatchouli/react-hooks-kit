import { renderHook, act } from "@testing-library/react";
import { useReactor, ReactorPlugin } from "../../hooks/useReactor";

describe("useReactor", () => {
  it("should initialize with provided value", () => {
    const { result } = renderHook(() => useReactor(10));
    expect(result.current.value).toBe(10);
  });

  it("should set new value", () => {
    const { result } = renderHook(() => useReactor(10));
    act(() => {
      result.current.value = 20;
    });
    expect(result.current.value).toBe(20);
  });

  it("should reset to initial value", () => {
    const { result } = renderHook(() => useReactor(10));
    act(() => {
      result.current.value = 20;
    });
    act(() => {
      result.current.reset();
    });
    expect(result.current.getDefaultValue()).toBe(10);
  });

  it("should use plugins", () => {
    const plugin: ReactorPlugin<number> = {
      name: "double",
      action: (state, payload, that) => {
        that.setValue(state * 2);
      },
    };
    const { result } = renderHook(() => useReactor(10, [plugin]));
    act(() => {
      result.current.dispatch("double");
    });
    expect(result.current.value).toBe(20);
  });
});
