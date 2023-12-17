import Required from "@/components/Required";
import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseProvide() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "name",
      type: "string",
      defaultValue: <Required children="Required" />,
      desc: "The unique name of the state to be provided globally",
    },
    {
      name: "state",
      type: "any",
      defaultValue: <Required children="Required" />,
      desc: "The state to be provided globally",
    },
  ];

  // const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
  //   {
  //     name: "[0] isOn",
  //     type: "boolean | T | F",
  //     defaultValue: null,
  //     desc: "state of toggle",
  //   },
  //   {
  //     name: "[1] toggle",
  //     type: "() => void",
  //     desc: "toggle function",
  //   },
  //   {
  //     name: "[2] setToggle",
  //     type: "(value: boolean|(value => boolean)) => void",
  //     desc: "set toggle function",
  //   },
  // ];

  return (
    <>
      <SubTitle id="hook-api">Api of useProvide</SubTitle>
      <SubTitle low top="20px">
        Parameters
      </SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">
        ReturnValue (Void)
      </SubTitle>
      {/* <ApiTable return rows={returnData} /> */}
    </>
  );
}
