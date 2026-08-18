import ApiTable from "@/components/api-table";
import { SubTitle } from "@/components/layout/Article";

export default function UseTicker() {
  const paramData: Parameters<typeof ApiTable>["0"]["rows"] = [
    {
      name: "fn",
      type: "(tick: number) => void",
      desc: "Callback invoked with the next tick number.",
    },
    {
      name: "durationOrOptions",
      type: "TickerOptions | number",
      defaultValue: void 0,
      desc: "Optional duration in milliseconds or a TickerOptions object.",
    },
    {
      name: "options",
      type: "TickerOptions",
      defaultValue: void 0,
      desc: "Optional ticker configuration when durationOrOptions is a number.",
      properties: [
        {
          name: "immediate",
          type: '"mounted" | "first" | "every" | "all" | "none" | boolean',
          defaultValue: '"none"',
          desc: "Controls when the callback runs immediately.",
        },
        {
          name: "callAtFirst",
          type: "boolean",
          defaultValue: true,
          desc: "Whether the callback runs on the first scheduled tick.",
        },
        {
          name: "pauseAtFirst",
          type: "boolean",
          defaultValue: false,
          desc: "Whether the ticker starts paused.",
        },
        {
          name: "duration",
          type: "number",
          defaultValue: 1000,
          desc: "Interval between ticks in milliseconds.",
        },
        {
          name: "delay",
          type: "number",
          defaultValue: 0,
          desc: "Delay before an immediate callback runs.",
        },
      ],
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
      desc: "Current tick count.",
    },
    {
      name: "status",
      type: '"on" | "off"',
      defaultValue: '"off"',
      desc: "Whether the ticker is on or off.",
    },
    {
      name: "resume",
      type: "() => void",
      desc: "Resumes the ticker.",
    },
    {
      name: "pause",
      type: "() => void",
      desc: "Pauses the ticker.",
    },
    {
      name: "reset",
      type: "() => void",
      desc: "Resets the tick count to zero.",
    },
    {
      name: "delayedPause",
      type: "(delay: number) => void",
      desc: "Pauses the ticker after the specified delay.",
    },
    {
      name: "delayedResume",
      type: "(delay: number) => void",
      desc: "Resumes the ticker after the specified delay.",
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
