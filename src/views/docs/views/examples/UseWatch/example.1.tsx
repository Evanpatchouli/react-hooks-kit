import useGuide from "@/hooks/useGuide";
import useWatch from "@/hooks/useWatch";
import { PathValue } from "@/hooks/utils/types";
import { Button } from "@mui/material";
import { useState } from "react";

const View = () => {
  const [step, guide] = useGuide(
    [
      {
        ids: ["logs"],
        name: "guide",
        renders: [
          {
            id: "logs",
            render(id, name, data, ids) {
              return (
                <div
                  onClick={() => {
                    guide.stop();
                  }}
                  style={{
                    width: "fit-content",
                  }}
                >
                  {name} {data} : only the first not work (☝️ click here to
                  close )
                </div>
              );
            },
          },
        ],
      },
    ],
    undefined,
    {
      containerStyle: {
        backgroundColor: "#fff",
        zIndex: "9999",
        padding: "10px 20px",
        borderRadius: "6px",
        cursor: "pointer",
      },
    }
  );
  const logs: any[] = [];
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
  const c__c2__c3_x$strict = useWatch(
    num,
    "c.c2.c3.x",
    (a, b) => {
      console.log(`(#c__c2__c3_x$strict) num.c.c2.["c3.x"]: ${a} -> ${b}`);
    },
    true
  );
  const c__c2__c3_x$array = useWatch<number, typeof num>(
    num,
    ["c", "c2", "c3.x"],
    (a, b) => {
      console.log(`(#c__c2__c3_x$array) num.c.c2.["c3.x"]: ${a} -> ${b}`);
    },
    {
      immediate: true,
    }
  );
  return (
    <>
      <Button
        variant="outlined"
        onClick={() => {
          guide.start();
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
      <div
        css={$css({
          marginBlock: "1rem",
        })}
      >
        <Button variant="contained" color="success">
          c__c2__c3_x: {c__c2__c3_x}
        </Button>{" "}
        default is non-strict mode, the special key "c3.x" will cause mistake.
      </div>
      <div
        css={$css({
          marginBlock: "1rem",
        })}
      >
        <Button variant="contained" color="success">
          c__c2__c3_x$strict: {c__c2__c3_x$strict}
        </Button>{" "}
        set strict mode to <code>true</code> works, but may cause energy
        consumption.
      </div>
      <div
        css={$css({
          marginBlock: "1rem",
        })}
      >
        <Button variant="contained" color="success">
          c__c2__c3_x$array: {c__c2__c3_x$array}
        </Button>{" "}
        <strong>Most suggested</strong>: use array to access the special key
        "c3.x".
      </div>
      <div id="logs">
        {logs
          .filter((e: string) => !e.startsWith("theme"))
          .map((log, index) => (
            <p key={index}>{log}</p>
          ))}
      </div>
    </>
  );
};

const code = `
import useConsoleLog from "@/hooks/useConsoleLog";
import useWatch from "@/hooks/useWatch";
import { Button } from "@mui/material";
import { useState } from "react";

const View = () => {
  const logs = useConsoleLog();
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
    console.log(\`num.c.c2.["c3.x"]: \${a} -> \${b}\`);
  });
  const c__c2__c3_x$strict = useWatch(
    num,
    "c.c2.c3.x",
    (a, b) => {
      console.log(\`(#c__c2__c3_x$strict) num.c.c2.["c3.x"]:\ \${a} -> \${b}\`);
    },
    true
  );
  const c__c2__c3_x\$array = useWatch(num, ["c", "c2", "c3.x"], (a, b) => {
    console.log(\`(#c__c2__c3_x$array) num.c.c2.["c3.x"]: \${a} -> \${b}\`);
  });
  return (
    <>
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
      <div
        css={$css({
          marginBlock: "1rem",
        })}
      >
        <Button variant="contained" color="success">
          c__c2__c3_x: {c__c2__c3_x}
        </Button>{" "}
        default is non-strict mode, the special key "c3.x" will cause mistake.
      </div>
      <div
        css={$css({
          marginBlock: "1rem",
        })}
      >
        <Button variant="contained" color="success">
          c__c2__c3_x$strict: {c__c2__c3_x$strict}
        </Button>{" "}
        set strict mode to <code>true</code> works, but may cause energy consumption.
      </div>
      <div
        css={$css({
          marginBlock: "1rem",
        })}
      >
        <Button variant="contained" color="success">
          c__c2__c3_x$array: {c__c2__c3_x$array}
        </Button>{" "}
        <strong>Most suggested</strong>: use array to access the special key "c3.x".
      </div>
      <div>
        {logs
          .filter((e: string) => !e.startsWith("theme"))
          .map((log, index) => (
            <p key={index}>{log}</p>
          ))}
      </div>
    </>
  );
};
`;

export default {
  code,
  View,
};
