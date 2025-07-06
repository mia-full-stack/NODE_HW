import { Server } from "socket.io";
import { createServer } from "node:http";

const startWebsocketServer = () => {

    const httpServer = createServer();

    const wsServer = new Server(httpServer, {
        cors: {
            origin: "*"
        }
    });

    wsServer.on("connection", (socket) => {
        console.log("New User connected");

        // Привітальне повідомлення
        socket.emit("welcome", "Welcome to the chat!");

        // Обробка вхідного повідомлення
        socket.on("message", (msg) => {
            console.log(`Message received: ${msg}`);
            socket.emit("reply", "Message received. Always happy to hear from you!");
        });

        socket.on("disconnect", () => {
            console.log("User disconnected");
        });
    });

    const socketPort = process.env.SOCKET_PORT || 5000;
    httpServer.listen(socketPort, () =>
        console.log(`Websocket run on ${socketPort} port`));
};

export default startWebsocketServer;