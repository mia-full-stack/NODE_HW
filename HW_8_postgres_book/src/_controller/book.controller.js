import * as booksService from "../_service/book.service.js";

import validateBody from "../utils/validateBody.js";
import HttpExeption from "../utils/HttpExeption.js";


import { bookAddSchema, bookUpdateSchema } from "../validation/book.schema.js";

// Этот файл содержит контроллеры для работы с книгами в приложении.
// Контроллеры обрабатывают запросы и взаимодействуют с моделью Book для выполнения операций CRUD.
// Экспортируем эти контроллеры для использования в роутере

// Получить все книги
export const getBooksAllController = async (req, res) => {
    const result = await booksService.getBooks();

    res.json(result);
};

// Получить книгу по id
export const getBookByIdController = async (req, res) => {
    const { id } = req.params;

    const result = await booksService.getBookById(id);
    if (!result) throw new HttpExeption(404, "Книга не найдена");

    res.json(result);
};

// Добавить книгу
export const addBookController = async (req, res) => {
    const payload = req.body;

    await validateBody(bookAddSchema, payload);

    const result = await booksService.addBook(payload);

    res.status(201).json(result);
};

// Обновить книгу   
export const updateBookController = async (req, res) => {
    const { id } = req.params;
    const payload = req.body;

    await validateBody(bookUpdateSchema, payload);

    const result = await booksService.updateBook(id, payload);
    if (!result) throw new HttpExeption(404, "Книга не найдена");

    res.json(result);
};

// Удалить книгу
export const deleteBookController = async (req, res) => {
    const { id } = req.params;

    const result = await booksService.deleteBook(id);
    if (!result) throw new HttpExeption(404, "Книга не найдена");

    res.status(204).send();
};


// Импортируем сервисы в роутер для работы с книгами