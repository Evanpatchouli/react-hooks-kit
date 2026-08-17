import { cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useWhyDidYouUpdate from "../../hooks/useWhyDidYouUpdate";

describe("useWhyDidYouUpdate", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("skips the initial render and logs changed fields on later renders", () => {
    const log = vi.spyOn(console, "log").mockImplementation(() => undefined);
    const { rerender } = renderHook(
      ({ props }: { props: { count: number; label?: string } }) =>
        useWhyDidYouUpdate("Counter", props),
      { initialProps: { props: { count: 1, label: "same" } } }
    );

    expect(log).not.toHaveBeenCalled();

    rerender({ props: { count: 2, label: "same" } });
    expect(log).toHaveBeenCalledWith("[why-did-you-update]", "Counter", {
      count: { from: 1, to: 2 },
    });

    rerender({ props: { count: 2, label: "same" } });
    expect(log).toHaveBeenCalledTimes(1);
  });

  it("reports added and removed properties", () => {
    const log = vi.spyOn(console, "log").mockImplementation(() => undefined);
    const { rerender } = renderHook(
      ({ props }: { props: Record<string, unknown> }) =>
        useWhyDidYouUpdate("Props", props),
      { initialProps: { props: { existing: true } } }
    );

    rerender({ props: { existing: true, added: 1 } });
    expect(log).toHaveBeenLastCalledWith("[why-did-you-update]", "Props", {
      added: { from: undefined, to: 1 },
    });

    rerender({ props: { existing: true } });
    expect(log).toHaveBeenLastCalledWith("[why-did-you-update]", "Props", {
      added: { from: 1, to: undefined },
    });
  });
});

export {};
