import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseFormApi() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "schema",
      type: "Record<keyof T, FormField>",
      desc: "Field values, required flags, validators, and optional setters.",
    },
    {
      name: "formRef",
      type: "React.RefObject<HTMLFormElement>",
      desc: "Ref pointing to the form whose FormData should be read.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "onSubmit",
      type: "(handler, validates?) => (event) => Promise<void>",
      desc: "Creates a submit handler that validates selected fields before invoking handler.",
    },
    {
      name: "get / gets",
      type: "(key?) => FormData value or record",
      desc: "Reads one field or a record of fields from the form.",
    },
    {
      name: "set / sets",
      type: "(key, value) or (record) => void",
      desc: "Writes values through the setters configured in the schema.",
    },
    {
      name: "validate / validates",
      type: "(key?) => Promise<boolean>",
      desc: "Runs required checks and custom validators for one or more fields.",
    },
    {
      name: "reset",
      type: "(keys?) => void",
      desc: "Clears selected fields or all configured fields.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useForm</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">ReturnValue (Object)</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
