import Loading from "@/components/Loading";
import useReactor from "@hooks/useReactor";
import { Button, SxProps, Theme } from "@mui/material";
import { useEffect, useState } from "react";

export default function AsyncThis() {
  return (
    <div>
      <h4>Correct Example</h4>
      <p>
        This is a correct example, it is suggested to on a event with useEffect
        to avoid some <strong>unpredictable</strong> problems.
      </p>
      <Correct />
      <h4>Wrong Example</h4>
      <p>
        This is a wrong example, it is not suggested to on a event without
        useEffect, which may cause some <strong>unpredictable</strong> problems.
      </p>
      <Wrong />
    </div>
  );
}

const Correct = () => {
  const dad = useReactor(
    {
      role: "daddy",
      name: "Los King",
      age: 40,
      loading: false,
      data: "none",
    },
    [
      {
        name: "tell son something",
        action(state, payload, that) {
          that.set("loading", true);
          setTimeout(() => {
            that.emit("son", `hello son ${Math.random().toFixed(4)}`);
            that.set("loading", false);
          }, 1000);
        },
      },
    ]
  );

  const son = useReactor(
    {
      role: "son",
      name: "Los Royel",
      age: 20,
      loading: false,
      data: "none",
    },
    [
      {
        name: "tell dad something",
        action(state, payload, that) {
          that.set("loading", true);
          setTimeout(() => {
            that.emit("dad", `hello dad ${Math.random().toFixed(4)}`);
            that.set("loading", false);
          }, 1000);
        },
      },
    ]
  );

  useEffect(() => {
    son.on("son", (data: string) => {
      son.set("data", data);
      setTimeout(() => {
        son.dispatch("tell dad something");
      }, 1000);
    });
  }, []);

  useEffect(() => {
    dad.on("dad", (data: string) => {
      dad.set("data", data);
    });
  }, []);

  return (
    <div>
      <Button
        onClick={() => {
          if (dad.get("loading")) return;
          dad.dispatch("tell son something");
        }}
        sx={sx}
      >
        Dad Got : {dad.get("loading") ? <Loading on /> : dad.get("data")}
      </Button>
      <Button
        onClick={() => {
          if (son.get("loading")) return;
          son.dispatch("tell dad something");
        }}
        sx={sx}
      >
        Son Got : {son.get("loading") ? <Loading on /> : son.get("data")}
      </Button>
    </div>
  );
};

const Wrong = () => {
  const dad = useReactor(
    {
      role: "daddy",
      name: "Los King",
      age: 40,
      loading: false,
      data: "none",
    },
    [
      {
        name: "tell son something",
        action(state, payload, that) {
          that.set("loading", true);
          setTimeout(() => {
            that.emit("son2", `hello son ${Math.random().toFixed(4)}`);
            that.set("loading", false);
          }, 1000);
        },
      },
    ]
  );

  const son = useReactor(
    {
      role: "son",
      name: "Los Royel",
      age: 20,
      loading: false,
      data: "none",
    },
    [
      {
        name: "tell dad something",
        action(state, payload, that) {
          that.set("loading", true);
          setTimeout(() => {
            that.emit("dad2", `hello dad ${Math.random().toFixed(4)}`);
            that.set("loading", false);
          }, 1000);
        },
      },
    ]
  );

  son.on("son2", (data: string) => {
    son.set("data", data);
    setTimeout(() => {
      son.dispatch("tell dad something");
    }, 1000);
  });

  dad.on("dad2", (data: string) => {
    dad.set("data", data);
  });

  return (
    <div>
      <Button
        onClick={() => {
          if (dad.get("loading")) return;
          dad.dispatch("tell son something");
        }}
        sx={sx}
      >
        Dad Got : {dad.get("loading") ? <Loading on /> : dad.get("data")}
      </Button>
      <Button
        onClick={() => {
          if (son.get("loading")) return;
          son.dispatch("tell dad something");
        }}
        sx={sx}
      >
        Son Got : {son.get("loading") ? <Loading on /> : son.get("data")}
      </Button>
    </div>
  );
};

const sx = {
  textTransform: "none",
  marginRight: "10px",
  height: "80px",
} as SxProps<Theme>;
