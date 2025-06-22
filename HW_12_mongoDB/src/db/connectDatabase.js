import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const {DATABASE_URL} = process.env;

const connectDatabase = async()=> {
    try {
        await mongoose.connect(DATABASE_URL)
        console.log("Успешное подключение к базе данных");
    }
    catch(error) {
        console.log("Ошибка соединения с базой данных");
        console.log(error);
        throw error;
    }
}

export default connectDatabase;