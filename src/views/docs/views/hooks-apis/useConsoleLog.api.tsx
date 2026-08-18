import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseConsoleLog() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "none",
      type: "—",
      desc: "This Hook takes no parameters.",
    },
  ];
  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "logs",
      type: "string[]",
      desc: "Messages captured from console.log while this component is subscribed.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useConsoleLog</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
