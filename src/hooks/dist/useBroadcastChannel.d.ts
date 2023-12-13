type MessageHandler<T> = (message: T) => void;
declare function useBroadcastChannel<T>(channelName: string, messageHandler?: MessageHandler<T>, parser?: boolean | ((data?: string) => T)): (message: T) => void;
export default useBroadcastChannel;
