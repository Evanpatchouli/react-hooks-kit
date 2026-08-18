import useHover from "@hooks/useHover";
import { useCallback, useState } from "react";

const View = () => {
  const [count, setCount] = useState(0);
  const handleHover = useCallback(() => setCount((value) => value + 1), []);
  const ref = useHover<HTMLDivElement>(handleHover);

  return (
    <div>
      <div ref={ref} style={{ padding: 16, border: "1px solid #ccc" }}>
        Move the pointer onto this box.
      </div>
      <p>Mouse enters: {count}</p>
    </div>
  );
};

const code = `
import useHover from "@hooks/useHover";
import { useCallback, useState } from "react";

const View = () => {
  const [count, setCount] = useState(0);
  const handleHover = useCallback(() => setCount((value) => value + 1), []);
  const ref = useHover<HTMLDivElement>(handleHover);

  return <div ref={ref}>Move the pointer here. Enters: {count}</div>;
};
`;

export default {
  code,
  View,
};
