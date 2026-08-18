import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseGuide() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "steps",
      type: "Step[]",
      desc: "Ordered guide steps. Each step identifies target element ids and optional custom renders.",
      properties: [
        { name: "ids", type: "string[]", desc: "Ids of elements highlighted by this step." },
        { name: "name", type: "string", desc: "Optional name passed to custom render functions." },
        { name: "data", type: "any", desc: "Optional arbitrary data passed to custom render functions." },
        { name: "renders", type: "Render[]", desc: "Optional custom guide content for registered target ids." },
      ],
    },
    {
      name: "callback",
      type: "(step: number, stepConfig: Step) => void",
      desc: "Optional callback invoked when the active step changes.",
    },
    {
      name: "config",
      type: "object",
      desc: "Optional container and mask configuration.",
      properties: [
        { name: "containerStyle", type: "Partial<CSSStyleDeclaration>", desc: "Styles applied to custom render containers." },
        { name: "containerClassName", type: "string", desc: "Class applied to custom render containers." },
        { name: "maskConfig", type: "MaskConfig", desc: "Background, opacity, z-index, and pointer-events settings for the mask." },
      ],
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "[0] step",
      type: "number",
      defaultValue: -1,
      desc: "Current step index. -1 means that the guide is stopped.",
    },
    {
      name: "[1] guider",
      type: "Guider",
      desc: "Guide controller and registration API.",
      properties: [
        { name: "start", type: "() => void", desc: "Starts at the first step." },
        { name: "stop", type: "() => void", desc: "Stops the guide and removes its mask and renders." },
        { name: "next", type: "() => void", desc: "Moves to the next step." },
        { name: "last", type: "() => void", desc: "Moves to the previous step without going below zero." },
        { name: "go", type: "(step: number) => void", desc: "Moves to a clamped step index." },
        { name: "step", type: "number", desc: "Current step index." },
        { name: "register", type: "(id: string) => void", desc: "Registers an id for custom Target rendering." },
        { name: "unregister", type: "(id: string) => void", desc: "Removes an id from custom Target rendering." },
      ],
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useGuide</SubTitle>
      <SubTitle low top="20px">
        Parameters
      </SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">
        Return value (tuple)
      </SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
