import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseOverflow() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [];
  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "[0] ref",
      type: "React.RefObject<E>",
      desc: "Ref to attach to the element whose scroll and offset dimensions should be compared.",
    },
    {
      name: "[1] isOverflowing",
      type: "boolean",
      defaultValue: false,
      desc: "Whether the element's scroll width or height exceeds its offset width or height.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useOverflow</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value (tuple)</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
