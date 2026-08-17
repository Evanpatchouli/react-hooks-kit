import { act, cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useToast from "../../hooks/useToast";

function findToast(className: string) {
  return document.querySelector(`.${className}`) as HTMLDivElement | null;
}

describe("useToast", () => {
  afterEach(() => {
    cleanup();
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    document.body.replaceChildren();
  });

  it("renders a toast with merged styles and removes it after its duration", () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useToast());

    act(() => {
      result.current("Saved", {
        duration: 100,
        className: "toast-saved",
        color: "red",
        bgColor: "white",
        placement: "top",
        style: { zIndex: 10 },
      });
    });

    const element = findToast("toast-saved");
    expect(element).not.toBeNull();
    expect(element).toHaveTextContent("Saved");
    expect(element?.style.position).toBe("fixed");
    expect(element?.style.color).toBe("red");
    expect(element?.style.backgroundColor).toBe("white");
    expect(element?.style.top).toBe("10%");
    expect(element?.style.zIndex).toBe("10");

    act(() => {
      vi.advanceTimersByTime(99);
    });
    expect(findToast("toast-saved")).not.toBeNull();

    act(() => {
      vi.advanceTimersByTime(1);
    });
    expect(findToast("toast-saved")).toBeNull();
  });

  it("honors delay before showing a toast and supports bottom placement", () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useToast({ delay: 50, duration: 100 }));

    act(() => {
      result.current.bottom("Queued", { className: "toast-queued" });
    });
    expect(findToast("toast-queued")).toBeNull();

    act(() => {
      vi.advanceTimersByTime(49);
    });
    expect(findToast("toast-queued")).toBeNull();

    act(() => {
      vi.advanceTimersByTime(1);
    });
    const element = findToast("toast-queued");
    expect(element).not.toBeNull();
    expect(element).toHaveStyle({ bottom: "10%" });
    expect(element?.style.top).toBe("");
  });

  it("uses explicit coordinates for object placement", () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useToast());

    act(() => {
      result.current("Positioned", {
        className: "toast-positioned",
        placement: { x: 24, y: 36 },
      });
    });

    const element = findToast("toast-positioned");
    expect(element).not.toBeNull();
    expect(element?.style.left).toBe("24px");
    expect(element?.style.top).toBe("36px");
    expect(element?.style.transform).toBe("none");
  });
});

export {};
