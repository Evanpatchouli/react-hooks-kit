import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseDimensions() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "none",
      type: "—",
      desc: "This Hook takes no parameters; attach the returned ref to the element to measure.",
    },
  ];
  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "[0] ref",
      type: "React.RefObject<HTMLDivElement | null>",
      desc: "Ref to attach to the element that should be measured.",
    },
    {
      name: "[1] dimensions",
      type: "{ width: number; height: number; top: number; left: number }",
      defaultValue: { width: 0, height: 0, top: 0, left: 0 },
      desc: "Latest observed content dimensions and offsets.",
      properties: [
        { name: "width", type: "number", desc: "Observed content width." },
        { name: "height", type: "number", desc: "Observed content height." },
        { name: "top", type: "number", desc: "Observed content top offset." },
        { name: "left", type: "number", desc: "Observed content left offset." },
      ],
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useDimensions</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value (tuple)</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
