import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseNetWork() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "throttleInterval",
      type: "number",
      defaultValue: 0,
      desc: "Minimum interval used to throttle status updates. Values above approximately 17ms are recommended.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "status",
      type: "NetworkStatus",
      desc: "Current online state and available Network Information API values.",
      properties: [
        { name: "online", type: "boolean", desc: "Whether navigator.onLine reports an online connection." },
        { name: "downlink", type: "number", desc: "Estimated downlink speed in Mbps, or 0 when unavailable." },
        { name: "uplink", type: "number", desc: "Estimated uplink speed in Mbps when available." },
        { name: "effectiveType", type: "\"slow-2g\" | \"2g\" | \"3g\" | \"4g\" | \"5g\"", desc: "Estimated effective connection type." },
        { name: "rtt", type: "number", desc: "Estimated round-trip time in milliseconds." },
        { name: "saveData", type: "boolean", desc: "Whether reduced-data mode is requested." },
        { name: "type", type: "string", desc: "Connection technology type when available." },
      ],
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useNetWork</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
