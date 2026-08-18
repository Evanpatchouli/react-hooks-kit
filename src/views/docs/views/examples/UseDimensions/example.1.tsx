import useDimensions from "@hooks/useDimensions";

const View = () => {
  const [ref, dimensions] = useDimensions();

  return (
    <div>
      <div ref={ref} style={{ resize: "both", overflow: "auto", width: 220, height: 100, border: "1px solid #ccc", padding: 8 }}>
        Resize this box
      </div>
      <p>
        {Math.round(dimensions.width)} × {Math.round(dimensions.height)}
      </p>
    </div>
  );
};

const code = `
import useDimensions from "@hooks/useDimensions";

const View = () => {
  const [ref, dimensions] = useDimensions();

  return (
    <div>
      <div ref={ref} style={{ resize: "both", overflow: "auto", width: 220, height: 100 }}>
        Resize this box
      </div>
      <p>{dimensions.width} × {dimensions.height}</p>
    </div>
  );
};
`;

export default {
  code,
  View,
};
