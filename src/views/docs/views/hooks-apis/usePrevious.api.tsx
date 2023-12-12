import Required from "@/components/Required";
import ApiTable from "@/components/api-table";
import { Body, SubTitle } from "@/components/layout/Article";
import useLocaleSelector from "@/locale/locale.selector";

export default function UsePrevoius() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "state",
      type: "T",
      defaultValue: <Required children="Required" />,
      desc: "state to be tracked",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "prevoiusState",
      type: "T",
      defaultValue: null,
      desc: "the previous value of the state that was passed in",
    },
  ];

  const $generics = useLocaleSelector("usePrevious.$apis.generics");

  return (
    <>
      <SubTitle id="hook-api">Api of usePrevoius</SubTitle>
      <Body>{$generics}</Body>
      <SubTitle low top="20px">
        Parameters
      </SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">
        ReturnValue (Array)
      </SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
