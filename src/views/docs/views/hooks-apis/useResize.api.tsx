import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";
export default function UseResize() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "options",
      type: "{ callback?; target? }",
      defaultValue: {},
      desc: "Listens to the window when target is omitted, or observes the target element when an id or ref is supplied.",
      properties: [
        {
          name: "callback",
          type: "(size: { width: number; height: number }) => void",
          defaultValue: void 0,
          desc: "Callback invoked when the observed size changes.",
        },
        {
          name: "target",
          type: "string | React.RefObject<HTMLElement> | undefined",
          defaultValue: void 0,
          desc: "Element id or ref to observe with ResizeObserver.",
        },
      ],
    },
    {
      name: "deps",
      type: "any[]",
      defaultValue: [],
      desc: "Dependencies that control when the resize effect is recreated.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "size",
      type: "{ width: number, height: number }",
      defaultValue: null,
      desc: "Current width and height of the window or observed element.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">Api of useResize</SubTitle>
      <SubTitle low top="20px">
        Parameters
      </SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">
        Return value (object)
      </SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
