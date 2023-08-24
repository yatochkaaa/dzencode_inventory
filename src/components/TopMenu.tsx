import React from "react";
import io from "socket.io-client";

const TopMenu: React.FC = () => {
  const [dateTime, setDateTime] = React.useState(new Date());
  const [activeSessions, setActiveSessions] = React.useState(0);

  React.useEffect(() => {
    const socket = io("http://localhost:3001");

    socket.on("activeSessionsUpdate", (count: number) => {
      setActiveSessions(count);
    });

    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      socket.disconnect();
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="d-flex flex-column align-items-end">
      <div className="date-time">
        {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
      </div>
      <div className="active-sessions">Активные сессии: {activeSessions}</div>
    </div>
  );
};

export default TopMenu;
