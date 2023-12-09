import Code from "@/components/code";
import useReactor, { listen } from "@/hooks/useReactor";
import useToast from "@/hooks/useToast";
import { Button } from "@mui/material";

const View = () => {
  const toast = useToast();
  const obj = useReactor(
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
    [
      {
        name: "toastWordCupWin",
        action: (state) => {
          toast(obj.get("messi.game.wordCup.win")?.toString());
          console.log(obj);
        },
      },
    ]
  );
  listen(obj).then((v) => {
    console.log("listen", v);
  })
  return (
    <>
      <Button
        onClick={() => {
          obj.dispatch<"toastWordCupWin">("toastWordCupWin");
        }}
      >
        toast
      </Button>
      <Button
        onClick={() => {
          obj.set("messi.game.wordCup.win", !obj.get("messi.game.wordCup.win"));
        }}
      >
        set wordCup.win (render)
      </Button>
      <Button
        onClick={() => {
          obj.value.messi.game.wordCup.win = !obj.value.messi.game.wordCup.win;
        }}
      >
        assign wordCup.win (not render)
      </Button>
      <Code theme="oneLight" lang="json">
        {JSON.stringify(obj, null, 2)}
      </Code>
    </>
  );
};

const code = `
import Code from "@/components/code";
import useReactor from "@/hooks/useReactor";
import useToast from "@/hooks/useToast";
import { Button } from "@mui/material";

const View = () => {
  const toast = useToast();
  const obj = useReactor(
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
    [
      {
        name: "toastWordCupWin",
        action: (state) => {
          toast(obj.get("messi.game.wordCup.win")?.toString());
          console.log(obj);
        },
      },
    ]
  );
  return (
    <>
      <Button
        onClick={() => {
          obj.dispatch<"toastWordCupWin">("toastWordCupWin");
        }}
      >
        toast
      </Button>
      <Button
        onClick={() => {
          obj.set("messi.game.wordCup.win", !obj.get("messi.game.wordCup.win"));
        }}
      >
        set wordCup.win (render)
      </Button>
      <Button
        onClick={() => {
          obj.value.messi.game.wordCup.win = !obj.value.messi.game.wordCup.win;
        }}
      >
        assign wordCup.win (not render)
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
