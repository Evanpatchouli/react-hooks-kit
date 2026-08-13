import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import useClickAway from "../../hooks/useClickAway";

describe("useClickAway", () => {
  it("calls the handler for clicks outside the referenced element", () => {
    const onClickAway = vi.fn();
    const { result } = renderHook(() => useClickAway(onClickAway));
    const inside = document.createElement("button");
    const outside = document.createElement("div");
    document.body.append(inside, outside);
    result.current.current = inside;

    outside.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));

    expect(onClickAway).toHaveBeenCalledTimes(1);
    document.body.replaceChildren();
  });

  it("ignores clicks inside the referenced element", () => {
    const onClickAway = vi.fn();
    const { result } = renderHook(() => useClickAway(onClickAway));
    const inside = document.createElement("button");
    const child = document.createElement("span");
    inside.append(child);
    document.body.append(inside);
    result.current.current = inside;

    child.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));

    expect(onClickAway).not.toHaveBeenCalled();
    document.body.replaceChildren();
  });

  it("removes the document listener on unmount", () => {
    const onClickAway = vi.fn();
    const { result, unmount } = renderHook(() => useClickAway(onClickAway));
    const inside = document.createElement("button");
    const outside = document.createElement("div");
    document.body.append(inside, outside);
    result.current.current = inside;

    unmount();
    outside.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));

    expect(onClickAway).not.toHaveBeenCalled();
    document.body.replaceChildren();
  });
});

export {};
