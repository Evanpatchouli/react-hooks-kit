import { renderHook } from "@testing-library/react";

type InferArgs<T> = T extends (...args: infer A) => any ? A : never;

export const useHookCur = <X extends (initialProps: unknown) => unknown = any>(fn: X) => {
  const {
    result: { current },
  } = renderHook(fn);
  return current as ReturnType<X>;
};

export const useHook = <X extends (initialProps: unknown) => unknown = any>(
  fn: X
): [ReturnType<X>, (props?: InferArgs<X>[0]) => void, () => void] => {
  const {
    result: { current },
    rerender,
    unmount,
  } = renderHook(fn);
  return [current as ReturnType<X>, rerender, unmount];
};
