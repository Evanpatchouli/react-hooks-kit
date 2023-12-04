import { ConstructionOutlined } from "@mui/icons-material";

export default function Deving() {
  return (
    <div
      css={$css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      // height: calc(100vh - 160px);
      height: 260px;
      font-size: 2rem;
      color: #ccc;
      // border: 2px dotted #ccc;
      border-radius: 8px;
      margin-top: 60px;
      margin-inline: 10%;
    `}
    >
      <ConstructionOutlined />
      <div>This page is still deving...</div>
    </div>
  );
}
