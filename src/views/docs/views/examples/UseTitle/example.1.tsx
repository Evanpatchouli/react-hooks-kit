import useTitle from "@hooks/useTitle";
import { Button } from "@mui/material";

const View = () => {
  const [title, setTitle] = useTitle("useTitle Demo");

  return (
    <>
      <div style={{ marginBottom: "16px" }}>
        <strong>Current Title: </strong>
        <span>{title}</span>
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <Button
          variant="contained"
          onClick={() => setTitle("New Title")}
        >
          Set to "New Title"
        </Button>
        <Button
          variant="contained"
          onClick={() => setTitle("Another Title")}
        >
          Set to "Another Title"
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            document.title = "External Change";
          }}
        >
          External Change (via document.title)
        </Button>
      </div>
    </>
  );
};

const code = `import useTitle from "@hooks/useTitle";
import { Button } from "@mui/material";

const View = () => {
  const [title, setTitle] = useTitle("useTitle Demo");

  return (
    <>
      <div>
        <strong>Current Title: </strong>
        <span>{title}</span>
      </div>
      <div>
        <Button onClick={() => setTitle("New Title")}>
          Set to "New Title"
        </Button>
        <Button onClick={() => setTitle("Another Title")}>
          Set to "Another Title"
        </Button>
        <Button onClick={() => {
          document.title = "External Change";
        }}>
          External Change (via document.title)
        </Button>
      </div>
    </>
  );
};`;

export default {
  code,
  View,
};
