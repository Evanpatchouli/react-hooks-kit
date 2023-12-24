import useGuide, { Guider, Target } from "@hooks/useGuide";

const Guide = (props: {
  id: string;
  name: string;
  data: any;
  ids: string[];
  guider: Guider;
}) => {
  const { id, name, data, ids, guider } = props;
  return (
    <div onClick={guider.stop} css={style.guide}>
      Stop
    </div>
  );
};

const DefaultRender = () => {
  const [, guider] = useGuide([
    {
      ids: ["example2-s1"],
      name: "Step1",
      renders: [
        {
          id: "example2-s1",
          render(id, name, data, ids) {
            const props = { id, name, data, ids, guider };
            return <Guide {...props} />;
          },
        },
      ],
    },
  ]);

  return (
    <div>
      <div id="example2-s1" onClick={guider.start} style={style.btn}>
        Start
      </div>
    </div>
  );
};

const TargetWrapped = () => {
  const [, guider] = useGuide([
    {
      ids: ["example2-s2"],
      name: "Step1",
      renders: [
        {
          id: "example2-s2",
          render(id, name, data, ids) {
            const props = { id, name, data, ids, guider };
            return <Guide {...props} />;
          },
        },
      ],
    },
  ]);

  return (
    <Target id="example2-s2" guider={guider}>
      <div id="example2-s2" onClick={guider.start} style={style.btn}>
        Start
      </div>
    </Target>
  );
};

module style {
  export const btn = {
    cursor: "pointer",
    background: "#fff",
    padding: "4px 20px",
    borderRadius: "6px",
    border: "1px solid #333",
    boxSizing: "content-box",
  } as React.CSSProperties;

  export const guide = $css({
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    position: "absolute",
    background: "#fff",
    padding: "4px 20px",
    borderRadius: "6px",
  });
}

const View = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-around",
    }}
  >
    <DefaultRender />
    <TargetWrapped />
  </div>
);

const code = `import useGuide, { Guider, Target } from "@hooks/useGuide";

const Guide = (props: {
  id: string;
  name: string;
  data: any;
  ids: string[];
  guider: Guider;
}) => {
  const { id, name, data, ids, guider } = props;
  return (
    <div onClick={guider.stop} css={style.guide}>
      Stop
    </div>
  );
};

const DefaultRender = () => {
  const [, guider] = useGuide([
    {
      ids: ["example2-s1"],
      name: "Step1",
      renders: [
        {
          id: "example2-s1",
          render(id, name, data, ids) {
            const props = { id, name, data, ids, guider };
            return <Guide {...props} />;
          },
        },
      ],
    },
  ]);

  return (
    <div>
      <div id="example2-s1" onClick={guider.start} style={style.btn}>
        Start
      </div>
    </div>
  );
};

const TargetWrapped = () => {
  const [, guider] = useGuide([
    {
      ids: ["example2-s2"],
      name: "Step1",
      renders: [
        {
          id: "example2-s2",
          render(id, name, data, ids) {
            const props = { id, name, data, ids, guider };
            return <Guide {...props} />;
          },
        },
      ],
    },
  ]);

  return (
    <Target id="example2-s2" guider={guider}>
      <div id="example2-s2" onClick={guider.start} style={style.btn}>
        Start
      </div>
    </Target>
  );
};

module style {
  export const btn = {
    cursor: "pointer",
    background: "#fff",
    padding: "4px 20px",
    borderRadius: "6px",
    border: "1px solid #333",
    boxSizing: "content-box",
  } as React.CSSProperties;

  export const guide = $css({
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    position: "absolute",
    background: "#fff",
    padding: "4px 20px",
    borderRadius: "6px",
  });
}

const View = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-around",
    }}
  >
    <DefaultRender />
    <TargetWrapped />
  </div>
);
`;

export default {
  code,
  View,
};
