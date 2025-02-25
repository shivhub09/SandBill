import mongoose from 'mongoose';
import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8080;

mongoose.set('debug', true); // Enable Mongoose debugging

(async () => {
  try {
    console.log("Attempting to connect to MongoDB...");
    const connection = await mongoose.connect(process.env.DATABASE_URL, {
    });

    console.log(
      "MongoDB connection established and the host is : ",
      connection.connection.host
    );

    app.listen(PORT, () => {
      console.log(
        `Express app is connected to SAND ONE & listening on port ${PORT}`
      );
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
})();
