const socketIo = require("socket.io");

// connection
let io = null;

// create server socket
const createSocket = server => {
  io = socketIo(server, { cors: true });

  io.on("connection", socket => {
    console.log("New client connected", socket.id);

    socket.on("disconnect", () => {
      console.log("Client disconnected", socket.id);
    });
  });
};

// emit event
const emit = (event, data) => io.emit(event, data);

module.exports = { createSocket, emit };
