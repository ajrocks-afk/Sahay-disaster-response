import { useEffect, useState } from "react";
import { Wifi, WifiOff } from "lucide-react";

function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className={`network-status ${isOnline ? "online" : "offline"}`}>
      {isOnline ? <Wifi size={15} /> : <WifiOff size={15} />}

      <span>
        {isOnline
          ? "ONLINE"
          : "OFFLINE MODE — Emergency features available"}
      </span>
    </div>
  );
}

export default NetworkStatus;