import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseSingleton() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "createInstance",
      type: "() => T",
      desc: "Factory invoked to create the instance on the first render of this component instance.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "instance",
      type: "T",
      desc: "The same instance returned by the factory on subsequent renders.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useSingleton</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
