import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGO_URI;
const connectDB = async() =>{
    try {
        await mongoose.connect(mongoURI);
        console.log("MongoDB Atlas connected successfully!");
    } catch (error) {
        console.error("MongoDB Connection error:", error);
        process.exit(1);
    }
}

export default connectDB;
