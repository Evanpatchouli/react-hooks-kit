import useKeyPress from "@hooks/useKeyPress";

const View = () => {
  const enterPressed = useKeyPress("Enter");

  return (
    <p>Enter is pressed: {String(enterPressed)}</p>
  );
};

const code = `
import useKeyPress from "@hooks/useKeyPress";

const View = () => {
  const enterPressed = useKeyPress("Enter");

  return <p>Enter is pressed: {String(enterPressed)}</p>;
};
`;

export default {
  code,
  View,
};
