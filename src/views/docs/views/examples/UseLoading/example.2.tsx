import Loading from "@/components/Loading";
import { useLoading } from "@/hooks/useLoading";
import { Button } from "@mui/material";
import { useState } from "react";

const View = () => {
  const [options, setOptions] = useState({
    setType: "override" as "override" | "spread", // default
    zeroFalse: true, // default
  });

  const toggleSetType = () => {
    setOptions((prev) => ({
      ...prev,
      setType: prev.setType === "override" ? "spread" : "override",
    }));
  };

  const toggleZeroFalse = () => {
    setOptions((prev) => ({
      ...prev,
      zeroFalse: !prev.zeroFalse,
    }));
  };

  const { loading, plusLoading, minusLoading } = useLoading(
    {
      load: false,
    },
    options
  );
  return (
    <div
      css={$css`
      display: flex;
      align-items: center;
      `}
    >
      <div>
        <Button css={$css`display: block; text-transform: none;`} onClick={toggleSetType}>
          setType : {options?.setType}
        </Button>
        <Button css={$css`display: block; text-transform: none;`} onClick={toggleZeroFalse}>
          zeroFalse : {`${options?.zeroFalse}`}
        </Button>
      </div>
      <Button
        onClick={() => {
          minusLoading("load");
        }}
      >
        -
      </Button>
      <div
        css={$css`
        width: 60px;
        height: 60px;
        border: 2px solid gray;
        position: relative;
        border-radius: 50%;
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
import { Button } from "@mui/material";
import { useState } from "react";

const View = () => {
  const [options, setOptions] = useState({
    setType: "override" as "override" | "spread", // default
    zeroFalse: true, // default
  });

  const toggleSetType = () => {
    setOptions((prev) => ({
      ...prev,
      setType: prev.setType === "override" ? "spread" : "override",
    }));
  };

  const toggleZeroFalse = () => {
    setOptions((prev) => ({
      ...prev,
      zeroFalse: !prev.zeroFalse,
    }));
  };

  const { loading, plusLoading, minusLoading } = useLoading(
    {
      load: false,
    },
    options
  );
  return (
    <div
      css={$css\`
      display: flex;
      align-items: center;
      \`}
    >
      <div>
        <Button css={$css\`display: block; text-transform: none;\`} onClick={toggleSetType}>
          setType : {options?.setType}
        </Button>
        <Button css={$css\`display: block; text-transform: none;\`} onClick={toggleZeroFalse}>
          zeroFalse : {\`\${options?.zeroFalse}\`}
        </Button>
      </div>
      <Button
        onClick={() => {
          minusLoading("load");
        }}
      >
        -
      </Button>
      <div
        css={$css\`
        width: 60px;
        height: 60px;
        border: 2px solid gray;
        position: relative;
        border-radius: 50%;
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
