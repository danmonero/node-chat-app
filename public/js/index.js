var socket = io();

socket.on("connect", () => {
    console.log("Server connected");
});

socket.on("disconnect", () => {
    console.log("Server disconnected");
});

socket.on("newMessage", (message) => {
    console.log(message);
});