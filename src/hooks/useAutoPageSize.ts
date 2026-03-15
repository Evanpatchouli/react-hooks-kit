import { useState, useEffect, useRef } from 'react'

export interface UseAutoPageSizeOptions {
  /** 是否只计算一次，不监听容器大小变化，默认 false */
  once?: boolean
  /** 最小页面大小，默认 5 */
  minSize?: number
  /** 缓冲数量，会在计算结果上额外加载的数量，默认 2 */
  buffer?: number
}

/**
 * **useAutoPageSize** is a React Hook that automatically calculates the page size
 * based on the container height and the estimated item height.
 *
 * It is useful for infinite scroll or paginated lists where you want the initial
 * page size to adapt to the visible viewport.
 *
 * ### Parameters
 * - containerId: `string` - The DOM id of the container element used to measure height.
 * - estimatedItemHeight?: `number` - The estimated height (px) of a single item. Defaults to `150`.
 * - options?: `UseAutoPageSizeOptions` - Optional configuration.
 *   - once?: `boolean` - Whether to calculate only once and stop observing container resize. Defaults to `false`.
 *   - minSize?: `number` - The minimum page size. Defaults to `5`.
 *   - buffer?: `number` - Extra number of items to preload beyond the calculated size. Defaults to `2`.
 *
 * ---
 * ### Return
 * - pageSize: `number` - The calculated number of items that should be loaded per page.
 *
 * ---
 * ### Usage
 * ```tsx
 * const pageSize = useAutoPageSize("list-container", 150, {
 *   buffer: 3,
 *   minSize: 6
 * });
 *
 * useEffect(() => {
 *   fetchList({ pageSize });
 * }, [pageSize]);
 * ```
 *
 * ---
 * ### Example
 * ```tsx
 * import useAutoPageSize from "@evanpatchouli/react-hooks-kit";
 *
 * const View = () => {
 *   const pageSize = useAutoPageSize("list-container", 120, {
 *     buffer: 3,
 *     minSize: 5
 *   });
 *
 *   return (
 *     <div id="list-container" style={{ height: 500, overflow: "auto" }}>
 *       <p>Auto page size: {pageSize}</p>
 *     </div>
 *   );
 * };
 * ```
 *
 * ---
 * ### FAQs
 * - Q: Why use useAutoPageSize?
 * - A: It automatically determines how many items should be loaded based on the container height,
 *      helping avoid under-fetching or over-fetching data.
 *
 * ---
 * - Q: What does buffer do?
 * - A: Buffer adds extra items to the calculated page size so the user can scroll smoothly
 *      without immediately triggering another data request.
 *
 * ---
 * - Q: What does once mean?
 * - A: When once is true, the hook calculates the page size only once and stops listening
 *      for container size changes.
 */
export default function useAutoPageSize(
  containerId: string,
  estimatedItemHeight: number = 150,
  options?: UseAutoPageSizeOptions
): number {
  const { once = false, minSize = 5, buffer = 2 } = options || {}
  const [pageSize, setPageSize] = useState(minSize)
  const hasCalculatedRef = useRef(false)

  useEffect(() => {
    const container = document.getElementById(containerId)
    if (!container) return

    const updatePageSize = () => {
      if (once && hasCalculatedRef.current) return

      const height = container.getBoundingClientRect().height

      if (height === 0) return

      const calculatedSize = Math.ceil(height / estimatedItemHeight) + buffer
      setPageSize(Math.max(minSize, calculatedSize))

      hasCalculatedRef.current = true
    }

    updatePageSize()

    const observer = new ResizeObserver(() => {
      updatePageSize()
      if (once && hasCalculatedRef.current) {
        observer.disconnect()
      }
    })
    observer.observe(container)

    return () => observer.disconnect()
  }, [containerId, estimatedItemHeight, minSize, buffer, once])

  return pageSize
}