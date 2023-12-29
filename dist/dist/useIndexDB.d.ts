type DBState = {
    db: IDBDatabase | null;
    error: any;
};
export default function useIndexedDB(dbName: string, version: number, upgradeCallback: (db: IDBDatabase) => void): DBState;
export {};
