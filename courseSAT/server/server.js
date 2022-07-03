const express = require('express');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const app = express();
const http = require("http");
const { Server } = require("socket.io");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require('./routes/userCourse.routes')(app);
require('./config/mongoose.config');
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });
  
  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
  
    socket.on("join_room", (data) => {
      socket.join(data);
      console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });
  
    socket.on("send_message", (data) => {
      socket.broadcast.to(data.room).emit("receive_message", data);

    });
  
    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id);
    });
  });
  
  server.listen(3001, () => {
    console.log("SERVER RUNNING");
  });
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})







