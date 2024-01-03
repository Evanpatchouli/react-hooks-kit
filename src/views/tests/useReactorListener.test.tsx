import { renderHook, act } from "@testing-library/react";
import useReactorListener from "../../hooks/useReactorListener";
import useReactor from "../../hooks/useReactor";
import { useState } from "react";

describe("useReactorListener", () => {
  it("will listen a reactor value changes", () => {
    const { result: reactor } = renderHook(() => useReactor(0));
    const { result: copy } = renderHook(() => useState<any>(void 0));
    renderHook(() =>
      useReactorListener(reactor.current, (v) => {
        copy.current[1](v);
      })
    );
    act(() => {
      reactor.current.setValue(1);
    });
    expect(copy.current[0]).toBe(1);
  });
  it("default is unimmediate", () => {
    const { result: reactor } = renderHook(() => useReactor(0));
    const { result: copy } = renderHook(() => useState<any>(void 0));
    renderHook(() =>
      useReactorListener(reactor.current, (v) => {
        copy.current[1](v);
      })
    );
    expect(copy.current[0]).toBe(void 0);
  });
  it("immediate mode will call callback at initial", () => {
    const { result: reactor } = renderHook(() => useReactor(0));
    const { result: copy } = renderHook(() => useState<any>(void 0));
    renderHook(() =>
      useReactorListener(
        reactor.current,
        (v) => {
          copy.current[1](v);
        },
        true
      )
    );
    expect(copy.current[0]).toBe(0);
  });
  it("unimmediate mode will not call callback at initial", () => {
    const { result: reactor } = renderHook(() => useReactor(0));
    const { result: copy } = renderHook(() => useState<any>(void 0));
    renderHook(() =>
      useReactorListener(
        reactor.current,
        (v) => {
          copy.current[1](v);
        },
        false
      )
    );
    expect(copy.current[0]).toBe(void 0);
  });
});
