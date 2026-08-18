import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseLazyApi() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "importFunction",
      type: "() => Promise<T>",
      desc: "Function that loads or creates the value on mount.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "module",
      type: "T | null",
      desc: "The resolved module value, or null while loading or after failure.",
    },
    {
      name: "loading",
      type: "boolean",
      desc: "Whether the load operation is pending.",
    },
    {
      name: "error",
      type: "Error | null",
      desc: "The loading error, or null when no error occurred.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useLazy</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">ReturnValue (Object)</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
