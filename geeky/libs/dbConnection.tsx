import mongoose from "mongoose";

export default async function dbConnection() {
  try {
    const connection = await mongoose.connect(process.env.DB_HOST);

    return "connected to mongodb";
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return `Mongodb connection failed! ${error}`;
  }
}
