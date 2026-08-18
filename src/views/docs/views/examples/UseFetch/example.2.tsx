import useFetch from "@hooks/useFetch";
import { useState } from "react";

const View = () => {
  const [refresh, setRefresh] = useState(0);
  const [event, setEvent] = useState("Waiting for a response...");
  const { data, loading, error } = useFetch<{ name: string }>(
    "/manifest.json",
    { headers: { Accept: "application/json" } },
    {
      onResolve: (value) => setEvent(`Loaded ${value.name}`),
      onReject: () => setEvent("Request rejected"),
      onFinally: () => console.log("Request finished"),
    },
    [refresh]
  );

  return (
    <div>
      <button onClick={() => setRefresh((value) => value + 1)}>Reload</button>
      <p>{loading ? "Loading..." : data?.name ?? "No data"}</p>
      <p>{error ? "The request failed." : event}</p>
    </div>
  );
};

const code = `
import useFetch from "@hooks/useFetch";
import { useState } from "react";

const View = () => {
  const [refresh, setRefresh] = useState(0);
  const { data, loading, error } = useFetch<{ name: string }>(
    "/manifest.json",
    { headers: { Accept: "application/json" } },
    {
      onResolve: (value) => console.log("Loaded", value),
      onReject: (reason) => console.error(reason),
      onFinally: () => console.log("Request finished"),
    },
    [refresh]
  );

  return (
    <div>
      <button onClick={() => setRefresh((value) => value + 1)}>Reload</button>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>Request failed.</p> : <p>{data?.name}</p>}
    </div>
  );
};
`;

export default { code, View };
