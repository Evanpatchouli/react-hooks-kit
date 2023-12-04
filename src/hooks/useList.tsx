import { useState, useEffect, useCallback } from "react";

type Item = { [key: string]: any };
type SortFunction = (a: Item, b: Item) => number;
type FilterFunction = (item: Item) => boolean;
type RenderFunction = (item: Item) => JSX.Element;

interface UseListOptions {
  idKey?: string;
  sortFn?: SortFunction;
  filterFn?: FilterFunction;
  renderFn?: RenderFunction;
}

function useList(
  initialItems: Item[],
  dependencies: any[],
  options: UseListOptions
): [
  Item[],
  (newItems: Item[]) => void,
  (item: Item) => void,
  () => void,
  Item[]
] {
  const [items, setItems] = useState<Item[]>([...initialItems]);
  const [originalItems, setOriginalItems] = useState<Item[]>([...initialItems]);

  useEffect(() => {
    setOriginalItems([...items]);
  }, dependencies);

  const save = useCallback(() => {
    setOriginalItems([...items]);
  }, [items]);

  const addItem = useCallback(
    (item: Item) => {
      setItems((prevItems) => [
        ...prevItems,
        { ...item, [options.idKey || "_id"]: Date.now().toString() },
      ]);
    },
    [options.idKey]
  );

  const updateItems = useCallback((newItems: Item[]) => {
    setItems(newItems);
  }, []);

  const sortedItems = [...items].sort(options.sortFn || (() => 0));
  const filteredItems = sortedItems.filter(options.filterFn || (() => true));

  return [items, updateItems, addItem, save, filteredItems];
}
