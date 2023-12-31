import { Button, Collapse } from "@mui/material";
import { CodeOutlined, ContentCopy, GitHub } from "@mui/icons-material";
import Code from "../code";
import CopyIcon from "../copy-icon";
import copy from "@/utils/copy";
import useToast from "@/hooks/useToast";
import { css as $$css } from "@emotion/react";
import { useState } from "react";
import "./index.css";

const CodeBox = (props: {
  children?: string;
  lang?: "ts" | "tsx";
  defaultOpen?: boolean;
}) => {
  const toast = useToast();
  const [show, setShow] = useState(props.defaultOpen || false);
  const clickCode = () => setShow(!show);
  const copyCode = () => {
    copy(
      props.children,
      () => {
        toast("Copied to clipboard");
      },
      () => {
        toast("Failed to copy to clipboard");
      }
    );
  };
  return (
    <div css={CodeBoxStyle}>
      <div css={CopyIconStyle}>{show && <CopyIcon onClick={copyCode} />}</div>
      <Collapse in={show}>
        <Code theme="vscDarkPlus" lang={props.lang ?? "tsx"}>
          {props.children}
        </Code>
      </Collapse>

      <div css={ToolbarStyle}>
        <Button className="CodexBoxBtn" onClick={clickCode} size="small">
          <CodeOutlined />
        </Button>
        <Button className="CodexBoxBtn" onClick={copyCode} size="small">
          <ContentCopy fontSize="small" />
        </Button>
        <Button className="CodexBoxBtn" onClick={() => {}} size="small">
          <GitHub fontSize="small" />
        </Button>
      </div>
    </div>
  );
};

export default CodeBox;

const CodeBoxStyle = $$css`
position: relative;
`;

const CopyIconStyle = $$css`
position: absolute;
top: 16px;
right: 8px;
z-index: 1;
color: gray;
cursor: pointer;
padding: 8px 6px 2px 6px;
border-radius: 4px;
&:hover {
  background-color: #333;
}
&:active {
  transition: background-color 0.1s ease-in-out;
  background-color: #444;
}
`;

const ToolbarStyle = $$css`
display: flex;
justify-content: flex-end;
align-items: center;
gap: 0.5em;
`;
