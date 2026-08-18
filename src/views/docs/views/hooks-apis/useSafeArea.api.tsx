import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseSafeArea() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [];
  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "insets",
      type: "{ top: number; right: number; bottom: number; left: number }",
      defaultValue: { top: 0, right: 0, bottom: 0, left: 0 },
      desc: "Safe-area inset values measured from CSS env variables.",
      properties: [
        { name: "top", type: "number", desc: "Top safe-area inset in pixels." },
        { name: "right", type: "number", desc: "Right safe-area inset in pixels." },
        { name: "bottom", type: "number", desc: "Bottom safe-area inset in pixels." },
        { name: "left", type: "number", desc: "Left safe-area inset in pixels." },
      ],
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useSafeArea</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
