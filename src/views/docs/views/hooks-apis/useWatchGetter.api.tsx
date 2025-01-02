import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";
import Required from "@/components/Required";

export default function UseWatchGetter() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "getter",
      type: "getter function",
      required: true,
      defaultValue: void 0,
      desc: "getter function should return a value",
    },
    {
      name: "callback",
      type: "(value: T) => void | undefined",
      defaultValue: void 0,
      desc: "callback function when value changed",
    },
    {
      name: "updater",
      type: "boolean",
      defaultValue: "false",
      desc: "if true, return [value, updater]",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "value or array",
      type: "T | [T, Function]",
      defaultValue: null,
      desc: "value or Array([value, updater])",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">Api of useWatchGetter</SubTitle>
      <SubTitle low top="20px">
        Parameters
      </SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">
        ReturnValue (value or Array([value, updater]))
      </SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
