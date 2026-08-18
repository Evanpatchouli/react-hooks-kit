import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseWhyDidYouUpdate() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "name",
      type: "string",
      desc: "Label included in the diagnostic console message.",
    },
    {
      name: "props",
      type: "Record<string, any>",
      desc: "Current props or values to compare with the previous render.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "value",
      type: "void",
      desc: "The Hook reports shallow prop changes through console.log and does not return a value.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useWhyDidYouUpdate</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
