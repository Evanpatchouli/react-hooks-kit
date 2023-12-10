import Required from "@/components/Required";
import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseList() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "initialItems",
      type: "Array<any>",
      defaultValue: <Required children="Required" />,
      desc: "initial list items",
    },
    {
      name: "dependencies",
      type: "Array<any>",
      defaultValue: <Required children="Required" />,
      desc: "dependencies for items",
    },
    {
      name: "options",
      type: "UseListOptions",
      defaultValue: <Required children="Required" />,
      desc: "options for useList",
      properties: [
        {
          name: "idKey",
          type: "string",
          defaultValue: "_id",
          desc: "idkey of item",
        },
        {
          name: "sortFn",
          type: "SortFunction<T>",
          defaultValue: null,
          desc: "sort function",
        },
        {
          name: "filterFn",
          type: "FilterFunction<T>",
          defaultValue: null,
          desc: "filter function",
        },
        {
          name: "renderFn",
          type: "RenderFunction<T>",
          defaultValue: "(item) => item",
          desc: "render of item",
        },
        {
          name: "itemsPerPage",
          type: "number",
          defaultValue: 1,
          desc: "pageSize of pagination",
        },
      ],
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "[0] temp list",
      type: "Array<ItemExtended<T>>",
      defaultValue: null,
      desc: "the temporary virtual list data",
    },
    {
      name: "[1] list manager",
      type: "object",
      desc: "list manager object",
      properties: [
        {
          name: "updateItems",
          type: "(newItems: Item<T>[]) => void",
          desc: "Function to replace the current list of items with a new list.",
        },
        {
          name: "addItem",
          type: "(item: Item<T>) => void",
          desc: "Function to add a new item to the list.",
        },
        {
          name: "removeItem",
          type: "(id: string | number) => void",
          desc: "Function to remove an item from the list by its id.",
        },
        {
          name: "removeItems",
          type: "(ids: (string | number)[]) => void",
          desc: "Function to remove multiple items from the list by their ids.",
        },
        {
          name: "save",
          type: "() => void",
          desc: "Function to save the current state of the list.",
        },
        {
          name: "reset",
          type: "() => void",
          desc: "Function to reset the list to its original state.",
        },
        {
          name: "filteredItems",
          type: "Item<T>[]",
          desc: "The current list of items after applying the filter function.",
        },
        {
          name: "originalItems",
          type: "Item<T>[]",
          desc: "The original list of items.",
        },
        {
          name: "render",
          type: "() => React.ReactNode",
          desc: "Function to render the current list of items.",
        },
        {
          name: "pagedItems",
          type: "Item<T>[]",
          desc: "The current page of items when pagination is applied.",
        },
        {
          name: "currentPage",
          type: "number",
          desc: "The current page number when pagination is applied.",
        },
        {
          name: "totalPage",
          type: "number",
          desc: "The total number of pages when pagination is applied.",
        },
        {
          name: "goToPage",
          type: "(page: number) => void",
          desc: "Function to navigate to a specific page.",
        },
        {
          name: "goLastPage",
          type: "() => void",
          desc: "Function to navigate to the previous page.",
        },
        {
          name: "goNextPage",
          type: "() => void",
          desc: "Function to navigate to the next page.",
        },
      ],
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">Api of useList</SubTitle>
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
