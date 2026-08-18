import useAutoPageSize from "@hooks/useAutoPageSize";

const View = () => {
  const pageSize = useAutoPageSize("page-size-demo", 80, {
    minSize: 4,
    buffer: 2,
  });

  return (
    <div
      id="page-size-demo"
      style={{
        height: 240,
        maxWidth: 360,
        overflow: "auto",
        padding: 16,
        border: "1px solid #ccc",
      }}
    >
      <strong>Calculated page size: {pageSize}</strong>
      <p>
        Resize the browser or change this container's size to see the value update.
      </p>
    </div>
  );
};

const code = `
import useAutoPageSize from "@hooks/useAutoPageSize";

const View = () => {
  const pageSize = useAutoPageSize("page-size-demo", 80, {
    minSize: 4,
    buffer: 2,
  });

  return (
    <div id="page-size-demo" style={{ height: 240, overflow: "auto" }}>
      <strong>Calculated page size: {pageSize}</strong>
    </div>
  );
};

`;
  
export default {
  code,
  View,
};
