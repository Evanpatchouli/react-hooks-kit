import useUpdateEffect from "@hooks/useUpdateEffect";
import { useState } from "react";

const View = () => {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("No request is made on the initial render.");

  useUpdateEffect(() => {
    setMessage(query ? `Would search for: ${query}` : "The query was cleared.");
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Type a query"
      />
      <p>{message}</p>
    </div>
  );
};

const code = `
import useUpdateEffect from "@hooks/useUpdateEffect";
import { useState } from "react";

const View = () => {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("No request is made on the initial render.");

  useUpdateEffect(() => {
    setMessage(query ? \`Would search for: \${query}\` : "The query was cleared.");
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Type a query"
      />
      <p>{message}</p>
    </div>
  );
};
`;

export default {
  code,
  View,
};
