import express from "express"
import fs from "node:fs"

const app = express()

app.all("/", (req, res) => {
    // В функции обратного вызова проверяем метод запроса (req.method)

    if (req.method === "PUT") {
        
        res.status(200)
        res.set("Content-Type", "text/plain")
        res.send("PUT-запрос обработан")

        console.log("Обработан PUT-запрос")
    } else if (req.method === "DELETE") {
        
        res.status(200)
        res.set("Content-Type", "text/plain")
        res.send("DELETE-запрос обработан")

        console.log("Обработан DELETE-запрос")
    } else {
        // Для других методов запроса (GET, POST и т.д.)
        res.status(405)
        res.set("Content-Type", "text/plain")
        res.send(`Метод ${req.method} не поддерживается. Используйте PUT или DELETE`)

        console.log(`Получен неподдерживаемый метод: ${req.method}`)
    }
})

app.listen(3000, () => {
    // Добавляем сообщение в консоль, которое выводится при успешном запуске сервера
    console.log("Сервер успешно запущен на порту http://localhost:3000")
})
