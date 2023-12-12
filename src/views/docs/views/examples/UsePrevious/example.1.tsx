import usePrevoius from "@/hooks/usePrevious";
import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const View = () => {
  const [count, setCount] = useState(0);
  const previousCount = usePrevoius(count);
  const timer = useRef<NodeJS.Timer>();
  useEffect(() => {
    timer.current = setInterval(() => {
      setCount((p) => ++p);
    }, 17);
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, []);
  return (
    <div>
      <h1>
        Now: {count}, previous: {previousCount}, timer:
        {`${timer.current}`}
      </h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          if (timer.current) {
            clearInterval(timer.current);
          }
        }}
      >
        Stop
      </Button>
    </div>
  );
};

const code = `import usePrevoius from "@/hooks/usePrevious";
import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const View = () => {
  const [count, setCount] = useState(0);
  const previousCount = usePrevoius(count);
  const timer = useRef<NodeJS.Timer>();
  useEffect(() => {
    timer.current = setInterval(() => {
      setCount((p) => ++p);
    }, 17);
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, []);
  return (
    <div>
      <h1>
        Now: {count}, previous: {previousCount}, timer:
        {\`\${timer.current}\`}
      </h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          if (timer.current) {
            clearInterval(timer.current);
          }
        }}
      >
        Stop
      </Button>
    </div>
  );
};`;

export default {
  code,
  View,
};
