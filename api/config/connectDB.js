import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const conn = await mongoose.connect(DATABASE_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
    process.exit(1); //exit process with failure
  }
};

export default connectDB;
