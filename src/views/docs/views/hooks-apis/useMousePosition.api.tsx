import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseMousePosition() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "trigger",
      type: "\"mousemove\" | \"mousedown\"",
      defaultValue: "mousemove",
      desc: "Window event that updates the pointer position.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "position",
      type: "{ x: number | null; y: number | null }",
      defaultValue: { x: null, y: null },
      desc: "Latest client coordinates for the selected event.",
      properties: [
        { name: "x", type: "number | null", desc: "Horizontal client coordinate." },
        { name: "y", type: "number | null", desc: "Vertical client coordinate." },
      ],
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useMousePosition</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
