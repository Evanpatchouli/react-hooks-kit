export interface BadgeOptions {
    /** 角标内容 */
    content: string | number;
    /** 角标位置 */
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    /** 角标背景色 */
    bgColor?: string;
    /** 角标文字颜色 */
    textColor?: string;
    /** 角标大小（相对于图标大小的比例，0-1） */
    size?: number;
}
export interface UseFaviconOptions {
    badge?: BadgeOptions;
}
/**
 * **useFavicon** is a React Hook that dynamically sets the favicon of the page with optional badge support.
 * ### Parameters
 * - iconUrl: `string` - The URL of the favicon image.
 * - badge?: `string | number` - Shorthand for badge content with default settings.
 * - options?: `UseFaviconOptions` - Full configuration object for the favicon.
 *   - badge?: `BadgeOptions` - Badge configuration to overlay on the favicon.
 *     - content: `string | number` - The content to display in the badge. Numbers over 99 will display as "99+".
 *     - position?: `"top-right" | "top-left" | "bottom-right" | "bottom-left"` - Badge position. Defaults to `"top-right"`.
 *     - bgColor?: `string` - Badge background color. Defaults to `"#ff3b30"`.
 *     - textColor?: `string` - Badge text color. Defaults to `"#fff"`.
 *     - size?: `number` - Badge size as a ratio of icon size (0-1). Defaults to `0.5`.
 * ---
 * ### Return
 * - void
 * ---
 * ### Usage
 * ```tsx
 * // Basic usage - no badge
 * useFavicon("/favicon.ico");
 *
 * // Shorthand - number badge
 * useFavicon("/favicon.ico", 5);
 *
 * // Shorthand - string badge
 * useFavicon("/favicon.ico", "!");
 *
 * // Full configuration - custom position
 * useFavicon("/favicon.ico", {
 *   badge: {
 *     content: 3,
 *     position: "bottom-right"
 *   }
 * });
 *
 * // Full configuration - custom colors
 * useFavicon("/favicon.ico", {
 *   badge: {
 *     content: "NEW",
 *     bgColor: "#00ff00",
 *     textColor: "#000000"
 *   }
 * });
 * ```
 * ---
 * ### Example
 * ```tsx
 * import { useFavicon } from "@evanpatchouli/react-hooks-kit";
 * import { useState, useEffect } from "react";
 *
 * // Example 1: Dynamic counter badge
 * const CounterExample = () => {
 *   const [count, setCount] = useState(0);
 *   useFavicon("/favicon.ico", count);
 *
 *   return (
 *     <button onClick={() => setCount(count + 1)}>
 *       Count: {count}
 *     </button>
 *   );
 * };
 *
 * // Example 2: Notification badge
 * const NotificationExample = () => {
 *   const [unread, setUnread] = useState(0);
 *
 *   useFavicon("/favicon.ico", {
 *     badge: {
 *       content: unread,
 *       position: "top-right",
 *       bgColor: "#ff3b30",
 *       textColor: "#fff"
 *     }
 *   });
 *
 *   return <div>Unread messages: {unread}</div>;
 * };
 *
 * // Example 3: Status indicator
 * const StatusExample = () => {
 *   const [status, setStatus] = useState<"online" | "offline">("online");
 *
 *   useFavicon("/favicon.ico", {
 *     badge: {
 *       content: "●",
 *       position: "bottom-right",
 *       bgColor: status === "online" ? "#00ff00" : "#ff0000",
 *       textColor: "#fff",
 *       size: 0.3
 *     }
 *   });
 *
 *   return <div>Status: {status}</div>;
 * };
 *
 * // Example 4: Different positions
 * const PositionExample = () => {
 *   const [position, setPosition] = useState<"top-right" | "top-left" | "bottom-right" | "bottom-left">("top-right");
 *
 *   useFavicon("/favicon.ico", {
 *     badge: {
 *       content: "5",
 *       position: position
 *     }
 *   });
 *
 *   return (
 *     <select onChange={(e) => setPosition(e.target.value as any)}>
 *       <option value="top-right">Top Right</option>
 *       <option value="top-left">Top Left</option>
 *       <option value="bottom-right">Bottom Right</option>
 *       <option value="bottom-left">Bottom Left</option>
 *     </select>
 *   );
 * };
 *
 * // Example 5: 99+ display
 * const LargeNumberExample = () => {
 *   const [count, setCount] = useState(150);
 *   useFavicon("/favicon.ico", count); // Will display as "99+"
 *
 *   return <div>Count: {count}</div>;
 * };
 * ```
 * ---
 * ### FAQs
 * - Q: Can I use this without a badge?
 * - A: Yes, simply call `useFavicon(iconUrl)` without the second parameter.
 * ---
 * - Q: What happens if the icon fails to load?
 * - A: The hook will fallback to the original icon URL without the badge.
 * ---
 * - Q: Can I change the badge dynamically?
 * - A: Yes, the hook will update the favicon whenever the iconUrl or badge options change.
 * ---
 * - Q: What happens when the badge content exceeds 99?
 * - A: Numbers over 99 will automatically display as "99+" to maintain readability.
 * ---
 * - Q: What's the difference between `useFavicon(url, 5)` and `useFavicon(url, { badge: { content: 5 } })`?
 * - A: They are equivalent. The shorthand `useFavicon(url, 5)` is just a convenient way to set badge content with default settings.
 */
export default function useFavicon(iconUrl: string): void;
export default function useFavicon(iconUrl: string, badge?: string | number): void;
export default function useFavicon(iconUrl: string, options?: UseFaviconOptions): void;
export interface TextFaviconOptions {
    /** 字体 */
    fontFamily?: string;
    /** 字体大小 */
    fontSize?: number;
    /** 字体颜色 */
    textColor?: string;
    /** 背景色 */
    bgColor?: string;
    /** 设备像素比，解决模糊 */
    dpr?: number;
}
export declare function createTextFavicon(text: string | number, options?: TextFaviconOptions): string;
