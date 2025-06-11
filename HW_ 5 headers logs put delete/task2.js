// Импортируем необходимые модули
import express from "express"
import fs from "node:fs"

const app = express();

app.get("/", (req, res) => {
    try {
        throw new Error("Тестовая ошибка сервера")
    } catch (error) {
        const errorMessage = `[${new Date().toISOString()}] Ошибка: ${error.message}\n`

        fs.appendFile("errors.log", errorMessage, (err) => {
            if (err) {
                console.error("Не удалось записать ошибку в файл:", err)
            } else {
                console.log("Ошибка записана в файл errors.log")
            }
        })

        res.status(500)
        res.set("Content-Type", "text/plain")
        res.send("Internal Server Error")
    }
})

app.listen(3000, () => {
    console.log("Сервер успешно запущен на порту http://localhost:3000 ")
})
