import useDimensionsById from "@hooks/useDimensionsById";
  
const View = () => {
  const dimensions = useDimensionsById("dimensions-by-id-demo");

  return (
    <div>
      <div id="dimensions-by-id-demo" style={{ width: 240, padding: 16, border: "1px solid currentColor", resize: "both", overflow: "auto" }}>
        Resize this box
      </div>
      <pre>{JSON.stringify(dimensions, null, 2)}</pre>
    </div>
  );
};
  
const code = `import useDimensionsById from "@hooks/useDimensionsById";

const dimensions = useDimensionsById("target-id");`;
  
export default {
  code,
  View,
};
