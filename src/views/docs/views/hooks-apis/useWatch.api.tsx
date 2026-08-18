import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

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
      name: "pathOrGetter",
      type: "Path<T> | ((object: T, ...args: any[]) => V | undefined)",
      defaultValue: void 0,
      desc: "Property path or getter function used to resolve the watched value.",
    },
    {
      name: "callback",
      type: "Callback<V>",
      defaultValue: void 0,
      desc: "Optional callback invoked with the new and old values.",
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
      desc: "Positional flag that invokes the callback on mount.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "value",
      type: "V | undefined",
      defaultValue: null,
      desc: "Current value resolved from the path or getter.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useWatch</SubTitle>
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
