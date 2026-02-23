import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const space = "-".repeat(60);
    console.log(space,"Connecting to MongoDB...",space);
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(space,
      `MongoDB Connected: ${connect.connection.host}`,
      connect.connection.name
   ,space );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
