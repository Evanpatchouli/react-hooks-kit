import { renderHook, act } from "@testing-library/react";
import useMemento from "../../hooks/useMemento";

describe("useMemento", () => {
  it("should manage state and mementos correctly", () => {
    const { result } = renderHook(() => useMemento(0));

    // 测试状态的设置
    act(() => {
      result.current[1](1);
    });
    expect(result.current[0]).toBe(1);

    // 测试备忘录的创建
    act(() => {
      result.current[2].createMemento();
    });
    expect(result.current[2].mementos.length).toBe(1);
    expect(result.current[2].mementos[0].data).toBe(1);

    // 测试回滚，从 1 到 2，应当滚或 1
    act(() => {
      result.current[1](2);
    });
    act(() => {
      result.current[2].rollback();
    });
    expect(result.current[0]).toBe(1);
  });

  it("should handle forward correctly", () => {
    const { result } = renderHook(() => useMemento(0));

    act(() => {
      result.current[1](1);
    });
    act(() => {
      result.current[2].createMemento();
    });
    act(() => {
      result.current[1](2);
    });
    act(() => {
      result.current[2].rollback();
    });
    act(() => {
      result.current[2].forward();
    });

    expect(result.current[0]).toBe(2);
  });

  it("should handle goToHistory correctly", () => {
    const { result } = renderHook(() => useMemento(0));

    act(() => {
      result.current[1](1);
    });
    act(() => {
      result.current[1](2);
    });
    act(() => {
      result.current[2].goToHistory(result.current[2].history[0].idKey);
    });

    expect(result.current[0]).toBe(0);
  });

  it("should handle goToMemento correctly", () => {
    const { result } = renderHook(() => useMemento(0));

    act(() => {
      result.current[1](1);
    });
    act(() => {
      result.current[2].createMemento();
    });
    act(() => {
      result.current[1](2);
    });
    act(() => {
      result.current[2].goToMemento(result.current[2].mementos[0].idKey);
    });

    expect(result.current[0]).toBe(1);
  });

  it("should handle deleteHistory correctly", () => {
    const { result } = renderHook(() => useMemento(0));

    act(() => {
      result.current[1](1);
      result.current[1](2);
      result.current[2].deleteHistory(1);
    });

    expect(result.current[2].history.length).toBe(2);
  });

  it("should handle clearHistory correctly", () => {
    const { result } = renderHook(() => useMemento(0));

    act(() => {
      result.current[1](1);
    });
    act(() => {
      result.current[1](2);
    });
    act(() => {
      result.current[2].clearHistory();
    });

    expect(result.current[2].history.length).toBe(0);
  });

  it("should handle clear correctly", () => {
    const { result } = renderHook(() => useMemento(0));

    act(() => {
      result.current[1](1);
    });
    expect(result.current[0]).toBe(1);
    act(() => {
      result.current[2].createMemento();
    });
    act(() => {
      result.current[1](2);
    });
    expect(result.current[0]).toBe(2);
    act(() => {
      result.current[2].clear();
    });

    expect(result.current[0]).toBe(null);
    expect(result.current[2].history.length).toBe(0);
    expect(result.current[2].mementos.length).toBe(0);
  });
});
