import express from "express";
import cors from "cors";

import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";

import authRouter from "./routers/auth.router.js";
import usersRouter from "./routers/users.router.js";
import adminRouter from "./routers/admin.router.js";


const startServer = () => {

    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use("/api/auth", authRouter);
    app.use("/api/users", usersRouter);
    app.use("/api", adminRouter);

    app.use(notFoundHandler);
    app.use(errorHandler);

    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`Server запущен на порту http://localhost:${port}`);
    });
}

export default startServer;