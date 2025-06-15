import { DataTypes } from "sequelize";

import sequelize from "./sequelize.js";

const Product = sequelize.define(
    "product", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    timestamps: true, // добавляет createdAt и updatedAt
}
);
// Product.sync();
// Product.sync({force: true}); // удаляет таблицу и создает заново
// Product.sync({alter: true}); // изменяет таблицу, если есть изменения в модели

export default Product;