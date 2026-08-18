import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseForceUpdateApi() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "callback",
      type: "(previousRender: number) => void",
      defaultValue: "undefined",
      desc: "Optional callback invoked before the render counter is incremented.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "forceUpdate",
      type: "(callback?: (previousRender: number) => void) => void",
      desc: "Schedules a render without changing application state.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useForceUpdate</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">ReturnValue (Function)</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
