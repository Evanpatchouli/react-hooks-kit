import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseWatchGetter() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "getter",
      type: "() => T",
      required: true,
      defaultValue: void 0,
      desc: "Function that returns the value to watch.",
    },
    {
      name: "callback",
      type: "(value: T) => void",
      defaultValue: void 0,
      desc: "Optional callback invoked when the getter result changes.",
    },
    {
      name: "updater",
      type: "boolean",
      defaultValue: false,
      desc: "Whether to return a manual update function with the value.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "value or tuple",
      type: "T | [T, () => void]",
      defaultValue: null,
      desc: "Current value, or [value, update] when updater is true.",
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
