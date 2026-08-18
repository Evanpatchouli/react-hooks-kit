import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseBeforeMount() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "callback",
      type: "() => void",
      desc: "Function invoked once during the component's first render, before it mounts.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "value",
      type: "void",
      desc: "The Hook invokes the callback before mount and does not return a value.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useBeforeMount</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
