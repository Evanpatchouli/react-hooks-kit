import { useState, useEffect } from "react";

interface SafeArea {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

/**
 * @hook useSafeArea
 * @availability iOS Safari, Android Chrome
 * @css
 * ```css
 * body {
 *   --safe-area-inset-top: env(safe-area-inset-top);
 *   --safe-area-inset-right: env(safe-area-inset-right);
 *   --safe-area-inset-bottom: env(safe-area-inset-bottom);
 *   --safe-area-inset-left: env(safe-area-inset-left);
 * }
 * ```
 */
export default function useSafeArea(): SafeArea {
  const [safeArea, setSafeArea] = useState<SafeArea>({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });

  useEffect(() => {
    const computeSafeArea = () => {
      const style = getComputedStyle(document.body);
      setSafeArea({
        top: parseInt(style.getPropertyValue("--safe-area-inset-top"), 10),
        right: parseInt(style.getPropertyValue("--safe-area-inset-right"), 10),
        bottom: parseInt(
          style.getPropertyValue("--safe-area-inset-bottom"),
          10
        ),
        left: parseInt(style.getPropertyValue("--safe-area-inset-left"), 10),
      });
    };

    window.addEventListener("resize", computeSafeArea);
    computeSafeArea();

    return () => {
      window.removeEventListener("resize", computeSafeArea);
    };
  }, []);

  return safeArea;
}
