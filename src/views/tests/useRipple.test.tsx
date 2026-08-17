import { fireEvent, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import React from "react";
import useRipple, { RippleConfig } from "../../hooks/houdini/hooks/useRipple";

function RippleTarget({ config }: { config: RippleConfig }) {
  const ref = useRipple<HTMLButtonElement>(config);
  return <button ref={ref}>Ripple</button>;
}

describe("useRipple", () => {
  afterEach(() => {
    document.body.replaceChildren();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("applies ripple styles for the configured trigger and hides on release", () => {
    vi.stubGlobal("CSS", { paintWorklet: { addModule: vi.fn() } });
    vi.stubGlobal("requestAnimationFrame", vi.fn(() => 1));
    vi.stubGlobal("cancelAnimationFrame", vi.fn());
    const config: RippleConfig = {
      color: "red",
      duration: 500,
      alphaMin: 0.2,
      trigger: "click",
    };
    const { getByRole } = render(<RippleTarget config={config} />);
    const element = getByRole("button");
    vi.spyOn(element, "getBoundingClientRect").mockReturnValue({
      left: 10,
      top: 20,
    } as DOMRect);

    fireEvent.mouseDown(element, { clientX: 35, clientY: 50 });
    expect(element.style.getPropertyValue("--ripple-x")).toBe("");

    fireEvent.click(element, { clientX: 35, clientY: 50 });
    expect(element.style.getPropertyValue("--ripple-x")).toBe("25px");
    expect(element.style.getPropertyValue("--ripple-y")).toBe("30px");
    expect(element.style.getPropertyValue("--ripple-color")).toBe("red");
    expect(element.style.getPropertyValue("--ripple-time")).toBe("0");
    expect(element.style.getPropertyValue("--ripple-alpha-min")).toBe("0.2");

    fireEvent.mouseUp(element);
    expect(element.style.getPropertyValue("--ripple-alpha-min")).toBe("0");
  });

  it("rebinds the listener when the trigger configuration changes", () => {
    vi.stubGlobal("CSS", { paintWorklet: { addModule: vi.fn() } });
    vi.stubGlobal("requestAnimationFrame", vi.fn(() => 1));
    const firstConfig: RippleConfig = { trigger: "click", color: "red" };
    const secondConfig: RippleConfig = { trigger: "pointerdown", color: "blue" };
    const { getByRole, rerender } = render(
      <RippleTarget config={firstConfig} />
    );
    const element = getByRole("button");

    fireEvent.click(element, { clientX: 1, clientY: 2 });
    expect(element.style.getPropertyValue("--ripple-color")).toBe("red");

    element.style.removeProperty("--ripple-color");
    rerender(<RippleTarget config={secondConfig} />);
    fireEvent.click(element, { clientX: 1, clientY: 2 });
    expect(element.style.getPropertyValue("--ripple-color")).toBe("");

    fireEvent.pointerDown(element, { clientX: 1, clientY: 2 });
    expect(element.style.getPropertyValue("--ripple-color")).toBe("blue");
  });

  it("cancels frame id zero on unmount", () => {
    vi.stubGlobal("CSS", { paintWorklet: { addModule: vi.fn() } });
    const requestAnimationFrame = vi.fn(() => 0);
    const cancelAnimationFrame = vi.fn();
    vi.stubGlobal("requestAnimationFrame", requestAnimationFrame);
    vi.stubGlobal("cancelAnimationFrame", cancelAnimationFrame);
    const { getByRole, unmount } = render(
      <RippleTarget config={{ trigger: "click" }} />
    );
    fireEvent.click(getByRole("button"));
    cancelAnimationFrame.mockClear();

    unmount();

    expect(cancelAnimationFrame).toHaveBeenCalledWith(0);
  });
});

export {};
