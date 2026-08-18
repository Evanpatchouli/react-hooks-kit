import useToast from "@hooks/useToast";

const View = () => {
  const toast = useToast({ duration: 1800, bgColor: "#263238" });

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <button onClick={() => toast("Default toast")}>Show toast</button>
      <button onClick={() => toast.top("Top toast")}>Top</button>
      <button onClick={() => toast.bottom("Bottom toast")}>Bottom</button>
      <button
        onClick={() =>
          toast("Delayed toast", { delay: 500, duration: 2200, bgColor: "#1565c0" })
        }
      >
        Delayed
      </button>
    </div>
  );
};

const code = `
import useToast from "@hooks/useToast";

const View = () => {
  const toast = useToast({ duration: 1800, bgColor: "#263238" });

  return (
    <div>
      <button onClick={() => toast("Default toast")}>Show toast</button>
      <button onClick={() => toast.top("Top toast")}>Top</button>
      <button onClick={() => toast.bottom("Bottom toast")}>Bottom</button>
      <button
        onClick={() =>
          toast("Delayed toast", { delay: 500, duration: 2200 })
        }
      >
        Delayed
      </button>
    </div>
  );
};
`;

export default {
  code,
  View,
};
