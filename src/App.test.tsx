import { renderHook, act } from "@testing-library/react";
import useMemento from "./hooks/useMemento";

test("should initialize with initial state", () => {
  const { result } = renderHook(() => useMemento("initial"));
  expect(result.current[0]).toBe("initial");
});

test("should create memento", () => {
  const { result } = renderHook(() => useMemento("initial"));
  act(() => {
    result.current[1]("new state");
    result.current[2].createMemento("memento 1");
  });
  expect(result.current[2].mementos.length).toBe(1);
  expect(result.current[2].mementos[0].data).toBe("new state");
  expect(result.current[2].mementos[0].name).toBe("memento 1");
});

test("should rollback to previous state", () => {
  const { result } = renderHook(() => useMemento("initial"));
  act(() => {
    result.current[1]("new state");
    result.current[2].rollback();
  });
  expect(result.current[0]).toBe("initial");
});

test("should forward to next state", () => {
  const { result } = renderHook(() => useMemento("initial"));
  act(() => {
    result.current[1]("new state");
    result.current[2].rollback();
    result.current[2].forward();
  });
  expect(result.current[0]).toBe("new state");
});

// 更多测试...
