import Book from "../db/Book.js";

// Этот файл содержит сервисы для работы с книгами в приложении.
// Сервисы выполняют операции CRUD с моделью Book и экспортируют функции для использования в контроллерах.

// Экспортируем эти сервисы для использования в контроллерах
export const getBooks = () => Book.findAll();

export const addBook = payload => Book.create(payload);

export const getBookById = async id => {
    const result = await Book.findByPk(id);
    if (!result) return null;
    return result;
};

export const updateBook = async (id, payload) => {
    const result = await Book.findByPk(id);
    if (!result) return null;

    await result.update(payload);
    return result;
};

export const deleteBook = async id => {
    const result = await Book.findByPk(id);
    if (!result) return null;

    await result.destroy();
    return result;
};