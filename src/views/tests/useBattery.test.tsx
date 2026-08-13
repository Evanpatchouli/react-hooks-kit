import { act, renderHook, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import useBattery from "../../hooks/useBattery";

type MockBattery = EventTarget & {
  charging: boolean;
  level: number;
  chargingTime: number;
  dischargingTime: number;
};

describe("useBattery", () => {
  let battery: MockBattery;
  let getBattery: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    battery = Object.assign(new EventTarget(), {
      charging: false,
      level: 0.5,
      chargingTime: 120,
      dischargingTime: 3600,
    });
    getBattery = vi.fn(() => Promise.resolve(battery));
    Object.defineProperty(navigator, "getBattery", {
      configurable: true,
      value: getBattery,
    });
  });

  afterEach(() => {
    delete (navigator as Navigator & { getBattery?: unknown }).getBattery;
  });

  it("loads the initial battery status", async () => {
    const { result } = renderHook(() => useBattery());

    expect(result.current).toBeNull();
    await waitFor(() =>
      expect(result.current).toEqual({
        charging: false,
        level: 0.5,
        chargingTime: 120,
        dischargingTime: 3600,
      })
    );
    expect(getBattery).toHaveBeenCalledTimes(1);
  });

  it("updates status and calls the matching callback for battery events", async () => {
    const onChargingChange = vi.fn();
    const onLevelChange = vi.fn();
    const onChargingTimeChange = vi.fn();
    const onDischargingTimeChange = vi.fn();
    const callbacks = {
      onChargingChange,
      onLevelChange,
      onChargingTimeChange,
      onDischargingTimeChange,
    };
    const { result } = renderHook(() =>
      useBattery(undefined, callbacks)
    );

    await waitFor(() => expect(result.current).not.toBeNull());

    await act(async () => {
      battery.charging = true;
      battery.dispatchEvent(new Event("chargingchange"));
      battery.level = 0.4;
      battery.dispatchEvent(new Event("levelchange"));
      battery.chargingTime = 60;
      battery.dispatchEvent(new Event("chargingtimechange"));
      battery.dischargingTime = 4000;
      battery.dispatchEvent(new Event("dischargingtimechange"));
      await Promise.resolve();
    });

    expect(result.current).toEqual({
      charging: true,
      level: 0.4,
      chargingTime: 60,
      dischargingTime: 4000,
    });
    expect(onChargingChange).toHaveBeenLastCalledWith({
      charging: true,
      level: 0.5,
      chargingTime: 120,
      dischargingTime: 3600,
    });
    expect(onLevelChange).toHaveBeenLastCalledWith({
      charging: true,
      level: 0.4,
      chargingTime: 120,
      dischargingTime: 3600,
    });
    expect(onChargingTimeChange).toHaveBeenLastCalledWith({
      charging: true,
      level: 0.4,
      chargingTime: 60,
      dischargingTime: 3600,
    });
    expect(onDischargingTimeChange).toHaveBeenLastCalledWith(result.current);
  });

  it("supports the legacy charging callback argument", async () => {
    const onChargingChange = vi.fn();
    const { result } = renderHook(() => useBattery(onChargingChange));

    await waitFor(() => expect(result.current).not.toBeNull());
    act(() => {
      battery.charging = true;
      battery.dispatchEvent(new Event("chargingchange"));
    });

    expect(onChargingChange).toHaveBeenCalledWith({
      charging: true,
      level: 0.5,
      chargingTime: 120,
      dischargingTime: 3600,
    });
  });

  it("removes battery event listeners on unmount", async () => {
    const removeEventListener = vi.spyOn(battery, "removeEventListener");
    const onLevelChange = vi.fn();
    const { unmount } = renderHook(() =>
      useBattery(undefined, { onLevelChange })
    );

    await waitFor(() => expect(getBattery).toHaveBeenCalled());
    unmount();

    expect(removeEventListener).toHaveBeenCalledTimes(4);
    act(() => {
      battery.level = 0.2;
      battery.dispatchEvent(new Event("levelchange"));
    });
    expect(onLevelChange).not.toHaveBeenCalled();
  });
});

export {};
