import useRafState from "@hooks/useRafState";

const View = () => {
  const [value, setValue] = useRafState(0);

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => setValue((current) => current + 1)}>
        Update on the next frame
      </button>
    </div>
  );
};

const code = `
import useRafState from "@hooks/useRafState";

const View = () => {
  const [value, setValue] = useRafState(0);

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => setValue((current) => current + 1)}>
        Update on the next frame
      </button>
    </div>
  );
};
`;

export default {
  code,
  View,
};
