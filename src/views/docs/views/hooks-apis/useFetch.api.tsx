import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseFetchApi() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "url",
      type: "string",
      desc: "Request URL passed to fetch.",
    },
    {
      name: "options",
      type: "RequestInit",
      defaultValue: "undefined",
      desc: "Optional fetch request options.",
    },
    {
      name: "callbacks",
      type: "object",
      defaultValue: "undefined",
      desc: "Optional callbacks for resolve, reject, and finally states.",
      properties: [
        {
          name: "onResolve",
          type: "(value: T) => void",
          desc: "Called when JSON parsing succeeds.",
        },
        {
          name: "onReject",
          type: "(reason: unknown) => void",
          desc: "Called for network, HTTP, or parsing errors.",
        },
        {
          name: "onFinally",
          type: "() => void",
          desc: "Called after the active request settles.",
        },
      ],
    },
    {
      name: "deps",
      type: "any[]",
      defaultValue: "[]",
      desc: "Additional dependencies that trigger a new request.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "data",
      type: "T | null",
      desc: "Parsed JSON response data.",
    },
    {
      name: "loading",
      type: "boolean",
      desc: "Whether the request is active.",
    },
    {
      name: "error",
      type: "unknown",
      desc: "The error from a failed request, or null.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useFetch</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">ReturnValue (Object)</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
