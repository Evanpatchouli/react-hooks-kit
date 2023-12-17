import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";
import Required from "@/components/Required";

export default function UseMetaApi() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "initialObject",
      type: "T extends object",
      defaultValue: <Required children="Required" />,
      desc: "initial state of object",
    },
    {
      name: "options",
      type: "{ deepSet?: boolean; createNonExists?: boolean }",
      defaultValue: "{ deepSet: false, createNonExist: false }",
      desc: "options of useMeta",
      properties: [
        {
          name: "deepSet",
          type: "boolean",
          defaultValue: false,
          desc: "Whether to deep clone object when setting property",
          details: (
            <>
              <strong>DeepClone</strong> will make it slower especially{" "}
              <strong>a huge object</strong>
            </>
          ),
        },
        {
          name: "createNonExist",
          type: "boolean",
          defaultValue: false,
          desc: "Whether to create non-exists property when setting property",
        },
      ]
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "[0] state",
      type: "T",
      desc: "state of object",
    },
    {
      name: "[1] setter",
      type: "type: (k, v) => void | ( k, (oldValue, oldObject) => Value ) => void | (obj: T) => void | ( (oldObject) => T ) => void",
      desc: "setter of object",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">Api of useMeta</SubTitle>
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
