import Article, { Body } from "@/components/layout/Article";
import useParticle from "@/hooks/houdini/hooks/useParticle";
import { Button, Card } from "@mui/material";
import { useEffect } from "react";
import pkg from "@/../package.json";

function UseParticle() {
  useEffect(() => {
    document.title = `useParticle - ${pkg.homepage}`;
  }, []);

  const particleRef = useParticle<HTMLDivElement>({
    color: "blue",
  });
  const desc = "useParticle is a hook for using houdini particle effect.";
  return (
    <Article title="UseParticle" desc={desc}>
      <Body>A hook to render particle effect by using houdini paintWorklet.</Body>
      <Card>
        <div
          // @ts-ignore
          css={$css`
          &::selection {
            background-color: transparent;
          }
          &:hover {
            cursor: pointer;
            background-color: gainsboro;
          }
        `}
          ref={particleRef}
        >
          Particle
        </div>
      </Card>
      {/* <Button variant="outlined" ref={particleRef}>
        Particle
      </Button> */}
    </Article>
  );
}

export default UseParticle;
