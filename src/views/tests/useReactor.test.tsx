import { renderHook, act } from "@testing-library/react";
import { useReactor, ReactorPlugin } from "../../hooks/useReactor";

describe("useReactor", () => {
  // @1
  it("should initialize with provided value", () => {
    const { result } = renderHook(() => useReactor(10));
    expect(result.current.value).toBe(10);
  });

  // @2
  it("should set new value", () => {
    const { result } = renderHook(() => useReactor(10));
    act(() => {
      result.current.value = 20;
    });
    expect(result.current.value).toBe(20);
  });

  // @3
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

  // @4
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

  // @5
  it("should clone the reactor", () => {
    const { result } = renderHook(() => useReactor(10));
    const clone = result.current.clone();
    expect(clone.value).toBe(10);
  });

  // @6
  it("should subscribe to value changes", () => {
    const { result } = renderHook(() => useReactor(10));
    const mockFn = jest.fn();
    result.current.subscribe(mockFn);
    act(() => {
      result.current.value = 20;
    });
    expect(mockFn).toHaveBeenCalledWith(20);
  });

  // @7
  it("should emit and listen to custom events", () => {
    const { result } = renderHook(() => useReactor(10));
    const mockFn = jest.fn();
    result.current.on("customEvent", mockFn);
    act(() => {
      result.current.emit("customEvent", "payload");
    });
    expect(mockFn).toHaveBeenCalledWith("payload");
  });

  // @8
  it("should update state when setState is called", () => {
    const { result } = renderHook(() => useReactor({ a: 1 }));
    act(() => {
      result.current.setValue({ a: 2 });
    });
    expect(result.current.value).toEqual({ a: 2 });
  });
});
