import Required from "@/components/Required";
import ApiTable from "@/components/api-table";
import Code from "@/components/code";
import { Body, SubTitle } from "@/components/layout/Article";
import useLocaleSelector from "@/locale/locale.selector";

export default function UseReactive() {
  const $generics = useLocaleSelector("useReactive.$apis.generics");
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "initialObject",
      type: "primitive | Array | object | Date | Map | Set",
      defaultValue: <Required children="Required" />,
      desc: "initial value of reactive",
    },
    {
      name: "deepReactive",
      type: "boolean",
      defaultValue: true,
      desc: "Whether to make the object reactive deeply. Default: true",
    },
    {
      name: "...callbacks",
      type: "Watcher<T>[]",
      defaultValue: null,
      desc: "When a reactive value changes, the callback will be triggered",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "ReactiveObject",
      type: "Reactive<T>",
      defaultValue: null,
      desc: "reactive object from initialObject",
      details: (
        <p>
          If the initialObject is a primitive type, the return value is a reactive primitive type. Just like:
          <Code lang="ts">
            {`const reactiveNumber = useReactive(1);
// typeof reactiveNumber will be like following:            
type ReactiveNumber =
{
  value: 1,
  set: (value: number) => void,
  get: () => number,
}`}
          </Code>
          <br />
        </p>
      ),
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
