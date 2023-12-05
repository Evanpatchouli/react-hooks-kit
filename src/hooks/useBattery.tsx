import { useState, useEffect, useMemo } from "react";

interface BatteryStatus {
  charging: boolean;
  level: number;
  chargingTime: number;
  dischargingTime: number;
}

interface BatteryManager extends EventTarget {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  onchargingchange: EventListenerOrEventListenerObject | null;
  onchargingtimechange: EventListenerOrEventListenerObject | null;
  ondischargingtimechange: EventListenerOrEventListenerObject | null;
  onlevelchange: EventListenerOrEventListenerObject | null;
  addEventListener(
    type: "chargingchange",
    listener: EventListenerOrEventListenerObject | null,
    useCapture?: boolean
  ): void;
  addEventListener(
    type: "chargingtimechange",
    listener: EventListenerOrEventListenerObject | null,
    useCapture?: boolean
  ): void;
  addEventListener(
    type: "dischargingtimechange",
    listener: EventListenerOrEventListenerObject | null,
    useCapture?: boolean
  ): void;
  addEventListener(
    type: "levelchange",
    listener: EventListenerOrEventListenerObject | null,
    useCapture?: boolean
  ): void;
}

declare global {
  interface Navigator {
    /** declared by `@evanpatchouli/react-hooks-kit`, maynot exists */
    getBattery(): Promise<BatteryManager>;
  }
  interface Window {
    // @ts-ignore
    navigator: Navigator;
  }
}

function useBattery(
  onChargingChange?: (info: BatteryStatus) => void,
  callbacks?: {
    onChargingChange?: (info: BatteryStatus) => void;
    onLevelChange?: (info: BatteryStatus) => void;
    onChargingTimeChange?: (info: BatteryStatus) => void;
    onDischargingTimeChange?: (info: BatteryStatus) => void;
  }
): BatteryStatus | null {
  const [batteryStatus, setBatteryStatus] = useState<BatteryStatus | null>(null);
  const _callbacks = useMemo(() => {
    return {
      ...callbacks,
      onChargingChange: callbacks?.onChargingChange || onChargingChange,
    };
  }, [callbacks, onChargingChange]);

  useEffect(() => {
    let battery: BatteryManager | null = null;

    navigator.getBattery().then((bat: BatteryManager) => {
      battery = bat;
      setBatteryStatus({
        charging: battery.charging,
        level: battery.level,
        chargingTime: battery.chargingTime,
        dischargingTime: battery.dischargingTime,
      });

      const updateAllBatteryInfo = () => {
        setBatteryStatus({
          charging: battery!.charging,
          level: battery!.level,
          chargingTime: battery!.chargingTime,
          dischargingTime: battery!.dischargingTime,
        });
      };

      const handleChargingChange = () => {
        updateAllBatteryInfo();
        if (_callbacks.onChargingChange) {
          _callbacks.onChargingChange({
            charging: battery!.charging,
            level: battery!.level,
            chargingTime: battery!.chargingTime,
            dischargingTime: battery!.dischargingTime,
          });
        }
      };

      const handleLevelChange = () => {
        updateAllBatteryInfo();
        if (_callbacks.onLevelChange) {
          _callbacks.onLevelChange({
            charging: battery!.charging,
            level: battery!.level,
            chargingTime: battery!.chargingTime,
            dischargingTime: battery!.dischargingTime,
          });
        }
      };

      const handleChargingTimeChange = () => {
        updateAllBatteryInfo();
        if (_callbacks.onChargingTimeChange) {
          _callbacks.onChargingTimeChange({
            charging: battery!.charging,
            level: battery!.level,
            chargingTime: battery!.chargingTime,
            dischargingTime: battery!.dischargingTime,
          });
        }
      };

      const handleDischargingTimeChange = () => {
        updateAllBatteryInfo();
        if (_callbacks.onDischargingTimeChange) {
          _callbacks.onDischargingTimeChange({
            charging: battery!.charging,
            level: battery!.level,
            chargingTime: battery!.chargingTime,
            dischargingTime: battery!.dischargingTime,
          });
        }
      };

      battery.addEventListener("chargingchange", handleChargingChange);
      battery.addEventListener("levelchange", handleLevelChange);
      battery.addEventListener("chargingtimechange", handleChargingTimeChange);
      battery.addEventListener("dischargingtimechange", handleDischargingTimeChange);
    });

    return () => {
      if (battery) {
        battery.onchargingchange = null;
        battery.onlevelchange = null;
        battery.onchargingtimechange = null;
        battery.ondischargingtimechange = null;
      }
    };
  }, [_callbacks]);

  return batteryStatus;
}

export default useBattery;
