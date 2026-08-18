import useNetWork from "@hooks/useNetWork";

const View = () => {
  const status = useNetWork(100);

  return (
    <div>
      <p>Online: {String(status.online)}</p>
      <p>Connection: {status.effectiveType ?? "unknown"}</p>
      <p>Downlink: {status.downlink ?? 0} Mbps</p>
      <p>RTT: {status.rtt ?? "unknown"} ms</p>
    </div>
  );
};

const code = `
import useNetWork from "@hooks/useNetWork";

const View = () => {
  const status = useNetWork(100);

  return (
    <pre>{JSON.stringify(status, null, 2)}</pre>
  );
};
`;

export default {
  code,
  View,
};
