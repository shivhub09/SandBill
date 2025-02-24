import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
app.get('/',(req,res) => {
  res.send('Server is ready');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // Basic route
// app.get('/', (req, res) => {
//   res.json({ message: 'Welcome to SandBill API' });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// }); '