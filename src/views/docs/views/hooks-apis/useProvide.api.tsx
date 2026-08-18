import Required from "@/components/Required";
import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseProvide() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "name",
      type: "string",
      defaultValue: <Required children="Required" />,
      desc: "Unique provider name used by matching useInject calls.",
    },
    {
      name: "state",
      type: "T",
      defaultValue: <Required children="Required" />,
      desc: "Value published to injectors. Changes are broadcast to current consumers.",
    },
    {
      name: "options",
      type: "object",
      desc: "Optional provider configuration.",
      properties: [
        { name: "setState", type: "React.Dispatch<React.SetStateAction<T>>", desc: "Setter exposed to injectors so they can update the provider state." },
        { name: "namespace", type: "string", defaultValue: "__provide_inject__", desc: "Namespace shared with useInject." },
      ],
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "value",
      type: "void",
      desc: "The Hook publishes state and does not return a value.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useProvide</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
