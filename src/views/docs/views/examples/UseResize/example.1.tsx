import useResize from "@hooks/useResize";

const View = () => {
  const size = useResize();
  return (
    <>
      <span>
        x: {size.width}, y: {size.height}
      </span>
    </>
  );
};

const code = `
import { useResize } from "@evanpatchouli/react-hooks-kit";

const View = () => {
  const size = useResize();
  return (
    <>
      <span>
        x: {size.width}, y: {size.height}
      </span>
    </>
  );
};
`;

export default {
  code,
  View,
};
