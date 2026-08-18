import usePromise from "@hooks/usePromise";
import { Button } from "@mui/material";

const View = () => {
  const [promise, abort] = usePromise(async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { message: "Request completed" };
  });
  return (
    <>
      {promise.status === "idle" && <p>Click the button to fetch data</p>}
      {promise.status === "pending" && <p>Loading...</p>}
      {promise.status === "resolved" && <p>{promise.data?.message}</p>}
      {promise.status === "rejected" && <p role="alert">Request failed</p>}
      <Button onClick={abort}>Abort</Button>
    </>
  );
};

const code = `import usePromise from "@hooks/usePromise";

const View = () => {
  const [request, abort, execute] = usePromise(async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { message: "Request completed" };
  });

  return (
    <>
      <p>Status: {request.status}</p>
      {request.data && <p>{request.data.message}</p>}
      {request.error && <p role="alert">Request failed</p>}
      <button onClick={execute}>Retry</button>
      <button onClick={abort}>Abort</button>
    </>
  );
};`;

export default {
  code,
  View,
};
