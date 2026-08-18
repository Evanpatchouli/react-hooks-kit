import useAsyncEffect from "@hooks/useAsyncEffect";
import { useState } from "react";

const View = () => {
  const [query, setQuery] = useState("react");
  const [status, setStatus] = useState("Ready");

  useAsyncEffect(
    async () => {
      setStatus(`Searching for ${query}...`);
      await new Promise((resolve) => setTimeout(resolve, 500));

      if (query.trim().toLowerCase() === "error") {
        throw new Error("The demo query failed");
      }

      setStatus(`Finished: ${query}`);
      return () => setStatus("Previous request cleaned up");
    },
    [query],
    {
      onError: (error) => setStatus(`Error: ${String(error)}`),
      onFinally: () => console.log("Async request settled"),
    }
  );

  return (
    <div>
      <input value={query} onChange={(event) => setQuery(event.target.value)} />
      <p>{status}</p>
      <small>Type error to exercise onError.</small>
    </div>
  );
};

const code = `
import useAsyncEffect from "@hooks/useAsyncEffect";
import { useState } from "react";

const View = () => {
  const [query, setQuery] = useState("react");
  const [status, setStatus] = useState("Ready");

  useAsyncEffect(
    async () => {
      setStatus(\`Searching for \${query}...\`);
      await fetch(\`/api/search?q=\${encodeURIComponent(query)}\`);
      setStatus(\`Finished: \${query}\`);
      return () => console.log("Previous request cleaned up");
    },
    [query],
    {
      onError: (error) => setStatus(\`Error: \${String(error)}\`),
      onFinally: () => console.log("Async request settled"),
    }
  );

  return <input value={query} onChange={(event) => setQuery(event.target.value)} />;
};
`;

export default { code, View };
