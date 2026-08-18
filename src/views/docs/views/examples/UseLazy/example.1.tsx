import useLazy from "@hooks/useLazy";

const View = () => {
  const { module, loading, error } = useLazy(async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return { message: "Module loaded on demand" };
  });

  if (loading) return <p>Loading module...</p>;
  if (error) return <p role="alert">Module failed to load.</p>;

  return <p>{module?.message}</p>;
};

const code = `import useLazy from "@hooks/useLazy";

const View = () => {
  const { module, loading, error } = useLazy(async () => {
    const loaded = await import("./feature");
    return loaded.default;
  });

  if (loading) return <p>Loading module...</p>;
  if (error) return <p role="alert">Module failed to load.</p>;

  return <p>{module?.message}</p>;
};`;

export default {
  code,
  View,
};
