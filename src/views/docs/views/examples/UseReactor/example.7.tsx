import Code from "@/components/code";
import useReactor from "@/hooks/useReactor";
import { Button } from "@mui/material";

type PluginNames = "greet_to_cr7" | "receive_greet_to_messi";

const View = () => {
  const messi = useReactor(
    {
      name: "Leo Messi",
      sex: "male",
      age: 20,
      received: "",
    },
    [
      {
        name: "greet_to_cr7",
        action: (state) => {
          messi.emit("greet_to_cr7", `Hello! I'm ${state.name}.`);
        },
      },
      {
        name: "receive_greet_to_messi",
        action: (state, playload) => {
          messi.set("received", playload);
        },
      },
    ]
  );

  messi.on("greet_to_messi", (v) => messi.dispatch("receive_greet_to_messi", v));

  const cr7 = useReactor(
    {
      name: "Cristiano Ronaldo",
      sex: "male",
      age: 38,
      received: "",
    },
    [
      {
        name: "greet_to_messi",
        action: (state, playload) => {
          cr7.emit("greet_to_messi", `Hello, ${playload} I'm ${state.name}.`);
        },
      },
      {
        name: "receive_greet_to_cr7",
        action: (state, playload) => {
          cr7.set("received", playload);
          // parse greeter name
          const greeterName = playload.split(" ").slice(-1)[0];
          cr7.dispatch("greet_to_messi", greeterName);
        },
      },
    ]
  );

  cr7.on("greet_to_cr7", (v) => cr7.dispatch("receive_greet_to_cr7", v));

  const resetAll = () => {
    messi.set("received", "");
    cr7.set("received", "");
  };

  return (
    <>
      <Button
        onClick={() => {
          messi.dispatch<PluginNames>("greet_to_cr7");
        }}
      >
        Messi greet to CR7
      </Button>
      <Button
        onClick={resetAll}
        style={{
          marginLeft: "1em",
        }}
      >
        Reset All
      </Button>
      <div style={{ marginLeft: "0.5em" }}>Messi got: </div>
      <Code theme="oneLight" lang="text">
        {messi.get("received")}
      </Code>
      <div style={{ marginLeft: "0.5em" }}>CR7 got: </div>
      <Code theme="oneLight" lang="text">
        {cr7.get("received")}
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
