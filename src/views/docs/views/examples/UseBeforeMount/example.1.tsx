import useBeforeMount from "@hooks/useBeforeMount";
import { useRef } from "react";

const View = () => {
  const messageRef = useRef("The callback has not run yet.");

  useBeforeMount(() => {
    messageRef.current = "The callback ran before the component mounted.";
  });

  return <p>{messageRef.current}</p>;
};

const code = `
import useBeforeMount from "@hooks/useBeforeMount";
import { useRef } from "react";

const View = () => {
  const messageRef = useRef("The callback has not run yet.");

  useBeforeMount(() => {
    messageRef.current = "The callback ran before the component mounted.";
  });

  return <p>{messageRef.current}</p>;
};
`;

export default {
  code,
  View,
};
