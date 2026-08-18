import useRaf from "@hooks/useRaf";
import { useRef, useState } from "react";

const View = () => {
  const startRef = useRef<number | null>(null);
  const [elapsed, setElapsed] = useState(0);

  useRaf((timestamp) => {
    startRef.current ??= timestamp;
    setElapsed(timestamp - startRef.current);
  });

  return (
    <p>Animation frame time: {Math.round(elapsed)} ms</p>
  );
};

const code = `
import useRaf from "@hooks/useRaf";
import { useRef, useState } from "react";

const View = () => {
  const startRef = useRef<number | null>(null);
  const [elapsed, setElapsed] = useState(0);

  useRaf((timestamp) => {
    startRef.current ??= timestamp;
    setElapsed(timestamp - startRef.current);
  });

  return <p>Animation frame time: {Math.round(elapsed)} ms</p>;
};
`;

export default {
  code,
  View,
};
