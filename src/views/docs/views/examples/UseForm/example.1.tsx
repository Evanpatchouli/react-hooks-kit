import useForm from "@hooks/useForm";
import { Button, TextField } from "@mui/material";
import { useRef, useState } from "react";

const View = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState("");
  const form = useForm<{ name: string }>(
    {
      name: {
        value: name,
        required: true,
        setter: (value) => setName(value ?? ""),
      },
    },
    formRef
  );

  return (
    <form ref={formRef} onSubmit={form.onSubmit((data) => setSubmitted(data.name))}>
      <TextField name="name" label="Name" value={name} onChange={(event) => setName(event.target.value)} />
      <Button type="submit">Submit</Button>
      {submitted && <p>Submitted: {submitted}</p>}
    </form>
  );
};

const code = `import useForm from "@hooks/useForm";
import { useRef, useState } from "react";

const View = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const form = useForm<{ name: string }>(
    {
      name: {
        value: name,
        required: true,
        setter: (value) => setName(value ?? ""),
      },
    },
    formRef
  );

  return (
    <form ref={formRef} onSubmit={form.onSubmit((data) => console.log(data))}>
      <input name="name" value={name} onChange={(event) => setName(event.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};`;

export default {
  code,
  View,
};
