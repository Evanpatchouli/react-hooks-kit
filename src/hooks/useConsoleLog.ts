import { useState, useEffect } from "react";

type LogArguments = Parameters<typeof console.log>;
type LogSubscriber = (args: LogArguments) => void;

const subscribers = new Set<LogSubscriber>();
let originalLog: typeof console.log | null = null;
let wrappedLog: typeof console.log | null = null;

function subscribe(subscriber: LogSubscriber) {
  if (subscribers.size === 0) {
    originalLog = console.log;
    wrappedLog = (...args) => {
      subscribers.forEach((currentSubscriber) => currentSubscriber(args));
      originalLog?.apply(console, args);
    };
    console.log = wrappedLog;
  }

  subscribers.add(subscriber);

  return () => {
    subscribers.delete(subscriber);

    if (subscribers.size === 0) {
      if (wrappedLog && console.log === wrappedLog && originalLog) {
        console.log = originalLog;
      }
      originalLog = null;
      wrappedLog = null;
    }
  };
}

function useConsoleLog() {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    return subscribe((args) => {
      setLogs((previousLogs) => [...previousLogs, args.join(" ")]);
    });
  }, []);

  return logs;
}

export default useConsoleLog;
