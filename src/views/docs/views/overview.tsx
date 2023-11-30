import useReactive from "@/hooks/useReactive";
import useTheme from "@/hooks/useTheme";
import useWatch from "@/hooks/useWatch";
import Article, { Body } from "@components/layout/Article";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const desc =
  "@evanpatchouli/react-hooks-kit is developed by evanpatchouli for making it easy to use react hooks.";

export default function Overview() {
  const theme = useTheme();
  useEffect(() => {
    console.log(theme);
  }, [theme]);
  const [num, setNum] = useState({ a: 1, b: 2 });
  const num_a = useWatch<
    number,
    {
      a: number;
      b: number;
      c?: {
        d: number;
      };
    }
  >(num, ["a"], (a, b) => {
    console.log(a, b);
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
        variant="contained"
        onClick={() => {
          setNum({ ...num, a: num.a + 1 });
        }}
      >
        {JSON.stringify(num)}
      </Button>
    </Article>
  );
}
