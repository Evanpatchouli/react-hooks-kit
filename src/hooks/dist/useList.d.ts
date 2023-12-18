/// <reference types="react" />
type Item<T extends object = {}> = T;
type ItemExtended<T extends object = {}> = Item<T> & {
  _id: any;
};
type SortFunction<T extends object = {}> = (a: Item, b: ItemExtended<T>) => number;
type FilterFunction<T extends object = {}> = (item: ItemExtended<T>) => boolean;
type RenderFunction<T extends object = {}> = (
  item: ItemExtended<T>,
  index: number,
  array: ItemExtended<T>[]
) => JSX.Element;
type RenderEmpty = (() => JSX.Element | React.ReactNode) | JSX.Element | React.ReactNode;
interface UseListOptions<T extends object = {}> {
  idKey?: string;
  sortFn?: SortFunction<T>;
  filterFn?: FilterFunction<T>;
  renderFn?: RenderFunction<T>;
  renderEmpty?: RenderEmpty;
  itemsPerPage?: number;
}
declare function useList<T extends object = {}>(
  initialItems: Item<T>[],
  dependencies: any[],
  options: UseListOptions<T>
): [
  ItemExtended<T>[],
  {
    readonly updateItems: (newItems: Item<T>[]) => void;
    readonly addItem: (item: Item<T>) => void;
    readonly removeItem: (id: string | number) => void;
    readonly removeItems: (ids: (string | number)[]) => void;
    readonly save: () => void;
    readonly reset: (items?: Item<T>[]) => void;
    readonly filteredItems: Item<T>[];
    readonly originalItems: Item<T>[];
    readonly render: () => React.ReactNode;
    readonly pagedItems: Item<T>[];
    readonly currentPage: number;
    readonly totalPage: number;
    readonly goToPage: (page: number) => void;
    readonly goLastPage: () => void;
    readonly goNextPage: () => void;
  }
];
export default useList;
