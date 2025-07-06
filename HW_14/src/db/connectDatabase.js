import mongoose from "mongoose";

const { DATABASE_URL } = process.env;

const connectDatabase = async () => {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("Successfully connect to database");
    } catch (error) {
        console.log(`Error connect to database ${error.message}`);
        throw error;
    };
};

export default connectDatabase;