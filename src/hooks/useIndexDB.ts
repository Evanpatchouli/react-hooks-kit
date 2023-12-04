import { useState, useEffect } from "react";

type DBState = {
  db: IDBDatabase | null;
  error: any;
};

function useIndexedDB(
  dbName: string,
  version: number,
  upgradeCallback: (db: IDBDatabase) => void
): DBState {
  const [state, setState] = useState<DBState>({ db: null, error: null });

  useEffect(() => {
    const request = indexedDB.open(dbName, version);

    request.onupgradeneeded = (event) => {
      upgradeCallback(request.result);
    };

    request.onsuccess = () => {
      setState({ db: request.result, error: null });
    };

    request.onerror = () => {
      setState({ db: null, error: request.error });
    };
  }, [dbName, version, upgradeCallback]);

  return state;
}
