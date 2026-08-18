import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseHover() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "onHover",
      type: "() => void",
      desc: "Callback invoked when the pointer enters the referenced element.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "ref",
      type: "React.MutableRefObject<HTMLElement | null>",
      desc: "Ref to attach to the element that should listen for mouseenter.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useHover</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
