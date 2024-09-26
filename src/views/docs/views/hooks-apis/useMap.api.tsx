import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";
import Required from "@/components/Required";

export default function UseMap() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "initial object",
      type: "T",
      defaultValue: "{}",
      desc: "initial object to be convert into Map",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "map",
      type: "Map<K, T[K]>",
      desc: "map object state",
    },
    {
      name: "get",
      type: "(key: K) => T[K]",
      desc: "get value by key from map",
    },
    {
      name: "set",
      type: "4 overloads",
      desc: "set method",
    },
    {
      name: "del",
      type: "(key: K) => void",
      desc: "del property by key",
    },
    {
      name: "add",
      type: "(key: K, value: any) => void",
      desc: "add property to map",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">Api of useMap</SubTitle>
      <SubTitle low top="20px">
        Parameters
      </SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">
        ReturnValue {"{ map, get, set, del, add }"}
      </SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
