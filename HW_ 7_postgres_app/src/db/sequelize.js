import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: process.env.DATABASE_DIALECT,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialectOptions: {
        ssl: true,
    }

})

export const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log("Успешно подключились к базе данных");
    }
    catch (error) {
        console.log(`Ошибка подключения to database ${error.message}`);
        throw error;
    }
}
export default sequelize;