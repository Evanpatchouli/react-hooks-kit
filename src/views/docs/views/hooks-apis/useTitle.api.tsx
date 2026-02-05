import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";
import Required from "@/components/Required";
  
export default function UseTitle() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "initialTitle",
      type: "string",
      defaultValue: "document.title",
      desc: "The initial title to set when the component mounts. If not provided, uses the current document title.",
    },
  ];
  
  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "[0] title",
      type: "string",
      defaultValue: null,
      desc: "The current document title (reactive to external changes)",
    },
    {
      name: "[1] setTitle",
      type: "(title: string) => void",
      defaultValue: null,
      desc: "Function to update the document title",
    },
  ];
  
  return (
    <>
      <SubTitle id="hook-api">Api of useTitle</SubTitle>
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
