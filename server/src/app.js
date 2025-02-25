import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js'; // Use import instead of require

dotenv.config();

const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // Vite's default port
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));
app.use(express.static("public"));

app.use(cookieParser());

app.use("/api/v1/user", userRouter); // Use user routes

// Overview statistics, charts

export default app;