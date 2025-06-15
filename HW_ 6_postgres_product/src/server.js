import express from "express";
import cors from "cors";
import * as Yup from "yup";

// import "./db/Product.js";
import Product from "./db/Product.js";


const port = process.env.PORT || 3000


const productAddSchema = Yup.object({
    name: Yup.string().required(),
    // category: Yup.string().required(),
    price: Yup.number().min(0).required(),
    description: Yup.string().required(),
    // image: Yup.string().required(),
});

const productUpdateSchema = Yup.object({
    name: Yup.string(),
    price: Yup.number().min(0),
    description: Yup.string(),
    // image: Yup.string(),
});

const startServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    // Получить все данные из базыданных
    app.get("/api/products", async (req, res) => {
        const result = await Product.findAll();
        res.json(result);
    });

    // :id - параметр маршрута получить товар по id
    app.get("/api/products/:id", async (req, res) => {
        const {id} = req.params;
        const result = await Product.findByPk(id);

        if (!result) {
            return res.status(404).json({
                message: `product with id=${id} не найден`,
            });
        }

        res.json(result);
    });


    // добавить товар в базу данных
    app.post("/api/products", async (req, res) => {
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


    // Изменение данных, например изменить цену
    app.put("/api/products/:id", async (req, res) => {
        try {
            await productUpdateSchema.validate(req.body);
            const {id} = req.params;

            const result = await Product.findByPk(id);

            if (!result) {
                return res.status(404).json({
                    message: `Товар с id=${id} не найден`,
                });
            }
            // обновляет часть
            await result.update(req.body);

            res.json(result);
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    });

    app.delete("/api/products/:id", async (req, res) => {
        const {id} = req.params;
        const result = await Product.findByPk(id);
        if (!result) {
            return res.status(404).json({
                message: `product with id=${id} not found`,
            });
        }
        await result.destroy();
        
        res.json(result);
    });


    app.listen(port, () => {
        console.log(`Server запущен на порту http://localhost:${port}`);
    });

}

export default startServer;