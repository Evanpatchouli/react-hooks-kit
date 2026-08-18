import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseScroll() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "callback",
      type: "(position: { x: number; y: number }) => void",
      desc: "Optional callback invoked after the window scroll position changes.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "position",
      type: "{ x: number; y: number }",
      defaultValue: { x: 0, y: 0 },
      desc: "Current window scroll offsets.",
      properties: [
        { name: "x", type: "number", desc: "window.scrollX value." },
        { name: "y", type: "number", desc: "window.scrollY value." },
      ],
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useScroll</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
