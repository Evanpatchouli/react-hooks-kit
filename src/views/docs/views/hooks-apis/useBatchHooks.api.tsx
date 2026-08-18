import ApiTable from "@/components/api-table";
import { SubTitle } from "@components/layout/Article";

export default function UseBatchHooks() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "hook",
      type: "Hook",
      desc: "Hook function to invoke for every batch item.",
    },
    {
      name: "count",
      type: "number",
      desc: "Number of Hook instances to create in the count overload.",
    },
    {
      name: "args",
      type: "Parameters<Hook>",
      desc: "Arguments passed to every Hook instance in the count overload.",
    },
    {
      name: "hooks",
      type: "{ hook: Hook; args: Parameters<Hook> }[]",
      desc: "Alternative overload that defines a Hook and its arguments for each item.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "results",
      type: "ReturnType<Hook>[]",
      desc: "Return values from the Hook instances in creation order.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useBatchHooks</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
