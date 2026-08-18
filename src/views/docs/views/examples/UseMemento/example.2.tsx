import useMemento from "@hooks/useMemento";

type Draft = {
  title: string;
  version: number;
};

const View = () => {
  const [draft, setDraft, memento] = useMemento<Draft>(
    { title: "Untitled", version: 1 },
    { historySize: 4 }
  );

  const saveDraft = () => {
    setDraft((previous) => ({
      title: previous?.title ?? "Untitled",
      version: (previous?.version ?? 0) + 1,
    }));
    memento.createMemento("Saved draft");
  };

  const restoreSaved = () => {
    const saved = memento.mementos[0];
    if (saved) memento.goToMemento(saved.idKey);
  };

  return (
    <div>
      <button onClick={saveDraft}>Save version</button>{" "}
      <button onClick={() => memento.rollback()}>Undo</button>{" "}
      <button onClick={restoreSaved}>Restore saved</button>
      <p>{draft?.title} · version {draft?.version}</p>
      <small>History: {memento.history.length}, mementos: {memento.mementos.length}</small>
    </div>
  );
};

const code = `
import useMemento from "@hooks/useMemento";

type Draft = { title: string; version: number };

const View = () => {
  const [draft, setDraft, memento] = useMemento<Draft>(
    { title: "Untitled", version: 1 },
    { historySize: 4 }
  );

  const saveDraft = () => {
    setDraft((previous) => ({
      title: previous?.title ?? "Untitled",
      version: (previous?.version ?? 0) + 1,
    }));
    memento.createMemento("Saved draft");
  };

  return (
    <div>
      <button onClick={saveDraft}>Save version</button>
      <button onClick={() => memento.rollback()}>Undo</button>
      <p>{draft?.title} · version {draft?.version}</p>
    </div>
  );
};
`;

export default { code, View };
