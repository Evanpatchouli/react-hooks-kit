import Code from "@/components/code";
import useReactive, { unwrap } from "@/hooks/useReactive";
import { Button } from "@mui/material";
import { useState } from "react";

const View = () => {
  let c = useReactive(0);
  const [cValue, setCValue] = useState<number | undefined>();

  return (
    <>
      <Button
        onClick={() => {
          console.log(c);
          console.log(unwrap(c));
          setCValue(unwrap(c));
        }}
      >
        assign cValue with unwrap
      </Button>
      <Code theme="oneLight" lang="json">
        {cValue?.toString()}
      </Code>
    </>
  );
};

const code = `import Code from "@/components/code";
import useReactive, { unwrap } from "@/hooks/useReactive";
import { Button } from "@mui/material";
import { useState } from "react";

const View = () => {
  let c = useReactive(0);
  const [cValue, setCValue] = useState<number | undefined>();

  return (
    <>
      <Button
        onClick={() => {
          console.log(c);
          console.log(unwrap(c));
          setCValue(unwrap(c));
        }}
      >
        assign cValue with unwrap
      </Button>
      <Code theme="oneLight" lang="json">
        {cValue?.toString()}
      </Code>
    </>
  );
};`;

export default {
  code,
  View,
};
