import ApiTable from "@/components/api-table";
import { Body, SubTitle } from "@/components/layout/Article";
import useLocaleSelector from "@/locale/locale.selector";

export default function UseTreeApi() {
  const $generics = useLocaleSelector("useTree.$apis.generics");
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "initial",
      type: "boolean",
      defaultValue: "{}",
      desc: "initial tree data",
    },
    {
      name: "options",
      type: "UseTreeOptions<T,K>",
      defaultValue: { idKey: "_id" },
      desc: "options of useTree",
      properties: [
        {
          name: "idKey",
          type: "string",
          defaultValue: "id",
          desc: "key of id",
        },
        {
          name: "renderNode",
          type: "(node: TreeNode<T>, idKey: string, level: number) => React.ReactNode",
          desc: "render node of tree",
        },
        {
          name: "renderEmpty",
          type: "React.ReactNode | (() => React.ReactNode)",
          desc: "render empty node of tree",
        },
        {
          name: "filterFn",
          type: "(node: TreeNode<T>) => boolean",
          desc: "filter node of tree",
        },
        {
          name: "strict",
          type: "boolean",
          defaultValue: false,
          desc: "if true, addNode, removeNode, updateNode, moveNode will check and throw error; if false, will return the errMsg",
        },
      ],
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "[0] tree",
      type: 'TreeNode<"_id">',
      desc: "state of tree data",
    },
    {
      name: "[1] manager",
      type: "TreeManager<T>",
      desc: "manager objectr of tree data",
      properties: [
        {
          name: "addNode",
          type: "(node: TreeNode<T>, parentId: any) => string | null",
          desc: "add a node to tree",
        },
        {
          name: "removeNode",
          type: "(nodeId: any) => string | null",
          desc: "remove a node from tree",
        },
        {
          name: "updateNode",
          type: "(nodeId: any, node: TreeNode<T>) => string | null",
          desc: "update a node of tree",
        },
        {
          name: "findNode",
          type: "(nodeId: any) => TreeNode<T> | null",
          desc: "find a node from tree",
        },
        {
          name: "moveNode",
          type: "(nodeId: any, parentId: T) => string | null",
          desc: "move a node to another node",
        },
        {
          name: "searchTree",
          type: "(nodeId: any) => TreeNode<T> | null",
          desc: "search a node from tree",
        },
        {
          name: "traverse",
          type: "(node: TreeNode<T>, callback: (node: TreeNode<T>) => void) => void",
          desc: "traverse tree",
        },
        {
          name: "render",
          type: "() => React.ReactNode[]|React.ReactNode|null",
          desc: "use options.renderNode to render tree",
        },
      ],
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">Api of useTree</SubTitle>
      <SubTitle low top="20px">
        Generics{'<T extends object = { [key: string]: any }, K extends string | number = "_id">'}
      </SubTitle>
      <Body>{$generics}</Body>
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
