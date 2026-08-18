import useLocalStorage from "@hooks/useLocalStorage";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

const View = () => {
  const [storedName, setStoredName] = useLocalStorage("docs-name", "Ada");
  const [draft, setDraft] = useState(storedName);

  return (
    <>
      <p>Stored value: {storedName}</p>
      <TextField value={draft} onChange={(event) => setDraft(event.target.value)} label="Name" />
      <Button onClick={() => setStoredName(draft)}>Save</Button>
    </>
  );
};

const code = `import useLocalStorage from "@hooks/useLocalStorage";
import { useState } from "react";

const View = () => {
  const [storedName, setStoredName] = useLocalStorage("docs-name", "Ada");
  const [draft, setDraft] = useState(storedName);

  return (
    <>
      <p>Stored value: {storedName}</p>
      <input value={draft} onChange={(event) => setDraft(event.target.value)} />
      <button onClick={() => setStoredName(draft)}>Save</button>
    </>
  );
};`;

export default {
  code,
  View,
};
