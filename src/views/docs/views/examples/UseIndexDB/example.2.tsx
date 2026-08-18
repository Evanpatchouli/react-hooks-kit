import useIndexDB from "@hooks/useIndexDB";
import { useState } from "react";

const View = () => {
  const [message, setMessage] = useState("Open the database to begin.");
  const { db, error } = useIndexDB("docs-notes-example", 1, (database) => {
    if (!database.objectStoreNames.contains("notes")) {
      database.createObjectStore("notes", { keyPath: "id" });
    }
  });

  const saveNote = () => {
    if (!db) return;
    const transaction = db.transaction("notes", "readwrite");
    transaction.objectStore("notes").put({ id: 1, text: "Saved from the docs" });
    transaction.oncomplete = () => setMessage("Note saved.");
    transaction.onerror = () => setMessage("Could not save the note.");
  };

  const readNote = () => {
    if (!db) return;
    const request = db.transaction("notes", "readonly").objectStore("notes").get(1);
    request.onsuccess = () => setMessage(request.result?.text ?? "No note found.");
    request.onerror = () => setMessage("Could not read the note.");
  };

  if (error) return <p role="alert">IndexedDB error: {String(error)}</p>;
  return (
    <div>
      <button disabled={!db} onClick={saveNote}>Save note</button>{" "}
      <button disabled={!db} onClick={readNote}>Read note</button>
      <p>{db ? message : "Opening database..."}</p>
    </div>
  );
};

const code = `
import useIndexDB from "@hooks/useIndexDB";
import { useState } from "react";

const View = () => {
  const [message, setMessage] = useState("Ready");
  const { db } = useIndexDB("app-db", 1, (database) => {
    if (!database.objectStoreNames.contains("notes")) {
      database.createObjectStore("notes", { keyPath: "id" });
    }
  });

  const save = () => {
    if (!db) return;
    const transaction = db.transaction("notes", "readwrite");
    transaction.objectStore("notes").put({ id: 1, text: "Hello" });
    transaction.oncomplete = () => setMessage("Saved");
  };

  return <button disabled={!db} onClick={save}>{message}</button>;
};
`;

export default { code, View };
