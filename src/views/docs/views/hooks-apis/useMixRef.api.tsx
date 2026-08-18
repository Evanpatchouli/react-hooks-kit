import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseMixRefApi() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "refs",
      type: "Array<RefObject<E> | RefCallback<E> | null>",
      desc: "Refs that should receive the mounted element.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "mixedRef",
      type: "React.RefCallback<E>",
      desc: "Callback ref that assigns each mounted or unmounted node to every supplied ref.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useMixRef</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">ReturnValue (Callback Ref)</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
