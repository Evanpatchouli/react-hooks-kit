import useForm from "@hooks/useForm";
import { useRef, useState } from "react";

const View = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Fill in both fields.");
  const form = useForm(
    {
      email: {
        value: email,
        required: true,
        setter: (value) => setEmail(String(value ?? "")),
        validator: async (value) =>
          String(value ?? "").includes("@") ? undefined : "Enter a valid email",
      },
      password: {
        value: password,
        required: true,
        setter: (value) => setPassword(String(value ?? "")),
        validator: async (value) =>
          String(value ?? "").length >= 6 ? undefined : "Use at least 6 characters",
      },
    },
    formRef
  );

  return (
    <form
      ref={formRef}
      onSubmit={form.onSubmit(() => setMessage("Validated and submitted"), ["email", "password"])}
    >
      <input name="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
      <input name="password" type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <button type="submit">Submit</button>{" "}
      <button type="button" onClick={() => form.sets({ email: "demo@example.com", password: "secret1" })}>
        Fill
      </button>{" "}
      <button type="button" onClick={() => { form.reset(); setMessage("Reset"); }}>
        Reset
      </button>
      <p>{message}</p>
    </form>
  );
};

const code = `
import useForm from "@hooks/useForm";
import { useRef, useState } from "react";

const View = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const form = useForm(
    {
      email: {
        value: email,
        required: true,
        setter: setEmail,
        validator: async (value) =>
          String(value ?? "").includes("@") ? undefined : "Enter a valid email",
      },
      password: {
        value: password,
        required: true,
        setter: setPassword,
      },
    },
    formRef
  );

  return (
    <form ref={formRef} onSubmit={form.onSubmit((data) => console.log(data), true)}>
      <input name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      <input name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <button type="submit">Submit</button>
      <button type="button" onClick={() => form.reset(["password"])}>Clear password</button>
    </form>
  );
};
`;

export default { code, View };
