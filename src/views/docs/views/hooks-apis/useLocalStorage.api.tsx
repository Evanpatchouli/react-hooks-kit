import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseLocalStorageApi() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "key",
      type: "string",
      desc: "localStorage key used to persist the value.",
    },
    {
      name: "initialValue",
      type: "T",
      desc: "Fallback value used when the key does not contain valid JSON.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "[0] storedValue",
      type: "T",
      desc: "Current parsed localStorage value.",
    },
    {
      name: "[1] setValue",
      type: "(value: T) => void",
      desc: "Serializes and stores a new value, then updates the Hook state.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useLocalStorage</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">ReturnValue (Array)</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
