import useClickAway from "@hooks/useClickAway";
import { useCallback, useState } from "react";

const View = () => {
  const [open, setOpen] = useState(true);
  const close = useCallback(() => setOpen(false), []);
  const ref = useClickAway(close);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open panel</button>
      {open ? (
        <div ref={ref} style={{ marginTop: 8, padding: 16, border: "1px solid #ccc" }}>
          Click anywhere outside this panel to close it.
        </div>
      ) : <p>Panel closed.</p>}
    </div>
  );
};

const code = `
import useClickAway from "@hooks/useClickAway";
import { useCallback, useState } from "react";

const View = () => {
  const [open, setOpen] = useState(true);
  const close = useCallback(() => setOpen(false), []);
  const ref = useClickAway(close);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open panel</button>
      {open ? (
        <div ref={ref}>Click outside to close.</div>
      ) : <p>Panel closed.</p>}
    </div>
  );
};
`;

export default {
  code,
  View,
};
