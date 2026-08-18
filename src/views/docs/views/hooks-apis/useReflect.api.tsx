import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseReflect() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "initialValue",
      type: "T extends object",
      desc: "Initial object stored in a ref and exposed through the reflection helpers.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "get",
      type: "(prop?: K) => T | T[K] | null",
      desc: "Returns the whole object when no property is supplied, or the selected property value.",
    },
    {
      name: "set",
      type: "(key: keyof T, value: T[keyof T]) => boolean",
      desc: "Sets a property through Reflect.set and forces a render.",
    },
    {
      name: "has",
      type: "(key: keyof T | string) => boolean",
      desc: "Checks whether the object has a property through Reflect.has.",
    },
    {
      name: "apply",
      type: "(func: (value: T) => void) => void",
      desc: "Runs a function against the stored object and forces a render afterward.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useReflect</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value (object)</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
