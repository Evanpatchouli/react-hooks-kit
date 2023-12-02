import useConsoleLog from "@/hooks/useConsoleLog";
import useTheme from "@/hooks/useTheme";
import useWatch from "@/hooks/useWatch";
import Article, { Body } from "@components/layout/Article";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const desc =
  "@evanpatchouli/react-hooks-kit is developed by evanpatchouli for making it easy to use react hooks.";

export default function Overview() {
  const logs = useConsoleLog();
  const theme = useTheme();
  useEffect(() => {
    console.log(`theme: ${theme}`);
  }, [theme]);
  const [num, setNum] = useState({
    a: 1,
    b: 2,
    c: {
      c1: 1,
      c2: {
        "c3.x": 1,
      },
    },
  });
  const c__c2__c3_x = useWatch(num, "c.c2.c3.x", (a, b) => {
    console.log(`num.c.c2.["c3.x"]: ${a} -> ${b}`);
  });
  return (
    <Article title="Overview" desc={desc}>
      <Body>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Body>
      <Button
        variant="outlined"
        onClick={() => {
          setNum((_num) => ({
            ..._num,
            c: {
              ..._num.c,
              c2: {
                ..._num.c.c2,
                "c3.x": _num.c.c2["c3.x"] + 1,
              },
            },
            a: num.a + 1,
          }));
        }}
      >
        {JSON.stringify(num, null, 2)}
      </Button>
      <Button variant="contained" color="success">
        {c__c2__c3_x}
      </Button>
      <div>
        {logs
          .filter((e: string) => !e.startsWith("theme"))
          .map((log, index) => (
            <p key={index}>{log}</p>
          ))}
      </div>
    </Article>
  );
}
