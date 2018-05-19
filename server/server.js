const path = require("path");
const http = require("http");
const socketIO = require("socket.io");
const express = require("express");

var port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on("connection", (socket) => {
    socket.emit("newMessage", {
        message: "Welcome to the app!"
    });

    socket.broadcast.emit("newMessage", {
        message: "New user joined the app!"
    });

    socket.on("disconnect", () => {
        console.log("User disconnected.");
    });

    socket.on("createMessage", (message) => {
        console.log(message);
    });

    // socket.emit("newMessage", {
    //     from: "test@example.com",
    //     body: "Hi There",
    //     createdAt: new Date().getTime()
    // });
})

app.use(express.static(path.join(__dirname, "../public")));

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});