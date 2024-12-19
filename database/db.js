import dotenv from "dotenv";
import { connect } from "mongoose";

dotenv.config()
export const connectToDB = async () => {
    try {
        await connect(process.env.MONGO_URI)
        console.log('connected to DB');
    } catch (error) {
        console.log(error);
    }
}