import { act, renderHook, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import useAsyncEffect from "../../hooks/useAsyncEffect";

describe("useAsyncEffect", () => {
  it("runs the effect and calls onFinally after it settles", async () => {
    const cleanup = vi.fn();
    let resolveEffect!: (value: () => void) => void;
    const effect = vi.fn(
      () =>
        new Promise<void | (() => void)>((resolve) => {
          resolveEffect = resolve;
        })
    );
    const onFinally = vi.fn();
    const { unmount } = renderHook(() =>
      useAsyncEffect(effect, [], { onFinally })
    );

    expect(effect).toHaveBeenCalledTimes(1);
    expect(onFinally).not.toHaveBeenCalled();

    await act(async () => {
      resolveEffect(cleanup);
      await Promise.resolve();
    });

    expect(onFinally).toHaveBeenCalledTimes(1);
    unmount();

    expect(cleanup).toHaveBeenCalledTimes(1);
  });

  it("runs cleanup after unmount when the effect resolves afterward", async () => {
    const cleanup = vi.fn();
    let resolveEffect!: (value: () => void) => void;
    const { unmount } = renderHook(() =>
      useAsyncEffect(
        () =>
          new Promise<void | (() => void)>((resolve) => {
            resolveEffect = resolve;
          }),
        []
      )
    );

    unmount();
    await act(async () => {
      resolveEffect(cleanup);
      await Promise.resolve();
    });

    expect(cleanup).toHaveBeenCalledTimes(1);
  });

  it("handles rejected effects and runs onFinally after rejection", async () => {
    const error = new Error("async effect failed");
    const onError = vi.fn();
    const onFinally = vi.fn();

    renderHook(() =>
      useAsyncEffect(
        async () => {
          throw error;
        },
        [],
        { onError, onFinally }
      )
    );

    await waitFor(() => expect(onError).toHaveBeenCalledWith(error));
    expect(onFinally).toHaveBeenCalledTimes(1);
  });

  it("cleans up before rerunning when dependencies change", async () => {
    const cleanups = [vi.fn(), vi.fn()];
    let effectIndex = 0;
    const { rerender, unmount } = renderHook(
      ({ value }) =>
        useAsyncEffect(async () => cleanups[effectIndex++], [value]),
      { initialProps: { value: 1 } }
    );

    await waitFor(() => expect(effectIndex).toBe(1));
    rerender({ value: 2 });
    await waitFor(() => expect(effectIndex).toBe(2));

    expect(cleanups[0]).toHaveBeenCalledTimes(1);
    unmount();
    expect(cleanups[1]).toHaveBeenCalledTimes(1);
  });
});

export {};
