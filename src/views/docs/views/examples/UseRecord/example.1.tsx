import useRecord from "@hooks/useRecord";
import { Button } from "@mui/material";

const View = () => {
  const [record, setRecord, getRecord] = useRecord({
    name: "record",
    count: 1,
  });
  return (
    <>
      <pre>{JSON.stringify(record, null, 2)}</pre>
      <p>Current count from getRecord: {getRecord("count")}</p>
      <Button onClick={() => setRecord("count", (count) => count + 1)}>count++</Button>
    </>
  );
};

const code = `import useRecord from "@hooks/useRecord";
import { Button } from "@mui/material";

const View = () => {
  const [record, setRecord, getRecord] = useRecord({
    name: "record",
    count: 1,
  });
  return (
    <>
      <pre>{JSON.stringify(record, null, 2)}</pre>
      <p>Current count: {getRecord("count")}</p>
      <Button onClick={() => setRecord("count", (count) => count + 1)}>count++</Button>
    </>
  );
};
`;

export default {
  code,
  View,
};
