import { fireEvent, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import React from "react";
import useParticle, { ParticleConfig } from "../../hooks/houdini/hooks/useParticle";

function ParticleTarget({
  config,
  enable,
}: {
  config: ParticleConfig;
  enable: boolean;
}) {
  const ref = useParticle<HTMLButtonElement>(config, enable);

  return <button ref={ref}>Particle</button>;
}

describe("useParticle", () => {
  afterEach(() => {
    document.body.replaceChildren();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("applies particle values for the configured trigger", () => {
    vi.stubGlobal("CSS", { paintWorklet: { addModule: vi.fn() } });
    vi.stubGlobal("requestAnimationFrame", vi.fn(() => 1));
    vi.stubGlobal("cancelAnimationFrame", vi.fn());
    const config: ParticleConfig = {
      color: "red",
      duration: 500,
      num: 7,
      size: 4,
      trigger: "click",
    };
    const { getByRole } = render(
      <ParticleTarget config={config} enable={true} />
    );
    const element = getByRole("button");
    vi.spyOn(element, "getBoundingClientRect").mockReturnValue({
      left: 10,
      top: 20,
    } as DOMRect);

    fireEvent.mouseDown(element, { clientX: 35, clientY: 50 });
    expect(element.style.getPropertyValue("--particle-x")).toBe("");

    fireEvent.click(element, { clientX: 35, clientY: 50 });
    expect(element.style.getPropertyValue("--particle-x")).toBe("25px");
    expect(element.style.getPropertyValue("--particle-y")).toBe("30px");
    expect(element.style.getPropertyValue("--particle-color")).toBe("red");
    expect(element.style.getPropertyValue("--particle-size")).toBe("4");
    expect(element.style.getPropertyValue("--particle-num")).toBe("7");
    expect(element.style.getPropertyValue("--particle-time")).not.toBe("");
  });

  it("responds when enable changes", () => {
    vi.stubGlobal("CSS", { paintWorklet: { addModule: vi.fn() } });
    const config: ParticleConfig = {};
    const { getByRole, rerender } = render(
      <ParticleTarget config={config} enable={false} />
    );
    const element = getByRole("button");
    vi.spyOn(element, "getBoundingClientRect").mockReturnValue({
      left: 0,
      top: 0,
    } as DOMRect);

    fireEvent.mouseDown(element, { clientX: 10, clientY: 20 });
    expect(element.style.getPropertyValue("--particle-x")).toBe("");

    rerender(<ParticleTarget config={config} enable={true} />);
    fireEvent.mouseDown(element, { clientX: 10, clientY: 20 });
    expect(element.style.getPropertyValue("--particle-x")).toBe("10px");
  });

  it("preserves zero-valued numeric options", () => {
    vi.stubGlobal("CSS", { paintWorklet: { addModule: vi.fn() } });
    vi.stubGlobal("requestAnimationFrame", vi.fn(() => 1));
    const config: ParticleConfig = { num: 0, size: 0 };
    const { getByRole } = render(
      <ParticleTarget config={config} enable={true} />
    );
    const element = getByRole("button");

    fireEvent.mouseDown(element, { clientX: 10, clientY: 20 });

    expect(element.style.getPropertyValue("--particle-num")).toBe("0");
    expect(element.style.getPropertyValue("--particle-size")).toBe("0");
  });

  it("cancels an active animation when unmounted", () => {
    vi.stubGlobal("CSS", { paintWorklet: { addModule: vi.fn() } });
    const requestAnimationFrame = vi.fn(() => 12);
    const cancelAnimationFrame = vi.fn();
    vi.stubGlobal("requestAnimationFrame", requestAnimationFrame);
    vi.stubGlobal("cancelAnimationFrame", cancelAnimationFrame);
    const config: ParticleConfig = {};
    const { getByRole, unmount } = render(
      <ParticleTarget config={config} enable={true} />
    );
    const element = getByRole("button");

    fireEvent.mouseDown(element, { clientX: 10, clientY: 20 });
    unmount();

    expect(requestAnimationFrame).toHaveBeenCalledTimes(1);
    expect(cancelAnimationFrame).toHaveBeenCalledWith(12);
  });
});

export {};
