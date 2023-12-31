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

  return (
    <>
      <Button
        onClick={() => {
          obj.age = Math.random() * 100;
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

const code = `import Code from "@/components/code";
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

  return (
    <>
      <Button
        onClick={() => {
          obj.age = Math.random() * 100;
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
};`;

export default {
  code,
  View,
};
