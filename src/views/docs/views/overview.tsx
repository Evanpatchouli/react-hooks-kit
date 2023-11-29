import Article, { Body } from "@components/layout/Article";

const desc = "@evanpatchouli/react-hooks-kit is developed by evanpatchouli for making it easy to use react hooks.";

export default function Overview() {
  return (
    <Article title="Overview" desc={desc}>
      <Body>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
        beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Body>
    </Article>
  );
}
