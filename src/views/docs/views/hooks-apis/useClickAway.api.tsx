import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseClickAway() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "onClickAway",
      type: "() => void",
      desc: "Callback invoked when a mousedown event occurs outside the returned ref element.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "ref",
      type: "React.MutableRefObject<any>",
      desc: "Ref to attach to the element that should contain the click-away region.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useClickAway</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
