import Required from "@/components/Required";
import ApiTable from "@/components/api-table";
import Code from "@/components/code";
import { Body, SubTitle } from "@/components/layout/Article";
import useLocaleSelector from "@/locale/locale.selector";

export default function UseReactor() {
  const $generics = useLocaleSelector("useReactor.$apis.generics");
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "initialValue",
      type: "any",
      defaultValue: <Required children="Required" />,
      desc: "initial value of reactor to hold",
    },
    {
      name: "plugins",
      type: "ReactorPlugin<T>[]",
      defaultValue: "[]",
      desc: "register plugins to invoke some actions and onActions.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "ReactorInstance",
      type: "Reactor<T>",
      defaultValue: null,
      desc: "reactor object from initialValue",
      details: (
        <p>
          Reactor is a state management tool based on React Hooks with the following features:
          <ul>
            <li>View updates are only triggered by set invocation or value reassignment.</li>
            <li>
              Direct changes to deep state properties won't trigger view updates but are stored in memory and applied on
              the next view update.
            </li>
            <li>
              Reactor is a reactive, proxy, cloneable, resettable, dispatchable, serializable, subscribable, listenable,
              and pluginable object.
            </li>
          </ul>
        </p>
      ),
      properties: [
        {
          name: "value",
          type: "T",
          desc: "The current value of the reactor.",
        },
        {
          name: "get",
          type: "(path?: Path<T>) => PathValue<T, typeof path>",
          desc: "get certain property from the value of the reactor.",
        },
        {
          name: "set",
          type: "(path?: Path<T>, value: PathValue<T, typeof path>) => void",
          desc: "Set certain property to the value of the reactor.",
        },
        {
          name: "reset",
          type: "() => void",
          desc: "Reset the value of the reactor to the default value.",
        },
        {
          name: "setValue",
          type: "(value: T) => void",
          desc: "Override the value with value proped.",
        },
        {
          name: "setDefaultValue",
          type: "(value: T) => void",
          desc: "Override the defaultValue with value proped.",
        },
        {
          name: "clone",
          type: "() => T",
          desc: "Clone this reactor.",
        },
        {
          name: "cloneValue",
          type: "() => T",
          desc: "Clone the value of this reactor.",
        },
        {
          name: "dispatch",
          type: "(action: string, payload?; any) => void",
          desc: "invoke the plugins action will certain action name equal to plugin's name.",
        },
        {
          name: "emit",
          type: "(eventName: string, payload?: any) => void",
          desc: "send a event on reactor event bus.",
        },
        {
          name: "on",
          type: "(eventName: string, handler: (payload?: any) => void) => void",
          desc: "listen a event on reactor event bus.",
        },
      ],
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">Api of useReactive</SubTitle>
      <SubTitle low top="20px">
        Generics{"<T = any>"}
      </SubTitle>
      <Body>{$generics}</Body>
      <SubTitle low top="20px">
        Parameters
      </SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">
        ReturnValue (Object)
      </SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
