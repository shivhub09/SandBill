import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRouter from './routes/auth.routes.js';
import billRouter from './routes/bill.routes.js';
import dashboardRouter from './routes/dashboard.routes.js';

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

// API routes
app.use("/api/auth", authRouter);        // Login, Register, Logout
app.use("/api/bills", billRouter);       // Bill creation, listing, details
app.use("/api/dashboard", dashboardRouter); // Overview statistics, charts

export default app;
