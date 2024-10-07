import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";
import Required from "@/components/Required";

export default function UseResize() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "options",
      type: "{ callback?; target? }",
      defaultValue: {},
      desc: "if target is undefined, it will listen to window resize. target chould be id string or ref object",
      properties: [
        {
          name: "callback",
          type: "(size) => void | undefined",
          defaultValue: void 0,
          desc: "callback function when size changed",
        },
        {
          name: "target",
          type: "string | RefObject | undefined",
          defaultValue: void 0,
          desc: "target element to listen resize",
        },
      ],
    },
    {
      name: "deps",
      type: "any[]",
      defaultValue: [],
      desc: "dependencies list",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "size",
      type: "{ width: number, height: number }",
      defaultValue: null,
      desc: "size object",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">Api of useResize</SubTitle>
      <SubTitle low top="20px">
        Parameters
      </SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">
        ReturnValue (Object)
      </SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
