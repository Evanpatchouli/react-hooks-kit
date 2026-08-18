import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseUrlApi() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "callback",
      type: "(urlInfo: UrlInfo<T>) => void",
      defaultValue: "undefined",
      desc: "Called when the browser history or URL changes.",
    },
    {
      name: "name",
      type: "string",
      defaultValue: "undefined",
      desc: "Optional name associated with the URL subscription.",
    },
    {
      name: "immediate",
      type: "boolean",
      defaultValue: false,
      desc: "Whether to call the callback immediately after mounting.",
    },
    {
      name: "config",
      type: "object",
      defaultValue: "{}",
      desc: "Controls query-string parsing.",
      properties: [
        {
          name: "mode",
          type: '"string" | "auto"',
          defaultValue: '"auto"',
          desc: "Whether query values stay strings or are converted when possible.",
        },
        {
          name: "autoParams",
          type: "string[]",
          defaultValue: "[]",
          desc: "Keys that should use automatic value conversion.",
        },
        {
          name: "stringifyParams",
          type: "string[]",
          defaultValue: "[]",
          desc: "Keys that should always remain strings.",
        },
        {
          name: "custom",
          type: "Record<string, (value?: string) => unknown>",
          defaultValue: "{}",
          desc: "Custom parsers for selected query keys.",
        },
      ],
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "params",
      type: "T",
      desc: "Parsed query parameters.",
    },
    {
      name: "name",
      type: "string | undefined",
      desc: "The optional subscription name.",
    },
    {
      name: "location fields",
      type: "Location",
      desc: "The current browser location fields, such as href, pathname, search, and hash.",
    },
    {
      name: "history methods",
      type: "History",
      desc: "Bound back, forward, go, pushState, and replaceState methods.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useUrl</SubTitle>
      <SubTitle low top="20px">
        Parameters
      </SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">
        ReturnValue (Object)
      </SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
