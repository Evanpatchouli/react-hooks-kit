import { act, cleanup, renderHook, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import React from "react";
import useGuide from "../../hooks/useGuide";

describe("useGuide", () => {
  afterEach(() => {
    cleanup();
    document.body.replaceChildren();
  });

  it("renders each step, controls navigation, and cleans up on stop", async () => {
    const target = document.createElement("div");
    target.id = "guide-target";
    target.style.zIndex = "7";
    document.body.append(target);

    const renderGuide = vi.fn((id: string, name: string, data: unknown) => (
      <span data-guide-id={id} data-guide-name={name}>
        {String((data as { label: string }).label)}
      </span>
    ));
    const callback = vi.fn();
    const steps = [
      {
        ids: ["guide-target"],
        name: "First",
        data: { label: "one" },
        renders: [{ id: "guide-target", render: renderGuide }],
      },
      {
        ids: ["guide-target"],
        name: "Second",
        data: { label: "two" },
        renders: [{ id: "guide-target", render: renderGuide }],
      },
    ];
    const { result } = renderHook(() => useGuide(steps, callback));

    expect(result.current[0]).toBe(-1);

    act(() => result.current[1].start());

    await waitFor(() => {
      expect(result.current[0]).toBe(0);
      expect(renderGuide).toHaveBeenCalledWith(
        "guide-target",
        "First",
        { label: "one" },
        ["guide-target"]
      );
    });
    expect(callback).toHaveBeenCalledWith(0, steps[0]);
    expect(target.style.zIndex).toBe("1000");
    expect(target.querySelector("[data-guide-name='First']")).not.toBeNull();
    expect(
      Array.from(document.body.children).some(
        (element) => (element as HTMLElement).style.position === "fixed"
      )
    ).toBe(true);

    act(() => result.current[1].next());

    await waitFor(() => {
      expect(result.current[0]).toBe(1);
      expect(target.querySelector("[data-guide-name='Second']")).not.toBeNull();
    });
    expect(target.querySelector("[data-guide-name='First']")).toBeNull();

    act(() => result.current[1].stop());

    await waitFor(() => {
      expect(result.current[0]).toBe(-1);
      expect(target.querySelector("[data-guide-name='Second']")).toBeNull();
    });
    expect(target.style.zIndex).toBe("7");
    expect(
      Array.from(document.body.children).some(
        (element) => (element as HTMLElement).style.position === "fixed"
      )
    ).toBe(false);
  });

  it("applies zero-valued and pointer-events mask configuration", async () => {
    const target = document.createElement("div");
    target.id = "mask-target";
    document.body.append(target);
    const { result } = renderHook(() =>
      useGuide(
        [{ ids: ["mask-target"] }],
        undefined,
        {
          maskConfig: {
            opacity: 0,
            zIndex: 0,
            pointerEvents: "auto",
          },
        }
      )
    );

    act(() => result.current[1].start());

    await waitFor(() => {
      const mask = Array.from(document.body.children).find(
        (element) => (element as HTMLElement).style.position === "fixed"
      ) as HTMLElement | undefined;
      expect(mask).toBeDefined();
      expect(mask?.style.opacity).toBe("0");
      expect(mask?.style.zIndex).toBe("0");
      expect(mask?.style.pointerEvents).toBe("auto");
    });
  });
});

export {};
