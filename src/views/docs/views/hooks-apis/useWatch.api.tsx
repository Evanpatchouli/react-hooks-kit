import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";
import Required from "@/components/Required";

export default function UseWatch() {
  // object: T,
  // path: P,
  // callback?: Callback<V>,
  // configOrStrict?: Config | boolean,
  // immediate?: boolean
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "object",
      type: "object state variable",
      required: true,
      defaultValue: void 0,
      desc: "object state variable to watch",
    },
    {
      name: "path",
      type: "(value: T) => void | undefined",
      defaultValue: void 0,
      desc: "callback function when value changed",
    },
    {
      name: "callback",
      type: "Callback<V>",
      defaultValue: void 0,
      desc: "callback function when value changed",
    },
    {
      name: "configOrStrict",
      type: "Config | boolean",
      defaultValue: false,
      desc: (
        <div css={$css`text-align: left;`}>
          Config object to configure the watch behavior.
          <br />
          Config structure:
          <pre>
            {`interface Config {
  strict?: boolean;
  immediate?: boolean;
}`}
          </pre>
        </div>
      ),
    },
    {
      name: "immediate",
      type: "boolean",
      defaultValue: false,
      desc: "whether to execute callback immediately",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "value",
      type: "T | undefined",
      defaultValue: null,
      desc: "value watched",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">Api of useWatchGetter</SubTitle>
      <SubTitle low top="20px">
        Parameters
      </SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">
        ReturnValue (value)
      </SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
