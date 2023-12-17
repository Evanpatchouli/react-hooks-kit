import Required from "@/components/Required";
import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";
import { Chip } from "@mui/material";

export default function UseInject() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "name",
      type: "string",
      defaultValue: <Required children="Required" />,
      desc: "The unique name of the state to be provided globally",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "[0]state",
      type: "T[K] | undefined",
      defaultValue: null,
      desc: "state injected from provided globally, if the state is not provided, it will be undefined, and because of the delay of event, the state will be undefined at the first render",
    },
    {
      name: "[1]setState",
      type: (
        <>
          <Chip label="(value: T[K] | undefined) => void" /> |{" "}
          <Chip label="undefined" />
        </>
      ),
      desc: "set state function, if the state is not provided, it will be undefined",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">Api of useInject</SubTitle>
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
