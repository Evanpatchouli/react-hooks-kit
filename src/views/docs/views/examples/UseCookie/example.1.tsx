import useCookie from "@hooks/useCookie";

const View = () => {
  const [value, setValue] = useCookie("docs-cookie", "initial value", 7);

  return (
    <label>
      Cookie value: {" "}
      <input value={value} onChange={(event) => setValue(event.target.value)} />
    </label>
  );
};

const code = `
import useCookie from "@hooks/useCookie";

const View = () => {
  const [value, setValue] = useCookie("docs-cookie", "initial value", 7);

  return (
    <label>
      Cookie value: {" "}
      <input value={value} onChange={(event) => setValue(event.target.value)} />
    </label>
  );
};
`;

export default {
  code,
  View,
};
