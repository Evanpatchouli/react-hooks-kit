import { renderHook, act } from "@testing-library/react";
import useMemento from "./hooks/useMemento";

describe("useMemento", () => {
  it("should handle state changes", () => {
    const { result } = renderHook(() => useMemento(0));

    act(() => {
      result.current[1](1);
    });

    expect(result.current[0]).toBe(1);
  });

  // it("should handle memento creation", () => {
  //   const { result } = renderHook(() => useMemento(0));

  //   act(() => {
  //     result.current[1](1);
  //   });

  //   act(() => {
  //     result.current[2].createMemento("memento 1");
  //   });

  //   expect(result.current[2].mementos).toHaveLength(1);
  //   expect(result.current[2].mementos[0].data).toBe(1);
  // });

  // it("should handle memento deletion", () => {
  //   const { result } = renderHook(() => useMemento(0));

  //   act(() => {
  //     result.current[1](1);
  //   });

  //   act(() => {
  //     result.current[2].createMemento("memento 1");
  //   });

  //   act(() => {
  //     result.current[2].deleteMemento(result.current[2].mementos[0].idKey);
  //   });

  //   expect(result.current[2].mementos).toHaveLength(0);
  // });

  // it("should handle rollback", () => {
  //   const { result } = renderHook(() => useMemento(0));

  //   act(() => {
  //     result.current[1](1);
  //   });

  //   act(() => {
  //     result.current[2].rollback();
  //   });

  //   expect(result.current[0]).toBe(0);
  // });

  // it("should handle forward", () => {
  //   const { result } = renderHook(() => useMemento(0));

  //   act(() => {
  //     result.current[1](1);
  //   });

  //   act(() => {
  //     result.current[2].rollback();
  //   });

  //   act(() => {
  //     result.current[2].forward();
  //   });

  //   expect(result.current[0]).toBe(1);
  // });

  // Add more tests for other functions as needed
});

// 更多测试...
