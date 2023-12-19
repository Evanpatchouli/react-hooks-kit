import Code from "@/components/code";
import useReactive from "@/hooks/useReactive";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const View = () => {
  const obj = useReactive(
    {
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
    },
    true
  );
  const arr = useReactive([1, 2, 3]);
  const [arrayStr, setArrayStr] = useState("");
  useEffect(() => {
    let str = JSON.stringify(arr);
    setArrayStr(str);
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          obj.age = Math.random() * 100;
          // console.log(obj);
        }}
      >
        obj.age++
      </Button>
      <Button
        onClick={() => {
          obj.more.score++;
          arr[0] = 100;
        }}
      >
        obj.more.score++
      </Button>
      <Button
        onClick={() => {
          obj.messi.game.wordCup.win = !obj.messi.game.wordCup.win;
        }}
      >
        console.log(obj.age)
      </Button>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj, null, 2)}
      </Code>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(arr)}
      </Code>
    </>
  );
};

const code = `
import Code from "@/components/code";
import useReactive from "@/hooks/useReactive";
import { Button } from "@mui/material";

const View = () => {
  const obj = useReactive(
    {
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
    },
    true
  );
  return (
    <>
      <Button
        onClick={() => {
          obj.age = Math.random() * 100;
          // console.log(obj);
        }}
      >
        obj.age++
      </Button>
      <Button
        onClick={() => {
          obj.more.score++;
        }}
      >
        obj.more.score++
      </Button>
      <Button
        onClick={() => {
          obj.messi.game.wordCup.win = !obj.messi.game.wordCup.win;
        }}
      >
        console.log(obj.age)
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
