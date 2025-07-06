import express from "express";
import cors from "cors";

import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";

import Publisher from "./db/Publisher.js";
// import Magazine from "./db/Magazine.js";
// import Tag from "./db/Tag.js";
// import Article from "./db/Article.js";


const startServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());



    app.use(notFoundHandler);
    app.use(errorHandler);

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server запущен на порту http://localhost:${port}`);
    });
};

export default startServer;