import Code from "@/components/code";
import useReactor from "@/hooks/useReactor";
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

  return (
    <>
      <Button
        onClick={() => {
          obj.dispatch<PluginNames>("age++");
        }}
      >
        age++
      </Button>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj, null, 2)}
      </Code>
    </>
  );
};

const code = `import Code from "@/components/code";
import useReactor from "@/hooks/useReactor";
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

  return (
    <>
      <Button
        onClick={() => {
          obj.dispatch<PluginNames>("age++");
        }}
      >
        age++
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
