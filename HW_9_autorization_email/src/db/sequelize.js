import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();
const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        dialect: process.env.DATABASE_DIALECT,
        dialectOptions: {
            ssl: true,
        },
        logging: false,
    }
);

export const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log("Successfully connect database");
    }
    catch (error) {
        console.log("Error connect database");
        console.log(error);
    }
}

export default sequelize;