import Div from "@/components/Loading/div";
import Code from "@/components/code";
import useForceUpdate from "@/hooks/useForceUpdate";
import useReactor from "@/hooks/useReactor";
import { Button } from "@mui/material";
import { useEffect } from "react";

type PluginNames = "greet_to_cr7" | "receive_greet_to_messi";

const DivStyle = {
  background: "#fafafa",
  height: "60px",
};

const View = () => {
  const $ = useForceUpdate();
  const messi = useReactor(
    {
      name: "Leo Messi",
      sex: "male",
      age: 20,
      received: "",
      loading: false,
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
          messi.set("loading", true);
          setTimeout(() => {
            messi.set("received", playload);
            messi.set("loading", false);
          }, 500);
        },
      },
    ]
  );

  useEffect(() => {
    messi.on("greet_to_messi", (v) => {
      messi.dispatch("receive_greet_to_messi", v);
    });
  }, []);

  const cr7 = useReactor(
    {
      name: "Cristiano Ronaldo",
      sex: "male",
      age: 38,
      received: "",
      loading: false,
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
          cr7.set("loading", true);
          setTimeout(() => {
            cr7.set("received", playload);
            // parse greeter name
            const greeterName = playload.split(" ").slice(-1)[0];
            cr7.dispatch("greet_to_messi", greeterName);
            cr7.set("loading", false);
          }, 500);
        },
      },
    ]
  );

  useEffect(() => {
    cr7.on("greet_to_cr7", (v) => cr7.dispatch("receive_greet_to_cr7", v));
  }, []);

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
      <Div loading={messi.get("loading")} style={DivStyle}>
        <Code theme="oneLight" lang="text">
          {messi.get("received")}
        </Code>
      </Div>
      <div style={{ marginLeft: "0.5em" }}>CR7 got: </div>
      <Div loading={cr7.get("loading")} style={DivStyle}>
        <Code theme="oneLight" lang="text">
          {cr7.get("received")}
        </Code>
      </Div>
    </>
  );
};

const code = `import Code from "@/components/code";
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
      loading: false,
    },
    [
      {
        name: "greet_to_cr7",
        action: (state) => {
          messi.emit("greet_to_cr7", \`Hello! I'm \${state.name}.\`);
        },
      },
      {
        name: "receive_greet_to_messi",
        action: (state, playload) => {
          messi.set("loading", true);
          setTimeout(() => {
            messi.set("received", playload);
            messi.set("loading", false);
          }, 500);
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
      loading: false,
    },
    [
      {
        name: "greet_to_messi",
        action: (state, playload) => {
          cr7.emit("greet_to_messi", \`Hello, \${playload} I'm \${state.name}.\`);
        },
      },
      {
        name: "receive_greet_to_cr7",
        action: (state, playload) => {
          cr7.set("loading", true);
          setTimeout(() => {
            cr7.set("received", playload);
            // parse greeter name
            const greeterName = playload.split(" ").slice(-1)[0];
            cr7.dispatch("greet_to_messi", greeterName);
            cr7.set("loading", false);
          }, 500);
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
      <Div loading={messi.get("loading")} style={DivStyle}>
        <Code theme="oneLight" lang="text">
          {messi.get("received")}
        </Code>
      </Div>
      <div style={{ marginLeft: "0.5em" }}>CR7 got: </div>
      <Div loading={cr7.get("loading")} style={DivStyle}>
        <Code theme="oneLight" lang="text">
          {cr7.get("received")}
        </Code>
      </Div>
    </>
  );
};
`;

export default {
  code,
  View,
};
