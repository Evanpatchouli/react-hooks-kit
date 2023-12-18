import Blank from "@/components/Blank";
import Required from "@/components/Required";
import ApiTable from "@/components/api-table";
import { Body, SubTitle } from "@/components/layout/Article";
import useLocaleSelector from "@/locale/locale.selector";
import { Chip } from "@mui/material";

export default function UseVirtualAreaApi() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "options",
      type: "object",
      defaultValue: <Required children="Required" />,
      desc: "options of VirtualAreaOptions",
      properties: [
        {
          name: "loadMoreItems",
          type: "function",
          defaultValue: <Required children="Required" />,
          desc: "load more items function",
          details: "() => Promise<void>",
        },
        {
          name: "items",
          type: "any[]",
          defaultValue: <Required children="Required" />,
          desc: "items to render",
        },
        {
          name: "hasMore",
          type: "boolean",
          defaultValue: <Required children="Required" />,
          desc: "whether there are more items to load",
        },
        {
          name: "height",
          type: "React.CSSProperties['height']",
          defaultValue: <Required children="Required" />,
          desc: "height of virtual area",
        },
        {
          name: "style",
          type: "React.CSSProperties",
          defaultValue: "{}",
          desc: "style of virtual area",
        },
        {
          name: "renderTop",
          type: "React.ReactNode | (() => React.ReactNode)",
          defaultValue: "null",
          desc: "render function of top area",
        },
        {
          name: "renderItem",
          type: "React.ReactNode | ((item: any) => React.ReactNode)",
          defaultValue: <Required children="Required" />,
          desc: "render function of item",
        },
        {
          name: "itemComponent",
          type: "I",
          defaultValue: "null",
          desc: "component of item",
        },
        {
          name: "itemComponentProps",
          type: "React.JSX.IntrinsicElements[I]",
          defaultValue: "{}",
          desc: "props of item component",
        },
        {
          name: "renderEmpty",
          type: "React.ReactNode | (() => React.ReactNode)",
          defaultValue: "No data",
          desc: "render function of no data",
        },
        {
          name: "renderLoader",
          type: "React.ReactNode | (() => React.ReactNode)",
          defaultValue: "Loading...",
          desc: "render function of loader",
        },
        {
          name: "renderUnLoaded",
          type: "React.ReactNode | (() => React.ReactNode)",
          defaultValue: "No more data",
          desc: "render function of unloaded",
        },
        {
          name: "loaderComponent",
          type: "L",
          defaultValue: "div",
          desc: "component of loader",
        },
        {
          name: "loaderComponentProps",
          type: "React.JSX.IntrinsicElements[L]",
          defaultValue: "{}",
          desc: "props of loader component",
        },
        {
          name: "containerComponent",
          type: "C",
          defaultValue: "div",
          desc: "component of container",
        },
        {
          name: "containerComponentProps",
          type: "React.JSX.IntrinsicElements[C]",
          defaultValue: "{}",
          desc: "props of container component",
        },
        {
          name: "renderBottom",
          type: "React.ReactNode | (() => React.ReactNode)",
          defaultValue: "null",
          desc: "render function of bottom area",
        },
        {
          name: "observerOptions",
          type: "IntersectionObserverInit",
          defaultValue: {
            root: null,
            rootMargin: "20px",
            threshold: 1.0,
          },
          desc: "options of IntersectionObserver",
        },
      ],
    },
    {
      name: "depths",
      type: "array",
      defaultValue: <>[]</>,
      desc: "dependencies of items render function",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "[0] loaderRef",
      type: <Chip label="RefObject"></Chip>,
      desc: "ref of loader",
    },
    {
      name: "[1] loading",
      type: "boolean",
      desc: "state of loading",
    },
    {
      name: "[2] items",
      type: "Array<any>",
      desc: "items of list",
    },
    {
      name: "[3] render",
      type: "() => JSX.Element",
      desc: "render function of virtual area",
    },
  ];

  const $generics = useLocaleSelector("useVirtualArea.$apis.generics");

  return (
    <>
      <SubTitle id="hook-api">Api of useVirtualArea</SubTitle>
      <SubTitle low top="20px">
        Generics{"<C, I, L>"}
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
