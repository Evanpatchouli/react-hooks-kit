import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseIndexDBApi() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "dbName",
      type: "string",
      desc: "IndexedDB database name.",
    },
    {
      name: "version",
      type: "number",
      desc: "Database schema version.",
    },
    {
      name: "upgradeCallback",
      type: "(db: IDBDatabase) => void",
      desc: "Called during an upgrade so object stores and indexes can be created.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "db",
      type: "IDBDatabase | null",
      desc: "Opened database connection, or null while opening or after failure.",
    },
    {
      name: "error",
      type: "any",
      desc: "IndexedDB opening error, or null.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">API of useIndexDB</SubTitle>
      <SubTitle low top="20px">Parameters</SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">ReturnValue (Object)</SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
