import Code from "@/components/code";
import { useMeta } from "@/hooks/useMeta";
import { Button } from "@mui/material";

// Basic example
const View = () => {
  const [obj, setObj] = useMeta({
    name: "John",
    age: 20,
    more: {
      address: "Taipei",
      score: 100,
    },
    messi: {
      game: {
        wordCup: {
          win: true,
        },
      },
    },
  });
  return (
    <>
      <Button
        onClick={() => {
          setObj("age", obj.age + 1);
        }}
      >
        obj.age++
      </Button>
      <Button
        onClick={() => {
          obj.more.score++;
        }}
      >
        obj.more.score++ [lazy]
      </Button>
      <Button
        onClick={() => {
          obj.messi.game.wordCup.win = !obj.messi.game.wordCup.win;
        }}
      >
        !obj.messi.game.wordCup.win [lazy]
      </Button>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj, null, 2)}
      </Code>
    </>
  );
};

const code = `import Code from "@/components/code";
import { useMeta } from "@/hooks/useMeta";
import { Button } from "@mui/material";

const View = () => {
  const [obj, setObj] = useMeta({
    name: "John",
    age: 20,
    more: {
      address: "Taipei",
      score: 100,
    },
    messi: {
      game: {
        wordCup: {
          win: true,
        },
      },
    },
  });
  return (
    <>
      <Button
        onClick={() => {
          setObj("age", obj.age + 1);
        }}
      >
        obj.age++
      </Button>
      <Button
        onClick={() => {
          obj.more.score++;
        }}
      >
        obj.more.score++ [lazy]
      </Button>
      <Button
        onClick={() => {
          obj.messi.game.wordCup.win = !obj.messi.game.wordCup.win;
        }}
      >
        !obj.messi.game.wordCup.win [lazy]
      </Button>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj, null, 2)}
      </Code>
    </>
  );
};
`;

export default {
  code,
  View,
};
