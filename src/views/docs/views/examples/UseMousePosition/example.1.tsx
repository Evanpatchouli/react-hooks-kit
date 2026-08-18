import useMousePosition from "@hooks/useMousePosition";

const View = () => {
  const position = useMousePosition();

  return (
    <p>
      Pointer position: {position.x ?? "—"}, {position.y ?? "—"}
    </p>
  );
};

const code = `
import useMousePosition from "@hooks/useMousePosition";

const View = () => {
  const position = useMousePosition();

  return <p>Pointer position: {position.x}, {position.y}</p>;
};
`;

export default {
  code,
  View,
};
