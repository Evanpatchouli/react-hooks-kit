import useToast from "@hooks/useToast";

const View = () => {
  const toast = useToast({ position: "absolute", duration: 3000 });

  return (
    <div style={{ minHeight: 120, position: "relative" }}>
      <button
        onClick={() =>
          toast("Saved at a custom position", {
            placement: { x: 24, y: 24 },
            bgColor: "#1b5e20",
            style: { fontWeight: 700 },
          })
        }
      >
        Show custom toast
      </button>
      <button onClick={() => toast.center("Centered toast", { delay: 500 })}>
        Delay and center
      </button>
    </div>
  );
};

const code = `
import useToast from "@hooks/useToast";

const View = () => {
  const toast = useToast({ position: "absolute", duration: 3000 });

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() =>
          toast("Saved at a custom position", {
            placement: { x: 24, y: 24 },
            bgColor: "#1b5e20",
            style: { fontWeight: 700 },
          })
        }
      >
        Show custom toast
      </button>
      <button onClick={() => toast.center("Centered toast", { delay: 500 })}>
        Delay and center
      </button>
    </div>
  );
};
`;

export default { code, View };
