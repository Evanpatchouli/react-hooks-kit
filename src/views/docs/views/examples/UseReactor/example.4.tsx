import Code from "@/components/code";
import useReactor from "@/hooks/useReactor";
import { Button } from "@mui/material";

type Person = {
  name: string;
  sex: string;
  age: number;
};

type PluginNames = "age++";

const View = () => {
  const obj = useReactor<Person>(
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

  const reAssign = () => {
    obj.value = {
      name: "messi",
      sex: "male",
      age: 36,
    };
  };

  const setNewValue = () => {
    obj.setValue({
      name: "Cristiano Ronaldo",
      sex: "male",
      age: 38,
    });
  };

  return (
    <>
      <Button
        onClick={() => {
          obj.dispatch<PluginNames>("age++");
        }}
      >
        age++
      </Button>
      <Button onClick={reAssign}>reAssign</Button>
      <Button onClick={setNewValue}>set new value</Button>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj, null, 2)}
      </Code>
    </>
  );
};

const code = `import Code from "@/components/code";
import useReactor from "@/hooks/useReactor";
import { Button } from "@mui/material";

type Person = {
  name: string;
  sex: string;
  age: number;
};

type PluginNames = "age++";

const View = () => {
  const obj = useReactor<Person>(
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

  const reAssign = () => {
    obj.value = {
      name: "messi",
      sex: "male",
      age: 36,
    };
  };

  const setNewValue = () => {
    obj.setValue({
      name: "Cristiano Ronaldo",
      sex: "male",
      age: 38,
    });
  };

  return (
    <>
      <Button
        onClick={() => {
          obj.dispatch<PluginNames>("age++");
        }}
      >
        age++
      </Button>
      <Button onClick={reAssign}>reAssign</Button>
      <Button onClick={setNewValue}>set new value</Button>
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
