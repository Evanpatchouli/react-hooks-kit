import useMixRef from "@hooks/useMixRef";
import { useRef, useState } from "react";

const View = () => {
  const objectRef = useRef<HTMLDivElement>(null);
  const [callbackNode, setCallbackNode] = useState<HTMLDivElement | null>(null);
  const mixedRef = useMixRef<HTMLDivElement>([objectRef, setCallbackNode]);

  return (
    <>
      <div ref={mixedRef} style={{ padding: 16, border: "1px solid currentColor" }}>
        Both refs point to this element.
      </div>
      <p>Object ref set: {String(objectRef.current !== null)}</p>
      <p>Callback ref set: {String(callbackNode !== null)}</p>
    </>
  );
};

const code = `import useMixRef from "@hooks/useMixRef";
import { useRef, useState } from "react";

const View = () => {
  const objectRef = useRef<HTMLDivElement>(null);
  const [callbackNode, setCallbackNode] = useState<HTMLDivElement | null>(null);
  const mixedRef = useMixRef<HTMLDivElement>([objectRef, setCallbackNode]);

  return <div ref={mixedRef}>Both refs receive this element.</div>;
};`;

export default {
  code,
  View,
};
