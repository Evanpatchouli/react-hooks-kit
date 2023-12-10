import Required from "@/components/Required";
import ApiTable from "@/components/api-table";
import { Body, SubTitle } from "@/components/layout/Article";
import useLocaleSelector from "@/locale/locale.selector";

export default function UseReactive() {
  const $generics = useLocaleSelector("useReactive.$apis.generics");
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "initialObject",
      type: "boolean",
      defaultValue: <Required children="Required" />,
      desc: "initial object of reactive",
    },
    {
      name: "deepReactive",
      type: "boolean",
      defaultValue: true,
      desc: "Whether to make the object reactive deeply. Default: true",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "ReactiveObject",
      type: "Reactive<T>",
      defaultValue: null,
      desc: "reactive object from initialObject",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">Api of useReactive</SubTitle>
      <SubTitle low top="20px">
        Generics{"<T extends object = {}>"}
      </SubTitle>
      <Body>{$generics}</Body>
      <SubTitle low top="20px">
        Parameters
      </SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">
        ReturnValue (Object)
      </SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
