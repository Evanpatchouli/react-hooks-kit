import useNetworkStatus from "@/hooks/useNetWork";

export default function Nightly() {
  const netWork = useNetworkStatus();
  return (
    <div>
      <h1>{JSON.stringify(netWork, null, 2)}</h1>
    </div>
  );
}
