import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { nanoid } from 'nanoid';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('Welcome to the URL Shortener API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});