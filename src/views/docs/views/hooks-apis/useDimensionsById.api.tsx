import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";
  
export default function UseDimensionsById() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    { name: "id", type: "string", desc: "The id of the element to observe." },
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
    { name: "width", type: "number", desc: "Observed content width." },
    { name: "height", type: "number", desc: "Observed content height." },
    { name: "top", type: "number", desc: "Observed content top offset." },
    { name: "left", type: "number", desc: "Observed content left offset." },
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
      <SubTitle id="hook-api">API of useDimensionsById</SubTitle>
      <SubTitle low top="20px">
        Parameters
      </SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">
        Return value (object)
      </SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
