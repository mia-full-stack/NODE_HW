import express from "express";
import cors from "cors";
import * as Yup from "yup";

// import "./db/App.js";
import App from "./db/App.js";


const port = process.env.PORT || 3000

const startServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    // Получить все данные из базыданных
    app.get("/api/app", async (req, res) => {
        const result = await App.findAll();
        res.json(result);
    });

    // :id - параметр маршрута получить размер по id
    app.get("/api/app/:id", async (req, res) => {
        const {id} = req.params;
        const result = await App.findByPk(id);

        if (!result) {
            return res.status(404).json({
                message: `product with id=${id} не найден`,
            });
        }

        res.json(result);
    });


    // добавить размер в базу данных
    app.post("/api/app", async (req, res) => {
        try {
            await productAddSchema.validate(req.body);
            const result = await Product.create(req.body)

            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    });


    app.listen(port, () => {
        console.log(`Server запущен на порту http://localhost:${port}`);
    });

}

export default startServer;