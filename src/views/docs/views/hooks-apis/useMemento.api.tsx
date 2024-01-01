import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";
import { Chip } from "@mui/material";

export default function UseMemento() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "initialState",
      type: "T",
      defaultValue: "undefined",
      desc: "initial state of memento",
    },
    {
      name: "config",
      type: "object",
      defaultValue: { historySize: 10, strict: false },
      desc: "configuration for memento",
      properties: [
        {
          name: "historySize",
          type: "number",
          defaultValue: 10,
          desc: "size of the history",
        },
        {
          name: "strict",
          type: "boolean",
          defaultValue: false,
          desc: "throw error when idKey is not found",
        },
      ],
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "[0] state",
      type: "T | null",
      defaultValue: "initialState",
      desc: "current state",
    },
    {
      name: "[1] setState",
      type: (
        <Chip
          color="primary"
          variant="outlined"
          label="Dispatch<SetStateAction<T|null>>"
        />
      ),
      desc: "set new state to memento (popstate)",
    },
    {
      name: "[2] manager",
      type: "object",
      desc: "memento manager with various methods",
      properties: [
        {
          name: "idKey",
          type: "string",
          desc: "current state's id",
        },
        {
          name: "createMemento",
          type: "(idKey: string) => void",
          desc: "create a memento",
        },
        {
          name: "deleteMemento",
          type: "(idKey: string) => void",
          desc: "delete a memento",
        },
        {
          name: "clearMementos",
          type: "() => void",
          desc: "clear all mementos",
        },
        {
          name: "rollback",
          type: "() => void",
          desc: "rollback to previous state",
        },
        {
          name: "forward",
          type: "() => void",
          desc: "forward to next state",
        },
        {
          name: "goToHistory",
          type: "(index: number) => void",
          desc: "go to a history state",
        },
        {
          name: "goToMemento",
          type: "(idKey: string) => void",
          desc: "go to a memento state",
        },
        {
          name: "deleteHistory",
          type: "(index: number) => void",
          desc: "delete a history state",
        },
        {
          name: "clearHistory",
          type: "() => void",
          desc: "clear all history states",
        },
        {
          name: "clone",
          type: "(idKey: string) => void",
          desc: "clone a history state",
        },
        {
          name: "clear",
          type: "() => void",
          desc: "clear all states",
        },
        {
          name: "history",
          type: "Array<HistoryItem<T>>",
          desc: "all history states",
        },
        {
          name: "mementos",
          type: "Array<Memento<T>>",
          desc: "all mementos",
        },
      ],
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">Api of useMemento</SubTitle>
      <SubTitle low top="20px">
        Generics{"<T = any>"}
      </SubTitle>
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
