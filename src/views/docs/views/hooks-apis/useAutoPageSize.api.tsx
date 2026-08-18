import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseAutoPageSize() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "containerId",
      type: "string",
      desc: "ID of the container whose height is measured.",
    },
    {
      name: "estimatedItemHeight",
      type: "number",
      defaultValue: 150,
      desc: "Estimated height in pixels of one list item.",
    },
    {
      name: "options",
      type: "UseAutoPageSizeOptions",
      desc: "Optional calculation settings.",
      properties: [
        {
          name: "once",
          type: "boolean",
          defaultValue: false,
          desc: "Calculates once and stops observing resize changes.",
        },
        {
          name: "minSize",
          type: "number",
          defaultValue: 5,
          desc: "Minimum page size returned by the hook.",
        },
        {
          name: "buffer",
          type: "number",
          defaultValue: 2,
          desc: "Extra items added to the calculated page size.",
        },
      ],
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "pageSize",
      type: "number",
      desc: "Number of items that should be loaded for the current container height.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">Api of useAutoPageSize</SubTitle>
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
