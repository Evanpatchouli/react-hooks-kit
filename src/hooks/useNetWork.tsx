import { useState, useEffect } from "react";

interface NetworkStatus {
  online: boolean;
}

function useNetworkStatus(): NetworkStatus {
  const [status, setStatus] = useState<NetworkStatus>({ online: navigator.onLine });

  useEffect(() => {
    const updateOnlineStatus = () => {
      setStatus({ online: navigator.onLine });
    };

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  return status;
}

export default useNetworkStatus;
