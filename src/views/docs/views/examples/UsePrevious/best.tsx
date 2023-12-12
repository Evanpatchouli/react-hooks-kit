import { useState, useEffect } from "react";
import usePrevious from "@/hooks/usePrevious";

function View() {
  const [theme, setTheme] = useState("light");
  const prevTheme = usePrevious(theme);

  useEffect(() => {
    if (prevTheme && prevTheme !== theme) {
      console.log(`Theme changed from ${prevTheme} to ${theme}`);
    }
  }, [theme, prevTheme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}

const code = `import { useState, useEffect } from "react";
import usePrevious from "@/hooks/usePrevious";

function View() {
  const [theme, setTheme] = useState("light");
  const prevTheme = usePrevious(theme);

  useEffect(() => {
    if (prevTheme && prevTheme !== theme) {
      console.log(\`Theme changed from \${prevTheme} to \${theme}\`);
    }
  }, [theme, prevTheme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}`;

export default { View, code };
