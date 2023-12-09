import Code from "@/components/code";
import { useMeta } from "@/hooks/useMeta";
import { Button } from "@mui/material";

// Example of setAction of whole object
const View = () => {
  const [obj, setObj] = useMeta({
    width: 100,
    height: 100,
  });
  return (
    <>
      <Button
        onClick={() => {
          setObj({ width: obj.width + 1, height: obj.height + 1 });
        }}
      >
        override obj
      </Button>

      <Button
        onClick={() => {
          setObj((old) => ({
            ...old,
            width: old.width + 1,
          }));
        }}
      >
        override obj from old
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

// Example of setAction of whole object
const View = () => {
  const [obj, setObj] = useMeta({
    width: 100,
    height: 100,
  });
  return (
    <>
      <Button
        onClick={() => {
          setObj({ width: obj.width + 1, height: obj.height + 1 });
        }}
      >
        override obj
      </Button>

      <Button
        onClick={() => {
          setObj((old) => ({
            ...old,
            width: old.width + 1,
          }));
        }}
      >
        override obj from old
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
