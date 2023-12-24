import useGuide from "@hooks/useGuide";

const View = () => {
  const [currentStep, guider] = useGuide(
    Array.from({ length: 9 }, (_, i) => i + 1).map((i) => ({
      ids: [`s${i}`],
      name: `Step ${i}`,
      data: {},
      renders: [
        {
          id: `s${i}`,
          render(id, name, data, ids) {
            console.log(id, name, data, ids);
            const onClick = i === 9 ? guider.stop : guider.next;
            return (
              <div
                css={$css`
              display: flex;
              align-items: center;
              width: fit-content; 
              position: absolute;
              background: #fff;
              padding: 4px 20px;
              border-radius: 6px;
              transform: translate(-50%, 50%);
              `}
              >
                <div css={$css`width: 60px;`}>{name}</div>
                <div
                  css={$css`padding: 4px 12px; &:hover { cursor: pointer; background: #eee;  border-radius: 4px;}`}
                  onClick={onClick}
                >
                  {i === 9 ? "End" : "Next"}
                </div>
              </div>
            );
          },
        },
      ],
    }))
  );
  return (
    <div css={style.containerCss}>
      <div id="s1" css={style.boxCss("red")} onClick={guider.start}>
        Start
      </div>
      <div id="s2" css={style.boxCss("green")}>
        2
      </div>
      <div id="s3" css={style.boxCss("blue")}>
        3
      </div>
      <div id="s4" css={style.boxCss("black")}>
        4
      </div>
      <div id="s5" css={style.boxCss("purple")}>
        5
      </div>
      <div id="s6" css={style.boxCss("pink")}>
        6
      </div>
      <div id="s7" css={style.boxCss("cyan")}>
        7
      </div>
      <div id="s8" css={style.boxCss("magenta")}>
        8
      </div>
      <div id="s9" css={style.boxCss("orange")}>
        9
      </div>
    </div>
  );
};

module style {
  export const containerCss = $css`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
gap: 10px;
width: 300px;
height: 300px;
`;

  export const boxCss = (color: string) => $css`
color: ${color};
display: flex;
justify-content: center;
align-items: center;
border-radius: 6px;
cursor: pointer;
`;
}

const code = `import useGuide from "@hooks/useGuide";

const View = () => {
  const [currentStep, guider] = useGuide(
    Array.from({ length: 9 }, (_, i) => i + 1).map((i) => ({
      ids: [\`s\${i}\`],
      name: \`Step \${i}\`,
      data: {},
      renders: [
        {
          id: \`s\${i}\`,
          render(id, name, data, ids) {
            console.log(id, name, data, ids);
            const onClick = i === 9 ? guider.stop : guider.next;
            return (
              <div
                css={$css\`
              display: flex;
              align-items: center;
              width: fit-content; 
              position: absolute;
              background: #fff;
              padding: 4px 20px;
              border-radius: 6px;
              transform: translate(-50%, 50%);
              \`}
              >
                <div css={$css\`width: 60px;\`}>{name}</div>
                <div
                  css={$css\`padding: 4px 12px; &:hover { cursor: pointer; background: #eee;  border-radius: 4px;}\`}
                  onClick={onClick}
                >
                  {i === 9 ? "End" : "Next"}
                </div>
              </div>
            );
          },
        },
      ],
    }))
  );
  return (
    <div css={style.containerCss}>
      <div id="s1" css={style.boxCss("red")} onClick={guider.start}>
        Start
      </div>
      <div id="s2" css={style.boxCss("green")}>
        2
      </div>
      <div id="s3" css={style.boxCss("blue")}>
        3
      </div>
      <div id="s4" css={style.boxCss("black")}>
        4
      </div>
      <div id="s5" css={style.boxCss("purple")}>
        5
      </div>
      <div id="s6" css={style.boxCss("pink")}>
        6
      </div>
      <div id="s7" css={style.boxCss("cyan")}>
        7
      </div>
      <div id="s8" css={style.boxCss("magenta")}>
        8
      </div>
      <div id="s9" css={style.boxCss("orange")}>
        9
      </div>
    </div>
  );
};

module style {
  export const containerCss = $css\`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
gap: 10px;
width: 300px;
height: 300px;
\`;

  export const boxCss = (color: string) => $css\`
color: \${color};
display: flex;
justify-content: center;
align-items: center;
border-radius: 6px;
cursor: pointer;
\`;
}
`;

export default {
  code,
  View,
};
