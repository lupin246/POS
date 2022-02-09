import mongoose = require("mongoose");

const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

export = connectDB;
