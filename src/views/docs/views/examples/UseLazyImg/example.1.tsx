import useLazyImg from "@hooks/useLazyImg";

const imageSource =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='100'%3E%3Crect width='220' height='100' fill='%234f46e5'/%3E%3Ctext x='110' y='58' text-anchor='middle' fill='white' font-size='20'%3ELazy image%3C/text%3E%3C/svg%3E";

const View = () => {
  const image = useLazyImg({ src: imageSource, defaultSrc: imageSource });

  return (
    <figure>
      <img src={String(image)} alt="Lazy image" width={220} height={100} />
      <figcaption>loaded: {String(image.loaded)}, error: {String(image.error)}</figcaption>
    </figure>
  );
};

const code = `import useLazyImg from "@hooks/useLazyImg";

const image = useLazyImg({
  src: "https://example.com/photo.jpg",
  defaultSrc: "/images/placeholder.jpg",
  errorSrc: "/images/error.jpg",
  actions: {
    onLoad: () => console.log("loaded"),
    onError: () => console.warn("failed"),
  },
});

return <img src={String(image)} alt="Lazy image" />;`;

export default {
  code,
  View,
};
