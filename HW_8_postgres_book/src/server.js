import express from "express";
import cors from "cors";

import notFoundHandler from "./middleware/notFoundHandler.js";
import errorHandler from "./middleware/errorHandler.js";

// import Book from "./db/Book.js";
// import "./db/Book.js";

import bookRouter from "./__router/book.router.js";



const port = process.env.PORT || 3000

const startServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    // Получить все данные из базыданных
    app.use("/api/books", bookRouter);

    app.use(notFoundHandler);
    app.use(errorHandler);



    app.listen(port, () => {
        console.log(`Server запущен на порту http://localhost:${port}`);
    });

}

export default startServer;