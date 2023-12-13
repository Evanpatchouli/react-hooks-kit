import { renderHook, act } from "@testing-library/react";
import useToggle from "../../hooks/useToggle";

describe("useToggle", () => {
  it("should toggle the value", () => {
    const { result } = renderHook(() => useToggle(false));
    const [value, toggle] = result.current;

    expect(value).toBe(false);

    act(() => {
      toggle();
    });

    expect(result.current[0]).toBe(true);
  });

  it("should toggle the value with a boolify value", () => {
    const { result } = renderHook(() => useToggle(false));
    const [value, toggle] = result.current;

    expect(value).toBe(false);

    act(() => {
      toggle(true);
    });

    expect(result.current[0]).toBe(true);
  });

  it("should return the value with a map", () => {
    const { result } = renderHook(() =>
      useToggle(false, {
        true: "TRUE",
        false: "FALSE",
      })
    );
    const [value, toggle] = result.current;

    expect(value).toBe("FALSE");

    act(() => {
      toggle();
    });

    expect(result.current[0]).toBe("TRUE");
  });

  it("should return the value with a map and a boolify value", () => {
    const { result } = renderHook(() =>
      useToggle(false, {
        true: "TRUE",
        false: "FALSE",
      })
    );
    const [value, toggle] = result.current;

    expect(value).toBe("FALSE");

    act(() => {
      // @ts-ignore
      toggle("YES");
    });

    expect(result.current[0]).toBe("TRUE");
  });
});
