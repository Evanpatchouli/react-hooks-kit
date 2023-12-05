import { useState, useEffect } from "react";

type MediaQueryTemplate =
  | `(color)`
  | `(${"min" | "max"}-color: ${8})`
  | `(color-gamut: ${"srgb" | "p3" | "rec2020"})`
  | `(color-index)`
  | `(${"min" | "max"}-color-index: ${15000})`
  | `(${"min" | "max"}-${"width" | "height"}: ${800}px)`
  | `(${"min" | "max"}-${"width" | "height"}: ${1200}px)`
  | `(orientation: ${"portrait" | "landscape"})`
  | `(any-hover: ${"none" | "hover"})`
  | `(any-pointer: ${"none" | "coarse" | "fine"})`
  | `(aspect-ratio: ${"9/16" | "3/4" | "1/1" | "4/3" | "16/9"})`
  | `(${"min" | "max"}-aspect-ratio: ${"9/16" | "3/4" | "1/1" | "4/3" | "16/9"})`
  | `(display-mode: ${"fullscreen" | "standalone" | "minimal-ui" | "browser" | "window-controls-overlay"})`
  | `(dynamic-range-${"standard" | "high"})`
  | `(forced-colors: ${"active" | "none"})`
  | `(grid: ${0 | 1})`
  | `(inverted-colors: ${"none" | "inverted"})`
  | `(monochrome)`
  | `(monochrome: ${1})`
  | `(resolution: ${"150dpi" | "300dpi" | "600dpi"})`
  | `(${"min" | "max"}-resolution: ${"150dpi" | "300dpi" | "600dpi"})`
  | `(scan: ${"interlace" | "progressive"})`
  | `(scripting: ${"none" | "initial-only" | "enabled"})`
  | `(video-dynamic-range: ${"standard" | "high"})`
  | `(hover: ${"none" | "hover"})`
  | `(pointer: ${"none" | "coarse" | "fine"})`
  | `(color-scheme: ${"light" | "dark"})`
  | `(grid: ${"none" | "grid"})`
  | `(update: ${"none" | "slow" | "fast"})`
  | `(overflow-block: ${"none" | "scroll" | "optional-paged" | "paged"})`
  | `(overflow-inline: ${"none" | "scroll"})`
  | `(prefers-reduced-motion: ${"reduce" | "no-preference"})`
  | `(prefers-reduced-transparency: ${"reduce" | "no-preference"})`
  | `(prefers-contrast: ${"no-preference" | "high" | "low"})`
  | `(prefers-color-scheme: ${"light" | "dark"})`
  | `(prefers-reduced-data: ${"reduce" | "no-preference"})`
  | `(prefers-contrast: ${"no-preference" | "high" | "low"})`
  | `(prefers-reduced-motion: ${"reduce" | "no-preference"})`
  | `screen and (min-width: ${800}px)"`
  | `screen and (max-width: ${1200}px)"`
  | `screen and (min-height: ${600}px)"`
  | `screen and (max-height: ${1000}px)"`
  | `screen and (orientation: ${"portrait" | "landscape"})"`
  | `screen and (any-hover: ${"none" | "hover"})"`
  | `screen and (any-pointer: ${"none" | "coarse" | "fine"})"`
  | `screen and (hover: ${"none" | "hover"})"`
  | `screen and (pointer: ${"none" | "coarse" | "fine"})"`
  | `screen and (color-scheme: ${"light" | "dark"})"`
  | `screen and (grid: ${"none" | "grid"})"`
  | `screen and (update: ${"none" | "slow" | "fast"})"`
  | `screen and (overflow-block: ${"none" | "scroll" | "optional-paged" | "paged"})"`
  | `screen and (overflow-inline: ${"none" | "scroll"})"`
  | `screen and (prefers-reduced-motion: ${"reduce" | "no-preference"})"`
  | (string & {});

function useMediaQuery(query: MediaQueryTemplate): boolean {
  const [matches, setMatches] = useState<boolean>(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    mediaQueryList.addListener(documentChangeHandler);

    return () => {
      mediaQueryList.removeListener(documentChangeHandler);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
