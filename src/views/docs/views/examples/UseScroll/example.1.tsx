import useScroll from "@hooks/useScroll";
import { useCallback } from "react";

const View = () => {
  const handleScroll = useCallback((position: { x: number; y: number }) => {
    console.log("Window scroll position", position);
  }, []);
  const position = useScroll(handleScroll);

  return (
    <p>Window scroll: {Math.round(position.x)}, {Math.round(position.y)}</p>
  );
};

const code = `
import useScroll from "@hooks/useScroll";
import { useCallback } from "react";

const View = () => {
  const handleScroll = useCallback((position) => {
    console.log("Window scroll position", position);
  }, []);
  const position = useScroll(handleScroll);

  return <p>Window scroll: {position.x}, {position.y}</p>;
};
`;

export default {
  code,
  View,
};
