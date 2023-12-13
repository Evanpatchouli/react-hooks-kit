/// <reference types="react" />
interface EventListener {
    eventName: string;
    listenerName: string;
    listener: (...args: any[]) => void;
}
declare const GlobalListenersContext: import("react").Context<Map<string, EventListener>>;
declare function useEventEmitter<M = {}>(name?: string, initialEventName?: string, initialListener?: (...args: M[typeof name][]) => void): {
    name: string;
    emit: (eventName: string, ...args: any[]) => void;
    subscribe: (eventName: string, listener: (...args: any[]) => void) => void;
    unsubscribe: (eventName: string) => void;
    unsubscribeAll: () => void;
};
export default useEventEmitter;
export { GlobalListenersContext };
