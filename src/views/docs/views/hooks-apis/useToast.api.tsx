import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseToast() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "config",
      type: "ToastConfig",
      defaultValue: {},
      desc: "Default styling, placement, timing, and text settings for toasts created by this instance.",
      properties: [
        { name: "duration", type: "number", defaultValue: 2000, desc: "Display duration in milliseconds." },
        { name: "delay", type: "number", defaultValue: 0, desc: "Delay before the toast is added to the document." },
        { name: "style", type: "React.CSSProperties", desc: "Additional inline styles." },
        { name: "className", type: "string", desc: "CSS class applied to the toast element." },
        { name: "position", type: "CSS position value", defaultValue: "fixed", desc: "CSS positioning mode." },
        { name: "placement", type: "\"top\" | \"center\" | \"bottom\" | { x: number; y: number }", defaultValue: "center", desc: "Screen placement or absolute coordinates." },
        { name: "text", type: "string", defaultValue: "", desc: "Default text displayed by the toast." },
        { name: "color", type: "string", defaultValue: "#fff", desc: "Text color." },
        { name: "bgColor", type: "string", defaultValue: "rgba(0, 0, 0, 0.75)", desc: "Background color." },
      ],
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "toast",
      type: "Toast",
      desc: "Callable function that displays a toast and exposes placement shortcuts.",
      properties: [
        { name: "toast.top", type: "Toast", desc: "Displays the toast near the top." },
        { name: "toast.center", type: "Toast", desc: "Displays the toast in the center." },
        { name: "toast.bottom", type: "Toast", desc: "Displays the toast near the bottom." },
      ],
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useToast</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
