import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";

export interface VirtualAreaOptions<
  C extends keyof React.JSX.IntrinsicElements = "div",
  I extends keyof React.JSX.IntrinsicElements = "div",
  L extends keyof React.JSX.IntrinsicElements = "div"
> {
  loadMoreItems: () => Promise<void>;
  items: any[];
  hasMore: boolean;
  height: React.CSSProperties["height"];
  style?: React.CSSProperties;
  containerComponent?: C;
  containerComponentProps?: React.JSX.IntrinsicElements[C];
  renderTop?: React.ReactNode | (() => React.ReactNode);
  renderItem: React.ReactNode | ((item: any) => React.ReactNode);
  itemComponent?: I;
  itemComponentProps?: React.JSX.IntrinsicElements[I];
  renderEmpty?: React.ReactNode | (() => React.ReactNode);
  renderLoader?: React.ReactNode | (() => React.ReactNode);
  renderUnLoaded?: React.ReactNode | (() => React.ReactNode);
  loaderComponent?: L;
  loaderComponentProps?: React.JSX.IntrinsicElements[L];
  renderBottom?: React.ReactNode | (() => React.ReactNode);
  observerOptions?: IntersectionObserverInit;
}

export default function useVirtualArea(
  {
    loadMoreItems,
    items,
    hasMore,
    height,
    style: containerStyle,
    renderTop,
    renderItem,
    itemComponent,
    itemComponentProps,
    renderEmpty,
    renderLoader,
    renderUnLoaded,
    loaderComponent,
    loaderComponentProps,
    containerComponent,
    containerComponentProps,
    renderBottom,
    observerOptions,
  }: VirtualAreaOptions,
  depths?: any[]
) {
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<any>(null);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    await loadMoreItems();
    setLoading(false);
  }, [loading, hasMore, loadMoreItems]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      {
        ...options,
        ...observerOptions,
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [observerOptions, loadMore]);

  const Container = useMemo(() => containerComponent || "div", [containerComponent]);

  const Item = useMemo(() => itemComponent || "div", [itemComponent]);

  const Loader = useMemo(() => loaderComponent || "div", [loaderComponent]);

  const _containerComponentProps = useMemo(() => {
    const { style, ...rest } = containerComponentProps ?? {};
    return {
      ...rest,
      style: {
        overflow: "auto",
        height,
        ...containerStyle,
        ...style,
      } as React.CSSProperties,
    };
  }, [containerComponentProps, height, containerStyle]);

  const render = useCallback(() => {
    return (
      <Container {..._containerComponentProps}>
        {typeof renderTop === "function" ? renderTop() : renderTop}
        {
          /** @ts-ignore */
          (items || []).length === 0 &&
            (typeof renderEmpty === "function" ? renderEmpty() : renderEmpty === void 0 ? "No data" : renderEmpty)
        }
        {items.map((item, index) => (
          <Item key={index} {...itemComponentProps}>
            {typeof renderItem === "function" ? renderItem(item) : renderItem}
          </Item>
        ))}
        {/** @ts-ignore */}
        <Loader ref={loaderRef} {...loaderComponentProps}>
          {loading &&
            (typeof renderLoader === "function"
              ? renderLoader()
              : renderLoader === void 0
              ? "Loading..."
              : renderLoader)}
          {!loading &&
            !hasMore &&
            (typeof renderUnLoaded === "function"
              ? renderUnLoaded()
              : renderUnLoaded === void 0
              ? "No more data"
              : renderUnLoaded)}
        </Loader>
        {typeof renderBottom === "function" ? renderBottom() : renderBottom}
      </Container>
    );
  }, [
    _containerComponentProps,
    renderTop,
    items,
    Item,
    itemComponentProps,
    renderItem,
    loaderRef,
    loaderComponentProps,
    loading,
    renderLoader,
    hasMore,
    renderUnLoaded,
    renderBottom,
    ...(depths || []),
  ]);

  return [loaderRef, loading, items, render] as const;
}
