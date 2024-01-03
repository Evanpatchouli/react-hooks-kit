import useReactorListener from "@hooks/useReactorListener";
import useReactor from "@hooks/useReactor";
import { Button } from "@mui/material";
import { useState } from "react";

const Example = (props: { immediate?: boolean }) => {
  const user = useReactor("user");
  const [useCopy, setUseCopy] = useState("");
  useReactorListener(
    user,
    (value) => {
      setUseCopy(value);
      console.log("user changes");
    },
    props.immediate
  );
  return (
    <>
      <Button
        onClick={() => user.setValue(Math.random().toString(36).slice(-8))}
      >
        user changes {props.immediate ? "immediate" : "unimmediate"}
      </Button>
      <div>user: {user.value}</div>
      <div>useCopy: {useCopy}</div>
    </>
  );
};

const View = () => (
  <>
    <Example />
    <Example immediate />
  </>
);

const code = `import useReactorListener from "@hooks/useReactorListener";
import useReactor from "@hooks/useReactor";
import { Button } from "@mui/material";
import { useState } from "react";

const Example = (props: { immediate?: boolean }) => {
  const user = useReactor("user");
  const [useCopy, setUseCopy] = useState("");
  useReactorListener(
    user,
    (value) => {
      setUseCopy(value);
      console.log("user changes");
    },
    props.immediate
  );
  return (
    <>
      <Button
        onClick={() => user.setValue(Math.random().toString(36).slice(-8))}
      >
        user changes {props.immediate ? "immediate" : "unimmediate"}
      </Button>
      <div>user: {user.value}</div>
      <div>useCopy: {useCopy}</div>
    </>
  );
};

const View = () => (
  <>
    <Example />
    <Example immediate />
  </>
);
`;

export default {
  code,
  View,
};
