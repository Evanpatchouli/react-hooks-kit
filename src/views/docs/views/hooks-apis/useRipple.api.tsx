import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseRipple() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "config",
      type: "RippleConfig",
      defaultValue: {},
      desc: "Optional ripple animation and trigger settings.",
      properties: [
        { name: "color", type: "React.CSSProperties[\"color\"]", defaultValue: "rgba(31, 143, 255, 0.5)", desc: "Ripple color." },
        { name: "duration", type: "number", defaultValue: 500, desc: "Animation duration in milliseconds." },
        { name: "trigger", type: "\"click\" | \"mousedown\" | \"pointerdown\"", defaultValue: "mousedown", desc: "Pointer event that starts the ripple." },
        { name: "alphaMin", type: "number", defaultValue: 0.3, desc: "Minimum ripple opacity." },
      ],
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "ref",
      type: "React.RefObject<T>",
      desc: "Ref to attach to the element that should render the ripple effect.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useRipple</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
