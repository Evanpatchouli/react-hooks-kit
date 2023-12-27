import Code from "@/components/code";
import useReactor from "@/hooks/useReactor";
import { Button } from "@mui/material";

type PluginNames = "age++";

const View = () => {
  const age = useReactor(0, [
    {
      name: "age++",
      action(state, payload, that) {
        that.setValue(state + 1);
      },
    },
  ]);

  return (
    <>
      <Button
        onClick={() => {
          age.dispatch<PluginNames>("age++");
        }}
      >
        age++
      </Button>
      <Button
        onClick={() => {
          age.reset();
        }}
      >
        reset
      </Button>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(
          {
            age,
            default: age.getDefaultValue(),
          },
          null,
          2
        )}
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

  obj.setDefaultValue({
    name: "evan",
    sex: "male",
    age: 20,
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
      <Button
        onClick={() => {
          obj.reset();
        }}
      >
        reset
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
