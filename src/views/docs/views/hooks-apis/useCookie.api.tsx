import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseCookie() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "name",
      type: "string",
      desc: "Cookie name used for reading and writing the document cookie.",
    },
    {
      name: "initialValue",
      type: "string",
      desc: "Fallback value used when the cookie does not already exist.",
    },
    {
      name: "days",
      type: "number",
      desc: "Number of days until the cookie expires. A falsy value creates a session cookie.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    { name: "[0] value", type: "string", desc: "Current cookie value." },
    { name: "[1] setValue", type: "(value: string) => void", desc: "Updates React state and writes the encoded cookie." },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useCookie</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value (tuple)</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
