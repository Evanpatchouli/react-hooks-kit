import useRecord from "@hooks/useRecord";
import { Button } from "@mui/material";

const View = () => {
  const [record, setRecord] = useRecord({
    name: "record",
    count: 1,
  });
  return (
    <>
      <pre>{JSON.stringify(record, null, 2)}</pre>
      <Button onClick={() => setRecord("count", record.count + 1)}>count++</Button>
    </>
  );
};

const code = `import { useRecord } from "@evanpatchouli-hooks-kit";
import { Button } from "@mui/material";

const View = () => {
  const [record, setRecord] = useRecord({
    name: "record",
    count: 1,
  });
  return (
    <>
      <pre>{JSON.stringify(record, null, 2)}</pre>
      <Button onClick={() => setRecord("count", record.count + 1)}>count++</Button>
    </>
  );
};
`;

export default {
  code,
  View,
};
