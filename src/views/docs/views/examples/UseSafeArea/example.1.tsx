import useSafeArea from "@hooks/useSafeArea";

const View = () => {
  const insets = useSafeArea();

  return (
    <div style={{ padding: `${insets.top}px ${insets.right}px ${insets.bottom}px ${insets.left}px`, border: "1px solid #ccc" }}>
      <p>Safe-area insets</p>
      <pre>{JSON.stringify(insets, null, 2)}</pre>
    </div>
  );
};

const code = `
import useSafeArea from "@hooks/useSafeArea";

const View = () => {
  const insets = useSafeArea();

  return (
    <div style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <pre>{JSON.stringify(insets, null, 2)}</pre>
    </div>
  );
};
`;

export default {
  code,
  View,
};
