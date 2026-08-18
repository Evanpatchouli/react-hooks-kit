import Required from "@/components/Required";
import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseInject() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "name",
      type: "string",
      defaultValue: <Required children="Required" />,
      desc: "Provider name to read from useProvide.",
    },
    {
      name: "options",
      type: "object",
      desc: "Optional namespace and value-change callback configuration.",
      properties: [
        { name: "namespace", type: "N", defaultValue: "__provide_inject__", desc: "Namespace shared with the provider." },
        { name: "callback", type: "(value: V) => any", desc: "Called whenever a provider value is received." },
      ],
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "[0] value",
      type: "V | undefined",
      defaultValue: undefined,
      desc: "Current provider value, or undefined before a provider responds.",
    },
    {
      name: "[1] setValue",
      type: "React.Dispatch<React.SetStateAction<V>> | undefined",
      defaultValue: undefined,
      desc: "Provider setter when useProvide supplied options.setState; otherwise undefined.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useInject</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value (tuple)</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
