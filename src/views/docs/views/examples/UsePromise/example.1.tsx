import usePromise from "@hooks/usePromise";
import { Button } from "@mui/material";

const View = () => {
  const [promise, abort] = usePromise(async () => {
    const response = await fetch("https://api.example.com/data");
    return await response.json();
  });
  return (
    <>
      {promise.status === "idle" && <p>Click the button to fetch data</p>}
      {promise.status === "pending" && <p>Loading...</p>}
      {promise.status === "resolved" && <p>Success!</p>}
      {promise.status === "rejected" && <p>Error!</p>}
      <Button onClick={abort}>Abort</Button>
    </>
  );
};

const code = `

`;

export default {
  code,
  View,
};
