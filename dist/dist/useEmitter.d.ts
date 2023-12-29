/// <reference types="react" />
interface EventListener {
    namespace?: string;
    eventName: string;
    listenerName: string;
    listener: (...args: any[]) => void;
}
declare const GlobalListenersContext: import("react").Context<Map<string, EventListener>>;
export declare const useGlobalListeners: () => Map<string, EventListener>;
interface EventEmitterConfig {
    name?: string;
    initialEventName?: string;
    initialListener?: (...args: any[]) => void;
    namespace?: string;
}
interface EventEmitter {
    name: string;
    emit: (eventName: string, ...args: any[]) => void;
    subscribe: (eventName: string, listener: (...args: any[]) => void) => void;
    unsubscribe: (eventName: string) => void;
    unsubscribeAll: () => void;
}
declare function useEmitter(name: string, config?: Partial<EventEmitterConfig>): EventEmitter;
declare function useEmitter(config: Partial<EventEmitterConfig>): EventEmitter;
declare function useEmitter<M = {}>(name?: string, initialEventName?: string, initialListener?: (...args: M[typeof initialEventName][]) => void, config?: Partial<EventEmitterConfig>): EventEmitter;
export default useEmitter;
export { GlobalListenersContext };
