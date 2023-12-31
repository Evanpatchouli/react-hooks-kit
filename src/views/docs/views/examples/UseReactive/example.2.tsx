import Code from "@/components/code";
import useReactive from "@/hooks/useReactive";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const View = () => {
  const arr = useReactive([1, 2, 3]);

  useEffect(() => {
    console.log(arr);
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          arr[0]++;
        }}
      >
        arr[0]++
      </Button>
      <Button
        onClick={() => {
          arr.push(1);
        }}
      >
        push
      </Button>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(arr, null, 2)}
      </Code>
    </>
  );
};

const code = `import Code from "@/components/code";
import useReactive from "@/hooks/useReactive";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const View = () => {
  const arr = useReactive([1, 2, 3]);

  useEffect(() => {
    console.log(arr);
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          arr[0]++;
        }}
      >
        arr[0]++
      </Button>
      <Button
        onClick={() => {
          arr.push(1);
        }}
      >
        push
      </Button>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(arr, null, 2)}
      </Code>
    </>
  );
};`;

export default {
  code,
  View,
};
