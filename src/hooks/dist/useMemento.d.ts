interface HistoryItem<T = any> {
    idKey: number;
    data: T | null;
}
interface Memento<T = any> {
    idKey: number;
    data: T | null;
    name: string | null;
}
/**
 * - historySize - The size of the history, default is 10.
 * - strict - If true, throw error when idKey not found, default is false.
 */
interface MementoConfig {
    historySize?: number;
    strict?: boolean;
}
/**
 * - idKey - The id of the current state.
 * - createMemento - Create a memento.
 * - deleteMemento - Delete a memento.
 * - clearMementos - Clear all mementos.
 * - rollback - Rollback to the previous state.
 * - forward - Forward to the next state.
 * - goToHistory - Go to a history state.
 * - goToMemento - Go to a memento state.
 * - deleteHistory - Delete a history state.
 * - clearHistory - Clear all history states.
 * - clone - Clone a history state.
 * - clear - Clear all states.
 * - history - All history states.
 * - mementos - All mementos.
 */
interface MementoManager<T = any> {
    idKey: number;
    createMemento: (name?: string | null) => void;
    deleteMemento: (idKey: number | number[]) => void;
    clearMementos: () => void;
    rollback: () => void;
    forward: () => void;
    goToHistory: (idKey: number) => void;
    goToMemento: (idKey: number) => void;
    deleteHistory: (idKey: number | number[]) => void;
    clearHistory: () => void;
    clear: () => void;
    history: HistoryItem<T>[];
    mementos: Memento<T>[];
    clone: (id: number) => void;
}
/**
 * ### useMemento
 * #### Parameters
 * - initialState - The initial state.
 * - config - The config.
 * @returns [state, setState, mementoManager]
 */
declare const useMemento: <T = any>(initialState: T, config?: MementoConfig) => [T | null, (newData: T | ((prev: T | null) => T | null) | null) => void, MementoManager<any>];
export default useMemento;
