import useBattery from "@hooks/useBattery";
import { useCallback } from "react";

const BatteryDemo = () => {
  const handleLevelChange = useCallback((info: { level: number }) => {
    console.log("Battery level changed", info.level);
  }, []);
  const battery = useBattery(undefined, { onLevelChange: handleLevelChange });

  if (!battery) return <p>Reading battery information...</p>;

  return (
    <div>
      <p>Charging: {String(battery.charging)}</p>
      <p>Level: {Math.round(battery.level * 100)}%</p>
      <p>Discharging time: {battery.dischargingTime}s</p>
    </div>
  );
};

const View = () => {
  if (!("getBattery" in navigator)) {
    return <p>This browser does not expose the Battery Status API.</p>;
  }

  return <BatteryDemo />;
};

const code = `
import useBattery from "@hooks/useBattery";

const BatteryDemo = () => {
  const battery = useBattery();
  if (!battery) return <p>Reading battery information...</p>;

  return <p>Battery level: {Math.round(battery.level * 100)}%</p>;
};

const View = () => {
  if (!("getBattery" in navigator)) {
    return <p>Battery Status API is unavailable.</p>;
  }
  return <BatteryDemo />;
};
`;

export default {
  code,
  View,
};
