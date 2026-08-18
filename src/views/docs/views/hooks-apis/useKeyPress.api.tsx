import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseKeyPress() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "targetKey",
      type: "string",
      desc: "KeyboardEvent.key value to track, such as Enter or Escape.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "keyPressed",
      type: "boolean",
      defaultValue: false,
      desc: "Whether the target key is currently held according to the window keyboard events.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useKeyPress</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
