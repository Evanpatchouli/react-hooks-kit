import useInfiniteScroll from "@hooks/useInfiniteScroll";
import { useState } from "react";

const View = () => {
  const [page, setPage] = useState(0);
  const { items, loader, loading, reset, triggerLoadMore } = useInfiniteScroll<{ id: number }>({
    loadMore: async () => {
      const nextPage = page + 1;
      await new Promise((resolve) => setTimeout(resolve, 350));
      setPage(nextPage);
      return Array.from({ length: 3 }, (_, index) => ({ id: nextPage * 3 + index + 1 }));
    },
    hasMore: page < 4,
    loader: () => <small>{loading ? "Loading..." : "Scroll to load more"}</small>,
    mode: "viewport",
    preloadDistance: 120,
  });

  const clear = () => {
    setPage(0);
    reset();
  };

  return (
    <div>
      <button onClick={() => void triggerLoadMore()}>Load manually</button>{" "}
      <button onClick={clear}>Clear</button>
      {items.map((item) => <p key={item.id}>Item {item.id}</p>)}
      {loader}
    </div>
  );
};

const code = `
import useInfiniteScroll from "@hooks/useInfiniteScroll";
import { useState } from "react";

const View = () => {
  const [page, setPage] = useState(0);
  const { items, loader, triggerLoadMore } = useInfiniteScroll<{ id: number }>({
    loadMore: async () => {
      const nextPage = page + 1;
      setPage(nextPage);
      return fetch(\`/api/items?page=\${nextPage}\`).then((response) => response.json());
    },
    hasMore: page < 4,
    loader: () => <small>Loading more...</small>,
    mode: "viewport",
    preloadDistance: 120,
  });

  return (
    <div>
      <button onClick={() => void triggerLoadMore()}>Load manually</button>
      {items.map((item) => <p key={item.id}>{item.id}</p>)}
      {loader}
    </div>
  );
};
`;

export default { code, View };
