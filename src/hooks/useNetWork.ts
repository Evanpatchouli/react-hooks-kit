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

interface NetworkConnection {
  downlink?: number;
  uplink?: number;
  effectiveType?: NetworkStatus["effectiveType"];
  rtt?: number;
  saveData?: boolean;
  type?: NetworkStatus["type"];
  addEventListener?: (type: string, listener: (...args: any[]) => void) => void;
  removeEventListener?: (
    type: string,
    listener: (...args: any[]) => void
  ) => void;
}

function getConnection(): NetworkConnection | undefined {
  return (navigator as Navigator & { connection?: NetworkConnection }).connection;
}

function readNetworkStatus(): NetworkStatus {
  const connection = getConnection();

  if (!navigator.onLine) {
    return {
      online: false,
      downlink: 0,
      uplink: 0,
      effectiveType: undefined,
      rtt: undefined,
      saveData: undefined,
      type: undefined,
    };
  }

  return {
    online: true,
    downlink: connection?.downlink ?? 0,
    uplink: connection?.uplink ?? 0,
    effectiveType: connection?.effectiveType,
    rtt: connection?.rtt,
    saveData: connection?.saveData,
    type: connection?.type,
  };
}

/**
 * @hook useNetworkStatus
 * @description A react hook for getting network status
 * @param throttleInterval suggested to be greater than 16.67ms to avoid too much re-rendering
 * @returns {NetworkStatus}
 */
function useNetworkStatus(throttleInterval?: number): NetworkStatus {
  const [status, setStatus] = useState<NetworkStatus>(readNetworkStatus);

  const throttledUpdateStatus = useThrottle(() => {
    if ((throttleInterval ?? 0) < 17) {
      console.warn(
        "throttleInterval is suggested to be greater than 16.67ms to avoid too much re-rendering"
      );
    }
    setStatus(readNetworkStatus());
  }, throttleInterval ?? 0);

  useEffect(() => {
    const connection = getConnection();

    window.addEventListener("online", throttledUpdateStatus);
    window.addEventListener("offline", throttledUpdateStatus);

    if (connection?.addEventListener) {
      connection.addEventListener("change", throttledUpdateStatus);
    }

    return () => {
      window.removeEventListener("online", throttledUpdateStatus);
      window.removeEventListener("offline", throttledUpdateStatus);

      if (connection?.removeEventListener) {
        connection.removeEventListener("change", throttledUpdateStatus);
      }
    };
  }, [throttledUpdateStatus]);

  return status;
}

export default useNetworkStatus;
