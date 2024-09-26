import useMap from "@hooks/useMap";
import { Button } from "@mui/material";

const View = () => {
  const { map, del, add } = useMap({
    a: "a",
    b: "b",
  });
  return (
    <>
      <pre>{JSON.stringify(Object.fromEntries(map), null, 2)}</pre>
      <Button onClick={() => del("b")}>Del b</Button>
      <Button onClick={() => add("b", "b")}>Add b</Button>
    </>
  );
};

const code = `import { useMap } from "@evanpatchouli/react-hooks-kit";
import { Button } from "@mui/material";

const View = () => {
  const { map, del, add } = useMap({
    a: "a",
    b: "b",
  });
  return (
    <>
      <pre>{JSON.stringify(Object.fromEntries(map), null, 2)}</pre>
      <Button onClick={() => del("b")}>Del b</Button>
      <Button onClick={() => add("b", "b")}>Add b</Button>
    </>
  );
};
`;

export default {
  code,
  View,
};
