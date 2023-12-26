import Code from "@/components/code";
import useReactor, { Reactor } from "@/hooks/useReactor";
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
        action: (state, payload, that) => {
          that.set("age", ++state.age);
        },
      },
    ]
  );

  const obj2 = obj.clone();

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
      <Button
        onClick={() => {
          obj2.dispatch<PluginNames>("age++");
        }}
      >
        age2++
      </Button>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj2, null, 2)}
      </Code>
      <Button>clonedValue</Button>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj.cloneValue(), null, 2)}
      </Code>
    </>
  );
};

const code = `import Code from "@/components/code";
import useReactor, { Reactor } from "@/hooks/useReactor";
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
        action: (state, payload, that) => {
          that.set("age", ++state.age);
        },
      },
    ]
  );

  const obj2 = obj.clone();

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
      <Button
        onClick={() => {
          obj2.dispatch<PluginNames>("age++");
        }}
      >
        age2++
      </Button>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj2, null, 2)}
      </Code>
      <Button>clonedValue</Button>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj.cloneValue(), null, 2)}
      </Code>
    </>
  );
};
`;

export default {
  code,
  View,
};
