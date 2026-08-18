import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseAsyncEffect() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "effect",
      type: "() => Promise<void | (() => void)>",
      desc: "Asynchronous effect callback. It may resolve to a cleanup function.",
    },
    {
      name: "deps",
      type: "React.DependencyList",
      defaultValue: [],
      desc: "Dependencies that control when the asynchronous effect reruns.",
    },
    {
      name: "options",
      type: "object",
      desc: "Optional error and completion callbacks.",
      properties: [
        {
          name: "onError",
          type: "(error: unknown) => void",
          desc: "Called when the asynchronous effect rejects.",
        },
        {
          name: "onFinally",
          type: "() => void",
          desc: "Called after the effect resolves or rejects.",
        },
      ],
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "value",
      type: "void",
      desc: "The Hook manages the asynchronous effect lifecycle and does not return a value.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useAsyncEffect</SubTitle>
      <SubTitle low top="20px">
        Parameters
      </SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">
        Return value
      </SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
