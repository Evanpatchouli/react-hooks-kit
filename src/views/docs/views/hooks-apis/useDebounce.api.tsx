import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";
import Required from "@/components/Required";
  
export default function UseDebounce() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    // {
    //   name: "initial",
    //   type: "boolean",
    //   defaultValue: false,
    //   desc: "initial state of toggle",
    // },
    // {
    //   name: "valueMap",
    //   type: "object",
    //   defaultValue: { true: true, false: false },
    //   desc: "mapping of returned values",
    //   properties: [
    //     {
    //       name: "true",
    //       type: "boolean | T",
    //       defaultValue: true,
    //        desc: "value returned when toggle is on",
    //     },
    //     {
    //       name: "false",
    //       type: "boolean | F",
    //       defaultValue: false,
    //       desc: "value returned when toggle is off",
    //     },
    //   ],
    // },
  ];
  
  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    // {
    //   name: "[0] isOn",
    //   type: "boolean | T | F",
    //   defaultValue: null,
    //   desc: "state of toggle",
    // },
    // {
    //   name: "[1] toggle",
    //   type: "() => void",
    //   desc: "toggle function",
    //   },
    // {
    //   name: "[2] setToggle",
    //   type: "(value: boolean|(value => boolean)) => void",
    //   desc: "set toggle function",
    // },
  ];
  
  return (
    <>
      <SubTitle id="hook-api">Api of useDebounce</SubTitle>
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
