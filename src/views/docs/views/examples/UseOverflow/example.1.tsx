import useOverflow from "@hooks/useOverflow";

const View = () => {
  const [ref, isOverflowing] = useOverflow<HTMLDivElement>();

  return (
    <div>
      <div ref={ref} style={{ width: 180, height: 60, overflow: "auto", border: "1px solid #ccc" }}>
        This text is intentionally long so the element can overflow.
      </div>
      <p>Overflow detected: {String(isOverflowing)}</p>
      <small>Resize the window to run the overflow check again.</small>
    </div>
  );
};

const code = `
import useOverflow from "@hooks/useOverflow";

const View = () => {
  const [ref, isOverflowing] = useOverflow<HTMLDivElement>();

  return (
    <div>
      <div ref={ref} style={{ width: 180, height: 60, overflow: "auto" }}>
        Long content that may overflow.
      </div>
      <p>Overflow detected: {String(isOverflowing)}</p>
    </div>
  );
};
`;

export default {
  code,
  View,
};
