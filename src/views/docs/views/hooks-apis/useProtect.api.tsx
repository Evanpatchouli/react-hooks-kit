import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseProtect() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "initialData",
      type: "T",
      desc: "Initial state value returned by the Hook.",
    },
    {
      name: "conditions",
      type: "Condition<T>[]",
      desc: "Boolean, string, or predicate conditions that can block an update. Truthy strings become the thrown error message.",
      properties: [
        { name: "boolean", type: "boolean", desc: "True protects the state with the default error message." },
        { name: "string", type: "string", desc: "A non-empty string protects the state with that message." },
        { name: "predicate", type: "(oldData: T, newData?: T) => boolean | string | null | undefined", desc: "Returns a truthy value to reject the candidate state." },
      ],
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "[0] data",
      type: "T",
      desc: "Current protected state value.",
    },
    {
      name: "[1] setData",
      type: "(newData: T | ((oldData: T) => T)) => void",
      desc: "Updates the state when no condition rejects the candidate. Throws the protection message otherwise.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useProtect</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value (tuple)</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
