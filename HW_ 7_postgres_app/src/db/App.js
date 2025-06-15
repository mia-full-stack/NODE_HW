import { DataTypes } from "sequelize";

import sequelize from "./sequelize.js";

const App = sequelize.define(
    "app", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        size: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    }, {
        timestamps: true, // добавляет createdAt и updatedAt
    }
);
// App.sync();

export default App;
// App.sync({force: true}); // удаляет таблицу и создает заново
// App.sync({alter: true}); // изменяет таблицу, если есть изменения в модели