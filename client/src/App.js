import { useState, useEffect } from "react";
import ioClient from "socket.io-client";

const App = () => {
  // state
  const [status, setStatus] = useState("Server is down");
  const [update, setUpdate] = useState(new Date());

  useEffect(() => {
    const socket = ioClient("http://localhost:3001");
    socket.on("test", data => {
      const { message, update } = data;
      setStatus(message);
      setUpdate(new Date(update));
    });
  }, []);

  return (
    <div className="root">
      <h2>Socket io</h2>
      <h3>{status}</h3>
      <h4>{update.toLocaleTimeString()}</h4>
    </div>
  );
};

export default App;
