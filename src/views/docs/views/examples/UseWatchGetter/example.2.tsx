import useWatchGetter from "@hooks/useWatchGetter";
import { useCallback, useState } from "react";

const View = () => {
  const [source, setSource] = useState(0);
  const [lastObserved, setLastObserved] = useState(0);
  const getter = useCallback(() => source, [source]);
  const [value, update] = useWatchGetter(getter, setLastObserved, true);

  return (
    <div>
      <button onClick={() => setSource((current) => current + 1)}>Change source</button>{" "}
      <button onClick={update}>Update now</button>
      <p>Value: {value}</p>
      <p>Callback value: {lastObserved}</p>
    </div>
  );
};

const code = `
import useWatchGetter from "@hooks/useWatchGetter";
import { useCallback, useState } from "react";

const View = () => {
  const [source, setSource] = useState(0);
  const getter = useCallback(() => source, [source]);
  const [value, update] = useWatchGetter(
    getter,
    (nextValue) => console.log("Observed:", nextValue),
    true
  );

  return (
    <div>
      <button onClick={() => setSource((current) => current + 1)}>
        Change source
      </button>
      <button onClick={update}>Update now</button>
      <p>Value: {value}</p>
    </div>
  );
};
`;

export default { code, View };
