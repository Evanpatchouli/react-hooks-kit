import { renderHook, act } from "@testing-library/react";
import useTickState from "../../hooks/useTickState";

describe("useTickState", () => {
  it("should initialize with the correct state", () => {
    const { result } = renderHook(() => useTickState("test"));
    expect(result.current[0]).toEqual("test");
    expect(result.current[2]).toEqual(0);
  });

  it("should set state and increment tick", () => {
    const { result } = renderHook(() => useTickState("test"));

    act(() => {
      result.current[1]("new state");
    });

    expect(result.current[0]).toEqual("new state");
    expect(result.current[2]).toEqual(1);
  });

  it("should increment tick on multiple state updates", () => {
    const { result } = renderHook(() => useTickState("test"));

    act(() => {
      result.current[1]("new state");
      result.current[1]("newer state");
    });

    expect(result.current[0]).toEqual("newer state");
    expect(result.current[2]).toEqual(2);
  });
});
