type Theme = "dark" | "light";
type ThemeChangeHandler = (theme: Theme) => void;
declare function useTheme(arg1?: boolean | ThemeChangeHandler, arg2?: ThemeChangeHandler): Theme;
export default useTheme;
