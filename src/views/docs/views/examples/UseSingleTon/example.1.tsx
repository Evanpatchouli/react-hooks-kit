import useSingleton from "@hooks/useSingleton";

const View = () => {
  const instance = useSingleton(() => ({
    createdAt: new Date().toISOString(),
    id: Math.random().toString(36).slice(2),
  }));

  return (
    <div>
      <p>Instance id: {instance.id}</p>
      <p>Created once: {instance.createdAt}</p>
    </div>
  );
};

const code = `
import useSingleton from "@hooks/useSingleton";

const createExpensiveInstance = () => ({ createdAt: Date.now() });

const View = () => {
  const instance = useSingleton(() => createExpensiveInstance());

  return <p>Stable instance: {String(instance)}</p>;
};
`;

export default {
  code,
  View,
};
