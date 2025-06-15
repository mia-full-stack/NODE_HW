import { Router } from 'express';

// создаем роутер для книг
const bookRouter = Router();    

// получает контролеры для обработки запросов
import {
    getBooksAllController,
    getBookByIdController,
    addBookController,
    updateBookController,
    deleteBookController
} from '../_controller/book.controller.js';

// Получить все книги
bookRouter.get('/', getBooksAllController);
// Получить книгу по id
bookRouter.get('/:id', getBookByIdController);
// Добавить книгу
bookRouter.post('/', addBookController);
// Обновить книгу
bookRouter.put('/:id', updateBookController);
// Удалить книгу
bookRouter.delete('/:id', deleteBookController);


// экспортируем роутер
export default bookRouter;