import { Switch } from "@mui/material";
import Loading from "@/components/Loading";
import useToggle from "@/hooks/useToggle";
import { useLoading } from "@/hooks/useLoading";

const View = () => {
  const [, toggleOpen] = useToggle();
  const { loading, setLoading } = useLoading({
    load: false,
  });
  return (
    <>
      <Switch
        onChange={() => {
          toggleOpen();
          setLoading("load", (pre) => !pre);
        }}
      />
      <div
        css={$css`
        width: 200px;
        height: 100px;
        border: 1px solid black;
        position: relative;
        `}
      >
        <div
          css={$css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `}
        >
          <Loading on={loading.load} />
        </div>
      </div>
    </>
  );
};

const code = `
import Loading from "@/components/Loading";
import useToggle from "@/hooks/useToggle";
import { Switch } from "@mui/material";
import { useLoading } from "@/hooks/useLoading";

const View = () => {
  const [, toggleOpen] = useToggle();
  const { loading, setLoading } = useLoading({
    load: false,
  });
  return (
    <>
      <Switch
        onChange={() => {
          toggleOpen();
          setLoading("load", (pre) => !pre);
      }} />
      <div
        css={$css\`
        width: 200px;
        height: 100px;
        border: 1px solid black;
        position: relative;
        \`}
      >
        <div
          css={$css\`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        \`}
        >
          <Loading on={loading.load} />
        </div>
      </div>
    </>
  );
};
`;

export default {
  code,
  View,
};
