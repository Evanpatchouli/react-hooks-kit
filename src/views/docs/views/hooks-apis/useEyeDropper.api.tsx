import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseEyeDropper() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "options",
      type: "UseEyeDropperOptions",
      defaultValue: {},
      desc: "Initial color displayed before a successful pick.",
      properties: [
        { name: "initialValue", type: "string", defaultValue: "\"\"", desc: "Initial sRGB hexadecimal color string." },
      ],
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    { name: "isSupported", type: "boolean", desc: "Whether the browser exposes the native EyeDropper API." },
    { name: "sRGBHex", type: "string", desc: "Most recently selected sRGB hexadecimal color." },
    { name: "open", type: "(options?: EyeDropperOpenOptions) => Promise<EyeDropperResult | undefined>", desc: "Opens the native picker and resolves with the selected color, or undefined when unsupported." },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useEyeDropper</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
