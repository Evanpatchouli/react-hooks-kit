import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseBattery() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "onChargingChange",
      type: "(info: BatteryStatus) => void",
      desc: "Optional positional callback invoked when charging state changes.",
    },
    {
      name: "callbacks",
      type: "object",
      desc: "Optional callbacks for battery status events.",
      properties: [
        { name: "onChargingChange", type: "(info: BatteryStatus) => void", desc: "Called when charging state changes." },
        { name: "onLevelChange", type: "(info: BatteryStatus) => void", desc: "Called when battery level changes." },
        { name: "onChargingTimeChange", type: "(info: BatteryStatus) => void", desc: "Called when charging time changes." },
        { name: "onDischargingTimeChange", type: "(info: BatteryStatus) => void", desc: "Called when discharging time changes." },
      ],
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "batteryStatus",
      type: "BatteryStatus | null",
      defaultValue: null,
      desc: "Current battery information, or null until getBattery resolves.",
      properties: [
        { name: "charging", type: "boolean", desc: "Whether the device is charging." },
        { name: "level", type: "number", desc: "Battery level from 0 to 1." },
        { name: "chargingTime", type: "number", desc: "Estimated charging time in seconds." },
        { name: "dischargingTime", type: "number", desc: "Estimated discharging time in seconds." },
      ],
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useBattery</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
