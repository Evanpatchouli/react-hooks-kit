import useList from "@/hooks/useList";
import { useMemo } from "react";

const View = () => {
  const [list, lister] = useList<{
    name: string;
  }>(
    [
      { name: "Leo Messi" },
      { name: "Cristiano Ronaldo" },
      { name: "Neymar" },
      { name: "Kylian Mbappe" },
      { name: "Kevin De Bruyne" },
      { name: "Ronaldinho" },
    ],
    [],
    {
      renderFn(item) {
        return (
          <div css={$css`margin-bottom: 8px;`}>
            <label css={$css`margin-right: 1rem;`}>Name</label>
            <span id={item.name}>{item.name}</span>
          </div>
        );
      },
    }
  );

  const listView = useMemo(() => lister.render(), [list]);
  return <>{listView}</>;
};

const code = `import useList from "@/hooks/useList";
import { useMemo } from "react";

const View = () => {
  const [list, lister] = useList<{
    name: string;
  }>(
    [
      { name: "Leo Messi" },
      { name: "Cristiano Ronaldo" },
      { name: "Neymar" },
      { name: "Kylian Mbappe" },
      { name: "Kevin De Bruyne" },
      { name: "Ronaldinho" },
    ],
    [],
    {
      renderFn(item) {
        return (
          <div css={$css\`margin-bottom: 8px;\`}>
            <label css={$css\`margin-right: 1rem;\`}>Name</label>
            <span id={item.name}>{item.name}</span>
          </div>
        );
      },
    }
  );

  const listView = useMemo(() => lister.render(), [list]);
  return <>{listView}</>;
};
`;

export default {
  code,
  View,
};
