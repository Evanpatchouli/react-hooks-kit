import useParticle from "@/hooks/houdini/hooks/useParticle";
import useToogle from "@/hooks/useToggle";
import { ThumbUpAlt, ThumbUpOffAlt } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function WasHelpful(props: { children?: React.ReactNode }) {
  const [thumb, setThumb] = useToogle();
  const effectRef = useParticle({}, !thumb);
  return (
    <div
      css={$css`
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 32px;
      `}
    >
      <Button
        onClick={setThumb}
        color={thumb ? "primary" : "inherit"}
        style={{
          textTransform: "none",
        }}
        ref={effectRef}
        disableRipple
      >
        <span
          style={{
            marginRight: 8,
          }}
        >
          {props.children ?? "Was this page helpful?"}
        </span>
        {thumb ? <ThumbUpAlt /> : <ThumbUpOffAlt />}
      </Button>
    </div>
  );
}
