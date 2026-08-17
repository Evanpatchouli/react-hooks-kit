import { useState, useEffect, useRef } from "react";

type DBState = {
  db: IDBDatabase | null;
  error: any;
};

export default function useIndexedDB(
  dbName: string,
  version: number,
  upgradeCallback: (db: IDBDatabase) => void
): DBState {
  const [state, setState] = useState<DBState>({ db: null, error: null });
  const upgradeCallbackRef = useRef(upgradeCallback);

  useEffect(() => {
    upgradeCallbackRef.current = upgradeCallback;
  }, [upgradeCallback]);

  useEffect(() => {
    let active = true;
    let db: IDBDatabase | null = null;
    let request: IDBOpenDBRequest;

    setState({ db: null, error: null });

    try {
      request = indexedDB.open(dbName, version);
    } catch (error) {
      setState({ db: null, error });
      return () => {
        active = false;
      };
    }

    request.onupgradeneeded = (event) => {
      upgradeCallbackRef.current(request.result);
    };

    request.onsuccess = () => {
      const openedDb = request.result;
      if (!active) {
        openedDb.close();
        return;
      }
      db = openedDb;
      setState({ db: openedDb, error: null });
    };

    request.onerror = () => {
      if (active) {
        setState({ db: null, error: request.error });
      }
    };

    return () => {
      active = false;
      db?.close();
      db = null;
    };
  }, [dbName, version]);

  return state;
}
