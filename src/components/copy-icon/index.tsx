import { FileCopyOutlined } from "@mui/icons-material";
import { MouseEventHandler } from "react";

export default function CopyIcon(props: {
  css?: ReturnType<typeof $css>;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div
      style={{
        width: "fit-content",
        height: "fit-content",
      }}
      // @ts-ignore
      css={props.css}
      onClick={props.onClick}
    >
      <FileCopyOutlined
        style={{
          transform: "rotateY(180deg)",
        }}
        fontSize='small'
      />
    </div>
  );
}
