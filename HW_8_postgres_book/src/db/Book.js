import { DataTypes } from "sequelize";

import sequelize from "./sequelize.js";

const Book = sequelize.define(
    "book", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false, // не может быть null
            validate: {
                len: {
                    args: [1, 255], // длина от 1 до 255 символов
                    msg: "Название книги должно быть от 1 до 255 символов",
                },
            },
        },
        autor: {
            type: DataTypes.STRING,
            allowNull: false, // не может быть null
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false, // не может быть null
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false, // не может быть null
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true, // может быть null
        },
    }, {
        timestamps: true, // добавляет createdAt и updatedAt
    }
);
// Book.sync();

export default Book;
// Book.sync({force: true}); // удаляет таблицу и создает заново
// Book.sync({alter: true}); // изменяет таблицу, если есть изменения в модели

// // Пример объекта книги для тестирования
// {
//     "title": "Война и мир",
//     "autor": "Лев Толстой",
//     "year": 1869,
//     "genre": "Roman",
//     "description": "This is an example book description."
// }