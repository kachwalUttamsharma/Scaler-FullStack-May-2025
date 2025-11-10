const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
let chatRooms = {};

app.use(express.static("public"));
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("new user connected : ", socket.id);

  socket.emit("message", "Welcome to Websocket Server");

  socket.on("send_message", (data) => {
    console.log("message received : ", data);
    socket.broadcast.emit("broadcast", {
      ...data,
    });
  });
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });

  socket.on("create_group", (roomId) => {
    if (!chatRooms[roomId]) {
      chatRooms[roomId] = { members: [] };
    }
    socket.join(roomId);
    chatRooms[roomId].members.push(socket.id);
    console.log(chatRooms);
    io.emit("update_groups_list", Object.keys(chatRooms));
  });
});

app.get("/", (req, res) => {
  res.send("hello world");
});

server.listen(3000, () => console.log("listening at 3000"));
