import { fireEvent, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useHover from "../../hooks/useHover";

function HoverTarget({ onHover }: { onHover: () => void }) {
  const ref = useHover<HTMLDivElement>(onHover);

  return (
    <div ref={ref} data-testid="hover-target">
      <span>Target</span>
    </div>
  );
}

describe("useHover", () => {
  afterEach(() => {
    document.body.replaceChildren();
  });

  it("calls the callback when the bound element is hovered", () => {
    const onHover = vi.fn();
    const { getByTestId } = render(<HoverTarget onHover={onHover} />);
    const target = getByTestId("hover-target");

    fireEvent.mouseEnter(target);
    expect(onHover).toHaveBeenCalledTimes(1);

    fireEvent.mouseEnter(document.body);
    expect(onHover).toHaveBeenCalledTimes(1);
  });

  it("uses the latest callback and removes listeners on unmount", () => {
    const firstCallback = vi.fn();
    const secondCallback = vi.fn();
    const { getByTestId, rerender, unmount } = render(
      <HoverTarget onHover={firstCallback} />
    );
    const target = getByTestId("hover-target");

    fireEvent.mouseEnter(target);
    rerender(<HoverTarget onHover={secondCallback} />);
    fireEvent.mouseEnter(target);

    expect(firstCallback).toHaveBeenCalledTimes(1);
    expect(secondCallback).toHaveBeenCalledTimes(1);

    unmount();
    fireEvent.mouseEnter(target);
    expect(secondCallback).toHaveBeenCalledTimes(1);
  });
});

export {};
