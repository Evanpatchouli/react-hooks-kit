import ApiTable, { TagFC } from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";
import Required from "@/components/Required";

export default function UseReactorListener() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "target",
      type: "Reactor<T>",
      defaultValue: <Required children="Required" />,
      desc: "An instance of Reactor Class",
    },
    {
      name: "callback",
      type: TagFC.Function("(value: T) => void"),
      defaultValue: TagFC.Undefined(),
      desc: "Listener invoked with the current Reactor state.",
    },
    {
      name: "immediate",
      type: "boolean",
      defaultValue: false,
      desc: "Whether to invoke the callback immediately with the current Reactor value.",
    },
    // {
    //   name: "valueMap",
    //   type: "object",
    //   defaultValue: { true: true, false: false },
    //   desc: "mapping of returned values",
    //   properties: [
    //     {
    //       name: "true",
    //       type: "boolean | T",
    //       defaultValue: true,
    //        desc: "value returned when toggle is on",
    //     },
    //     {
    //       name: "false",
    //       type: "boolean | F",
    //       defaultValue: false,
    //       desc: "value returned when toggle is off",
    //     },
    //   ],
    // },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "value",
      type: "void",
      desc: "The Hook does not return a value; it registers and cleans up a listener.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">Api of useReactorListener</SubTitle>
      <SubTitle low top="20px">
        Parameters
      </SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">
        ReturnValue (Void)
      </SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
