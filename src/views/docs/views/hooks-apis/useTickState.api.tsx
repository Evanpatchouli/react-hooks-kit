import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";
import Required from "@/components/Required";

export default function UseTickState() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "initial",
      type: "T",
      defaultValue: null,
      desc: "initial state",
    },
    {
      name: "tickBy",
      type: '"onSetState"|"onChange"',
      defaultValue: "onSetState",
      desc: "The trigger to increment the tick",
    },
    {
      name: "dependencies",
      type: "Array | (state) => Array",
      defaultValue: "[state]",
      desc: "onChange useEffect dependencies",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "[0] state",
      type: "T",
      defaultValue: null,
      desc: "state",
    },
    {
      name: "[1] setState",
      type: "SetStateAction",
      desc: "setState function",
    },
    {
      name: "[2] tick",
      type: "number",
      desc: "tick (value changes)",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">Api of useTickState</SubTitle>
      <SubTitle low top="20px">
        Generics{"<T extends unknown = any>"}
      </SubTitle>
      <SubTitle low top="20px">
        Parameters
      </SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">
        ReturnValue (Array)
      </SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
