import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseMount() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "callback",
      type: "() => void | (() => void)",
      desc: "Effect callback invoked according to the supplied dependency list. It may return a cleanup function.",
    },
    {
      name: "arg2",
      type: "((error: any) => void) | any[]",
      desc: "Optional error handler or dependency list.",
    },
    {
      name: "arg3",
      type: "any[]",
      defaultValue: [],
      desc: "Dependency list used when arg2 is an error handler.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [];

  return (
    <>
      <SubTitle id="hook-api">API of useMount</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
