import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

// fn: (args: any[]) => R,
// interval: number = 200,
// options: ThrottleOptions = { leading: true, trailing: false }
export default function UseThrottle() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "fn",
      type: "(args: any[]) => R",
      defaultValue: void 0,
      desc: "Function whose calls should be throttled.",
    },
    {
      name: "interval",
      type: "number",
      defaultValue: 200,
      desc: "Minimum interval between executions in milliseconds; defaults to 200.",
    },
    {
      name: "options",
      type: "object",
      defaultValue: { leading: true, trailing: false },
      desc: "Controls leading, trailing, and result callback behavior.",
      properties: [
        {
          name: "leading",
          type: "boolean",
          defaultValue: true,
          desc: "Call the function at the beginning of an interval.",
        },
        {
          name: "trailing",
          type: "boolean",
          defaultValue: false,
          desc: "Call the function at the end of an interval when calls occurred during it.",
        },
        {
          name: "callback",
          type: "(result: R) => void",
          defaultValue: void 0,
          desc: "Optional callback invoked with the wrapped function result.",
        },
      ],
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "throttleFn",
      type: "function & { cancel: () => void }",
      desc: "Throttled function that returns a Promise and exposes cancel().",
      properties: [
        {
          name: "cancel",
          type: "() => void",
          desc: "Cancels a pending trailing invocation and resets the throttle window.",
        },
      ],
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">Api of useThrottle</SubTitle>
      <SubTitle low top="20px">
        Parameters
      </SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">
        ReturnValue (Function Object)
      </SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
