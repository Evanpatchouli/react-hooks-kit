import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseRaf() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "callback",
      type: "FrameRequestCallback",
      desc: "Function invoked on every animation frame with the high-resolution timestamp.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "value",
      type: "void",
      desc: "The Hook runs the animation frame loop and does not return a value.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useRaf</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
