import useWhyDidYouUpdate from "@hooks/useWhyDidYouUpdate";
import { useState } from "react";

const View = () => {
  const [count, setCount] = useState(0);
  const [label, setLabel] = useState("Demo");

  useWhyDidYouUpdate("WhyDidYouUpdateDemo", { count, label });

  return (
    <div>
      <p>{label}: {count}</p>
      <button onClick={() => setCount((value) => value + 1)}>Change count</button>{" "}
      <button onClick={() => setLabel((value) => value === "Demo" ? "Updated" : "Demo")}>
        Change label
      </button>
      <small>Inspect the browser console to see changed props.</small>
    </div>
  );
};

const code = `
import useWhyDidYouUpdate from "@hooks/useWhyDidYouUpdate";

const View = ({ count, label }) => {
  useWhyDidYouUpdate("Counter", { count, label });

  return <p>{label}: {count}</p>;
};
`;

export default {
  code,
  View,
};
