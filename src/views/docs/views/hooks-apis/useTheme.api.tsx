import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseTheme() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "arg1",
      type: "boolean | ((theme: \"dark\" | \"light\") => void)",
      defaultValue: true,
      desc: "Whether to listen for system theme changes, or the theme change callback when a function is supplied.",
    },
    {
      name: "arg2",
      type: "(theme: \"dark\" | \"light\") => void",
      desc: "Theme change callback when arg1 is a boolean.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "theme",
      type: "\"dark\" | \"light\"",
      desc: "Current system color-scheme preference.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useTheme</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
