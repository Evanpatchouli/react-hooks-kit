import useFetch from "@hooks/useFetch";

const View = () => {
  const { data, loading, error } = useFetch<{ name: string }>("/manifest.json");

  if (loading) return <p>Loading manifest...</p>;
  if (error) return <p role="alert">Request failed.</p>;

  return <p>Application name: {data?.name ?? "unknown"}</p>;
};

const code = `import useFetch from "@hooks/useFetch";

const View = () => {
  const { data, loading, error } = useFetch<{ name: string }>("/manifest.json");

  if (loading) return <p>Loading...</p>;
  if (error) return <p role="alert">Request failed.</p>;

  return <p>{data?.name}</p>;
};`;

export default {
  code,
  View,
};
