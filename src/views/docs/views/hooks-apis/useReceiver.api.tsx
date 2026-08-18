import ApiTable from "@/components/api-table";
import { SubTitle } from "@components/layout/Article";

export default function UseReceiver() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "eventNameOrOptions",
      type: "string | EventReceiverOptions",
      desc: "Event name or configuration object describing the receiver.",
      properties: [
        { name: "eventName", type: "string", desc: "Event to receive. Required in the options overload." },
        { name: "name", type: "string", desc: "Optional unique receiver name." },
        { name: "namespace", type: "string", defaultValue: "default", desc: "Namespace shared with the corresponding emitter." },
        { name: "callback", type: "(...args: any[]) => void", desc: "Optional callback invoked with each received event payload." },
      ],
    },
    {
      name: "callback",
      type: "(...args: any[]) => void",
      desc: "Optional callback in the positional overload.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "[0] eventResult",
      type: "any[] | null",
      defaultValue: null,
      desc: "Arguments from the latest received event, or null before the first event.",
    },
    {
      name: "[1] receiver",
      type: "EventReceiver",
      desc: "Controls subscription state and stores the receiver status.",
      properties: [
        { name: "start", type: "() => void", desc: "Subscribes to the event again." },
        { name: "stop", type: "() => void", desc: "Unsubscribes from the event." },
        { name: "reset", type: "(args: any[]) => void", desc: "Replaces the stored event result." },
        { name: "isListening", type: "boolean", desc: "Whether the receiver is currently subscribed." },
      ],
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useReceiver</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
