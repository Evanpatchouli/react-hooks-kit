import { useState, useEffect, useCallback } from "react";

type Theme = "dark" | "light";
type ThemeChangeHandler = (theme: Theme) => void;

function useTheme(
  arg1?: boolean | ThemeChangeHandler,
  arg2?: ThemeChangeHandler
): Theme {
  const [theme, setTheme] = useState<Theme>(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  const handleThemeChange = useCallback((handler: ThemeChangeHandler) => {
    return (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
      handler(newTheme);
    };
  }, []);

  useEffect(() => {
    const matcher = window.matchMedia("(prefers-color-scheme: dark)");
    let handler: ((e: MediaQueryListEvent) => void) | null = null;
    const shouldListen = typeof arg1 === "boolean" ? arg1 : true;
    const onThemeChange =
      typeof arg1 === "function" ? arg1 : arg2;

    if (!shouldListen) {
      return;
    }

    handler = handleThemeChange(onThemeChange ?? (() => {}));
    if (matcher.addEventListener) {
      matcher.addEventListener("change", handler);
    } else {
      matcher.addListener(handler);
    }

    return () => {
      if (handler) {
        if (matcher.removeEventListener) {
          matcher.removeEventListener("change", handler);
        } else {
          matcher.removeListener(handler);
        }
      }
    };
  }, [arg1, arg2, handleThemeChange]);

  return theme;
}

export default useTheme;
