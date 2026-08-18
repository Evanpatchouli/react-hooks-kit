import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseMediaQuery() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "query",
      type: "MediaQueryTemplate",
      desc: "CSS media query string evaluated with window.matchMedia.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "matches",
      type: "boolean",
      desc: "Whether the media query currently matches.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useMediaQuery</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
