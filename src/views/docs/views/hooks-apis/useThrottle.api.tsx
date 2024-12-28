import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";
import Required from "@/components/Required";

// fn: (args: any[]) => R,
// interval: number = 200,
// options: ThrottleOptions = { leading: true, trailing: false }
export default function UseThrottle() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "fn",
      type: "(args: any[]) => R",
      defaultValue: void 0,
      desc: "function to throttle",
    },
    {
      name: "interval",
      type: "number",
      defaultValue: 200,
      desc: "time to throttle",
    },
    {
      name: "options",
      type: "object",
      defaultValue: { leading: true, trailing: false },
      desc: "options of the throttle",
      properties: [
        {
          name: "leading",
          type: "boolean",
          defaultValue: true,
          desc: "call function on leading edge",
        },
        {
          name: "trailing",
          type: "boolean",
          defaultValue: false,
          desc: "call function on trailing edge",
        },
      ],
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "throttleFn",
      type: "function & { cancel: () => void }",
      desc: "throttled function",
      properties: [
        {
          name: "cancel",
          type: "() => void",
          desc: "cancel function",
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
