import mongoose from "mongoose";

export default async function dbConnection() {
  let isConnected: any = false;
  if (isConnected) {
    console.log("Already connected to the database.");
    return;
  }

  try {
    const connection = await mongoose.connect(process.env.DB_HOST);

    isConnected = connection.connections[0].readyState;
    console.log("Connected to MongoDB:", isConnected);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Could not connect to MongoDB");
  }
}
