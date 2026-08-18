import useLocaleSelector from "@/locale/locale.selector";
import Article, { Body, Best, Consideration, Demo, FAQs } from "@/components/layout/Article";
import useParticle from "@/hooks/houdini/hooks/useParticle";
import { Card } from "@mui/material";
import { useEffect } from "react";
import pkg from "@/../package.json";
import UseParticleApi from "@/views/docs/views/hooks-apis/useParticle.api";

const code = `
import useParticle from "@hooks/useParticle";

const View = () => {
  const particleRef = useParticle<HTMLDivElement>({
    color: "blue",
    num: 12,
    size: 4,
  });

  return <div ref={particleRef}>Click to emit particles</div>;
};
`;

function UseParticle() {
  const hooksName = "useParticle";
  const $desc = useLocaleSelector(`${hooksName}.desc`);
  const $detail = useLocaleSelector(`${hooksName}.detail`);
  const $consider = useLocaleSelector(`${hooksName}.consideration`);
  const $best = useLocaleSelector(`${hooksName}.$best`);
  const $faqs = useLocaleSelector(`${hooksName}.$faqs`);

  useEffect(() => {
    document.title = `${hooksName} - ${pkg.homepage}`;
  }, []);

  const particleRef = useParticle<HTMLDivElement>({
    color: "blue",
  });
  return (
    <Article title="UseParticle" desc={$desc}>
      <Body>{$detail}</Body>
      <Demo code={code}>
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
      </Demo>
      <p>Click the element to emit particles.</p>
      <Consideration>{$consider}</Consideration>
      <Best>{$best}</Best>
      <FAQs>{$faqs}</FAQs>
      <UseParticleApi />
    </Article>
  );
}

export default UseParticle;
