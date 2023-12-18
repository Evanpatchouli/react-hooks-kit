import { useState } from "react";
import useVirtualArea from "@hooks/useVirtualArea";
import Loading from "@/components/Loading";

const Empty = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50">
    <circle cx="25" cy="25" r="20" stroke="#aaa" stroke-width="2" fill="none" />
    <line x1="15" y1="15" x2="35" y2="35" stroke="#aaa" stroke-width="2" />
  </svg>
);

function View() {
  const [items, setItems] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreItems = async () => {
    // Mock network request
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

    // push new items
    setItems((prevItems) => [...prevItems, ...Array.from({ length: 10 }, (_, i) => i + prevItems.length)]);

    // do not load more if there has been 50 items at least
    if (items.length + 10 >= 50) {
      setHasMore(false);
    }
  };

  const renderItem = (item: any) => <div css={$css`margin-left: 20px`}>{item}</div>;

  const [loaderRef, loading, _items, render] = useVirtualArea({
    loadMoreItems,
    items,
    hasMore,
    renderItem,
    renderEmpty: (
      <div css={$css`display: flex; align-items: center; padding-block: 20px;`}>
        <span>No Data</span>
        <div css={$css`margin-left: 12px; width: 20px; height: 20px;`} children={<Empty />} />
      </div>
    ),
    height: "300px",
    style: {
      position: "relative",
    },
    loaderComponentProps: {
      style: {
        marginBlock: "20px",
      },
    },
    renderTop: () => {
      return (
        <div
          css={$css`display: flex; align-items: center; position: sticky; top: 0; z-index: 1; background-color: #fff; padding: 10px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);`}
        >
          <strong>total : </strong>
          <span css={$css`margin-left: 20px;`}>{items.length}</span>
          <strong css={$css`margin-left: 20px;`}>hasMore : </strong>
          <span css={$css`margin-left: 20px;`}>{hasMore.toString()}</span>
          <strong css={$css`margin-left: 20px;`}>loading : </strong>
          <span css={$css`margin-left: 20px;`}>{loading.toString()}</span>
        </div>
      );
    },
    renderLoader: () => {
      return (
        <div css={$css`display: flex; align-items: center; margin-left: 12px;`}>
          <Loading on />
          <span css={$css`margin-left: 20px; color: #44A2FC;`}>Loading Items...</span>
        </div>
      );
    },
    renderUnLoaded: () => {
      return (
        <div css={$css`display: flex; align-items: center;`}>
          <span css={$css`color: #333;`}>No more Items</span>
          <span
            css={$css`
              margin-left: 20px;
              color: #44A2FC;
              cursor: pointer;
            `}
            onClick={() => {
              setItems([]);
              setHasMore(true);
            }}
          >
            Restart
          </span>
        </div>
      );
    },
  });

  return <div>{render()}</div>;
}

const code = `import React, { useState, useEffect } from "react";
import useVirtualArea from "@hooks/useVirtualArea";
import Loading from "@/components/Loading";

const Empty = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 50 50"
  >
    <circle cx="25" cy="25" r="20" stroke="#aaa" stroke-width="2" fill="none" />
    <line x1="15" y1="15" x2="35" y2="35" stroke="#aaa" stroke-width="2" />
  </svg>
);

function View() {
  const [items, setItems] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreItems = async () => {
    // 模拟网络请求
    // Mock network request
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 1000)
    );

    // push new items
    setItems((prevItems) => [
      ...prevItems,
      ...Array.from({ length: 10 }, (_, i) => i + prevItems.length),
    ]);

    // do not load more if there has been 50 items at least
    if (items.length + 10 >= 50) {
      setHasMore(false);
    }
  };

  const renderItem = (item: any) => (
    <div css={$css\`margin-left: 20px\`}>{item}</div>
  );

  const [loaderRef, loading, _items, render] = useVirtualArea({
    loadMoreItems,
    items,
    hasMore,
    renderItem,
    renderEmpty: (
      <div css={$css\`display: flex; align-items: center; padding-block: 20px;\`}>
        <span>No Data</span>
        <div
          css={$css\`margin-left: 12px; width: 20px; height: 20px;\`}
          children={<Empty />}
        />
      </div>
    ),
    height: "300px",
    style: {
      position: "relative",
    },
    loaderComponentProps: {
      style: {
        marginBlock: "20px",
      },
    },
    renderTop: () => {
      return (
        <div
          css={$css\`display: flex; align-items: center; position: sticky; top: 0; z-index: 1; background-color: #fff; padding: 10px; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\`}
        >
          <strong>total : </strong>
          <span css={$css\`margin-left: 20px;\`}>{items.length}</span>
          <strong css={$css\`margin-left: 20px;\`}>hasMore : </strong>
          <span css={$css\`margin-left: 20px;\`}>{hasMore.toString()}</span>
          <strong css={$css\`margin-left: 20px;\`}>loading : </strong>
          <span css={$css\`margin-left: 20px;\`}>{loading.toString()}</span>
        </div>
      );
    },
    renderLoader: () => {
      return (
        <div css={$css\`display: flex; align-items: center; margin-left: 12px;\`}>
          <Loading on />
          <span css={$css\`margin-left: 20px; color: #44A2FC;\`}>
            Loading Items...
          </span>
        </div>
      );
    },
    renderUnLoaded: () => {
      return (
        <div css={$css\`display: flex; align-items: center;\`}>
          <span css={$css\`color: #333;\`}>No more Items</span>
          <span
            css={$css\`
              margin-left: 20px;
              color: #44A2FC;
              cursor: pointer;
            \`}
            onClick={() => {
              setItems([]);
              setHasMore(true);
            }}
          >
            Restart
          </span>
        </div>
      );
    },
  });

  return <div>{render()}</div>;
}
`;

export default {
  View,
  code,
};
