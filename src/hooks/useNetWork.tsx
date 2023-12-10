import { useState, useEffect } from "react";
import useThrottle from "./useThrottle"; // 假设 useThrottle 在同一目录下

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
  type?:
    | "bluetooth"
    | "cellular"
    | "ethernet"
    | "none"
    | "wifi"
    | "wimax"
    | "other"
    | "unknown";
}

/**
 * @hook useNetworkStatus
 * @description A react hook for getting network status
 * @param throttleInterval suggested to be greater than 16.67ms to avoid too much re-rendering
 * @returns {NetworkStatus}
 */
function useNetworkStatus(throttleInterval?: number): NetworkStatus {
  const [status, setStatus] = useState<NetworkStatus>({
    online: navigator.onLine,
    // @ts-ignore
    downlink: navigator.connection ? navigator.connection.downlink : 0,
    // @ts-ignore
    uplink: navigator.connection ? navigator.connection.uplink : 0,
  });

  const throttledUpdateStatus = useThrottle(() => {
    if ((throttleInterval ?? 0) < 17) {
      console.warn(
        "throttleInterval is suggested to be greater than 16.67ms to avoid too much re-rendering"
      );
    }
    if (!navigator.onLine) {
      setStatus({
        online: false,
        downlink: 0,
        uplink: 0,
        effectiveType: void 0,
        rtt: void 0,
      });
      return;
    }
    // @ts-ignore
    console.log("navigator.connection", navigator.connection);
    setStatus({
      online: navigator.onLine,
      // @ts-ignore
      downlink: navigator.connection ? navigator.connection.downlink : 0,
      // @ts-ignore
      uplink: navigator.connection ? navigator.connection.uplink : 0,
      // @ts-ignore
      effectiveType: navigator.connection
        ? // @ts-ignore
          navigator.connection.effectiveType
        : void 0,
      // @ts-ignore
      rtt: navigator.connection ? navigator.connection.rtt : void 0,
    });
  }, throttleInterval ?? 0);

  useEffect(() => {
    window.addEventListener("online", throttledUpdateStatus);
    window.addEventListener("offline", throttledUpdateStatus);

    // @ts-ignore
    if (navigator.connection) {
      // @ts-ignore
      navigator.connection.addEventListener("change", throttledUpdateStatus);
    }

    return () => {
      window.removeEventListener("online", throttledUpdateStatus);
      window.removeEventListener("offline", throttledUpdateStatus);

      // @ts-ignore
      if (navigator.connection) {
        // @ts-ignore
        navigator.connection.removeEventListener(
          "change",
          throttledUpdateStatus
        );
      }
    };
  }, [throttledUpdateStatus]);

  return status;
}

export default useNetworkStatus;
