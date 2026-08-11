import React from "react";
export type UseInfiniteScrollOptions<T = any, C extends keyof React.JSX.IntrinsicElements = "div"> = {
    loadMore: () => Promise<T[] | void>;
    hasMore: boolean;
    loader?: React.ReactNode | (() => React.ReactNode);
    component?: C;
    props?: React.JSX.IntrinsicElements[C];
    preloadDistance?: number;
    observerOptions?: IntersectionObserverInit;
    disabled?: boolean;
    /** 容器元素 id（优先使用） */
    containerId?: string;
    /** 容器 ref（containerId 不存在时使用） */
    containerRef?: React.RefObject<HTMLElement>;
} & ({
    mode: "container";
    containerId?: never;
    containerRef: React.RefObject<HTMLElement>;
} | {
    mode: "container";
    containerId: string;
    containerRef?: never;
} | {
    mode?: "auto" | "viewport";
    containerId?: never;
    containerRef?: never;
});
/**
 * **useInfiniteScroll** 是一个 React Hook，提供无限滚动功能及自动加载检测。
 * ### 参数
 * - loadMore: `() => Promise<T[] | void>` - 加载更多数据的异步函数。应返回数据数组或 void。
 * - hasMore: `boolean` - 是否还有更多数据可加载。
 * - loader?: `React.ReactNode | (() => React.ReactNode)` - 自定义加载器组件或渲染函数。默认为 "Loading..."。
 * - component?: `C extends keyof React.JSX.IntrinsicElements` - 加载器容器的 HTML 元素类型。默认为 `"div"`。
 * - props?: `React.JSX.IntrinsicElements[C]` - 传递给加载器容器元素的属性。
 * - preloadDistance?: `number` - 距离底部触发加载的像素距离。默认为 `200`。
 * - observerOptions?: `IntersectionObserverInit` - IntersectionObserver 的自定义选项。
 * - disabled?: `boolean` - 是否禁用自动加载。
 * ---
 * ### 返回值 (对象)
 * - loader: `React.ReactElement` - 渲染在列表底部的加载器元素。必须放置在 DOM 中以触发加载。
 * - loading: `boolean` - 当前是否正在加载数据。
 * - items: `T[]` - 已加载的数据数组。
 * - setItems: `React.Dispatch<React.SetStateAction<T[]>>` - 手动更新数据的函数。
 * - reset: `() => void` - 重置数据和加载状态的函数。
 * - reload: `() => Promise<void>` - 重置并从开头重新加载的函数。
 * - triggerLoadMore: `() => Promise<void>` - 手动触发加载更多数据的函数。
 * ---
 * ### 用法
 * ```tsx
 * const { loader, loading, items } = useInfiniteScroll({
 *   loadMore: async () => {
 *     const data = await fetchData(page);
 *     return data;
 *   },
 *   hasMore: page < totalPages,
 *   preloadDistance: 300
 * });
 *
 * return (
 *   <div>
 *     {items.map(item => <div key={item.id}>{item.name}</div>)}
 *     {loader}
 *   </div>
 * );
 * ```
 * ---
 * ### 示例
 * ```tsx
 * import { useInfiniteScroll } from "@evanpatchouli/react-hooks-kit";
 *
 * const InfiniteList = () => {
 *   const [page, setPage] = useState(1);
 *   const [hasMore, setHasMore] = useState(true);
 *
 *   const { loader, loading, items, reset } = useInfiniteScroll({
 *     loadMore: async () => {
 *       const response = await fetch(`/api/items?page=${page}`);
 *       const data = await response.json();
 *       setPage(p => p + 1);
 *       setHasMore(data.hasMore);
 *       return data.items;
 *     },
 *     hasMore,
 *     loader: <div style={{ textAlign: "center" }}>正在加载更多...</div>,
 *     preloadDistance: 200
 *   });
 *
 *   return (
 *     <div>
 *       <button onClick={reset}>重置</button>
 *       {items.map((item, idx) => (
 *         <div key={idx}>{item.title}</div>
 *       ))}
 *       {loader}
 *     </div>
 *   );
 * };
 * ```
 * ---
 * ### 常见问题
 * - Q: 为什么加载器没有触发？
 * - A: 确保加载器元素已渲染在 DOM 中且可见。IntersectionObserver 需要检测到它。
 * ---
 * - Q: 如何自定义加载指示器？
 * - A: 传入自定义的 `loader` 属性，使用你的 React 组件或渲染函数。
 * ---
 * - Q: 可以手动触发加载吗？
 * - A: 可以，使用 Hook 返回的 `triggerLoadMore` 函数。
 */
export default function useInfiniteScroll<T = any, C extends keyof React.JSX.IntrinsicElements = "div">({ loadMore, hasMore, loader, component, props, preloadDistance, observerOptions, disabled, containerId, containerRef, mode, }: UseInfiniteScrollOptions<T, C>): {
    loader: import("react/jsx-runtime").JSX.Element;
    loading: boolean;
    items: T[];
    setItems: React.Dispatch<React.SetStateAction<T[]>>;
    reset: () => void;
    reload: () => Promise<void>;
    triggerLoadMore: () => Promise<void>;
};
