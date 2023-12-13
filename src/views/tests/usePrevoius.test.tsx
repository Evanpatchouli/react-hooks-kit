import { renderHook, act } from "@testing-library/react";
import usePrevious from "../../hooks/usePrevious";
import { useState } from "react";
import { useHookCur } from "./util";

describe("usePrevious", () => {
  it("should store the previous number", () => {
    const [s, Ss] = useHookCur(() => useState(0));
    const { result, rerender } = renderHook(() => usePrevious(s));
    act(() => {
      Ss(1);
      rerender();
    });

    expect(result.current).toBe(0);
  });

  // more tests

  it("should store the previous string", () => {
    const {
      result: {
        current: [s, Ss],
      },
    } = renderHook(() => useState(""));
    const { result, rerender } = renderHook(() => usePrevious(s));
    act(() => {
      Ss("new");
      rerender();
    });

    expect(result.current).toBe("");
  });

  it("should store the previous object", () => {
    const {
      result: {
        current: [s, Ss],
      },
    } = renderHook(() => useState({}));
    const { result, rerender } = renderHook(() => usePrevious(s));
    act(() => {
      Ss({ a: 1 });
      rerender();
    });

    expect(result.current).toEqual({});
  });

  it("should store the previous array", () => {
    const {
      result: {
        current: [s, Ss],
      },
    } = renderHook(() => useState<number[]>([]));
    const { result, rerender } = renderHook(() => usePrevious(s));
    act(() => {
      Ss([1, 2, 3]);
      rerender();
    });

    expect(result.current).toEqual([]);
  });

  it("should store the previous boolean", () => {
    const {
      result: {
        current: [s, Ss],
      },
    } = renderHook(() => useState(false));
    const { result, rerender } = renderHook(() => usePrevious(s));
    act(() => {
      Ss(true);
      rerender();
    });

    expect(result.current).toBe(false);
  });

  it("should store the previous null", () => {
    const {
      result: {
        current: [s, Ss],
      },
    } = renderHook(() => useState<null | number>(null));
    const { result, rerender } = renderHook(() => usePrevious(s));
    act(() => {
      Ss(1);
      rerender();
    });

    expect(result.current).toBe(null);
  });

  it("should store the previous undefined", () => {
    const {
      result: {
        current: [s, Ss],
      },
    } = renderHook(() => useState<number>());
    const { result, rerender } = renderHook(() => usePrevious(s));
    act(() => {
      Ss(1);
      rerender();
    });

    expect(result.current).toBe(undefined);
  });

  it("should store the previous symbol", () => {
    const sb = Symbol();
    const {
      result: {
        current: [s, Ss],
      },
    } = renderHook(() => useState<Symbol>(sb));
    const { result, rerender } = renderHook(() => usePrevious(s));
    act(() => {
      Ss(Symbol());
      rerender();
    });

    expect(result.current).toBe(sb);
  });

  it("should store the previous function", () => {
    const fn = () => {};
    const {
      result: {
        current: [s, Ss],
      },
    } = renderHook(() => useState(() => fn));
    const { result, rerender } = renderHook(() => usePrevious(s));
    act(() => {
      Ss(() => {
        const _fn = () => {
          console.log("new");
        };
        return _fn;
      });
      rerender();
    });

    expect(result.current).toBe(fn);
  });

  it("should store the previous bigint", () => {
    const {
      result: {
        current: [s, Ss],
      },
    } = renderHook(() => useState<bigint>(BigInt(1)));
    const { result, rerender } = renderHook(() => usePrevious(s));
    act(() => {
      Ss(BigInt(2));
      rerender();
    });

    expect(result.current).toBe(BigInt(1));
  });

  it("should store the previous date", () => {
    const date = new Date();
    const {
      result: {
        current: [s, Ss],
      },
    } = renderHook(() => useState<Date>(date));
    const { result, rerender } = renderHook(() => usePrevious(s));
    act(() => {
      Ss(new Date());
      rerender();
    });

    expect(result.current).toEqual(date);
  });

  it("should store the previous regexp", () => {
    const reg = new RegExp("");
    const {
      result: {
        current: [s, Ss],
      },
    } = renderHook(() => useState<RegExp>(reg));
    const { result, rerender } = renderHook(() => usePrevious(s));
    act(() => {
      Ss(new RegExp("[A-Z]"));
      rerender();
    });

    expect(result.current).toEqual(reg);
  });

  it("should store the previous error", () => {
    const err = new Error();
    const {
      result: {
        current: [s, Ss],
      },
    } = renderHook(() => useState<Error>(err));
    const { result, rerender } = renderHook(() => usePrevious(s));
    act(() => {
      Ss(new Error("new"));
      rerender();
    });

    expect(result.current).toEqual(err);
  });

  it("should store the previous map", () => {
    const map = new Map();
    const {
      result: {
        current: [s, Ss],
      },
    } = renderHook(() => useState<Map<string, number>>(map));
    const { result, rerender } = renderHook(() => usePrevious(s));
    act(() => {
      Ss(new Map());
      rerender();
    });

    expect(result.current).toEqual(map);
  });

  it("should store the previous set", () => {
    const {
      result: {
        current: [s, Ss],
      },
    } = renderHook(() => useState<Set<number>>(new Set()));
    const { result, rerender } = renderHook(() => usePrevious(s));
    act(() => {
      Ss(new Set());
      rerender();
    });

    expect(result.current).toEqual(new Set());
  });

  it("should store the previous weakmap", () => {
    const {
      result: {
        current: [s, Ss],
      },
    } = renderHook(() => useState<WeakMap<object, number>>(new WeakMap()));
    const { result, rerender } = renderHook(() => usePrevious(s));
    act(() => {
      Ss(new WeakMap());
      rerender();
    });

    expect(result.current).toEqual(new WeakMap());
  });

  it("should store the previous weakset", () => {
    const {
      result: {
        current: [s, Ss],
      },
    } = renderHook(() => useState<WeakSet<object>>(new WeakSet()));
    const { result, rerender } = renderHook(() => usePrevious(s));
    act(() => {
      Ss(new WeakSet());
      rerender();
    });

    expect(result.current).toEqual(new WeakSet());
  });

  it("should store the previous promise", () => {
    const {
      result: {
        current: [s, Ss],
      },
    } = renderHook(() => useState<Promise<number>>(new Promise(() => {})));
    const { result, rerender } = renderHook(() => usePrevious(s));
    act(() => {
      Ss(new Promise(() => {}));
      rerender();
    });

    expect(result.current).toEqual(new Promise(() => {}));
  });

  it("should store the previous class", () => {
    class A {}
    const {
      result: {
        current: [s, Ss],
      },
    } = renderHook(() => useState<A>(new A()));
    const { result, rerender } = renderHook(() => usePrevious(s));
    act(() => {
      Ss(new A());
      rerender();
    });

    expect(result.current).toEqual(new A());
  });

  it("should store the previous class instance", () => {
    class A {}
    class B {}
    const {
      result: {
        current: [s, Ss],
      },
    } = renderHook(() => useState<A>(new A()));
    const { result, rerender } = renderHook(() => usePrevious(s));
    act(() => {
      Ss(new B());
      rerender();
    });

    expect(result.current instanceof A).toBeTruthy();
  });
});
