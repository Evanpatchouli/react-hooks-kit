import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseBroadcastChannel() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "channelName",
      type: "string",
      desc: "Same-origin BroadcastChannel name shared by communicating contexts.",
    },
    {
      name: "messageHandler",
      type: "(message: T) => void",
      desc: "Called when another channel instance posts a message.",
    },
    {
      name: "parser",
      type: "boolean | ((data?: string) => T)",
      defaultValue: true,
      desc: "Controls JSON parsing or transforms the received serialized data with a custom parser.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "postMessage",
      type: "(message: T) => void",
      desc: "Serializes and posts a message to other channel instances.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useBroadcastChannel</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
