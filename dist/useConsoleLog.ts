import { useState, useEffect } from 'react';

function useConsoleLog() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const originalLog = console.log;
    console.log = (...args) => {
      // @ts-ignore
      setLogs((prevLogs) => [...prevLogs, args.join(' ')]);
      originalLog(...args);
    };

    return () => {
      console.log = originalLog;
    };
  }, []);

  return logs;
}

export default useConsoleLog;