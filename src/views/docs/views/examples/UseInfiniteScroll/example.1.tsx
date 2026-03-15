import useInfiniteScroll from "@hooks/useInfiniteScroll";
import { Button, Card } from "@mui/material";
import { useState } from "react";

const mockFetch = (page: number) =>
  new Promise<{ items: any[]; hasMore: boolean }>((resolve) => {
    setTimeout(() => {
      const pageSize = 10;
      const maxPage = 5;

      const items = Array.from({ length: pageSize }).map((_, i) => ({
        id: (page - 1) * pageSize + i + 1,
        title: `Item ${(page - 1) * pageSize + i + 1}`,
      }));

      resolve({
        items,
        hasMore: page < maxPage,
      });
    }, 1000);
  });

const View = () => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { loader, loading, items, reset } = useInfiniteScroll({
    loadMore: async () => {
      const data = await mockFetch(page);
      setPage(p => p + 1);
      setHasMore(data.hasMore);
      return data.items;
    },
    hasMore,
    loader: <div style={{ textAlign: "center" }}>Loading more...</div>,
    preloadDistance: 200,
    mode: "container",
    containerId: "infinite-scroll-container"
  });

  return (
    <Card id="infinite-scroll-container" style={{ maxWidth: 400, height: 200 + 20, margin: "20px auto", padding: 20, overflow: "auto" }}>
      <Button onClick={reset}>Reset</Button>
      {items.map((item, idx) => (
        <div key={idx} style={{ height: 20 }}>{item.title}</div>
      ))}
      {loader}
    </Card>
  );
};

const code = `
import useInfiniteScroll from "@hooks/useInfiniteScroll";
import { Button } from "@mui/material";
import { useState } from "react";

const mockFetch = (page: number) =>
  new Promise<{ items: any[]; hasMore: boolean }>((resolve) => {
    setTimeout(() => {
      const pageSize = 10;
      const maxPage = 5;

      const items = Array.from({ length: pageSize }).map((_, i) => ({
        id: (page - 1) * pageSize + i + 1,
        title: \`Item \${(page - 1) * pageSize + i + 1}\`,
      }));

      resolve({
        items,
        hasMore: page < maxPage,
      });
    }, 800);
  });

const View = () => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { loader, loading, items, reset } = useInfiniteScroll({
    loadMore: async () => {
      const data = await mockFetch(page);
      setPage(p => p + 1);
      setHasMore(data.hasMore);
      return data.items;
    },
    hasMore,
    loader: <div style={{ textAlign: "center" }}>Loading more...</div>,
    preloadDistance: 200
  });

  return (
    <div>
      <Button onClick={reset}>Reset</Button>
      {items.map((item, idx) => (
        <div key={idx}>{item.title}</div>
      ))}
      {loader}
    </div>
  );
};
`;

export default {
  code,
  View,
};
