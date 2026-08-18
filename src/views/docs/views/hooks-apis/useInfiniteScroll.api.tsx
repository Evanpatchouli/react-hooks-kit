import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseInfiniteScroll() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "loadMore",
      type: "() => Promise<T[] | void>",
      desc: "Asynchronously loads the next batch of items.",
    },
    {
      name: "hasMore",
      type: "boolean",
      desc: "Whether another batch of items is available.",
    },
    {
      name: "loader",
      type: "React.ReactNode | (() => React.ReactNode)",
      defaultValue: "Loading...",
      desc: "Content rendered while a request is in progress.",
    },
    {
      name: "component",
      type: "C",
      defaultValue: "div",
      desc: "The HTML element used as the loader wrapper.",
    },
    {
      name: "props",
      type: "React.JSX.IntrinsicElements[C]",
      desc: "Props forwarded to the loader wrapper element.",
    },
    {
      name: "preloadDistance",
      type: "number",
      defaultValue: 200,
      desc: "Distance in pixels before the end at which loading starts.",
    },
    {
      name: "observerOptions",
      type: "IntersectionObserverInit",
      desc: "Additional options passed to IntersectionObserver.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      desc: "Disables automatic loading when true.",
    },
    {
      name: "mode",
      type: '"auto" | "viewport" | "container"',
      defaultValue: "auto",
      desc: "Selects whether the viewport or a scroll container is observed.",
    },
    {
      name: "containerId",
      type: "string",
      desc: "ID of the scroll container when mode is container.",
    },
    {
      name: "containerRef",
      type: "React.RefObject<HTMLElement>",
      desc: "Ref of the scroll container when mode is container.",
    },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "loader",
      type: "React.ReactElement",
      desc: "Loader element that must be rendered at the end of the list.",
    },
    {
      name: "loading",
      type: "boolean",
      desc: "Whether a load request is currently in progress.",
    },
    {
      name: "items",
      type: "T[]",
      desc: "Items accumulated from successful loadMore calls.",
    },
    {
      name: "setItems",
      type: "React.Dispatch<React.SetStateAction<T[]>>",
      desc: "Updates the accumulated items manually.",
    },
    {
      name: "reset",
      type: "() => void",
      desc: "Clears the items and resets the loading state.",
    },
    {
      name: "reload",
      type: "() => Promise<void>",
      desc: "Clears the list and triggers the first load again.",
    },
    {
      name: "triggerLoadMore",
      type: "() => Promise<void>",
      desc: "Manually triggers loadMore.",
    },
  ];

  return (
    <>
      <SubTitle id="hook-api">Api of useInfiniteScroll</SubTitle>
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
