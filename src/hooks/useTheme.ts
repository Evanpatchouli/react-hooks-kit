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

    if (typeof arg1 === "boolean") {
      if (arg1 && arg2) {
        handler = handleThemeChange(arg2);
        matcher.addEventListener("change", handler);
      }
    } else if (arg1) {
      handler = handleThemeChange(arg1);
      matcher.addEventListener("change", handler);
    } else {
      handler = handleThemeChange(() => {});
      matcher.addEventListener("change", handler);
    }

    return () => {
      if (handler) {
        matcher.removeEventListener("change", handler);
      }
    };
  }, [arg1, arg2, handleThemeChange]);

  return theme;
}

export default useTheme;
