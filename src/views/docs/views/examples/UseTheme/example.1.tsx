import useTheme from "@hooks/useTheme";

const View = () => {
  const theme = useTheme((nextTheme) => {
    console.log("System theme changed to", nextTheme);
  });

  return (
    <div
      style={{
        padding: 16,
        color: theme === "dark" ? "#fff" : "#111",
        background: theme === "dark" ? "#222" : "#f5f5f5",
      }}
    >
      System preference: <strong>{theme}</strong>
    </div>
  );
};

const code = `
import useTheme from "@hooks/useTheme";

const View = () => {
  const theme = useTheme((nextTheme) => {
    console.log("System theme changed to", nextTheme);
  });

  return (
    <div>
      System preference: <strong>{theme}</strong>
    </div>
  );
};
`;

export default {
  code,
  View,
};
