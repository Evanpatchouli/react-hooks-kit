import useIndexDB from "@hooks/useIndexDB";

const View = () => {
  const { db, error } = useIndexDB("docs-example", 1, (database) => {
    if (!database.objectStoreNames.contains("notes")) {
      database.createObjectStore("notes", { keyPath: "id" });
    }
  });

  if (error) return <p role="alert">IndexedDB error: {String(error)}</p>;
  return <p>{db ? `Database ready: ${db.name}` : "Opening database..."}</p>;
};

const code = `import useIndexDB from "@hooks/useIndexDB";

const View = () => {
  const { db, error } = useIndexDB("app-db", 1, (database) => {
    if (!database.objectStoreNames.contains("notes")) {
      database.createObjectStore("notes", { keyPath: "id" });
    }
  });

  if (error) return <p role="alert">Could not open database.</p>;
  return <p>{db ? \`Database ready: \${db.name}\` : "Opening..."}</p>;
};`;

export default {
  code,
  View,
};
