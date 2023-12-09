import Code from "@/components/code";
import { useMeta } from "@/hooks/useMeta";
import { Button } from "@mui/material";

// Example of setAction of property
const View = () => {
  const [obj, setObj] = useMeta({
    width: 100,
    height: 100,
  });
  return (
    <>
      <Button
        onClick={() => {
          // @ts-ignore
          setObj("width", (pre, oldObj) => pre + 1);
        }}
      >
        obj.width++
      </Button>

      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj, null, 2)}
      </Code>
    </>
  );
};

const code = `
import Code from "@/components/code";
import { useMeta } from "@/hooks/useMeta";
import { Button } from "@mui/material";

const View = () => {
  const [obj, setObj] = useMeta({
    width: 100,
    height: 100,
  });
  return (
    <>
      <Button
        onClick={() => {
          setObj("width", (pre, oldObj) => pre + 1);
        }}
      >
        obj.width++
      </Button>

      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj, null, 2)}
      </Code>
    </>
  );
};
`;

export default {
  code,
  View,
};
