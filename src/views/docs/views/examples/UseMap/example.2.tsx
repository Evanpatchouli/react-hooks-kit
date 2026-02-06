import useMap from "@hooks/useMap";
import { Button } from "@mui/material";

const View = () => {
  const { map, set, get } = useMap({
    count: 1,
  });
  return (
    <>
      <pre>map.count: {map.get("count")}</pre>
      <Button onClick={() => set("count", get("count") + 1)}>count++</Button>
    </>
  );
};

const code = `import { useMap } from "@evanpatchouli/react-hooks-kit";
import { Button } from "@mui/material";

const View = () => {
  const { map, set, get } = useMap({
    count: 1,
  });
  return (
    <>
      <pre>map.count: {map.get("count")}</pre>
      <Button onClick={() => set("count", get("count") + 1)}>count++</Button>
    </>
  );
};
`;

export default {
  code,
  View,
};
