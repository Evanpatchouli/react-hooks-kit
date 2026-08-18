import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseRafState() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "initialState",
      type: "T",
      desc: "Initial state value returned before the first scheduled update.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "[0] state",
      type: "T",
      desc: "Current state value.",
    },
    {
      name: "[1] setRafState",
      type: "(value: T | ((prevState: T) => T)) => void",
      desc: "Schedules the latest state update for the next animation frame, cancelling an earlier pending update.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useRafState</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">Return value (tuple)</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
