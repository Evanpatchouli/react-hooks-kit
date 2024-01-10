import useTicker from "@hooks/useTicker";
import { Button } from "@mui/material";
import { useState } from "react";

const View = () => {
  const [count, setCount] = useState(0);
  const ticker = useTicker(
    () => {
      setCount(count + 1);
    },
    1000,
    {
      immediate: true,
      pauseAtFirst: false,
    }
  );
  const pause = () => ticker.pause();
  const resume = () => ticker.resume();
  const reset = () => {
    ticker.reset();
    setCount(0);
  };
  const pauseAfter2s = () => ticker.delayedPause(2000);
  const resumeAfter2s = () => ticker.delayedResume(2000);
  return (
    <>
      <p>
        count: {count} ticker: {ticker.tick}
      </p>
      <Button onClick={pause}>pause</Button>
      <Button onClick={resume}>resume</Button>
      <Button onClick={reset}>reset</Button>
      <Button onClick={pauseAfter2s}>pause after 2s</Button>
      <Button onClick={resumeAfter2s}>resume after 2s</Button>
    </>
  );
};

const code = `import useTicker from "@hooks/useTicker";
import { Button } from "@mui/material";
import { useState } from "react";

const View = () => {
  const [count, setCount] = useState(0);
  const ticker = useTicker(
    () => {
      setCount(count + 1);
    },
    1000,
    {
      immediate: true,
      pauseAtFirst: false,
    }
  );
  const pause = () => ticker.pause();
  const resume = () => ticker.resume();
  const reset = () => {
    ticker.reset();
    setCount(0);
  };
  const pauseAfter2s = () => ticker.delayedPause(2000);
  const resumeAfter2s = () => ticker.delayedResume(2000);
  return (
    <>
      <p>
        count: {count} ticker: {ticker.tick}
      </p>
      <Button onClick={pause}>pause</Button>
      <Button onClick={resume}>resume</Button>
      <Button onClick={reset}>reset</Button>
      <Button onClick={pauseAfter2s}>pause after 2s</Button>
      <Button onClick={resumeAfter2s}>resume after 2s</Button>
    </>
  );
};`;

export default {
  code,
  View,
};
