import useTickState from "@/hooks/useTickState";
import { Button } from "@mui/material";

const View = () => {
  const [cnt, setCtn, tick] = useTickState(0);
  return (
    <span>
      cnt: {cnt}{" "}
      <Button onClick={() => setCtn(Number(Math.floor(Math.random() * 10)))}>
        tick
      </Button>
      <br />
      cntChanges: {tick}
    </span>
  );
};

const code = `import useTickState from "@/hooks/useTickState";
import { Button } from "@mui/material";

const View = () => {
  const [cnt, setCtn, tick] = useTickState(0);
  return (
    <span>
      cnt: {cnt}{" "}
      <Button onClick={() => setCtn(Number(Math.floor(Math.random() * 10)))}>
        tick
      </Button>
      <br />
      cntChanges: {tick}
    </span>
  );
};
`;

export default {
  code,
  View,
};
