import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import useEyeDropper, {
  EyeDropperOpenOptions,
  EyeDropperResult,
} from "../../hooks/useEyeDropper";

describe("useEyeDropper", () => {
  let openMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    openMock = vi.fn();

    class MockEyeDropper {
      open(options?: EyeDropperOpenOptions): Promise<EyeDropperResult> {
        return openMock(options);
      }
    }

    Object.defineProperty(window, "EyeDropper", {
      configurable: true,
      value: MockEyeDropper,
    });
  });

  afterEach(() => {
    Reflect.deleteProperty(window, "EyeDropper");
    vi.restoreAllMocks();
  });

  it("detects browser support and uses the configured initial color", () => {
    const { result } = renderHook(() =>
      useEyeDropper({ initialValue: "#112233" })
    );

    expect(result.current.isSupported).toBe(true);
    expect(result.current.sRGBHex).toBe("#112233");
  });

  it("opens the picker and stores the selected color", async () => {
    openMock.mockResolvedValue({ sRGBHex: "#abcdef" });
    const { result } = renderHook(() => useEyeDropper());

    let selected: EyeDropperResult | undefined;
    await act(async () => {
      selected = await result.current.open();
    });

    expect(selected).toEqual({ sRGBHex: "#abcdef" });
    expect(result.current.sRGBHex).toBe("#abcdef");
  });

  it("forwards an AbortSignal to the native picker", async () => {
    const controller = new AbortController();
    const options = { signal: controller.signal };
    openMock.mockResolvedValue({ sRGBHex: "#000000" });
    const { result } = renderHook(() => useEyeDropper());

    await act(async () => {
      await result.current.open(options);
    });

    expect(openMock).toHaveBeenCalledWith(options);
  });

  it("returns undefined without opening when the API is unsupported", async () => {
    Reflect.deleteProperty(window, "EyeDropper");
    const { result } = renderHook(() => useEyeDropper());

    let selected: EyeDropperResult | undefined;
    await act(async () => {
      selected = await result.current.open();
    });

    expect(result.current.isSupported).toBe(false);
    expect(selected).toBeUndefined();
    expect(openMock).not.toHaveBeenCalled();
  });

  it("propagates native errors without changing the selected color", async () => {
    const error = new DOMException("The user canceled", "AbortError");
    openMock.mockRejectedValue(error);
    const { result } = renderHook(() =>
      useEyeDropper({ initialValue: "#ffffff" })
    );

    await expect(result.current.open()).rejects.toBe(error);
    expect(result.current.sRGBHex).toBe("#ffffff");
  });

  it("does not update state after the component unmounts", async () => {
    let resolvePicker!: (value: EyeDropperResult) => void;
    openMock.mockReturnValue(
      new Promise<EyeDropperResult>((resolve) => {
        resolvePicker = resolve;
      })
    );
    const { result, unmount } = renderHook(() => useEyeDropper());
    const selection = result.current.open();

    unmount();
    resolvePicker({ sRGBHex: "#123456" });

    await expect(selection).resolves.toEqual({ sRGBHex: "#123456" });
  });
});

export {};
