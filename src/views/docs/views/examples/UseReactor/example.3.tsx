import Code from "@/components/code";
import { useToast } from "@/hooks";
import useReactor, { listen } from "@/hooks/useReactor";
import { Button } from "@mui/material";

type PluginNames = "age++";

const View = () => {
  const obj = useReactor(
    {
      name: "evan",
      sex: "male",
      age: 20,
    },
    [
      {
        name: "age++",
        action: (state) => {
          obj.set("age", ++state.age);
        },
      },
    ]
  );

  const toast = useToast();

  listen(obj).then(() => {
    const age = obj.get("age");
    toast(age?.toString());
  });

  return (
    <>
      <Button
        onClick={() => {
          obj.dispatch<PluginNames>("age++");
        }}
      >
        age++
      </Button>
      <span>age will be toasted at screen if changes</span>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj, null, 2)}
      </Code>
    </>
  );
};

const code = `import Code from "@/components/code";
import { useToast } from "@/hooks";
import useReactor, { listen } from "@/hooks/useReactor";
import { Button } from "@mui/material";

type PluginNames = "age++";

const View = () => {
  const obj = useReactor(
    {
      name: "evan",
      sex: "male",
      age: 20,
    },
    [
      {
        name: "age++",
        action: (state) => {
          obj.set("age", ++state.age);
        },
      },
    ]
  );

  const toast = useToast();

  listen(obj).then(() => {
    const age = obj.get("age");
    toast(age?.toString());
  });

  return (
    <>
      <Button
        onClick={() => {
          obj.dispatch<PluginNames>("age++");
        }}
      >
        age++
      </Button>
      <span>age will be toasted at screen if changes</span>
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
