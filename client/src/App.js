import { useEffect } from "react";
import ioClient from "socket.io-client";

const App = () => {
  useEffect(() => {
    const socket = ioClient("http://localhost:3001");
    socket.on("test", data => {
      console.log(data);
    });
  }, []);

  return (
    <div className="root">
      <h2>Socket io</h2>
    </div>
  );
};

export default App;
