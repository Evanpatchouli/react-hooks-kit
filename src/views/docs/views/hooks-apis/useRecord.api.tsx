import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";
import Required from "@/components/Required";

export default function UseRecord() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "initial",
      type: "object",
      defaultValue: {},
      desc: "an one-level record object",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "[0] state",
      type: "object",
      defaultValue: null,
      desc: "state of record",
    },
    {
      name: "[1] setRecordAction",
      type: "Function",
      desc: (
        <div css={$css`text-align: left;`}>
          <span>set method has 4 overloads:</span>
          <ul>
            <li>
              <code>{"set<K> = (key: K, value: T[K]): void;"}</code>
            </li>
            <li>
              <code>{"set<K> = (key: K, setValueAction: (prev: T[K]) => T[K]): void;"}</code>
            </li>
            <li>
              <code>{'set(record, mode?: "rehydrate" | "override"): void;'}</code>
            </li>
            <li>
              <code>{'set(setRecordAction: (prev: T) => Partial<T>, mode?: "rehydrate" | "override"): void;'}</code>
            </li>
          </ul>
          <span>mode:</span>
          <ul>
            <li>
              <strong>rehydrate</strong>: merge the new state with the old state
            </li>
            <li>
              <strong>override</strong>: replace the old state with the new state
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">Api of useRecord</SubTitle>
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
