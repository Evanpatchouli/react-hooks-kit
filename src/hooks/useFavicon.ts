import { useEffect, useMemo } from "react";

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
export default function useFavicon(iconUrl: string, options?: UseFaviconOptions | string | number): void {
  const badge = useMemo(() => {
    if (typeof options === 'string' || typeof options === 'number') {
      return { content: options };
    }
    return options?.badge ?? null;
  }, [options]);

  useEffect(() => {
    if (!iconUrl) return;
    // 没 badge 直接设置
    if (!badge) {
      setFavicon(iconUrl);
      return;
    }

    createFaviconWithBadge(iconUrl, badge)
      .then(setFavicon)
      .catch(() => setFavicon(iconUrl));
  }, [
    iconUrl, badge,
  ]);
}

function setFavicon(href: string) {
  document.querySelectorAll("link[rel*='icon']").forEach((el) => el.remove());

  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = href;

  document.head.appendChild(link);
}

/**
 * Creates a favicon with a badge overlay
 */
async function createFaviconWithBadge(
  iconUrl: string,
  badge: BadgeOptions
): Promise<string> {
  const {
    content,
    position = "top-right",
    bgColor = "#ff3b30",
    textColor = "#fff",
    size = 0.5,
  } = badge;

  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      try {
        const iconSize = Math.max(img.naturalWidth || 0, 64);

        const canvas = document.createElement("canvas");
        canvas.width = iconSize;
        canvas.height = iconSize;

        const ctx = canvas.getContext("2d");
        if (!ctx) return reject("ctx failed");

        ctx.drawImage(img, 0, 0, iconSize, iconSize);

        const badgeSize = Math.max(iconSize * size, 14);
        const r = badgeSize / 2;
        const padding = iconSize * 0.06;

        let x = 0;
        let y = 0;

        switch (position) {
          case "top-left":
            x = r + padding;
            y = r + padding;
            break;
          case "bottom-left":
            x = r + padding;
            y = iconSize - r - padding;
            break;
          case "bottom-right":
            x = iconSize - r - padding;
            y = iconSize - r - padding;
            break;
          default:
            x = iconSize - r - padding;
            y = r + padding;
        }

        ctx.fillStyle = bgColor;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();

        let text = String(content);

        if (typeof content === "number" && content > 99) {
          text = "99+";
        }

        ctx.fillStyle = textColor;
        ctx.font = `bold ${badgeSize * 0.65}px system-ui, -apple-system, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillText(text, x, y + 0.5);

        resolve(canvas.toDataURL("image/png"));
      } catch (e) {
        reject(e);
      }
    };

    img.onerror = () => {
      reject(new Error(`Failed to load icon: ${iconUrl}`));
    };
    img.src = iconUrl;
  });
}


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

export function createTextFavicon(text: string | number, options: TextFaviconOptions = {}) {
  const {
    fontFamily = "Arial, sans-serif",
    fontSize = 24,
    textColor = "#fff",
    bgColor = "transparent",
    dpr = window.devicePixelRatio || 1,
  } = options;

  const canvas = document.createElement("canvas");
  canvas.width = fontSize * dpr;
  canvas.height = fontSize * dpr;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Failed to get 2D context from canvas");
  }

  ctx.scale(dpr, dpr);

  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, fontSize, fontSize);

  ctx.fillStyle = textColor;
  ctx.font = `bold ${fontSize}px ${fontFamily}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(String(text), fontSize / 2, fontSize / 2);

  return canvas.toDataURL("image/png");
}