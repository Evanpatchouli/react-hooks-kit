import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";
import Required from "@/components/Required";

export default function UseTicker() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "fn",
      type: "(tick: number) => void",
      desc: "callback function",
    },
    {
      name: "options or duration",
      type: "TickerOptions | number",
      desc: "options or duration",
    },
    {
      name: "options",
      type: "TickerOptions",
      desc: "options",
    },
    // {
    //   name: "initial",
    //   type: "boolean",
    //   defaultValue: false,
    //   desc: "initial state of toggle",
    // },
    // {
    //   name: "valueMap",
    //   type: "object",
    //   defaultValue: { true: true, false: false },
    //   desc: "mapping of returned values",
    //   properties: [
    //     {
    //       name: "true",
    //       type: "boolean | T",
    //       defaultValue: true,
    //        desc: "value returned when toggle is on",
    //     },
    //     {
    //       name: "false",
    //       type: "boolean | F",
    //       defaultValue: false,
    //       desc: "value returned when toggle is off",
    //     },
    //   ],
    // },
  ];

  const returnData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "tick",
      type: "number",
      defaultValue: 0,
      desc: "tick count",
    },
    {
      name: "status",
      type: '"on" | "off"',
      defaultValue: '"off"',
      desc: "status of ticker",
    },
    {
      name: "resume",
      type: "() => void",
      desc: "resume ticker",
    },
    {
      name: "pause",
      type: "() => void",
      desc: "pause ticker",
    },
    {
      name: "reset",
      type: "() => void",
      desc: "reset ticker",
    },
    {
      name: "delayedPause",
      type: "(delay: number) => void",
      desc: "pause ticker after delay",
    },
    {
      name: "delayedResume",
      type: "(delay: number) => void",
      desc: "resume ticker after delay",
    },
    // {
    //   name: 'setTick',
    //   type: '(tick: number) => void',
    //   desc: 'set tick count',
    // },
    // {
    //   name: 'setInterval',
    //   type: '(interval: number) => void',
    //   desc: 'set interval',
    // },
    // {
    //   name: 'setOptions',
    //   type: '(options: Partial<Options>) => void',
    //   desc: 'set options',
    // },
    // {
    //   name: 'setCallback',
    //   type: '(callback: Callback) => void',
    //   desc: 'set callback',
    // },
    // {
    //   name: 'setImmediate',
    //   type: '(immediate: boolean) => void',
    //   desc: 'set immediate',
    // },
    // {
    //   name: 'setPauseAtFirst',
    //   type: '(pauseAtFirst: boolean) => void',
    //   desc: 'set pauseAtFirst',
    // },
    // {
    //   name: 'setPauseAtLast',
    //   type: '(pauseAtLast: boolean) => void',
    //   desc: 'set pauseAtLast',
    // },
    // {
    //   name: 'setPauseAtReset',
    //   type: '(pauseAtReset: boolean) => void',
    //   desc: 'set pauseAtReset',
    // },
    // {
    //   name: 'setPauseAtTick',
    //   type: '(pauseAtTick: number) => void',
    //   desc: 'set pauseAtTick',
    // },
    // {
    //   name: 'setPauseAtInterval',
    //   type: '(pauseAtInterval: number) => void',
    //   desc: 'set pauseAtInterval',
    // },
  ];

  return (
    <>
      <SubTitle id="hook-api">Api of useTicker</SubTitle>
      <SubTitle low top="20px">
        Parameters
      </SubTitle>
      <ApiTable param rows={paramData} />
      <SubTitle low top="20px">
        ReturnValue (Object)
      </SubTitle>
      <ApiTable return rows={returnData} />
    </>
  );
}
