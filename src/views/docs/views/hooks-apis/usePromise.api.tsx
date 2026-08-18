import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";
export default function UsePromise() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "promiseFn",
      type: "() => Promise<T>",
      desc: "Function that creates the promise to execute.",
    },
    {
      name: "callbacksOrDeps",
      type: "Callbacks<T> | any[]",
      defaultValue: "undefined",
      desc: "Optional lifecycle callbacks or the dependency list.",
      properties: [
        {
          name: "onResolve",
          type: "(value: T) => void",
          desc: "Called after the promise resolves.",
        },
        {
          name: "onReject",
          type: "(reason: unknown) => void",
          desc: "Called after the promise rejects.",
        },
        {
          name: "onFinally",
          type: "() => void",
          desc: "Called when the active request settles.",
        },
      ],
    },
    {
      name: "deps",
      type: "any[]",
      defaultValue: "undefined",
      desc: "Dependencies that trigger a new execution.",
    },
  ];
  
  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "[0] state",
      type: '{ status: "idle" | "pending" | "resolved" | "rejected"; data: T | null; error: unknown }',
      desc: "Current promise status, resolved data, and error.",
    },
    {
      name: "[1] abort",
      type: "() => void",
      desc: "Aborts the active request and ignores its result.",
    },
    {
      name: "[2] execute",
      type: "() => void",
      desc: "Starts the request immediately and aborts any previous request.",
    },
  ];
  
  return (
    <>
      <SubTitle id="hook-api">API of usePromise</SubTitle>
      <SubTitle low top="20px">
        Parameters
      </SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">
        ReturnValue (Array)
      </SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
