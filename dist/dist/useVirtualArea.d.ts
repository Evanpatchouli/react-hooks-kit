import React from "react";
export interface VirtualAreaOptions<C extends keyof React.JSX.IntrinsicElements = "div", I extends keyof React.JSX.IntrinsicElements = "div", L extends keyof React.JSX.IntrinsicElements = "div"> {
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
export default function useVirtualArea({ loadMoreItems, items, hasMore, height, style: containerStyle, renderTop, renderItem, itemComponent, itemComponentProps, renderEmpty, renderLoader, renderUnLoaded, loaderComponent, loaderComponentProps, containerComponent, containerComponentProps, renderBottom, observerOptions, }: VirtualAreaOptions, depths?: any[]): readonly [React.MutableRefObject<any>, boolean, any[], () => import("react/jsx-runtime").JSX.Element];
