import { renderHook, act } from "@testing-library/react";
import useReactive from "../../hooks/useReactive";

describe("useReactive", () => {
  it("should initialize with the correct state", () => {
    const { result } = renderHook(() => useReactive({ test: "test" }));
    expect(result.current.test).toEqual("test");
  });

  it("should react to state changes", () => {
    const { result } = renderHook(() => useReactive({ test: "test" }));

    act(() => {
      result.current.test = "new state";
    });

    expect(result.current.test).toEqual("new state");
  });

  it("should react to state changes when deep is false", () => {
    const { result } = renderHook(() =>
      useReactive({ test: { inner: "test" } }, false)
    );

    act(() => {
      result.current.test.inner = "new state";
    });

    expect(result.current.test.inner).toEqual("new state");
  });

  it("should react to state changes when deep is true", () => {
    const { result } = renderHook(() =>
      useReactive({ test: { inner: "test" } }, true)
    );

    act(() => {
      result.current.test.inner = "new state";
    });

    expect(result.current.test.inner).toEqual("new state");
  });

  it("should trigger callback on state change", () => {
    const callback = jest.fn();
    const { result } = renderHook(() =>
      useReactive({ test: "test" }, callback)
    );

    act(() => {
      result.current.test = "new state";
    });

    expect(callback).toHaveBeenCalledWith({ test: "new state" });
  });

  it("should trigger multiple callbacks on state change", () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();
    const { result } = renderHook(() =>
      useReactive({ test: "test" }, callback1, callback2)
    );

    act(() => {
      result.current.test = "new state";
    });

    expect(callback1).toHaveBeenCalledWith({ test: "new state" });
    expect(callback2).toHaveBeenCalledWith({ test: "new state" });
  });

  it("should handle array state", () => {
    const { result } = renderHook(() => useReactive([1, 2, 3]));
    // @ts-ignore
    expect(result.current.toJSON()).toEqual([1, 2, 3]);
  });

  it("should handle nested array state", () => {
    const { result } = renderHook(() => useReactive({ test: [1, 2, 3] }));
    // @ts-ignore
    expect(result.current.test.toJSON()).toEqual([1, 2, 3]);
  });

  it("should handle function state", () => {
    const { result } = renderHook(() =>
      useReactive({ test: () => "test" as string })
    );

    act(() => {
      result.current.test = () => "new state";
    });

    expect(result.current.test()).toEqual("new state");
  });

  it("should handle nested function state", () => {
    const { result } = renderHook(() =>
      useReactive({ test: { inner: () => "test" as string } })
    );

    act(() => {
      result.current.test.inner = () => "new state";
    });

    expect(result.current.test.inner()).toEqual("new state");
  });
});
