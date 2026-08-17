import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useVirtualArea, {
  VirtualAreaOptions,
} from "../../hooks/useVirtualArea";

type ObserverHarness = {
  observer: {
    observe: ReturnType<typeof vi.fn>;
    disconnect: ReturnType<typeof vi.fn>;
  };
  trigger: (isIntersecting: boolean) => void;
};

function mockIntersectionObserver(): ObserverHarness {
  let callback: IntersectionObserverCallback | undefined;
  const observer = {
    observe: vi.fn(),
    disconnect: vi.fn(),
  };
  const IntersectionObserverMock = vi.fn(function (
    this: typeof observer,
    nextCallback: IntersectionObserverCallback
  ) {
    callback = nextCallback;
    this.observe = observer.observe;
    this.disconnect = observer.disconnect;
  });
  vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

  return {
    observer,
    trigger(isIntersecting) {
      callback?.(
        [{ isIntersecting } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    },
  };
}

function VirtualAreaHarness({
  options,
}: {
  options: VirtualAreaOptions;
}) {
  const [, loading, , renderArea] = useVirtualArea(options);
  return (
    <div data-testid="state" data-loading={String(loading)}>
      {renderArea()}
    </div>
  );
}

function createOptions(
  loadMoreItems: () => Promise<void>,
  overrides: Partial<VirtualAreaOptions> = {}
): VirtualAreaOptions {
  return {
    loadMoreItems,
    items: ["one", "two"],
    hasMore: true,
    height: 200,
    renderItem: (item) => <span>{item}</span>,
    ...overrides,
  };
}

describe("useVirtualArea", () => {
  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("renders items, empty/loading states, styles, and observes the loader", () => {
    const { observer } = mockIntersectionObserver();
    const loadMoreItems = vi.fn(async () => undefined);
    render(
      <VirtualAreaHarness
        options={createOptions(loadMoreItems, {
          items: [],
          hasMore: false,
          renderEmpty: "Nothing here",
          style: { backgroundColor: "white" },
          observerOptions: { rootMargin: "40px", threshold: 0.5 },
        })}
      />
    );

    expect(screen.getByText("Nothing here")).toBeInTheDocument();
    expect(screen.getByText("No more data")).toBeInTheDocument();
    const container = screen.getByTestId("state").firstElementChild as HTMLElement;
    expect(container).toHaveStyle({ overflow: "auto", height: "200px" });
    expect(container.style.backgroundColor).toBe("white");
    expect(observer.observe).toHaveBeenCalledWith(
      expect.objectContaining({ textContent: "No more data" })
    );
  });

  it("prevents concurrent loads and resets loading after completion", async () => {
    const { trigger } = mockIntersectionObserver();
    let resolveLoad!: () => void;
    const loadMoreItems = vi.fn(
      () => new Promise<void>((resolve) => (resolveLoad = resolve))
    );
    render(
      <VirtualAreaHarness options={createOptions(loadMoreItems)} />
    );

    act(() => {
      trigger(true);
      trigger(true);
    });
    expect(loadMoreItems).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId("state")).toHaveAttribute(
      "data-loading",
      "true"
    );

    await act(async () => {
      resolveLoad();
      await Promise.resolve();
    });
    expect(screen.getByTestId("state")).toHaveAttribute(
      "data-loading",
      "false"
    );
  });

  it("resets loading when loading fails", async () => {
    const { trigger } = mockIntersectionObserver();
    const loadMoreItems = vi.fn(async () => {
      throw new Error("network error");
    });
    render(
      <VirtualAreaHarness options={createOptions(loadMoreItems)} />
    );

    await act(async () => {
      trigger(true);
      await Promise.resolve();
    });

    expect(loadMoreItems).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId("state")).toHaveAttribute(
      "data-loading",
      "false"
    );
  });
});

export {};
