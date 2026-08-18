import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseUpdate() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "callback",
      type: "() => void",
      desc: "Callback invoked after a dependency changes, but not after the initial render.",
    },
    {
      name: "dependencies",
      type: "React.DependencyList",
      desc: "Values that trigger the callback after the first render when they change.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "value",
      type: "void",
      desc: "The Hook runs the callback after dependency changes and does not return a value.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useUpdate</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
