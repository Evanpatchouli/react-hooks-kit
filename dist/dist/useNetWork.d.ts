interface NetworkStatus {
    online?: boolean;
    downlink?: number;
    downlinkMax?: number;
    uplink?: number;
    effectiveType?: "slow-2g" | "2g" | "3g" | "4g" | "5g";
    /**
     * - cn: 返回当前连接的估计有效往返时间，四舍五入到最接近的 25 毫秒的倍数。
     * ---
     * - en: Returns the effective round-trip time of the current connection, rounded to the nearest multiple of 25 milliseconds. */
    rtt?: number;
    /**
     * - cn: 用户是否在用户代理上设置了减少数据使用量选项
     * ---
     * - en: Whether the user has requested a reduced data usage mode from the user agent.
     */
    saveData?: boolean;
    /**
     * - cn: 设备用于与网络通信的连接类型
     *---
     * - en: The type of connection a device is using to communicate with the network.
     */
    type?: "bluetooth" | "cellular" | "ethernet" | "none" | "wifi" | "wimax" | "other" | "unknown";
}
/**
 * @hook useNetworkStatus
 * @description A react hook for getting network status
 * @param throttleInterval suggested to be greater than 16.67ms to avoid too much re-rendering
 * @returns {NetworkStatus}
 */
declare function useNetworkStatus(throttleInterval?: number): NetworkStatus;
export default useNetworkStatus;
