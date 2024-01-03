import useMemento from "@hooks/useMemento";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

const View = () => {
  const [state, setState, memento] = useMemento("initial");
  const [val, setVal] = useState("initial");
  const handleInput = (e: any) => {
    setVal(e.target.value);
  };
  return (
    <div css={$css`margin: 20px;`}>
      <TextField label="NewState" value={val} onInput={handleInput} />
      <br />
      <Button onClick={() => setState(val)}>setState</Button>
      <Button onClick={() => memento.createMemento("memento 1")}>createMemento</Button>
      <Button onClick={() => memento.rollback()}>rollback</Button>
      <Button onClick={() => memento.forward()}>forward</Button>
      <Button onClick={() => memento.clear()}>clear</Button>
      <label css={$css`display: block;`}>
        state: <span>{state}</span>
      </label>
      <label css={$css`display: block;`}>
        idKey: <span>{memento.idKey}</span>
      </label>
      <label css={$css`display: block;`}>
        mementos: <span>{JSON.stringify(memento.mementos, null, 2)}</span>
      </label>
      <label css={$css`display: block;`}>
        history: <span>{JSON.stringify(memento.history, null, 2)}</span>
      </label>
    </div>
  );
};

const code = `import useMemento from "@/hooks/useMemento";
import { Button } from "@mui/material";

const View = () => {
  const [state, setState, memento] = useMemento("initial");
  return (
    <div css={$css\`margin: 20px;\`}>
      <Button onClick={() => setState("new state")}>setState</Button>
      <Button onClick={() => memento.createMemento("memento 1")}>createMemento</Button>
      <Button onClick={() => memento.rollback()}>rollback</Button>
      <Button onClick={() => memento.forward()}>forward</Button>
      <Button onClick={() => memento.clear()}>clear</Button>
      <label css={$css\`display: block;\`}>
        state: <span>{state}</span>
      </label>
      <label css={$css\`display: block;\`}>
        idKey: <span>{memento.idKey}</span>
      </label>
      <label css={$css\`display: block;\`}>
        mementos: <span>{JSON.stringify(memento.mementos, null, 2)}</span>
      </label>
      <label css={$css\`display: block;\`}>
        history: <span>{JSON.stringify(memento.history, null, 2)}</span>
      </label>
    </div>
  );
};

`;

export default {
  code,
  View,
};
