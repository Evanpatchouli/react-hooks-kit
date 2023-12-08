import { useState, useEffect, useCallback } from "react";
import UKey from "./utils/Ukey";

type Item<T extends object = {}> = T;
type ItemExtended<T extends object = {}> = Item<T> & {
  _id: any;
};
type SortFunction<T extends object = {}> = (
  a: Item,
  b: ItemExtended<T>
) => number;
type FilterFunction<T extends object = {}> = (item: ItemExtended<T>) => boolean;
type RenderFunction<T extends object = {}> = (
  item: ItemExtended<T>
) => JSX.Element;

interface UseListOptions<T extends object = {}> {
  idKey?: string;
  sortFn?: SortFunction<T>;
  filterFn?: FilterFunction<T>;
  renderFn?: RenderFunction<T>;
}

function useList<T extends object = {}>(
  initialItems: Item<T>[],
  dependencies: any[],
  options: UseListOptions<T>
): [
  Item<T>[],
  {
    readonly updateItems: (newItems: Item<T>[]) => void;
    readonly addItem: (item: Item<T>) => void;
    readonly removeItem: (id: string | number) => void;
    readonly save: () => void;
    readonly reset: () => void;
    readonly filteredItems: Item<T>[];
    readonly originalItems: Item<T>[];
    readonly render: () => React.ReactNode;
  }
] {
  const [items, setItems] = useState<ItemExtended<T>[]>(
    // @ts-ignore
    [...initialItems].map((item) => ({
      ...item,
      [options.idKey || "_id"]: UKey(),
    }))
  );
  const [originalItems, setOriginalItems] = useState<Item<T>[]>([
    ...initialItems,
  ]);

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
      setItems((prevItems) => [
        ...prevItems,
        { ...item, [options.idKey || "_id"]: UKey() },
      ]);
    },
    [options.idKey]
  );

  const removeItem = useCallback(
    (id: string | number) => {
      setItems((prevItems) =>
        prevItems.filter((item: any) => item[options.idKey || "_id"] !== id)
      );
    },
    [options.idKey]
  );

  const reset = useCallback(() => {
    // @ts-ignore
    setItems([...originalItems]);
  }, [originalItems]);

  const updateItems = useCallback((newItems: Item<T>[]) => {
    // @ts-ignore
    setItems(newItems);
  }, []);

  const sortedItems = [...items].sort(options.sortFn || (() => 0));
  const filteredItems = sortedItems.filter(options.filterFn || (() => true));

  return [
    items,
    {
      updateItems,
      addItem,
      removeItem,
      save,
      reset,
      filteredItems,
      originalItems,
      render: () => {
        return filteredItems.map((item) => {
          return options.renderFn ? options.renderFn(item) : null;
        });
      },
    } as const,
  ];
}

export default useList;
