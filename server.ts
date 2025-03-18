import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import todoRoutes from './routes/todoRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 5012;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/todo-app';

// Anslut till databasen
mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
