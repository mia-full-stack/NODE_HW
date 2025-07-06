import "dotenv/config";

import startServer from "./server.js";
import startWebsocketServer from "./wsServer.js";

const bootstrap = async () => {
    startServer();
    startWebsocketServer();
};

bootstrap();
