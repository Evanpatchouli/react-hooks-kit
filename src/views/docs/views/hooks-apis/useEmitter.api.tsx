import ApiTable from "@/components/api-table";
import { SubTitle } from "@components/layout/Article";

export default function UseEmitter() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "nameOrConfig",
      type: "string | Partial<EventEmitterConfig>",
      desc: "Emitter name or configuration object. A unique name is generated when omitted.",
      properties: [
        { name: "name", type: "string", desc: "Name used to identify this emitter's listeners." },
        { name: "namespace", type: "string", defaultValue: "default", desc: "Namespace separating events with the same event name." },
        { name: "initialEventName", type: "string", desc: "Event to subscribe to during setup in the overload that provides an initial listener." },
        { name: "initialListener", type: "(...args: any[]) => void", desc: "Listener registered for initialEventName during setup." },
      ],
    },
    {
      name: "initialEventName",
      type: "string",
      desc: "Event name used by the positional overload with an initial listener.",
    },
    {
      name: "initialListener",
      type: "(...args: any[]) => void",
      desc: "Listener registered for the positional initialEventName.",
    },
    {
      name: "config",
      type: "Partial<EventEmitterConfig>",
      desc: "Optional configuration when using the positional overload.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    { name: "name", type: "string", desc: "Resolved emitter name." },
    { name: "emit", type: "(eventName: string, ...args: any[]) => void", desc: "Publishes an event to listeners in the same namespace." },
    { name: "subscribe", type: "(eventName: string, listener: (...args: any[]) => void) => void", desc: "Registers a listener for an event." },
    { name: "unsubscribe", type: "(eventName: string) => void", desc: "Removes this emitter's listener for an event." },
    { name: "unsubscribeAll", type: "() => void", desc: "Removes all listeners registered by this emitter." },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useEmitter</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
