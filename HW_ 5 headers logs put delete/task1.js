import express from "express";

const app = express();

app.use((req, res) => {
    const authHeader = req.headers.authorization;

    // Установка заголовка Content-Type
    res.set("Content-Type", "text/plain")

    if (!authHeader){
        res.status(401).json("Unauthorized")
    } else {
        res.status(200).json("Authorization header received")
    }
})


app.listen(3000, () => {
    console.log("Сервер запущен на порте 3000: http://localhost:3000");
}); // слушать порт 3000