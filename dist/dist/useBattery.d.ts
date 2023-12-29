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
    addEventListener(type: "chargingchange", listener: EventListenerOrEventListenerObject | null, useCapture?: boolean): void;
    addEventListener(type: "chargingtimechange", listener: EventListenerOrEventListenerObject | null, useCapture?: boolean): void;
    addEventListener(type: "dischargingtimechange", listener: EventListenerOrEventListenerObject | null, useCapture?: boolean): void;
    addEventListener(type: "levelchange", listener: EventListenerOrEventListenerObject | null, useCapture?: boolean): void;
}
declare global {
    interface Navigator {
        /** declared by `@evanpatchouli/react-hooks-kit`, maynot exists */
        getBattery(): Promise<BatteryManager>;
    }
    interface Window {
        navigator: Navigator;
    }
}
declare function useBattery(onChargingChange?: (info: BatteryStatus) => void, callbacks?: {
    onChargingChange?: (info: BatteryStatus) => void;
    onLevelChange?: (info: BatteryStatus) => void;
    onChargingTimeChange?: (info: BatteryStatus) => void;
    onDischargingTimeChange?: (info: BatteryStatus) => void;
}): BatteryStatus | null;
export default useBattery;
