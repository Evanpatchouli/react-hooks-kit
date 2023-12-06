import Loading from "@/components/Loading";
import { useLoading } from "@/hooks/useLoading";
import { Button } from "@mui/material";

const View = () => {
  const { loading, plusLoading, minusLoading } = useLoading({
    load: false,
  });
  return (
    <div
      css={$css`
      display: flex;
      align-items: center;
      `}
    >
      <Button
        onClick={() => {
          minusLoading("load");
        }}
      >
        -
      </Button>
      <div
        css={$css`
        width: 40px;
        height: 40px;
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
          <Loading on={!!loading.load} />
        </div>
      </div>
      <Button
        onClick={() => {
          plusLoading("load");
        }}
      >
        +
      </Button>
      <strong>count : {JSON.stringify(loading.load)}</strong>
    </div>
  );
};

const code = `
import Loading from "@/components/Loading";
import { useLoading } from "@/hooks/useLoading";
import { Switch } from "@mui/material";

const View = () => {
  const { loading, plusLoading, minusLoading } = useLoading({
    load: false,
  });
  return (
    <div
      css={$css\`
      display: flex;
      align-items: center;
      \`}
    >
      <Button
        onClick={() => {
          minusLoading("load");
        }}
      >
        -
      </Button>
      <div
        css={$css\`
        width: 40px;
        height: 40px;
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
          <Loading on={!!loading.load} />
        </div>
      </div>
      <Button
        onClick={() => {
          plusLoading("load");
        }}
      >
        +
      </Button>
      <strong>count : {JSON.stringify(loading.load)}</strong>
    </div>
  );
};
`;

export default {
  code,
  View,
};
