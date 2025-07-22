import "dotenv/config";

import startServer from "./server";

const bootstrap = (): void => {
  startServer();
};

bootstrap();
