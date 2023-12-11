import { useState, useEffect, useCallback, Fragment, useMemo } from "react";
import UKey from "./utils/Ukey";

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
type RenderNoData = (() => JSX.Element | React.ReactNode) | JSX.Element | React.ReactNode;

interface UseListOptions<T extends object = {}> {
  idKey?: string;
  sortFn?: SortFunction<T>;
  filterFn?: FilterFunction<T>;
  renderFn?: RenderFunction<T>;
  renderNoData?: RenderNoData;
  itemsPerPage?: number;
}

function useList<T extends object = {}>(
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
    readonly reset: () => void;
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
] {
  const [items, setItems] = useState<ItemExtended<T>[]>(
    // @ts-ignore
    [...initialItems].map((item) => ({
      ...item,
      [options.idKey || "_id"]: UKey(),
    }))
  );
  const [originalItems, setOriginalItems] = useState<Item<T>[]>([...initialItems]);

  useEffect(() => {
    // 去除 唯一id 再设置
    const newItems = items.map((item) => {
      const _item: any = { ...item };
      if (_item[options.idKey || "_id"]) {
        delete _item[options.idKey || "_id"];
      }

      return _item;
    });
    setOriginalItems([...newItems]);
  }, dependencies);

  const save = useCallback(() => {
    const newItems = items.map((item) => {
      const _item: any = { ...item };
      if (_item[options.idKey || "_id"]) {
        delete _item[options.idKey || "_id"];
      }

      return _item;
    });
    setOriginalItems([...newItems]);
  }, [items]);

  const addItem = useCallback(
    (item: Item) => {
      // @ts-ignore
      setItems((prevItems) => [...prevItems, { ...item, [options.idKey || "_id"]: UKey() }]);
    },
    [options.idKey]
  );

  const removeItem = useCallback(
    (id: string | number) => {
      if (id === void 0 || id === null) {
        throw new Error("idKey is required to removeItem in list");
      }
      setItems((prevItems) => prevItems.filter((item: any) => item[options.idKey || "_id"] !== id));
    },
    [options.idKey]
  );

  const removeItems = useCallback(
    (ids: (string | number)[]) => {
      ids.forEach((id) => {
        removeItem(id);
      });
    },
    [options.idKey]
  );

  const reset = useCallback(() => {
    setItems(
      // @ts-ignore
      [...originalItems].map((item) => ({
        ...item,
        [options.idKey || "_id"]: UKey(),
      }))
    );
  }, [originalItems]);

  const updateItems = useCallback((newItems: Item<T>[]) => {
    if (newItems.some((item: any) => [void 0, null].includes(item[options.idKey || "_id"]))) {
      throw new Error("idKey is required to updateItem in list");
    }
    // @ts-ignore
    setItems(newItems);
  }, []);

  const sortedItems = [...items].sort(options.sortFn || (() => 0));
  const filteredItems = sortedItems.filter(options.filterFn || (() => true));

  const [currentPage, setCurrentPage] = useState(1);

  const totalPage = useMemo(() => {
    return Math.max(1, Math.ceil(filteredItems.length / (options?.itemsPerPage ?? 10)));
  }, [filteredItems.length, options.itemsPerPage]);

  const goToPage = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPage) {
        setCurrentPage(page);
      }
    },
    [totalPage]
  );

  const goLastPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  }, [currentPage]);

  const goNextPage = useCallback(() => {
    if (currentPage < totalPage) {
      setCurrentPage((page) => page + 1);
    }
  }, [currentPage, totalPage]);

  const pagedItems = filteredItems.slice(
    (currentPage - 1) * (options.itemsPerPage ?? 10),
    currentPage * (options.itemsPerPage ?? 10)
  );

  return [
    items,
    {
      updateItems,
      addItem,
      removeItem,
      removeItems,
      save,
      reset,
      filteredItems,
      originalItems,
      render: () => {
        return filteredItems?.length
          ? filteredItems.map((item: any, idx, array) => {
              return options.renderFn ? (
                <Fragment key={item[options.idKey || "_id"]}>{options.renderFn(item, idx, array)}</Fragment>
              ) : null;
            })
          : options.renderNoData
          ? typeof options.renderNoData === "function"
            ? options.renderNoData()
            : options.renderNoData
          : null;
      },
      pagedItems,
      currentPage,
      totalPage,
      goToPage,
      goLastPage,
      goNextPage,
    } as const,
  ];
}

export default useList;
