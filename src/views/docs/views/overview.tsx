import useForceUpdate from "@/hooks/useForceUpdate";
import useReactive from "@/hooks/useReactive";
import Article, { Body } from "@components/layout/Article";
import { Button } from "@mui/material";

const desc =
  "@evanpatchouli/react-hooks-kit is developed by evanpatchouli for making it easy to use react hooks.";

export default function Overview() {
  const fs = useForceUpdate();
  let obj = useReactive({
    a: 0,
    b: {
      c: 0,
    },
  }, (v) => {
    
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
        onClick={() => {
          obj.a++;
          // fs();
          // obj.b.c++;
        }}
      >
        {JSON.stringify(obj)}
      </Button>
    </Article>
  );
}
