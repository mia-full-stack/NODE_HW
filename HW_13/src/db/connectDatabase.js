import mongoose from "mongoose";

const { DATABASE_URL } = process.env;

const connectDatabase = async () => {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("Успешное подключение к MongoDB");
    } catch (error) {
        console.log(`Ошибка соединения к database ${error.message}`);
        throw error;
    };
};

export default connectDatabase;