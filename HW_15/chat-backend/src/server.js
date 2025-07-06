import express from "express";
import cors from "cors";
import * as path from "node:path";

const publicDir = path.resolve("public");

const startServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(express.static(publicDir));

    

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server запущен на порту http://localhost:${port}`);
    });
};

export default startServer;