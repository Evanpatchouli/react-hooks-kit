import { Prettify } from "./typings";
type EventReceiver = {
    stop: () => void;
    start: () => void;
    reset: (args: any[]) => void;
    isListening: boolean;
};
type EventReceiverOptions = {
    name?: string;
    namespace?: "default" | (string & {});
    eventName: string;
    callback?: EventCallback;
};
type EventCallback = (...args: any[]) => void;
declare function useReceiver(eventName: string, callback?: EventCallback): [any[] | null, EventReceiver];
declare function useReceiver(options: Prettify<EventReceiverOptions>): [any[] | null, EventReceiver];
export default useReceiver;
