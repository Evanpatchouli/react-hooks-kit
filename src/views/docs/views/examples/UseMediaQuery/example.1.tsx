import useMediaQuery from "@hooks/useMediaQuery";

const View = () => {
  const isWide = useMediaQuery("(min-width: 800px)");
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <div>
      <p>Viewport is wide: {String(isWide)}</p>
      <p>Dark color scheme: {String(prefersDark)}</p>
    </div>
  );
};

const code = `
import useMediaQuery from "@hooks/useMediaQuery";

const View = () => {
  const isWide = useMediaQuery("(min-width: 800px)");
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <div>
      <p>Viewport is wide: {String(isWide)}</p>
      <p>Dark color scheme: {String(prefersDark)}</p>
    </div>
  );
};
`;

export default {
  code,
  View,
};
