import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";
import Required from "@/components/Required";
import useLocaleSelector from "@/locale/locale.selector";

export default function UseDebounce() {
  // fn: (args: any[]) => R,
  // delay: number = 200,
  // immediate: boolean = false,
  // callback?: (result: ReturnType<typeof fn>) => void,
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "fn",
      type: "(args: any[]) => R",
      defaultValue: void 0,
      desc: "Function whose calls should be delayed.",
    },
    {
      name: "delay",
      type: "number",
      defaultValue: 200,
      desc: "Delay in milliseconds; defaults to 200.",
    },
    {
      name: "immediate",
      type: "boolean",
      defaultValue: false,
      desc: "Whether the first call in a burst runs immediately.",
    },
    {
      name: "callback",
      type: "(result: R) => void",
      defaultValue: void 0,
      desc: "Optional callback invoked with the wrapped function result.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "debounceFn",
      type: "function & { cancel: () => void }",
      desc: "Debounced function that returns a Promise and exposes cancel().",
      properties: [
        {
          name: "cancel",
          type: "() => void",
          desc: "Cancels the pending invocation and clears the debounce window.",
        },
      ],
    },
  ];

  const generic = useLocaleSelector("useDebounce.$apis.generics");

  return (
    <>
      <SubTitle id="hook-api">Api of useDebounce</SubTitle>
      <pre>
        {
`function useDebounce<R = void>(
  fn: (args: any[]) => R, 
  delay?: number, 
  immediate?: boolean, 
  callback?: (result: ReturnType<typeof fn>) => void
  ): {
    (...args: any[]): Promise<unknown>;
    cancel(): void;
}`}
      </pre>
      {generic}
      <SubTitle low top="20px">
        Parameters
      </SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">
        ReturnValue (Function Object)
      </SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
